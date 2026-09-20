# Engineering Visual Enrichment Review

**Branch:** `review/engineering-visual-enrichment-v16`  
**Scope:** visual enrichment of `projects/engineering.html` only.  
**Evidence authority:** Master Profile V16.  
**Live-site status:** local review branch only; not pushed and not merged.

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
| `perfectcare-product-context.jpg` | PerfectCare product-family context and steam-generator system context | Supplied by Ajit; already documented in repo | **PUBLIC** | Safe as product-family context, not exact patent/simulation proof | Merge-ready under existing approval |
| `philips-dry-iron-hd1134.jpg` | Dry-iron product context | Supplied by Ajit; already documented in repo | **PUBLIC** | Safe only as product context; no historical volume/cost inference | Merge-ready under existing approval |
| `shaver-series-9000-public.jpg` | Rotary-shaver product context | [Official Philips media library, Shaver Series 9000 Prestige](https://www.philips.com/a-w/about/news/media-library/20180830-Philips-Shaver-Series-9000-Prestige-04.cs) | **PUBLIC** | Official public press/product image; no internal mechanism geometry | Merge-ready |
| `sonicare-diamondclean-media.jpg` | Electric-toothbrush product-family context | [Official Philips Media Library, Sonicare DiamondClean Smart](https://www.philips.com/a-w/about/news/media-library/20180109-Philips-Sonicare-DiamondClean-Smart.html), published 9 January 2018 | **PUBLIC** | Official public media asset; used only as broadly period-consistent product-family context, not exact-SKU or project evidence | Merge-ready |
| `tubular-heating-element-public.png` | Heater/thermal-system context | [Wikimedia Commons: Tubular heating element 1](https://commons.wikimedia.org/wiki/File:Tubular_heating_element_1.png), P.Fisxo, CC BY-SA 4.0 | **PUBLIC** | Generic educational cutaway; attribution and license retained here and in `assets/IMAGE_SOURCES.txt` | Merge-ready subject to CC BY-SA attribution retention |
| `representative-structural-stress.png` | Failure-location-correlation concept | Newly generated generic finite-element bracket illustration; prompt recorded below | **REPRESENTATIVE / SYNTHETIC** | No Philips geometry, result values, labels, filenames or internal data | Merge-ready |
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

No internal-presentation extract remains in the proposed page. Final approval is still required for the overall visual selection and for retaining the Wikimedia CC BY-SA asset with its attribution. The PerfectCare image uses Ajit's existing portfolio-supplied asset; the shaver and Sonicare images come from the Philips Media Library.

## Synthetic structural visual provenance

`representative-structural-stress.png` was generated for this review branch as a generic CAE illustration. The prompt requested an unbranded mechanical bracket with a circular mounting hole, a plausible finite-element mesh and stress contour, and explicitly prohibited Philips branding, commercial-product geometry, text, values, filenames, solver UI, watermarks and internal data. It is illustrative, not evidence of a particular simulation result.

## Should not go live

- Full screenshots of any internal simulation slide.
- `toothbrush-stress-extract.jpg` and all other internal-presentation extracts previously staged in this branch.
- Original ANSYS images that show internal filenames, timestamps, dimensions, material data or detailed legends when not necessary.
- Cutter-model images exposing proprietary mechanism geometry and exact model metadata.
- China portfolio/range visuals, dashboards, customer/SKU/transaction tables or other unrelated confidential project material.
- Malformed/corrupted PerfectCare JPEG variants in the repo; the review page now uses `perfectcare-product-context.jpg`, which renders correctly in the browser.

## Recommended merge path

1. Review the revised branch locally.
2. Confirm the Ajit-supplied PerfectCare image, the two Philips Media Library images, the attributed Wikimedia illustration and the synthetic structural visual.
3. Push only after Ajit gives final approval.
4. Merge only after the pushed review branch has passed the normal preview checks.
