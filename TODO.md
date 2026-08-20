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

- [ ] **Batch 3 — Publications filter**: client-side search box on `pub.html`
  that live-filters entries by title/journal/year (~30 lines of vanilla JS).
- [ ] **Batch 4 — Print stylesheet**: `@media print` rules stripping
  nav/sidebar/footer/buttons for clean PDF/print output.
- [ ] **Batch 5 — 404 + SEO files**: branded `404.html`, `robots.txt`,
  `sitemap.xml`.
- [ ] **Batch 6 — Scroll-reveal animations** (optional): subtle fade-up on
  cards via `IntersectionObserver`.
- [ ] **Batch 7 — Semantic HTML5** (optional): `<header>/<main>/<nav>/<footer>`
  landmarks + skip-to-content link.
