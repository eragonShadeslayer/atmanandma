# TODO — Website Improvement Batches

Tracked as we go. Completed batches are marked with their commit.

## Completed

- [x] **Batch 1 — Visual modernization** (`41b05bc`)
      Responsive flexbox layout, hero (home) / banner (inner pages), sticky nav with
      hamburger menu, content cards, experience timeline, sticky sidebar contact card,
      rich dark footer, cyan-teal design tokens, Inter/Lora fonts, HTML5 doctypes,
      IE6/legacy cleanup, square avatar portrait.
- [x] **Batch 2 — High value, low effort**
      Optimized hero image (12 MB → 408 KB), per-page titles + meta descriptions +
      Open Graph/Twitter tags, branded `og-image.jpg`, Schema.org Person JSON-LD,
      dark mode via `prefers-color-scheme`.

## Pending

- [x] **Batch 3 — Publications filter** (`e939347`): search box on
      `pub.html` live-filters journal entries and patents, hides empty sections,
      shows "N of M entries" count. Injected by `addPublicationsFilter()` in `app.js`.
- [x] **Batch 4 — Print stylesheet** (`e939347`): `@media print`
      rules strip nav/sidebar/footer/filter/CTAs, small portrait, black-on-white
      text, external link URLs printed, no page-breaks inside entries.
- [x] **Batch 5 — 404 + SEO files** (built, awaiting review): branded `404.html`
      with full site chrome (`<base href="/">` so assets resolve at any path depth,
      `noindex`), `robots.txt` referencing `sitemap.xml` (11 URLs).
- [x] **Batch 6 — Scroll-reveal animations** (built, awaiting review): cards
      fade up via `IntersectionObserver` (`initScrollReveal()` in `app.js`);
      respects `prefers-reduced-motion`.
- [x] **Batch 7 — Semantic HTML5** (built, awaiting review): `<header>/<main>/<aside>/<footer>`
      landmarks on all 12 pages, `<nav>` wrapper in the injected header,
      skip-to-content link + `tabindex="-1"` on `#content1`.
