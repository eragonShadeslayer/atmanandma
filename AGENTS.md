# AGENTS.md

Personal website for Dr. M.A. Atmanand. Plain HTML/CSS/JS — **no build system, no package manager, no tests, no lint config**. Don't add any tooling; edit files directly and open the HTML pages in a browser to verify.

## Architecture

- Each `*.html` page is a standalone page with its own content, but the shared chrome (header nav, sidebar, profile panel, footer) is **injected at runtime by `app.js`** into empty placeholder divs (`#header`, `#sidebar`, `#footer`, `#profilePanel`). New pages must keep those divs. `#footer` is a direct child of `#wrapper` (outside `#body`) so the sticky-footer layout works.
- `database.js` defines the global `PersonalData` object (name, positions, email, social handles). `app.js` reads it, so **script order matters**: `database.js` must be included before `app.js` (both at the end of `<body>`).
- `app.js` renders `#profilePanel` differently per page: a large **hero** (photo, name, roles, CTA buttons) on the home page, and a compact **banner** (round avatar + name) on inner pages. `isHomePage()` decides based on `document.location.pathname`.
- The header nav includes a `.nav-toggle` hamburger button (only visible on narrow screens) that toggles the `.open` class on the nav `ul`.
- Nav links live in the global `headerNavItems` array in `app.js`, shared by `addHeaderPanel()` and the footer's Quick Links column. Sidebar links are a separate array in `addSidePanel()`. Adding or renaming a page means updating both.
- The sidebar also gets a `.sidebar-contact` card (email + social icons) from `addContactCard()`; it is `position: sticky` so it follows scroll on desktop and goes static below 900px.
- The active-nav highlight (`addActiveForPanelLink`) compares `document.location.pathname` to the link's pathname, so it only works when pages are served at root paths.

## Styling

- `style.css` is the single stylesheet. It uses **CSS custom properties** defined in `:root` (teal palette, fonts, radius, shadow) — reuse those variables instead of hardcoding colors.
- Sticky-footer page layout: `body` is a flex column with `min-height: 100vh`, `#body` grows to fill space, so the dark footer always rests at the bottom. `#body` is a flex row (max-width 1280px) with `#content1` (main card) and `#sidebar` (320px card); `#profilePanel` spans full width. Breakpoints at 900px (sidebar stacks) and 820px (hamburger nav) and 700px (hero + footer grid stack).
- Fonts come from Google Fonts CDN (**Inter** for body, **Lora** for headings); the `<link>` tags must be present in every page's `<head>`.
- Page content lives in `#content1 > .post` (styled as a white card). Keep new content inside that structure. Experience entries on the home page use the `.timeline` markup.

## Deployment

- `.cpanel.yml` is the deploy config: cPanel Git deployment copies files to `/home/atmaezcf/public_html/` on push.
- `CNAME` contains `atmanand.co.in` (GitHub Pages custom domain). Both deployment paths exist; don't delete either file.

## Conventions

- `TODO.md` tracks completed and pending improvement batches; update it whenever a batch is finished or a new one is planned.

- Plain HTML5 (`<!DOCTYPE html>`, `<html lang="en">`), plain CSS, framework-free JS in `app.js` (global functions, no modules). Match the existing style; don't add frameworks or preprocessors.
- Font Awesome 4.7 and (on gallery.html) Fotorama 4.6.4 + jQuery load from CDNs. Keep them as CDN links.
- `media/images/` holds image assets.
