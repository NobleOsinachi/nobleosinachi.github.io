# Video editor portfolio

## Current library

- AI Creatives: 12 films, first in the page.
- Faceless YouTube Videos: 9 films plus 3 explicitly authorized “Coming soon” slots.
- Commercials & Video Editing: 12 films.
- Short-Form Content: 12 films.

There are **45 real source videos and 48 display slots**. The placeholders have no invented video ID or fake playback link, and are not included in the film count. Motion Graphics / VFX remains unpublished until enough distinct verified standalone work is available.

## Maintenance

`portfolio-data.js` is the source of truth. Keep projects unique across categories, use genuine source URLs and record the evidence behind classifications. Original titles remain in the source audit even when display titles are shortened.

```sh
node video-editor/build-portfolio.cjs
node video-editor/validate-portfolio.cjs
node scripts/validate-site.cjs
```

Every category currently targets 12 slots. Real project counts must still be multiples of three. The only placeholder set allowed is the three faceless slots authorized by the user. Once all three uploads are accessible, add their verified project records, remove the three `placeholders`, update the faceless category description, and run the commands above. The film summary is calculated from the data.

## Playback

Thumbnails load lazily. A card opens a single native dialog and creates one iframe; closing it removes the iframe and returns focus. YouTube uses the official `/embed/VIDEO_ID` format with `autoplay=0`. Public Drive videos use `/file/d/FILE_ID/preview`. Players preserve 9:16 or 16:9 proportions and every real project has an original-source fallback link. Portfolio cards work as ordinary links without JavaScript.

## Evidence and limits

The candidate audit is `docs/video-portfolio-source-inventory.json`. Public YouTube availability, titles and authors were checked with oEmbed. The channel and selected AI imagery were inspected in a signed-out browser. Drive titles were checked against anonymous public previews and all nine thumbnails were verified. No sharing permissions changed.

Three ALIVO executions (`UUY86t2HiKU`, `_upN3oKOuFg`, `v8s2t7qtjYE`) have **medium-confidence AI classifications** based on visually reviewed generated-looking imagery and their established campaign context; they did not show individual YouTube AI labels. Confirm their production workflows when refining the audit. Other selected AI work has explicit source-title, AI-label, production-description or Sora-watermark evidence. Videos were not watched end to end. Additional documentary descriptions only describe their published topics; unreviewed techniques and performance results are not asserted.

Editing examples published by Ecom Growth Factory were already credited in the existing portfolio; they are not represented as uploads to Noble's own channel. Distinct ad executions are labelled separately; repeated uploads and identical-title cycling duplicates were excluded.

## Site-wide styling

The whole video-editor page now shares `assets/site-system.css` and the common header with the rest of the site. See `docs/DESIGN-SYSTEM.md`. No commit, push, deployment, private-file exposure or upload was performed.
