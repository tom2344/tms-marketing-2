import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

const root = process.cwd()

function compile(sourcePath, fileName, { globals = {}, dependencies = {} } = {}) {
  const source = readFileSync(resolve(root, sourcePath), 'utf8')
  const { outputText, diagnostics } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName,
    reportDiagnostics: true,
  })
  const errors = (diagnostics ?? []).filter(({ category }) => category === ts.DiagnosticCategory.Error)
  assert.equal(errors.length, 0, errors.map(({ messageText }) => String(messageText)).join('\n'))

  const commonJsModule = { exports: {} }
  const sandbox = {
    exports: commonJsModule.exports,
    module: commonJsModule,
    ...globals,
    process: { env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-LOCAL-TEST', RESEND_API_KEY: 'local-test-key' } },
    require: (name) => {
      if (!(name in dependencies)) throw new Error(`Unexpected dependency in isolated test: ${name}`)
      return dependencies[name]
    },
    FormData,
    crypto: globalThis.crypto,
    console: { error() {} },
  }
  runInNewContext(outputText, sandbox, { filename: fileName })
  return commonJsModule.exports
}

  const tracking = compile('lib/analytics.ts', 'analytics.ts')
  assert.equal(tracking.shouldTrackSuccessfulLead('success', 'email-1', null), true)
  assert.equal(tracking.shouldTrackSuccessfulLead('success', undefined, null), false)
  assert.equal(tracking.shouldTrackSuccessfulLead('error', 'email-1', null), false)
  assert.equal(tracking.shouldTrackSuccessfulLead('success', 'email-1', 'email-1'), false)

  const calls = []
  const storage = new Map()
  const fakeWindow = {
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    },
    gtag: (...args) => calls.push(args),
  }
  const eventTracker = compile('lib/analytics.ts', 'analytics-consent.ts', { globals: { window: fakeWindow } })
  const consentKey = 'kiszely-analytics-consent'
  storage.set(consentKey, JSON.stringify({ choice: 'accepted', time: Date.now() }))
  eventTracker.trackSuccessfulLead()
  assert.deepEqual(calls, [['event', 'generate_lead']])
  calls.length = 0
  storage.set(consentKey, JSON.stringify({ choice: 'rejected', time: Date.now() }))
  eventTracker.trackSuccessfulLead()
  assert.equal(calls.length, 0)
  storage.delete(consentKey)
  eventTracker.trackSuccessfulLead()
  assert.equal(calls.length, 0)

  let resendResult = { error: null }
  let sendCount = 0
  class FakeResend {
    constructor() {
      this.emails = { send: async () => { sendCount += 1; return resendResult } }
    }
  }
  const { sendContact } = compile('app/actions/sendContact.ts', 'sendContact.ts', { dependencies: { resend: { Resend: FakeResend } } })
  const makeForm = ({ website = '' } = {}) => {
    const form = new FormData()
    form.set('language', 'hu')
    form.set('name', 'Teszt Elek')
    form.set('phone', '+3612345678')
    form.set('service', 'Weboldal készítés')
    form.set('website', website)
    return form
  }

  const successfulSend = await sendContact({ status: 'idle', message: '' }, makeForm())
  assert.equal(successfulSend.status, 'success')
  assert.ok(successfulSend.sentId)
  assert.equal(sendCount, 1)

  resendResult = { error: { message: 'Mock provider failure' } }
  const failedSend = await sendContact({ status: 'idle', message: '' }, makeForm())
  assert.equal(failedSend.status, 'error')
  assert.equal(failedSend.sentId, undefined)
  assert.equal(sendCount, 2)

  const botSend = await sendContact({ status: 'idle', message: '' }, makeForm({ website: 'filled-by-bot' }))
  assert.equal(botSend.status, 'success')
  assert.equal(botSend.sentId, undefined)
  assert.equal(sendCount, 2)

  console.log('PASS: successful mocked email responses receive a trackable ID; provider failures and honeypot responses do not.')
  console.log('PASS: lead events emit once only for successful responses with accepted consent; denied or missing consent emits nothing.')
  console.log('PASS: all checks ran locally with mocked Resend and gtag; no email or Analytics event was sent.')
