# Information Architecture: MyCoffee Brand Site

## Site Map

- Home `/`
  - Latest menu — external iCHEF menu view
  - Directions — external Google Maps destination
  - Phone — native `tel:` action
  - Reservation — external iCHEF reservation view
  - Instagram and Facebook — official external profiles
- Legacy bean selector `/bean-match`
  - Remove for launch; redirect to `/` rather than retain a second product model
- Brand prototype `/prototype/brand`
  - Local review route only
  - `?variant=counter`, `?variant=station`, and `?variant=table` compare directions
  - Remove from the production information architecture after direction approval

## Navigation Model

- **Primary navigation:** No multi-item site navigation. This is a single-location café and the first visit decision should not be hidden behind a menu.
- **Primary actions:** `查看最新菜單` and `導航到店` appear in the first screen and return near the end of the page.
- **Utility navigation:** Phone, reservation, Maps, and official social links appear with visit details or in the footer.
- **Mobile navigation:** No hamburger. Keep the two primary actions visible in the first 812px. The prototype-only direction switcher must not cover customer content.

## Content Hierarchy

### Home

1. **Visit decision** — What the shop is, Zhongli location context, normal hours, real/representative space, menu and directions.
2. **Coffee and food** — Everyday coffee plus a light meal or dessert; current choices live in the latest menu.
3. **Space** — What sitting in the shop feels like without positioning it as a coworking space.
4. **Coffee practice** — Only verifiable preparation or bean detail; no AI selector or unsupported expert claims.
5. **Visit details** — Address, phone, reservation and repeated primary actions.
6. **Footer** — Official business name, social links and internal data reference.

## User Flows

### Decide whether to visit

1. A first-time visitor lands on `/`.
2. They identify MyCoffee as a Zhongli coffee-and-light-food shop.
3. They see normal hours without scrolling past the main actions.
4. They choose `查看最新菜單` or `導航到店`.
5. If they need a specific condition confirmed, they use phone or reservation details below.

### Check current offerings

1. Visitor selects `查看最新菜單`.
2. The official iCHEF menu view opens in a new tab.
3. The website does not duplicate prices or inventory that can drift.

### Navigate to the shop

1. Visitor selects `導航到店`.
2. Google Maps opens with the exact street address.
3. Address and phone remain available as fallback details.

## Naming Conventions

| Concept | UI label | Rule |
| --- | --- | --- |
| Current offerings | 查看最新菜單 | Never imply online checkout unless verified |
| Directions | 導航到店 | Use the same imperative label everywhere |
| Reservation | 訂位 | Do not mix with ordering terminology |
| Opening schedule | 平日 / 週末 | Prefer direct day groups over abstract labels |
| Shop | 買咖啡 MyCoffee | Use the official identity consistently |

## Component Reuse Map

| Component | Used on | Behavior differences |
| --- | --- | --- |
| Brand lockup | All prototype variants | Color adapts to the direction background |
| Hours | Hero and final visit block | Same values and reading order |
| Visit actions | Hero and final visit block | Compact layout only near page end |
| Visit details | Space/visit sections and footer | Light or dark contrast treatment |
| Prototype switcher | Prototype route only | Desktop may float; mobile must remain outside customer content |

## Content Growth Plan

- The homepage remains intentionally small.
- Menu, price, stock and promotions grow in iCHEF, not in website source code.
- If durable coffee knowledge or store stories are added later, they receive separate pages only when enough verified content exists.
- Do not add filtering, search, carousel or CMS complexity for the current single-location site.

## URL Strategy

- Canonical public entry: `/`
- No query parameters on the public homepage.
- Prototype query parameters exist only during local direction review.
- External operational systems keep their own URLs; the site links to them instead of mirroring volatile data.
