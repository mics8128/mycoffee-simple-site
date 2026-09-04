# ADR 0002: Adopt the Counter homepage and remove AI bean matching

- Status: Accepted
- Date: 2026-09-04

## Context

The existing public site presents MyCoffee as an AI bean-selection product. The audited bean data and scoring do not represent a reliable live menu, and iCHEF is the current first-party menu surface. The agreed homepage job is instead to help a first-time local visitor decide whether to visit the cafe.

Three local brand directions were tested: Counter, Station, and Table. Counter made the real orange counter, compact brand mark, operational information, and menu/navigation actions the strongest and most distinctive hierarchy. The user approved Counter for formal implementation.

## Decision

- Replace `/` with the Counter direction.
- Use real store imagery as the primary evidence; keep generated imagery, if any, only in secondary atmospheric roles under ADR 0001.
- Treat iCHEF as a current menu-browsing and reservation service. Do not claim online checkout.
- Permanently redirect `/bean-match` to `/` and remove bean scoring, hard-coded bean listings, AI UI, and related unused dependencies.
- Keep all work local until a separate release approval.

## Consequences

- The public product model becomes a cafe visit-decision page rather than a technology demo.
- Current item prices and availability are not duplicated in the site.
- Search metadata, structured data, and navigation must use verified cafe facts and contain no AI bean-matching language.
- Any future recommendation feature requires a new domain and data-source decision rather than reviving the deleted fixed scoring model.
