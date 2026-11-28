# SEO and visibility change log

## 2026-11-24

- **Website:** Corrected only two sitemap `lastmod` dates to match verified substantial content updates: website service page (Nov 21) and Google Business Profile optimization guide (Nov 7). No page copy, design, pricing, routes, canonical metadata, schema, tracking, or service configuration changed.
- **Google Search Console:** Inspected `/hu/weboldal-felujitas/`. The URL is discovered through the submitted sitemap and is live-test available/indexable, but currently reported as “Discovered – currently not indexed.” Sent one indexing request on 2026-11-24; this is a request, not confirmation of indexing.
- **GA4:** Confirmed `generate_lead` is configured as a key event. No event data was visible for the preceding 28 days. Did not send a test form submission; code inspection confirms the event is sent only after a successful form response when analytics consent is present.
- **Screaming Frog:** Completed a 64-URL crawl (26 HTML pages). Saved the title export as `screamingfrog-page-titles-2026-11-24.csv` and summarized findings and limitations in `seo-visibility-audit-2026-11-24.html`.
- **Vercel access check:** Confirmed the Production project is `tms-marketing-2`, its branch is `main`, and the deployed commit is `42686e319ac4683922550d9f8186d142be66e79a`. Bot Management shows general Bot Protection off, AI Bots allowed, no custom rules, and 7 verified OAI-SearchBot requests during the past day. The Firewall Audit Log showed no rule activity from Nov 17–24; that log is distinct from ordinary request traffic.
- **Verifier maintenance:** Updated one outdated launch-verifier assertion to match the already-published website service heading. No website content changed.
- **Image optimization:** Recompressed the two map-grid WebP source images at the same 1624 × 969 dimensions. `map-green.webp` decreased from 205.8 kB to 175.4 kB and `map-red.webp` from 213.3 kB to 177.6 kB; visual review showed no apparent degradation. The built site served 640 px mobile variants at 43.7 kB and 39.7 kB. A fresh crawler remains pending.
- **Internal-link follow-up:** Checked local production-build links from all 26 sitemap pages: 26 unique internal destinations, no redirects or broken destinations. The original Screaming Frog redirect warning still needs its source URL from a complete crawl export; no speculative link change was made.

## 2026-11-28

- **Internal links:** Search Console showed the buyer query `hogyan találhatok megbízható seo szakértőket hazai viszonylatban, akik kisvállalkozásoknak dolgoznak?` for `/hu/tudastar/legjobb-marketing-ugynokseg-kisvallalkozasoknak-magyarorszagon/` at average position 8.2, with 6 Hungary impressions and no clicks across the reporting period. Added one contextual link to this guide from `/hu/tudastar/google-terkep-rangsorolas/` and one from `/hu/tudastar/organikus-talalat-vagy-google-terkep/`. No titles, offers, prices, or other site copy changed.

## Open items (not silently treated as complete)

- Verify `generate_lead` in a safe staging/debug flow or after a genuine, consented enquiry. No production form test was sent.
- Recheck the redesign page after Google processes the indexing request.
- Export the source URL for Screaming Frog’s internal redirect before deciding whether any link should change.
- Complete the repeated six-assistant AI prompt baseline and source analysis; the available November 6 notes are partial.
- Compare competitor referring domains and review external business listings/reviews with verified sources.
- Complete mobile checks on every priority route and confirm actual served image sizes at 360/390 px.
- Own Google Business Profile and rank-grid checks do not apply to the Romanian online business as currently described. Do not create an ineligible profile.
