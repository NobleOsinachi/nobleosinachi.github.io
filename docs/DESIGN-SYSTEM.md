# Noble site design system

The site stays static HTML with its existing scripts and Tailwind styles. No new package dependencies were introduced. The shared visual layer is `assets/site-system.css`: navy surfaces, blue accents, Poppins, consistent borders, spacing, cards and navigation. Page adapters preserve the different color formats used by older templates.

`assets/site-system.js` handles the accessible shared mobile menu. The menu has an explicit expanded state, closes on Escape, restores toggle focus and has a no-JavaScript fallback.

## Change navigation once

Edit the links and markup in `scripts/build-site-header.cjs`, then run:

```sh
node scripts/build-site-header.cjs
node scripts/validate-site.cjs
```

Seventeen rendered pages share that header. Redirect pages keep their original destinations. Provider verification text and bare script redirect payloads are preserved. The pricing fragment inherits the shared theme when embedded and also references it directly.

## Video portfolio

The full video-editor page uses the same style as the portfolio, a wider layout and the shorter heading “Good stories. Better edits.” The portfolio uses four columns on large screens, three on smaller desktops, two on tablets and one on narrow phones.

See `video-editor/PORTFOLIO.md` for content maintenance. Project source titles, links and evidence are recorded in `docs/video-portfolio-source-inventory.json`.

## Verification

```sh
node video-editor/build-portfolio.cjs
node video-editor/validate-portfolio.cjs
node scripts/validate-site.cjs
node --check assets/site-system.js
node --check video-editor/portfolio.js
git diff --check
```

The visual pass includes the main home, video editor, development, copywriting, pricing, product, experience, projects, older home/video templates, case-study pages and exported reference page. This is not an end-to-end test of external payment, scheduling, email services or every legacy script. Forms were not submitted; checkout and sharing settings were not changed. Existing content claims in older pages were retained, not independently audited.
