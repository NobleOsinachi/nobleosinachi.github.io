# Video editor portfolio

The `/video-editor/` route remains static HTML, with the existing Tailwind CDN, Poppins font, slate background and blue accent. No dependency or framework was added.

## Content and maintenance

`portfolio-data.js` is the source of truth for category ordering, project identities, original titles, source URLs, aspect ratios, descriptions and verification evidence. AI Creatives is first. Each published category must have at least three projects and a count divisible by three. Never add variants or another hosting copy of the same film to inflate a category.

After editing the data, run from the repository root:

```sh
node video-editor/build-portfolio.cjs
node video-editor/validate-portfolio.cjs
node --check video-editor/portfolio.js
```

The builder updates only the existing portfolio block and adds scoped styles / deferred scripts. It generates static links and cards, so the work remains available without JavaScript. Validation rejects invalid counts, duplicate projects/sources, invalid host IDs, mismatched source URLs and unverified/private projects, and checks that the rendered HTML matches the data.

Category counts are 3 AI Creatives, 3 Faceless YouTube Videos, 3 Commercials & Video Editing and 3 Short-Form Content. Motion Graphics & Visual Effects stays unpublished until three distinct, verified examples are available. Generic Video Editing was merged with Commercials to avoid repeating the same projects.

## Media and interaction

Thumbnails load lazily. Selecting a card opens a single native dialog and creates one iframe. No portfolio iframe is loaded at initial render. YouTube embeds use `https://www.youtube.com/embed/VIDEO_ID?playsinline=1&rel=0&autoplay=0`. Drive embeds use each public file's `/preview` URL. All cards and the player provide original-source links. No sound is started automatically. Closing the dialog removes the iframe, stops playback and returns focus to the opener. Escape, a labelled close button, and backdrop clicks close the dialog. Without dialog support, source links work normally.

Portrait videos use 9:16 and the documentaries use 16:9. The browser UI was used to inspect representative footage, not every second of every video. Remote hosts may restrict playback or thumbnails later; original links remain available. No Drive sharing permissions were changed and no media were uploaded or rehosted.

## Source audit

The candidate inventory was prepared before the final layout: `docs/video-portfolio-source-inventory.json`. YouTube availability, original titles and authors were checked with its public oEmbed endpoint. The Shorts channel was inspected in a signed-out browser. Drive files were listed and representative playback reviewed without sign-in; all three selected preview URLs and thumbnails returned anonymous HTTP 200 responses.

AI selections:

- `G39ycMcehRY` — The Skincare Reset: AI badge, representative footage and expanded production description (ChatGPT, Nano Banana, Sora 2, narration, Premiere Pro and CapCut).
- `tzhyySkdwAM` — ALIVO 06: AI badge, captioned everyday-life scenes reviewed in the browser.
- `Kkm_D6q3Buw` — RGB Desktop Fan VSL: expanded description verifies AI scripting, ElevenLabs narration, generated imagery and supplementary clips. Observed video dimensions 360×640, duration approximately 34 seconds.

Faceless selections:

- `1tQQWbQqG6tC3V0SxvBqseiUAi6o2LsqQ` — 14 Organized Crime Figures Inside ADX Florence Prison, 26:48.
- `1oaHoKrumDQySM-mS_XU-ZFJ41eYWxS2r` — 16 Pilots Convicted Of Crime and Sentenced To Prison In The U.S., 28:02.
- `1kCPTDoj_ezPZEM9LvtfPT3Fv5wg-v_nO` — Traitors In The U.S., 30:02.

Short-form videos posted by Ecom Growth Factory are credited as editing work already embedded in the existing portfolio, not uploads to Noble's channel. Existing incorrect labels were replaced using verified source titles (for example, `uLuj0lYpZMU` is a spinning-bike ad, not an acne commercial). Other verified candidates remain in the audit, without being duplicated in the displayed categories. Replit was inspected and found to be a 16:9 unlisted video already linked in the old portfolio; it is not part of the initial curated display.

## Scope

Existing uncommitted changes were present before this task. The builder preserves the page outside the portfolio, apart from its three stylesheet/script references. Navigation, hero, testimonials, pricing, contact form, routes and unrelated files remain as they were. No commit, push, deployment or sharing change is part of this implementation.
