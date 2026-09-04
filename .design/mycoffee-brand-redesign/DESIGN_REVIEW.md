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

## Deferred before production launch

- Fresh-read hours, reservation behavior, menu URL, address, phone and operating policies.
- Replace generated food and staff scenes with current factual product/action photography when available, or keep their provenance boundaries outside factual claims and structured data.
- Remove the prototype switcher and `/prototype/brand` route after the chosen direction is implemented at `/`.
- Remove or redirect `/bean-match` and delete its obsolete client bundle/data.
- Complete canonical, Open Graph image, structured data, robots, sitemap, security/dependency and end-to-end release work.
