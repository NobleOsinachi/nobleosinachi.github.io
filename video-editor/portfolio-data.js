/* Verified portfolio content. Rebuild and validate after editing; see PORTFOLIO.md. */
(function(root){
  'use strict';
  const config = {
  "categories": [
    {
      "id": "ai-creatives",
      "title": "AI Creatives",
      "eyebrow": "01 / Creative experimentation",
      "description": "AI product films, UGC experiments and playful visual stories. Twelve different creative executions, from skincare to Sora.",
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
        },
        {
          "key": "yt-1XYdJcbdz0s",
          "host": "youtube",
          "videoId": "1XYdJcbdz0s",
          "title": "Aichun Beauty · Direct-Response Ad",
          "sourceTitle": "Don't Ignore That Pimple — Aichun Beauty Anti-Acne Cream (Direct Response Ad)",
          "description": "An AI-assisted direct-response skincare ad combining a presenter-led opening with clear product presentation.",
          "tags": [
            "AI video ad",
            "Direct response"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=1XYdJcbdz0s",
          "thumbnail": "https://i.ytimg.com/vi/1XYdJcbdz0s/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public own-channel video and oEmbed metadata; visible YouTube AI label; representative product/presenter imagery reviewed.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-llK9RS-c74E",
          "host": "youtube",
          "videoId": "llK9RS-c74E",
          "title": "AI Talking Head · DTC Edit",
          "sourceTitle": "Direct Response AI Talking Head DTC Edit | #Viral #Shorts",
          "description": "A direct-response edit exploring AI talking-head presentation.",
          "tags": [
            "AI presenter",
            "DTC edit"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=llK9RS-c74E",
          "thumbnail": "https://i.ytimg.com/vi/llK9RS-c74E/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; AI talking-head production explicitly identified in the published title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-KHbu7nwqh1E",
          "host": "youtube",
          "videoId": "KHbu7nwqh1E",
          "title": "Indoor Golf · AI + UGC",
          "sourceTitle": "UGC Stitched Ad for a Golf Set ⛳ | AI + Creative Autonomy #shorts #viralshorts",
          "description": "A stitched golf-set creative combining AI-assisted production with a social ad format.",
          "tags": [
            "AI-assisted",
            "UGC storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=KHbu7nwqh1E",
          "thumbnail": "https://i.ytimg.com/vi/KHbu7nwqh1E/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Published title explicitly identifies AI + creative autonomy; indoor golf footage sampled.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-QCa5n7iBhdA",
          "host": "youtube",
          "videoId": "QCa5n7iBhdA",
          "title": "ALIVO Tea · UGC Ad 24",
          "sourceTitle": "ALIVO TEA UGC AD 24",
          "description": "An AI UGC tea creative pairing a product-in-hand presenter with bold on-screen captions.",
          "tags": [
            "AI UGC",
            "Product advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=QCa5n7iBhdA",
          "thumbnail": "https://i.ytimg.com/vi/QCa5n7iBhdA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public own-channel video and oEmbed metadata; visible YouTube AI label; representative product/presenter imagery reviewed.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-I46zXVeOTgs",
          "host": "youtube",
          "videoId": "I46zXVeOTgs",
          "title": "Skincare Advertising With AI",
          "sourceTitle": "Skincare Advertising With AI — Aichun Beauty Anti-Acne Cream #skincare #skincareroutine #sunscreen",
          "description": "An AI-assisted skincare creative for Aichun Beauty anti-acne cream.",
          "tags": [
            "AI skincare",
            "Product creative"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=I46zXVeOTgs",
          "thumbnail": "https://i.ytimg.com/vi/I46zXVeOTgs/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Published source title explicitly identifies AI advertising.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-kdsQ9Vwbo5c",
          "host": "youtube",
          "videoId": "kdsQ9Vwbo5c",
          "title": "ALIVO 05 · Before / After",
          "sourceTitle": "ALIVO 05",
          "description": "A caption-led ALIVO creative with a split-screen visual story.",
          "tags": [
            "AI creative",
            "Campaign film"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=kdsQ9Vwbo5c",
          "thumbnail": "https://i.ytimg.com/vi/kdsQ9Vwbo5c/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Visible YouTube AI label; distinct split-screen older-man composition reviewed.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-UUY86t2HiKU",
          "host": "youtube",
          "videoId": "UUY86t2HiKU",
          "title": "ALIVO 09 · Consultation",
          "sourceTitle": "ALIVO 09 ADVERT",
          "description": "An ALIVO campaign film built around a consultation scene and on-screen captions.",
          "tags": [
            "Campaign film",
            "Visual storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=UUY86t2HiKU",
          "thumbnail": "https://i.ytimg.com/vi/UUY86t2HiKU/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Distinct consultation scene visually reviewed; AI-assisted classification inferred from generated-looking imagery within the established ALIVO campaign, not confirmed by a platform AI badge.",
          "classificationConfidence": "medium",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-_upN3oKOuFg",
          "host": "youtube",
          "videoId": "_upN3oKOuFg",
          "title": "ALIVO 01 · Tea Ritual",
          "sourceTitle": "ALIVO AD 01",
          "description": "An ALIVO campaign creative built around a tea-drinking scene.",
          "tags": [
            "Campaign film",
            "Lifestyle creative"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=_upN3oKOuFg",
          "thumbnail": "https://i.ytimg.com/vi/_upN3oKOuFg/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Distinct woman-with-tea composition visually reviewed; AI-assisted classification inferred from generated-looking imagery in the established ALIVO campaign, not confirmed by a platform AI badge.",
          "classificationConfidence": "medium",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-v8s2t7qtjYE",
          "host": "youtube",
          "videoId": "v8s2t7qtjYE",
          "title": "ALIVO 04 · Four-Panel Story",
          "sourceTitle": "ALIVO 04 ADVERT2",
          "description": "A four-panel ALIVO creative combining anatomical graphics with captions.",
          "tags": [
            "Campaign film",
            "Visual composition"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=v8s2t7qtjYE",
          "thumbnail": "https://i.ytimg.com/vi/v8s2t7qtjYE/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Distinct four-panel anatomical composition visually reviewed; AI-assisted classification inferred from imagery in the established ALIVO campaign, not confirmed by a platform AI badge.",
          "classificationConfidence": "medium",
          "verifiedOn": "2026-10-23"
        }
      ]
    },
    {
      "id": "faceless-youtube",
      "displayTarget": 9,
      "title": "Faceless YouTube Videos",
      "eyebrow": "02 / Long-form storytelling",
      "description": "Long-form documentary edits. Nine films to watch now.",
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
        },
        {
          "key": "drive-1wFBCoc42MAm3tQ2G7poBrOrEXnKyizWr",
          "host": "drive",
          "videoId": "1wFBCoc42MAm3tQ2G7poBrOrEXnKyizWr",
          "title": "Big Pharma CEOs",
          "sourceTitle": "15 Big Pharma CEOs Who Were Convicted Of Crimes NO SFX.mp4",
          "description": "A faceless documentary about pharmaceutical executives convicted of crimes.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1wFBCoc42MAm3tQ2G7poBrOrEXnKyizWr/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1wFBCoc42MAm3tQ2G7poBrOrEXnKyizWr&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "drive-1zftBhVgg-AMhFzeuABlEFeC_Aqjz0HYk",
          "host": "drive",
          "videoId": "1zftBhVgg-AMhFzeuABlEFeC_Aqjz0HYk",
          "title": "Teenage Siblings",
          "sourceTitle": "15 Teenage Siblings Convicted Together.mp4",
          "description": "A long-form documentary about teenage siblings convicted together.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1zftBhVgg-AMhFzeuABlEFeC_Aqjz0HYk/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1zftBhVgg-AMhFzeuABlEFeC_Aqjz0HYk&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "drive-1BgEVksozaWs7As9JImRxHATgcrYeQywS",
          "host": "drive",
          "videoId": "1BgEVksozaWs7As9JImRxHATgcrYeQywS",
          "title": "Gang Leaders in the U.S.",
          "sourceTitle": "18 Gang Leaders In The U.S. Who Were Convicted Of Crimes And Sentenced To Prison.mp4",
          "description": "A crime documentary about gang leaders and their convictions in the United States.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1BgEVksozaWs7As9JImRxHATgcrYeQywS/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1BgEVksozaWs7As9JImRxHATgcrYeQywS&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "drive-1ArsvovSDDGfwWDJOAWx7HtsDJTKdsJOg",
          "host": "drive",
          "videoId": "1ArsvovSDDGfwWDJOAWx7HtsDJTKdsJOg",
          "title": "Texas Men Behind Bars",
          "sourceTitle": "21 Wealthy High Networth Texas Men Behind Bars And Their Crimes..mp4",
          "description": "A long-form documentary about wealthy Texas men behind bars and their crimes.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1ArsvovSDDGfwWDJOAWx7HtsDJTKdsJOg/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1ArsvovSDDGfwWDJOAWx7HtsDJTKdsJOg&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "drive-1KW56afbBBXzjwTT63uFuGppo96pz3Sgb",
          "host": "drive",
          "videoId": "1KW56afbBBXzjwTT63uFuGppo96pz3Sgb",
          "title": "Police Killings · Documentary",
          "sourceTitle": "39 Racial Police Killings That Sparked National Outrage in the U.S..mp4",
          "description": "A documentary about police killings and the public outrage surrounding them.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1KW56afbBBXzjwTT63uFuGppo96pz3Sgb/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1KW56afbBBXzjwTT63uFuGppo96pz3Sgb&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "drive-1tQ3jd9Nr-0vinrkIomxyAT2Oc5-0MK7h",
          "host": "drive",
          "videoId": "1tQ3jd9Nr-0vinrkIomxyAT2Oc5-0MK7h",
          "title": "Athletes Who Committed Murder",
          "sourceTitle": "Atheletes Who Commited Murder.mp4",
          "description": "A documentary about athletes involved in murder cases.",
          "tags": [
            "Faceless YouTube",
            "Documentary edit"
          ],
          "aspectRatio": "16:9",
          "sourceUrl": "https://drive.google.com/file/d/1tQ3jd9Nr-0vinrkIomxyAT2Oc5-0MK7h/view",
          "thumbnail": "https://drive.google.com/thumbnail?id=1tQ3jd9Nr-0vinrkIomxyAT2Oc5-0MK7h&sz=w1000",
          "verified": true,
          "public": true,
          "verification": "Public supplied Drive folder listing; anonymous preview includes exact filename; public image thumbnail. Representative footage not yet reviewed for this additional selection.",
          "verifiedOn": "2026-10-23"
        }
      ],
      "placeholders": []
    },
    {
      "id": "commercial-editing",
      "title": "Commercials & Video Editing",
      "eyebrow": "03 / Brand & product stories",
      "description": "Product demonstrations, UGC edits and brand stories — twelve different ways to make the message land.",
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
        },
        {
          "key": "yt-bc-6ckyntEc",
          "host": "youtube",
          "videoId": "bc-6ckyntEc",
          "title": "Indoor Portable Sauna",
          "sourceTitle": "Indoor Portable Sauna UGC Edit #shorts @viralshorts",
          "description": "A portable-sauna UGC edit created for vertical social viewing.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=bc-6ckyntEc",
          "thumbnail": "https://i.ytimg.com/vi/bc-6ckyntEc/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-O614OV0W0Bo",
          "host": "youtube",
          "videoId": "O614OV0W0Bo",
          "title": "XG88 Pro · Smart Glasses",
          "sourceTitle": "Smart Bluetooth Wireless Headset Glasses Mashup Creative XG88 Pro Creative #shorts #viral",
          "description": "A mashup creative introducing Bluetooth headset glasses.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=O614OV0W0Bo",
          "thumbnail": "https://i.ytimg.com/vi/O614OV0W0Bo/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-paq0Jgf5JxA",
          "host": "youtube",
          "videoId": "paq0Jgf5JxA",
          "title": "Treadmill · Product Creative",
          "sourceTitle": "TREADMILL 01",
          "description": "A vertical product creative featuring a treadmill.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=paq0Jgf5JxA",
          "thumbnail": "https://i.ytimg.com/vi/paq0Jgf5JxA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-iruMRLawtXY",
          "host": "youtube",
          "videoId": "iruMRLawtXY",
          "title": "Ridax · Sleep Better",
          "sourceTitle": "Ridax 1 – Sleep Better 😴 | Winning UGC Ad Breakdown 👇 #shorts #viral",
          "description": "A Ridax UGC ad built around its published sleep-focused angle.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=iruMRLawtXY",
          "thumbnail": "https://i.ytimg.com/vi/iruMRLawtXY/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-gE3aL7qr0yo",
          "host": "youtube",
          "videoId": "gE3aL7qr0yo",
          "title": "Indoor Golf · Workplace Angle",
          "sourceTitle": "Workplace Angle – Golf Putting Set",
          "description": "A golf putting-set ad developed around a workplace scenario.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=gE3aL7qr0yo",
          "thumbnail": "https://i.ytimg.com/vi/gE3aL7qr0yo/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-aDr5Sly3wK8",
          "host": "youtube",
          "videoId": "aDr5Sly3wK8",
          "title": "Skincare · Friend Recommendation",
          "sourceTitle": "Anti-Acne Cream – Friend Recommendation Angle",
          "description": "An anti-acne cream creative using a recommendation-led angle.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=aDr5Sly3wK8",
          "thumbnail": "https://i.ytimg.com/vi/aDr5Sly3wK8/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-jeaquXO58cA",
          "host": "youtube",
          "videoId": "jeaquXO58cA",
          "title": "Ecom Brand · Before / After",
          "sourceTitle": "Ecom Brand Before & After Edit – High-Impact Visual Transformation",
          "description": "A before-and-after presentation of an ecommerce brand edit.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=jeaquXO58cA",
          "thumbnail": "https://i.ytimg.com/vi/jeaquXO58cA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-uFwjli_xduA",
          "host": "youtube",
          "videoId": "uFwjli_xduA",
          "title": "Smart Wear · Fashion Creative",
          "sourceTitle": "Smart Wear Fashion Pioneer Creative - Bluetooth Sunglasses #shorts #viralshorts  #viral",
          "description": "A Bluetooth sunglasses creative combining fashion and product presentation.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=uFwjli_xduA",
          "thumbnail": "https://i.ytimg.com/vi/uFwjli_xduA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-MSfEY89m_1U",
          "host": "youtube",
          "videoId": "MSfEY89m_1U",
          "title": "Ridax · Neighbours Angle",
          "sourceTitle": "Ridax   Neighbors Are the Source",
          "description": "A Ridax creative built around the published neighbours scenario.",
          "tags": [
            "Product creative",
            "Social advertising"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=MSfEY89m_1U",
          "thumbnail": "https://i.ytimg.com/vi/MSfEY89m_1U/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Classification and description limited to the published title; no performance results asserted.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        }
      ]
    },
    {
      "id": "short-form",
      "title": "Short-Form Content",
      "eyebrow": "04 / Ideas worth watching",
      "description": "Podcast cuts, educational ideas and creator stories shaped for the vertical feed.",
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
        },
        {
          "key": "yt-fexU1r4gRCI",
          "host": "youtube",
          "videoId": "fexU1r4gRCI",
          "title": "A+ Players",
          "sourceTitle": "A+ PLAYERS - Viral Short Form Edit Style #viral #shorts #capcut",
          "description": "A short-form edit built around the A+ Players topic.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=fexU1r4gRCI",
          "thumbnail": "https://i.ytimg.com/vi/fexU1r4gRCI/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-A2HprH4SpjM",
          "host": "youtube",
          "videoId": "A2HprH4SpjM",
          "title": "Alex Hormozi · Edit Style",
          "sourceTitle": "🎬 ALEX HORMOZI STYLE EDIT 🔥",
          "description": "A vertical edit presented as an Alex Hormozi-style editing example.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=A2HprH4SpjM",
          "thumbnail": "https://i.ytimg.com/vi/A2HprH4SpjM/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-qI_suOa9ze8",
          "host": "youtube",
          "videoId": "qI_suOa9ze8",
          "title": "Long-Form to Short-Form",
          "sourceTitle": "UPDATE Long Form Video Repurposing to High Impact Clip",
          "description": "A clip repurposed from longer video content for social viewing.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=qI_suOa9ze8",
          "thumbnail": "https://i.ytimg.com/vi/qI_suOa9ze8/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-EZcEYNTAcpQ",
          "host": "youtube",
          "videoId": "EZcEYNTAcpQ",
          "title": "How to Find Ideas",
          "sourceTitle": "🎙 “How to Find Ideas” – Precious Oriji & Precious Greg @CreativeSpaceStartups",
          "description": "A short featuring Precious Oriji and Precious Greg from Creative Space Startups.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=EZcEYNTAcpQ",
          "thumbnail": "https://i.ytimg.com/vi/EZcEYNTAcpQ/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-lQWYBTtDucs",
          "host": "youtube",
          "videoId": "lQWYBTtDucs",
          "title": "E-Commerce Billionaires",
          "sourceTitle": "e-Commerce Billionaires",
          "description": "A focused vertical edit on the ecommerce billionaires topic.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=lQWYBTtDucs",
          "thumbnail": "https://i.ytimg.com/vi/lQWYBTtDucs/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-Ef4RBNv58bA",
          "host": "youtube",
          "videoId": "Ef4RBNv58bA",
          "title": "The Pygmalion Effect",
          "sourceTitle": "The Pygmalion Effect #shorts #viralshorts",
          "description": "A short-form story introducing the Pygmalion Effect.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=Ef4RBNv58bA",
          "thumbnail": "https://i.ytimg.com/vi/Ef4RBNv58bA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-waYNp0U2W3Y",
          "host": "youtube",
          "videoId": "waYNp0U2W3Y",
          "title": "The Attractive Character",
          "sourceTitle": "The ATTRACTIVE CHARACTER strategy #shorts #viralshorts #viral",
          "description": "A short introducing the attractive-character strategy.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=waYNp0U2W3Y",
          "thumbnail": "https://i.ytimg.com/vi/waYNp0U2W3Y/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-K2UE-PmKrVA",
          "host": "youtube",
          "videoId": "K2UE-PmKrVA",
          "title": "Gratitude",
          "sourceTitle": "Gratitude #motivation #viralshorts",
          "description": "A motivational short focused on gratitude.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=K2UE-PmKrVA",
          "thumbnail": "https://i.ytimg.com/vi/K2UE-PmKrVA/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
          "verifiedOn": "2026-10-23"
        },
        {
          "key": "yt-3KyFYLLr9V4",
          "host": "youtube",
          "videoId": "3KyFYLLr9V4",
          "title": "Embrace New Technology",
          "sourceTitle": "Embrace New Technology #shorts #capcut #motivation",
          "description": "A motivational social edit about embracing new technology.",
          "tags": [
            "Short-form edit",
            "Social storytelling"
          ],
          "aspectRatio": "9:16",
          "sourceUrl": "https://www.youtube.com/watch?v=3KyFYLLr9V4",
          "thumbnail": "https://i.ytimg.com/vi/3KyFYLLr9V4/maxresdefault.jpg",
          "verified": true,
          "public": true,
          "verification": "Public channel listing and YouTube oEmbed; Topic and editing format supported by published source title.",
          "classificationConfidence": "high",
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
  ],
  "displayTarget": 12,
  "placeholderAuthorization": "User explicitly requested three placeholder links for the remaining faceless slots on 2026-10-23. No fake media URLs are used."
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
      const placeholders = category.placeholders || [];
      if (config.displayTarget && projects.length + placeholders.length !== (category.displayTarget || config.displayTarget)) issues.push(`${category.id}: provide exactly ${category.displayTarget || config.displayTarget} display slots.`);
      if (placeholders.length && (category.id !== 'faceless-youtube' || placeholders.length !== 3 || !config.placeholderAuthorization)) issues.push('Only the three explicitly authorized faceless placeholders are allowed.');
      for (const placeholder of placeholders) {
        if (placeholder.status !== 'coming-soon' || placeholder.sourceUrl || placeholder.videoId || !placeholder.title || !placeholder.description || keys.has(placeholder.key)) issues.push('Invalid or misleading placeholder.');
        keys.add(placeholder.key);
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
