# Contact Form Email Setup - Resend Configuration

## Problem
The contact form is failing with this error in production:
```
Az üzenet küldése most nem sikerült. Kérjük, próbálja újra, vagy írjon e-mailt.
```

## Root Cause
Resend requires a **verified domain** to send production emails. The temporary email `onboarding@resend.dev` only works for testing and development. In production, all emails must originate from a verified domain.

## Solution: 3 Steps to Fix

### Step 1: Verify Your Domain in Resend Dashboard
1. Go to https://dashboard.resend.com
2. Click **"Domains"** in the left sidebar
3. Click **"Add Domain"**
4. Enter your domain (e.g., `tmsmarketing.hu`)
5. Follow the verification steps:
   - Add the DNS records Resend provides to your domain registrar
   - Wait for DNS propagation (usually 5-15 minutes)
   - Click "Verify" in the Resend dashboard

### Step 2: Set the Environment Variable
Once your domain is verified in Resend, set the `RESEND_FROM_EMAIL` environment variable:

**For Vercel:**
1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add a new variable:
   - **Name:** `RESEND_FROM_EMAIL`
   - **Value:** `noreply@tmsmarketing.hu` (or your verified domain email)
   - **Environments:** Production, Preview, Development
4. Click **"Save"**
5. Redeploy your project

**For Netlify (if using):**
1. Go to your Netlify site dashboard
2. Click **"Site settings"** → **"Build & deploy"** → **"Environment"**
3. Add a new variable:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `noreply@tmsmarketing.hu` (or your verified domain email)
4. Redeploy your site

### Step 3: Test the Contact Form
1. Visit your website
2. Fill out and submit the contact form
3. Check `tokolitamas7@gmail.com` for the new message
4. Check the Resend dashboard at https://dashboard.resend.com/emails to verify the email was sent

## Email Format
The sender email should be in one of these formats:

✅ **With friendly name** (recommended):
```
Kiszely Marketing <noreply@kiszelymarketing.com>
```

✅ **Plain email address**:
```
noreply@tmsmarketing.hu
```

❌ **Not recommended**:
```
onboarding@resend.dev  (testing only, production will fail)
```

## Troubleshooting

### "Email delivery failed" message appears
1. Check that `RESEND_FROM_EMAIL` environment variable is set
2. Verify the domain is confirmed in Resend dashboard (green checkmark)
3. Check Resend dashboard at https://dashboard.resend.com/emails for error details
4. Check application logs (Vercel: Deployments → Logs)

### Emails not arriving
1. Check spam/junk folder
2. Verify recipient email is correct: `tokolitamas7@gmail.com`
3. Check Resend quota hasn't been exceeded (free tier: 100/day)
4. Verify the domain DNS records are correctly configured

### "RESEND_API_KEY is not configured"
Make sure both environment variables are set:
- `RESEND_API_KEY`: Your Resend API key
- `RESEND_FROM_EMAIL`: Your verified domain email

## Development Testing (localhost)
For local development, you can use the test email without domain verification. Set:
```
RESEND_FROM_EMAIL=test@example.com
```

However, production deployments MUST use a verified domain.

## Additional Resources
- Resend Documentation: https://resend.com/docs
- Resend Dashboard: https://dashboard.resend.com
- Domain Setup Guide: https://resend.com/docs/get-started/domain-setup
