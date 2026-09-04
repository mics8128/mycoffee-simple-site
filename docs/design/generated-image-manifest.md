# Generated Image Manifest

Date: 2026-09-04

This manifest separates factual photographs from prototype-only generated imagery. The prototype UI does not overlay image labels, so this internal record is the source of truth for asset provenance and use limits.

| Public asset | Source reference | Classification | Approved use |
| --- | --- | --- | --- |
| `/brand/counter-brand-scene-cropped.webp` | `image-from-real/20260904_144935.JPG` | Brand scene extended from a real counter photo; some small details may differ | Prototype visual direction only; not documentary evidence of equipment, menus, prices, or stock |
| `/brand/seating-ai-retouched.webp` | `image-from-real/20260904_145002.JPG` | Brand scene extended from a real seating photo; incidental person and clutter removed | Prototype visual direction only; not evidence of exact furniture count or layout |
| `/brand/table-brand-scene.webp` | `image-from-real/20260904_144849.JPG`, `20260904_144942.JPG` | Generated food-and-coffee brand scene | Prototype composition only; not an image of current products or serving style |
| `/brand/barista-brand-scene.webp` | `image-from-real/20260904_144935.JPG` | Generated preparation scene | Prototype composition only; not an image of an actual employee or current workflow |

## Rejected output

`image-from-real/generated/storefront-clean.png` is rejected. Generation changed the real counter, menu, signs, and storefront details. It must not be copied into `public/` or presented as the shop exterior.

## Use boundary

- Do not use these assets to support menu, price, inventory, equipment, seating-capacity, accessibility, or staffing claims.
- Do not put them in structured data as factual store or product photos.
- Keep generated-scene context in surrounding prototype copy where it is relevant; do not describe these assets as current documentary photography.
- Replace product and staff scenes with current real photography before a final factual launch whenever possible.
- Keep raw source photography local. Only reviewed, compressed derivatives belong in `public/`.
