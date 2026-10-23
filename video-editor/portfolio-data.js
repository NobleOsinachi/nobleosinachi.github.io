/* Verified portfolio content. Rebuild and validate after editing; see PORTFOLIO.md. */
(function(root){
  'use strict';
  const config = {
  "categories": [
    {
      "id": "ai-creatives",
      "title": "AI Creatives",
      "eyebrow": "01 / Creative experimentation",
      "description": "AI-generated worlds. Human-led storytelling. Product films and social ads shaped from concept to final cut.",
      "featured": true,
      "projects": [
        {
          "key": "skincare-reset",
          "host": "youtube",
          "videoId": "G39ycMcehRY",
          "title": "The Skincare Reset",
          "sourceTitle": "The Skincare Reset — AI UGC Product Commercial for Aichun Beauty Anti-Acne Cream",
          "description": "An AI-assisted skincare commercial combining generated scenes, narration, product presentation and caption-led finishing.",
          "tags": [
            "AI UGC",
            "Product storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=G39ycMcehRY",
          "thumbnail": "https://i.ytimg.com/vi/G39ycMcehRY/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "alivo-06",
          "host": "youtube",
          "videoId": "tzhyySkdwAM",
          "title": "ALIVO 06",
          "sourceTitle": "ALIVO 06",
          "description": "An AI-assisted social ad pairing everyday-life scenes with bold, readable captions.",
          "tags": [
            "AI creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=tzhyySkdwAM",
          "thumbnail": "https://i.ytimg.com/vi/tzhyySkdwAM/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "rgb-fan-vsl",
          "host": "youtube",
          "videoId": "Kkm_D6q3Buw",
          "title": "RGB Desktop Fan · AI VSL",
          "sourceTitle": "High-Converting RGB Desktop Fan VSL Using AI 🤖🔥",
          "description": "An AI-assisted product sales video: ChatGPT scripting, ElevenLabs narration and generated visuals brought together in the edit.",
          "tags": [
            "AI visuals",
            "Product VSL"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=Kkm_D6q3Buw",
          "thumbnail": "https://i.ytimg.com/vi/Kkm_D6q3Buw/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        }
      ]
    },
    {
      "id": "faceless-youtube",
      "title": "Faceless YouTube Videos",
      "eyebrow": "02 / Long-form storytelling",
      "description": "Documentary-style edits that build a story through archival imagery, footage selection and visual sequencing.",
      "projects": [
        {
          "key": "adx-florence",
          "host": "drive",
          "videoId": "1tQQWbQqG6tC3V0SxvBqseiUAi6o2LsqQ",
          "title": "Inside ADX Florence",
          "sourceTitle": "14 Organized Crime Figures Inside ADX Florence Prison.mp4",
          "description": "Archival material and news footage sequenced into a long-form organized-crime documentary.",
          "tags": [
            "Faceless YouTube",
            "Documentary editing"
          ],
          "aspectRatio": "16:9",
          "duration": "26:48",
          "sourceUrl": "https://drive.google.com/file/d/1tQQWbQqG6tC3V0SxvBqseiUAi6o2LsqQ/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1tQQWbQqG6tC3V0SxvBqseiUAi6o2LsqQ&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Anonymous Drive preview HTTP 200, public thumbnail and browser playback; sharing unchanged",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "pilots-documentary",
          "host": "drive",
          "videoId": "1oaHoKrumDQySM-mS_XU-ZFJ41eYWxS2r",
          "title": "Pilots Behind Bars",
          "sourceTitle": "16 Pilots Convicted Of Crime and Sentenced To Prison In The U.S.mp4",
          "description": "A long-form documentary edit using portraits, archival imagery and visual sequences to introduce individual stories.",
          "tags": [
            "Faceless YouTube",
            "Documentary editing"
          ],
          "aspectRatio": "16:9",
          "duration": "28:02",
          "sourceUrl": "https://drive.google.com/file/d/1oaHoKrumDQySM-mS_XU-ZFJ41eYWxS2r/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1oaHoKrumDQySM-mS_XU-ZFJ41eYWxS2r&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Anonymous Drive preview HTTP 200, public thumbnail and browser playback; sharing unchanged",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "traitors-documentary",
          "host": "drive",
          "videoId": "1kCPTDoj_ezPZEM9LvtfPT3Fv5wg-v_nO",
          "title": "Traitors in the U.S.",
          "sourceTitle": "Traitors In The U.S.mp4",
          "description": "An archival-led documentary edit, combining historical imagery and footage in a long-form narrative.",
          "tags": [
            "Faceless YouTube",
            "Documentary editing"
          ],
          "aspectRatio": "16:9",
          "duration": "30:02",
          "sourceUrl": "https://drive.google.com/file/d/1kCPTDoj_ezPZEM9LvtfPT3Fv5wg-v_nO/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1kCPTDoj_ezPZEM9LvtfPT3Fv5wg-v_nO&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Anonymous Drive preview HTTP 200, public thumbnail and browser playback; sharing unchanged",
          "verifiedOn": "2026-10-23"
        }
      ]
    },
    {
      "id": "commercial-editing",
      "title": "Commercials & Video Editing",
      "eyebrow": "03 / Brand & product stories",
      "description": "A focused selection of brand and product edits, from everyday luxury to practical product demonstrations.",
      "projects": [
        {
          "key": "grams28",
          "host": "youtube",
          "videoId": "CSKa1maz_So",
          "title": "Everyday Luxury · GRAMS28",
          "sourceTitle": "Everyday Luxury - GRAMS28 Leather Bag UGC Edit",
          "description": "A UGC-style edit for the GRAMS28 leather bag, bringing the product into an everyday-luxury story.",
          "tags": [
            "UGC edit",
            "Product commercial"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=CSKa1maz_So",
          "thumbnail": "https://i.ytimg.com/vi/CSKa1maz_So/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "premium-cycling",
          "host": "youtube",
          "videoId": "ZDUau_Cf6GE",
          "title": "Premium Cycling Bike",
          "sourceTitle": "Cycling Bike Creative – Premium Ad Edit (Premiere Pro)",
          "description": "A Premiere Pro commercial edit focused on the cycling bike and its product story.",
          "tags": [
            "Premiere Pro",
            "Product commercial"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=ZDUau_Cf6GE",
          "thumbnail": "https://i.ytimg.com/vi/ZDUau_Cf6GE/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "self-defence-flashlight",
          "host": "youtube",
          "videoId": "b3MCIe5WKFc",
          "title": "Self Defence Flashlight",
          "sourceTitle": "SELF DEFENCE FLASHLIGHT CREATIVE",
          "description": "A product-led creative showcasing a self-defence flashlight in a compact social ad format.",
          "tags": [
            "Product demonstration",
            "Ad editing"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=b3MCIe5WKFc",
          "thumbnail": "https://i.ytimg.com/vi/b3MCIe5WKFc/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        }
      ]
    },
    {
      "id": "short-form",
      "title": "Short-Form Content",
      "eyebrow": "04 / Ideas worth watching",
      "description": "Speaker-led stories and podcast excerpts shaped for focused, vertical social viewing.",
      "projects": [
        {
          "key": "luke-belmar-podcast",
          "host": "youtube",
          "videoId": "tAe-vn-U6rc",
          "title": "Luke Belmar · Podcast Edit",
          "sourceTitle": "Luke Belmar Podcast Edit - Natt Jongsala Style Reference",
          "description": "A podcast excerpt shaped into a vertical short, with a Natt Jongsala-inspired editing approach.",
          "tags": [
            "Podcast edit",
            "Vertical short"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=tAe-vn-U6rc",
          "thumbnail": "https://i.ytimg.com/vi/tAe-vn-U6rc/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "moses-updates",
          "host": "youtube",
          "videoId": "0CqhsIWC9uY",
          "title": "How Do You Get Updates?",
          "sourceTitle": "How Do You Get Updates - Moses Uche #shorts #viral",
          "description": "A creator-led excerpt with Moses Uche, focused on a single question for short-form social viewing.",
          "tags": [
            "Creator content",
            "Vertical short"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=0CqhsIWC9uY",
          "thumbnail": "https://i.ytimg.com/vi/0CqhsIWC9uY/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "best-university",
          "host": "youtube",
          "videoId": "OrmnPTieEXE",
          "title": "The Best University Ever!",
          "sourceTitle": "The Best University Ever! #shorts #motivation",
          "description": "A motivational short built around a focused, speaker-led story.",
          "tags": [
            "Motivational edit",
            "Vertical short"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=OrmnPTieEXE",
          "thumbnail": "https://i.ytimg.com/vi/OrmnPTieEXE/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public YouTube oEmbed metadata; supplied channel or existing portfolio",
          "verifiedOn": "2026-10-23"
        }
      ]
    }
  ],
  "pendingCategories": [
    {
      "id": "motion-vfx",
      "title": "Motion Graphics & Visual Effects",
      "reason": "No set of three distinct, verified standalone motion/VFX projects established; omitted from public portfolio."
    }
  ]
};
  function validatePortfolio(config) {
    const issues = [];
    const keys = new Set();
    const media = new Set();
    const categories = config?.categories;
    if (!Array.isArray(categories) || !categories.length) return ['At least one category is required.'];
    if (categories[0].id !== 'ai-creatives') issues.push('AI Creatives must be the first category.');
    const categoryIds = new Set();
    for (const category of categories) {
      if (!category.id || categoryIds.has(category.id)) issues.push('Category IDs must be present and unique.');
      categoryIds.add(category.id);
      if (!category.title || !category.description) issues.push(`${category.id}: title and description are required.`);
      const projects = category.projects;
      if (!Array.isArray(projects) || projects.length < 3 || projects.length % 3 !== 0) {
        issues.push(`${category.id}: provide at least 3 projects in a multiple of 3.`);
        if (!Array.isArray(projects)) continue;
      }
      for (const project of projects) {
        if (!project.key || keys.has(project.key)) issues.push(`Duplicate or missing project key: ${project.key}`);
        keys.add(project.key);
        const mediaKey = `${project.host}:${project.videoId}`;
        if (media.has(mediaKey)) issues.push(`Duplicate source across categories: ${mediaKey}`);
        media.add(mediaKey);
        if (!project.verified || !project.public || !project.verification) issues.push(`${project.key}: verified public access and evidence are required.`);
        if (!project.title || !project.sourceTitle || !project.description || !project.thumbnail) issues.push(`${project.key}: title, source title, description and thumbnail are required.`);
        if (!['9:16', '16:9'].includes(project.aspectRatio)) issues.push(`${project.key}: unsupported aspect ratio.`);
        if (project.host === 'youtube') {
          if (!/^[\w-]{11}$/.test(project.videoId)) issues.push(`${project.key}: invalid YouTube ID.`);
          if (project.sourceUrl !== `https://www.youtube.com/watch?v=${project.videoId}`) issues.push(`${project.key}: source URL must match its YouTube ID.`);
        } else if (project.host === 'drive') {
          if (!/^[\w-]{20,}$/.test(project.videoId)) issues.push(`${project.key}: invalid Drive file ID.`);
          if (project.sourceUrl !== `https://drive.google.com/file/d/${project.videoId}/view`) issues.push(`${project.key}: source URL must match its Drive ID.`);
        } else issues.push(`${project.key}: unsupported host.`);
      }
    }
    return issues;
  }

  const model = {config, validatePortfolio};
  if (typeof module !== 'undefined' && module.exports) module.exports = model;
  else root.NoblePortfolio = model;
})(typeof window !== 'undefined' ? window : globalThis);
