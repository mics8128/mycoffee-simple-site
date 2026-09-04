# Generated Image Manifest

Date: 2026-09-04

This manifest separates factual photographs from generated imagery. The customer UI does not overlay image labels, so this internal record is the source of truth for asset provenance and use limits.

| Public asset | Source reference | Classification | Approved use |
| --- | --- | --- | --- |
| `/brand/table-brand-scene.webp` | `image-from-real/20260904_144849.JPG`, `20260904_144942.JPG` | Generated food-and-coffee brand scene | Secondary formal-site atmosphere only; not an image of current products or serving style |
| `/brand/barista-brand-scene.webp` | `image-from-real/20260904_144935.JPG` | Generated preparation scene | Secondary formal-site atmosphere only; not an image of an actual employee or current workflow |

## Factual hero derivative

`/brand/counter-real-aisle.webp` is a crop and tonal correction of `image-from-real/20260904_145018.JPG`. No pixels, furniture, equipment, signs, products, or architecture were generated or removed. It may be used as current interior evidence after normal operational freshness review.

`/opengraph-image.jpg` is a 1200×630 brand-share composition made from that factual derivative, the approved logo mark, solid brand colors, and factual name/address text. No store pixels were generated. It may be used for Open Graph and Twitter cards.

## Rejected or retired outputs

- `image-from-real/generated/storefront-clean.png` is rejected. Generation changed the real counter, menu, signs, and storefront details. It must not be copied into `public/` or presented as the shop exterior.
- The earlier generated counter hero derivative is retired and removed from `public/` because it changed small shop details and was too prominent to serve as factual first-visit evidence.
- `/brand/seating-ai-retouched.webp` was removed from `public/` during formal implementation because the Counter homepage does not use it.

## Use boundary

- Do not use these assets to support menu, price, inventory, equipment, seating-capacity, accessibility, or staffing claims.
- Do not put them in structured data as factual store or product photos.
- Keep generated scenes secondary and describe them only as brand atmosphere; do not describe them as current documentary photography.
- Replace product and staff scenes with current real photography before a final factual launch whenever possible.
- Keep raw source photography local. Only reviewed, compressed derivatives belong in `public/`.
