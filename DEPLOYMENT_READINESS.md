# Portfolio Deployment & Shareability Status

**Status date:** 2026-09-20  
**Live site:** https://ajit2018.github.io/  
**Evidence baseline:** Master Profile V16  
**Decision:** **PASS — shareable after the V16 evidence-refresh branch is merged and live smoke checks pass**

## Public architecture

### Level 1
- Home
- Portfolio
- Career Journey
- About
- Contact

### Level 2 — portfolio domains
- Banking
- Pricing & RGM
- Finance
- Project Economics
- Engineering & Innovation
- AI Transformation
- Supply Chain

Legacy `customer.html` and `manufacturing.html` URLs are retained as redirects so existing links do not break.

### Level 3 — case-study navigation
Case-study pages use:
- Overview
- Business Problem / Evidence
- Decision System
- Evidence / Impact
- Methods
- Boundaries

## Public pages

- `index.html`
- `projects/banking.html`
- `projects/pricing.html`
- `projects/finance.html`
- `projects/project-economics.html`
- `projects/engineering.html`
- `projects/ai-transformation.html`
- `projects/supply-chain.html`

Legacy redirects:
- `projects/customer.html` → Project Economics
- `projects/manufacturing.html` → Engineering

## V16 evidence-control changes

The September 20 refresh deliberately removed or qualified older public claims that the archive reconstruction did not support strongly enough.

Examples:
- “six international patents” → **six Philips patent families/publications**;
- FLUENT / PerfectCare cyclone / multiphase CFD experience is now included as practitioner-confirmed history because Ajit directly confirms it and the surviving archive is incomplete;
- historical Singapore figures of ~80 designers, ~20% cost reduction at ~3M units/year and offshore R&D scale-up to 100+ engineers are likewise included as practitioner-confirmed facts, not archive-verified proof points;
- 250+ senior-user language was removed where the final evidence baseline did not retain it as a preferred public claim;
- Finance now uses directly evidenced or correctly bounded metrics: 17 markets, €20M+ estimated Kuber exposure, ~2M Price Optimization records, >€450M STTI scope and >€10M internal Group Tax risk-mitigation estimate;
- Project Economics now exposes the verified MR NPI and China portfolio evidence; Ajit confirms selected China scenario / range decisions were later realised, while his role is bounded to analytical support rather than decision ownership;
- Engineering now centres on ANSYS CAE, transient thermal work, nonlinear structural/contact analysis, simulation-to-test evidence, cross-site simulation leadership and patent evidence.

## Responsive / mobile status

Source-level responsive design includes:
- mobile hamburger navigation;
- compact evidence-controlled Home story on mobile;
- horizontally scrollable portfolio and case-study selectors;
- responsive case-study grids;
- mobile-safe engineering evidence layouts;
- progressive Career Journey layout collapse;
- normal scrolling on narrow screens;
- wrapping contact actions.

## Public evidence and confidentiality

The portfolio deliberately separates:
- verified professional experience;
- strongly corroborated experience;
- programme/team-level evidence;
- estimates and scenarios;
- practitioner-confirmed historical facts where surviving records are incomplete;
- independent proofs of concept;
- live public work;
- synthetic evaluation data;
- in-development capability.

The public site does not reproduce:
- original Philips dashboards, spreadsheets or internal slides;
- detailed customer / retailer / transaction / SKU data;
- proprietary CAE geometry, boundary conditions or material data;
- HR, succession or compensation documents;
- tax/entity/cost-centre records;
- confidential launch roadmaps or unapproved future scenarios.

Public patent figures and clearly labelled public product-family context may be used.

## Repository / implementation

- Static HTML / CSS / vanilla JavaScript
- GitHub Pages
- No build step
- No runtime framework dependency
- Shared canonical portfolio navigation in `script.js`
- No API credentials in the public site
- No local Windows paths in rendered public content

## Release gate

Before merging the V16 refresh:
1. compare branch with `main`;
2. verify canonical navigation includes Project Economics;
3. verify legacy redirects;
4. verify no stale headline claim remains on Home, Finance or Engineering;
5. merge through a pull request;
6. smoke-test the live GitHub Pages URLs after deployment.

After those checks, the site is suitable for CV deep links, applications, referrals and recruiter / hiring-manager review.
