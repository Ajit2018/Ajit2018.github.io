# Portfolio Deployment & Shareability Status

**Status date:** 2026-09-19  
**Live site:** https://ajit2018.github.io/  
**Decision:** **PASS — shareable in CVs, applications, referrals and professional outreach**

## Current public architecture

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
- Engineering & Innovation
- Customer
- Manufacturing
- Supply Chain
- AI Transformation

### Level 3 — case-study navigation
Each portfolio page uses a compact tab system such as:
- Overview
- Business Problem
- Architecture / Decision System
- Results / Impact
- Methods / Technical Deep Dive
- Responsible AI / Boundaries

The default **Portfolio** entry opens Banking so the domain selector is immediately visible.

## Current public pages

- `index.html`
- `projects/banking.html`
- `projects/pricing.html`
- `projects/finance.html`
- `projects/engineering.html`
- `projects/customer.html`
- `projects/manufacturing.html`
- `projects/supply-chain.html`
- `projects/ai-transformation.html`

## Responsive / mobile status

Source-level responsive QA confirms:

- mobile hamburger navigation is implemented;
- Home switches from the desktop infographic to a dedicated mobile story;
- Portfolio-domain and Level-3 selectors remain horizontally scrollable where necessary;
- case-study grids collapse to one or two columns at narrow widths;
- data tables are horizontally scrollable;
- Engineering evidence images switch to mobile-safe layouts;
- Career Journey grids collapse progressively;
- About disables the desktop one-screen lock below 760px and returns to normal scrolling;
- Contact buttons wrap on narrow screens.

No blocking responsive defect is currently identified.

## Public evidence and claim safety

The portfolio deliberately separates:

- professional experience;
- independent proofs of concept;
- live public work;
- synthetic evaluation data;
- in-development capability;
- and areas where no production/performance claim is made.

Key boundaries include:

- Banking does not claim employment at ABN AMRO, production deployment, fraud/AML specialisation or real-customer behavioural modelling.
- Pricing clearly separates public Hotel Booking Demand data from the synthetic pricing-treatment layer.
- Supply Chain explicitly states that no completed supply-chain performance result is claimed yet.
- AI Transformation does not claim enterprise-scale production AI deployment.
- Professional case studies do not expose confidential employer/client data.

## Link / asset integrity

All local stylesheet, script, image and internal-page references used by the public HTML currently resolve to repository files.

External evidence links include:
- LinkedIn
- GitHub
- Pricing live workbench
- Pricing repository
- PerfectCare patent
- ENWAKE patent

## Repository status

- Static HTML / CSS / vanilla JavaScript
- GitHub Pages
- No build step
- No runtime framework dependency
- No API credentials in the public site
- No local Windows drive paths in rendered site content

## Portfolio freeze

The core portfolio architecture and visual system are considered **stable and shareable**.

Future changes should be:
1. evidence-led;
2. targeted to a specific hiring use case; or
3. corrective fixes for genuine defects.

Broad redesigns are not recommended while active job applications are underway.
