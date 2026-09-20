# Engineering Visual Enrichment Review

**Branch:** `review/engineering-visual-enrichment-v16`  
**Scope:** visual enrichment of `projects/engineering.html` only.  
**Evidence authority:** Master Profile V16.  
**Live-site status:** review branch only; do not merge until the review-required assets are approved or removed.

## Page changes

- Added **Actual Product & Engineering Context**.
- Added **Selected Engineering Visuals**.
- Preserved and reused the public patent block.
- Added the required visual-evidence disclosure.
- Added visible asset classifications and matching HTML comments.
- Kept V16 claim boundaries for FLUENT, PerfectCare CFD, multiphase work, model authorship and realised outcomes.

## Asset register

| Asset | Page use | Source | Classification | Public-safe assessment | Approval status |
|---|---|---|---|---|---|
| `patent-fig11-soleplate.png` | Existing hero patent figure | Public EP 2 430 229 B1 figure | **PUBLIC** | Safe with patent citation | Merge-ready |
| `patent-fig12-system.png` | Hero and Selected Engineering Visuals | Public EP 2 430 229 B1 figure | **PUBLIC** | Safe with patent citation | Merge-ready |
| `perfectcare-product-context.jpg` | PerfectCare product-family context | Supplied by Ajit; already documented in repo | **PUBLIC** | Safe as product-family context, not exact patent/simulation proof | Merge-ready under existing approval |
| `philips-dry-iron-hd1134.jpg` | Dry-iron product context | Supplied by Ajit; already documented in repo | **PUBLIC** | Safe only as product context; no historical volume/cost inference | Merge-ready under existing approval |
| `steam-generator-iron-context.png` | Steam-generator product/system context | Isolated embedded image from previously reviewed `Simulations Examples_Ajit.pptx` | **REVIEW REQUIRED** | No internal text/path/data visible, but source deck is internal | Await Ajit approval |
| `shaver-product-context.png` | Rotary-shaver product context | Same reviewed deck | **REVIEW REQUIRED** | No internal text/path/data visible; product-photo publication rights/source need confirmation | Await Ajit approval |
| `toothbrush-product-context.png` | Electric-toothbrush product context | Same reviewed deck | **REVIEW REQUIRED** | No internal text/path/data visible; product-photo publication rights/source need confirmation | Await Ajit approval |
| `heater-thermal-context.jpg` | Heater/thermal-system hardware context | Same reviewed deck | **REVIEW REQUIRED** | No file/path/table visible; hardware photograph may still be internal | Await Ajit approval |
| `toothbrush-stress-extract.jpg` | Team-level failure-correlation visual | Same reviewed deck | **REVIEW REQUIRED** | Isolated result region; no filename/path/table/dimensions. Exact stress legend and geometry remain visible. | Await Ajit approval; remove if any concern |
| HTML/CSS engineering decision flow | Product-to-decision narrative | Original portfolio implementation | **REPRESENTATIVE / SYNTHETIC** | Contains no Philips source data | Merge-ready |

## Safe to merge now

The following page elements are suitable for the public main branch without further archive work:

- revised layout and both section headings;
- required visual-evidence note;
- public patent figures and citation;
- existing Ajit-supplied PerfectCare and dry-iron images under their current claim boundaries;
- representative HTML/CSS decision-flow visual;
- styling and responsive behaviour.

## Requires Ajit approval before merge

The five new files extracted from the internal simulation showcase:

1. `steam-generator-iron-context.png`
2. `shaver-product-context.png`
3. `toothbrush-product-context.png`
4. `heater-thermal-context.jpg`
5. `toothbrush-stress-extract.jpg`

Although each file excludes slide text, filenames, paths, tables and notes, the source presentation is internal. A public Git branch is still publicly accessible, so approval should address both confidentiality and image-publication rights.

## Should not go live

- Full screenshots of any internal simulation slide.
- Original ANSYS images that show internal filenames, timestamps, dimensions, material data or detailed legends when not necessary.
- Cutter-model images exposing proprietary mechanism geometry and exact model metadata.
- China portfolio/range visuals, dashboards, customer/SKU/transaction tables or other unrelated confidential project material.
- Malformed/corrupted PerfectCare JPEG variants in the repo; the review page now uses `perfectcare-product-context.jpg`, which renders correctly in the browser.

## Recommended merge path

1. Review the branch locally or through the pull-request preview.
2. Approve or reject each of the five review-required assets.
3. If rejected, remove those assets and cards while keeping the merge-ready public/representative layer.
4. Merge only after the page has passed desktop/mobile visual QA and the asset list matches the final approval decision.
