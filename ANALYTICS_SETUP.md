# Portfolio Analytics Setup

## Current status

The portfolio now contains centralized analytics instrumentation in `script.js`.

Tracking is intentionally disabled until a valid Google Analytics 4 Measurement ID is configured. This prevents accidental data being sent to an unrelated property.

## One-time activation

1. Create a Google Analytics 4 property for `https://ajit2018.github.io/`.
2. Create a Web data stream.
3. Copy the Measurement ID in the form `G-XXXXXXXXXX`.
4. Set that ID in the portfolio analytics configuration in `script.js` (or ask ChatGPT to do it through the connected GitHub account).

## Events already instrumented

When GA4 is activated the site will collect:

- standard GA4 page views
- `portfolio_view`
- `portfolio_section_view` for hash/tab navigation
- `internal_navigation`
- `outbound_click`
- `contact_click`
- `scroll_depth` at 25%, 50%, 75% and 90%

The implementation does not deliberately send names, email addresses, CV text or other personally identifiable visitor information.

## Job-search campaign links

Use tagged links in CVs, LinkedIn messages and applications so visits can be attributed to the application channel.

Examples:

`https://ajit2018.github.io/?utm_source=cv&utm_medium=application&utm_campaign=akzonobel_ai_lead`

`https://ajit2018.github.io/?utm_source=cv&utm_medium=application&utm_campaign=versuni_ecommerce_ds`

`https://ajit2018.github.io/?utm_source=linkedin&utm_medium=outreach&utm_campaign=trinamics_modeling`

Recommended naming:

- `utm_source`: cv, linkedin, email, referral
- `utm_medium`: application, outreach, referral
- `utm_campaign`: company_role
- `utm_content`: optional CV version or message variant

Campaign parameters are retained for the browser session so subsequent portfolio-page navigation remains attributable to the original tagged visit.

## Interpretation rule

Campaign analytics can show that a tagged application link was opened and what the visitor did afterward. It normally cannot prove the personal identity of the visitor. Do not infer that a specific recruiter viewed the site unless independent evidence confirms that.
