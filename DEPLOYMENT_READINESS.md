# Deployment Readiness Audit

**Audit date:** 2026-09-18  
**Scope:** `website/` static portfolio only  
**Decision:** **PASS — ready for GitHub Pages deployment**

## Files changed during this audit

- `index.html`
- `projects/banking.html`
- `projects/pricing.html`
- `styles.css`
- `script.js`
- `assets/favicon.svg` — created
- `DEPLOYMENT_READINESS.md` — created

No project content, modelling artifacts, or visual architecture was redesigned.

## Tests performed

### Accessibility

- Parsed heading order on every HTML page: one `h1` per page and no skipped heading levels.
- Confirmed the portrait has meaningful alt text: `Ajit Pal Singh`.
- Confirmed all informative inline SVGs have accessible labels.
- Confirmed native links and buttons are used for interactive controls.
- Confirmed skip links exist on every page.
- Added and verified a high-contrast `:focus-visible` treatment.
- Verified arrow-key behavior for Level-3 tabs, including Home/End support in code.
- Verified tab semantics include `aria-selected`, `aria-controls`, `aria-labelledby`, and hidden inactive panels.
- Verified the native mobile menu button exposes `aria-expanded`.
- Checked primary foreground/background contrast ratios using WCAG relative-luminance calculations.
- Verified 17px body text, 15–16px supporting/navigation text, and responsive headings.
- Rechecked the 390px viewport: no horizontal page overflow; project and tab selectors remain independently scrollable.

### Navigation and behavior

- Level 1 top navigation checked on all three pages.
- Level 2 project selector checked on both case-study pages.
- Level 3 tab selector checked on Banking and Pricing.
- Direct loading of `#overview`, `#business-problem`, `#architecture`, `#results`, `#technical`, and `#responsible-ai` checked.
- Confirmed only one Level-3 panel is visible at a time.
- Confirmed tab clicks update the URL hash.
- Confirmed browser Back restores the previous tab and Forward-compatible history state is retained.
- Confirmed the mobile hamburger opens/closes and updates its expanded state.

### Links

- LinkedIn profile resolves; unauthenticated access may show LinkedIn's normal authentication wall.
- `mailto:ajitpalsingh0522@gmail.com` syntax and placement verified.
- GitHub profile resolves to `Ajit2018 · GitHub`.
- Pricing repository resolves and is public.
- Pricing Streamlit URL loads successfully.
- All local relative links and image/script/stylesheet references resolve.

### GitHub Pages and static-host compatibility

- Confirmed all internal links and assets are document-relative; no root-absolute `/...` assumptions exist.
- Confirmed nested project pages use `../` references correctly.
- Confirmed operation from a repository subdirectory does not depend on the domain root.
- Confirmed no `package.json`, Python requirements, framework, compiler, build step, API server, or runtime service is required.
- Site consists of HTML, CSS, vanilla JavaScript, SVG, and local image assets.

### Metadata

- Unique page titles verified.
- Description metadata verified on all pages.
- Open Graph type, title, and description added and verified on all pages.
- Twitter summary-card metadata added.
- Local SVG favicon added and referenced correctly from root and nested pages.
- No canonical URL is hard-coded because the final GitHub Pages repository URL is not yet known. This avoids an incorrect root-domain assumption.
- No `og:url` or absolute `og:image` is hard-coded for the same reason.

### Public safety

- Scanned public HTML, CSS, JavaScript, SVG, Markdown, and text files for Windows drive paths: none found.
- Scanned for API keys, client secrets, access/refresh tokens, IBAN-like account identifiers, and credential markers: none found.
- Confirmed no raw/private Banking data files are linked or copied into the website.
- Confirmed no phone number appears in rendered or textual website content. Numeric SVG coordinates were separately excluded from phone-pattern false positives.
- Reviewed claims against the previously validated portfolio content.
- Banking is explicitly described as an independent portfolio POC and not an ABN AMRO production deployment.
- Real ABN sandbox evidence is explicitly limited to API/schema fidelity.
- Synthetic longitudinal data is explicitly identified as synthetic modelling and controlled-evaluation evidence.
- No fraud/AML, autonomous decision, real-customer-behavior, or production-performance claim is made.

## Issues found

1. Inactive CV controls were visible despite no downloadable CV.
2. Keyboard focus depended on browser defaults and was not sufficiently prominent.
3. Level-3 tabs lacked standard arrow-key handling and complete ARIA relationships.
4. Muted text and amber accents were marginal or below WCAG AA contrast for normal text.
5. Favicon and Open Graph/social-summary metadata were incomplete.
6. Case-study main navigation did not have an explicit accessible label.

## Fixes made

1. Removed all inactive `Download CV`, `View CV`, and CV navigation controls.
2. Added a visible three-pixel focus indicator with sufficient contrast.
3. Added Left/Right/Home/End tab-key behavior and ARIA control relationships.
4. Darkened only the affected muted and amber text tokens; layout and visual design remain unchanged.
5. Added a local SVG favicon plus Open Graph and Twitter summary metadata.
6. Added accessible labels to case-study main navigation.

## Unresolved issues

- The final public GitHub Pages URL/repository name is not yet known, so canonical URLs, `og:url`, and an absolute social-preview image URL are intentionally omitted. Add them only after the deployment URL is fixed.
- LinkedIn may show its authentication wall to logged-out visitors; the public profile destination itself resolves correctly.
- A downloadable CV is not present. All inactive CV controls have been removed, so this is not a dead-link defect.

## Final decision

**PASS — GitHub Pages ready.**

The unresolved metadata items are deployment-URL enhancements, not blockers. The static site can be published from a GitHub Pages repository subdirectory without a build step or server dependency.
