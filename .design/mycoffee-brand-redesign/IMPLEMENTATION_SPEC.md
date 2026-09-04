# MyCoffee Counter Homepage — Implementation Spec

Status: Implemented and verified locally  
Decision date: 2026-09-04  
Release mode: Local branch only; no push or deployment

## Outcome

Replace the production `/` route with the approved Counter direction so a first-time visitor can decide whether to visit MyCoffee. Remove the AI bean-matching experience from the public product surface.

## Primary user and job

- Primary user: a local Zhongli customer who wants coffee, light food, and a comfortable place to pause.
- Secondary users: commuters and nearby office workers.
- Single homepage job: help a first-time visitor decide whether to visit.

## Public information hierarchy

1. What the place is: `買咖啡 MyCoffee | 咖啡輕食`.
2. Where it is: 桃園市中壢區中央東路 52 號.
3. General hours: weekdays 09:00–18:00; weekends 12:00–18:00.
4. Immediate actions: `查看最新菜單` and `導航到店`.
5. Product context: everyday coffee and current light-food or dessert choices, without duplicating current prices or availability.
6. Space context: real store imagery and a contact route for visit details.
7. Secondary actions: phone, reservation, Instagram, and Facebook.

## Fresh operational evidence

Fresh-read completed at 2026-09-04 17:28 (UTC+08:00).

- iCHEF information, Google Maps, Facebook, and the current site agree on address and phone.
- iCHEF, Instagram, Facebook, and the current site agree on weekday/weekend hours.
- iCHEF `/ordering` explicitly says `僅供瀏覽菜單`; all menu CTAs must say `查看最新菜單`, never online ordering or checkout.
- iCHEF `/reserve` renders a reservation flow and is valid.
- Current product stock, prices, promotions, reviews, walking time, outlet policy, minimum-spend policy, and unlimited-time policy are not homepage claims.

Canonical external URLs:

- Menu: https://shop.ichefpos.com/store/139TPDhT/ordering
- Reservation: https://shop.ichefpos.com/store/139TPDhT/reserve
- Maps: address query for 桃園市中壢區中央東路 52 號
- Instagram: https://www.instagram.com/mycoffeetaiwan/
- Facebook: https://www.facebook.com/mycoffeetaiwan/

## Content and visual contract

- Use the approved Counter structure, paper/ink/orange/yellow/blue palette, orange-counter fascia, and direct Traditional Chinese copy.
- The hero uses the real derivative `public/brand/counter-real-aisle.webp`.
- Generated barista and table images may remain only as secondary brand scenes. They do not prove store layout, current products, staff, equipment, price, or availability.
- Real store imagery remains the evidence for the hero and store-space section.
- No prototype switcher, prototype note, proposal language, source badges, image-corner labels, or release reminders appear in customer UI.
- Do not use glass cards, shimmer, border beams, gradient blobs, auto carousels, decorative step numbers, or AI-template language.

## Route and removal contract

- `/` becomes the Counter homepage.
- `/bean-match` permanently redirects to `/`.
- `/prototype/brand` is removed from the public build.
- Remove bean-scoring code, hard-coded bean data, legacy AI UI, and old unused UI components/assets/dependencies.

## Search and sharing contract

- Canonical URL: https://mycoffeetaiwan.com/
- Metadata describes a Zhongli coffee and light-food shop and contains no AI wording.
- Add a real-photo-based Open Graph image and meaningful alt text.
- Add `CafeOrCoffeeShop` JSON-LD with only verified name, URL, telephone, postal address, opening hours, menu URL, and official social profiles.
- Add `/robots.txt` and `/sitemap.xml`; the sitemap contains only the canonical homepage.
- Add conservative response security headers that do not break Next.js rendering or outbound links.

## Accessibility and responsive contract

- Semantic `header`, `main`, `section`, `address`, `nav`, and `footer` structure.
- One clear `h1`; section headings remain in a logical sequence.
- All meaningful images have accurate alt text. The logo mark is decorative within a text lockup.
- Keyboard focus is visible on light and dark surfaces.
- Interactive targets are at least 44 CSS pixels; primary actions are 48 pixels.
- Respect `prefers-reduced-motion`.
- No horizontal overflow at 375×812, 768×1024, or 1280×800.
- At 375×812, the first viewport shows the shop type, general hours, both primary actions, and the start of the real hero image.

## Verification seam

The highest public seam is the production HTTP/browser surface, not internal React implementation details.

Automated integration checks must verify:

- Homepage status, key content, canonical metadata, JSON-LD, external CTA destinations, and absence of AI bean-matching copy/links.
- Permanent redirect from `/bean-match` to `/`.
- `robots.txt`, `sitemap.xml`, and response security headers.

Manual rendered review must verify:

- Approved Counter visual hierarchy and imagery.
- The three target viewport sizes, horizontal overflow, keyboard focus, and reduced-motion behavior.

## Failure modes and fallbacks

- External iCHEF, reservation, Maps, or social service unavailable: the static address, phone, and hours still let the visitor decide and contact the shop.
- Image optimization delay or failure: alt text and layout dimensions preserve meaning and prevent layout collapse.
- JavaScript unavailable: all homepage content and outbound actions remain server-rendered links.
- Operational data changes after release: update the centralized site facts and structured data together after a new first-party fresh-read.

## Release gate

Implementation may be committed locally. Do not push, create a remote deployment, change Vercel, or change DNS without a later explicit user approval.

## Local completion record

Completed 2026-09-05 on `prototype/brand-redesign`. `bun run check` and `bun audit` pass. Formal viewport evidence is linked from `.design/mycoffee-brand-redesign/DESIGN_REVIEW.md`. Nothing was pushed or deployed.
