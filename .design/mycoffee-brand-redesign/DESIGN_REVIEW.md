# Design Review: MyCoffee Brand Redesign

Date: 2026-09-04

Primary view: `/prototype/brand?variant=counter`
Canonical brief: [`../../docs/design/brand-redesign-brief.md`](../../docs/design/brand-redesign-brief.md)

## Skills applied

- `information-architecture`
- `critique-information-density`
- `critique-visual-hierarchy`
- `ux-writing`
- `frontend-design`
- `responsive-design`
- `frontend-a11y`
- `vercel-react-best-practices`
- `design-review`

## Render evidence

| State | 1280 × 800 | 768 × 1024 | 375 × 812 |
| --- | --- | --- | --- |
| Before | [`before-counter-desktop-1280.webp`](screenshots/before-counter-desktop-1280.webp) | [`before-counter-tablet-768.webp`](screenshots/before-counter-tablet-768.webp) | [`before-counter-mobile-375.webp`](screenshots/before-counter-mobile-375.webp) |
| Reviewed | [`review-counter-desktop-1280.webp`](screenshots/review-counter-desktop-1280.webp) | [`review-counter-tablet-768.webp`](screenshots/review-counter-tablet-768.webp) | [`review-counter-mobile-375.webp`](screenshots/review-counter-mobile-375.webp) |

Normal-height mobile first screen: [`review-counter-mobile-first-screen-375.webp`](screenshots/review-counter-mobile-first-screen-375.webp).

## Outcome

Counter remains the recommended direction. Its real orange counter edge, red/yellow mark, factual visit tools and restrained paper/ink layout are more specific to MyCoffee than a generic editorial café template. The reviewed version keeps one dominant hero, then shifts attention to coffee/food, room and visit details in that order.

## Review dimensions

### Information architecture — pass

- The first screen answers what the shop is, where it is, normal weekday/weekend hours, and provides menu and directions.
- Menu prices and stock remain in iCHEF rather than a second website data source.
- Repeated product explanation was removed. The coffee and food images now support one concise menu section instead of creating a second competing content block.
- The prototype switcher is now an in-flow control after the footer, so internal navigation does not cover customer content.

### Information density — pass

- The hero asks for one decision: whether to visit.
- Supporting actions remain limited to menu and directions; phone, reservation and social links are delayed until relevant sections.
- Decorative Table card numbers were removed because those categories are not a sequence.
- The final visit block intentionally repeats the two primary actions after the user has reviewed the room and product context.

### Visual hierarchy — pass

- The characteristic entry point is the real shop aisle, orange counter edge and authentic hanging mark.
- Generated coffee/food and preparation scenes are secondary and never carry the first factual visit decision.
- Generic all-caps English eyebrows and appended arrows were removed. Section labels now use short Traditional Chinese terms.
- The orange/yellow/blue fascia remains the single signature decorative system.

### UX writing — pass

- Hero copy now uses direct conversational language and `目前菜單` consistently.
- A static weekly schedule no longer sits under a headline that promises dynamic “today” status.
- Action labels use explicit verbs: `查看最新菜單`, `導航到店`, `訂位`.
- Internal image labels and release reminders requested for removal remain absent from the rendered page.

### Responsive behavior — pass

- Browser-tested Counter, Station and Table at 1280 × 800, 768 × 1024 and 375 × 812.
- No horizontal overflow at any tested view.
- All hero media frames are explicitly 3:2, matching the photography brief.
- At 375px the hours and both primary actions finish before 605px; the hero image begins in the first viewport.
- The prototype switcher is static on all sizes and cannot cover customer content.

### Accessibility — pass

- Native anchors, semantic headings, `address`, `nav`, `section` and `figure` elements are retained.
- The adjacent text names the brand, so the logo image uses empty alt text instead of repeating the same name.
- Interactive targets measured at a minimum 44px; primary actions remain 48px.
- Deep blue and black areas use yellow focus outlines; the orange action block uses a paper focus outline. All exceed 3:1 against their backgrounds.
- No nested interactive elements; reduced-motion behavior remains present.

### Next.js and asset performance — pass for prototype

- The page is a Server Component with no added client state or animation library.
- Hero images preload; below-fold images stay lazy and use responsive `sizes`.
- The authentic logo source was reduced from 1024px / 605KB to 256px / about 43KB without redrawing it.
- The factual hero derivative is about 119KB; generated web derivatives remain about 106–116KB.

## Formal implementation review — 2026-09-05

Formal route: `/`

| 1280 × 800 | 768 × 1024 | 375 × 812 |
| --- | --- | --- |
| [`formal-desktop-1280x800.png`](screenshots/formal-desktop-1280x800.png) | [`formal-tablet-768x1024.png`](screenshots/formal-tablet-768x1024.png) | [`formal-mobile-375x812.png`](screenshots/formal-mobile-375x812.png) |

- The formal page preserves the approved Counter hierarchy and removes the prototype note and switcher.
- At 375 × 812, both primary actions are 48px high and finish at 521px; the factual hero begins at 550px and is visible in the first viewport.
- Browser DOM audits at all three target sizes report `scrollWidth === innerWidth`, one `h1`, and no customer-visible `AI 選豆` or `PROTOTYPE` text.
- Keyboard traversal exposes the skip link first, then the 44px brand link and 48px menu action. Each receives a 3px solid high-contrast focus outline.
- `prefers-reduced-motion: reduce` changes transition duration to `0.01ms` and page scroll behavior to `auto`.
- Native `ego-browser` screenshot capture timed out after its DOM audit succeeded. Final viewport images were captured from local Chrome headless and visually reviewed instead.
- `bun run check` passes the production build and five HTTP integration tests. `bun audit` reports no known vulnerabilities.
- Independent Standards and Spec reviews found two bounded test gaps. The suite now allocates a free port, fails on early server exit, confirms the removed prototype returns 404, and checks every canonical menu, Maps, reservation, Instagram and Facebook destination.
- Operational facts now live in `src/config/site.ts`, so visible content, JSON-LD, metadata, robots and sitemap share one source.

## Remaining release gate

- Generated food and staff scenes remain secondary atmosphere only. Replace them with current factual product/action photography when available, or keep the manifest boundary and exclude them from structured data.
- A separate explicit approval is still required before push, Vercel deployment, DNS, or public release.
