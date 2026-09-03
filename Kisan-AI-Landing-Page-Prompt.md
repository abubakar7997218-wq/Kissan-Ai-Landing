# Kisan AI — Landing Page Build Prompt (copy this whole thing into your IDE / AI tool)

Build a single, polished, production-quality **static landing page** (HTML + CSS + minimal JS, fully responsive — mobile, tablet, desktop) for a mobile app called **"Kisan AI"** (an AI agricultural assistant app for farmers). Follow every instruction below exactly.

## 0. Assets provided (a folder named `New folder` will be supplied — copy it into an `/assets` directory and rename files as shown below before use)

| Original file name | Rename to | What it shows / where to use it |
|---|---|---|
| `Kisan-AI-logo-transparent.png` | `assets/logo.png` | Full logo (icon + wordmark + Urdu tagline) — use in navbar and footer |
| `ChatGPT Image Aug 23, 2026, 11_20_46 PM.png` | `assets/app-icon.png` | Square app icon (rounded, dark green bg) — use as favicon / "available on" badge |
| `ChatGPT Image Aug 23, 2026, 11_24_40 PM.png` | `assets/logo-mark.png` | Logo symbol only, transparent background — use as a decorative watermark/motif |
| `WhatsApp Video 2026-09-03 at 11.57.49 PM.mp4` | `assets/hero-video.mp4` | **Hero section video** — must autoplay (muted, loop, playsinline) directly under the header |
| `app-release.apk` | `assets/kisan-ai.apk` | The actual Android app file — the "Download App" button must link/download this file directly |
| `4.jpeg` | `assets/screens/dashboard-home.jpeg` | Home dashboard: greeting + live weather card + Quick Actions grid |
| `WhatsApp Image 2026-09-04 at 12.08.59 AM.jpeg` | `assets/screens/dashboard-home-alt.jpeg` | Alternate dashboard view (Quick Actions grid only) |
| `8.jpeg` | `assets/screens/ask-kisan-ai.jpeg` | "Ask Kisan AI" chatbot screen (multilingual chat, replies in Urdu) |
| `WhatsApp Image 2026-09-04 at 12.08.53 AM.jpeg` | `assets/screens/settings-language.jpeg` | Settings screen showing language selector (English, Urdu, Punjabi, Sindhi, Pashto, Balochi) + push notifications toggle |
| `WhatsApp Image 2026-09-04 at 12.08.54 AM.jpeg` | `assets/screens/irrigation-guide.jpeg` | Irrigation Guide form (plot, crop, water availability) |
| `WhatsApp Image 2026-09-04 at 12.08.56 AM.jpeg` | `assets/screens/disease-analyzing.jpeg` | "Analyzing your crop..." AI loading screen |
| `WhatsApp Image 2026-09-04 at 12.08.57 AM.jpeg` | `assets/screens/disease-review-photo.jpeg` | Disease Detection — review captured leaf photo before analysis |
| `WhatsApp Image 2026-09-04 at 12.08.58 AM.jpeg` | `assets/screens/weather-details.jpeg` | Full weather screen (temperature, humidity, UV index, 3-day forecast) |
| `WhatsApp Image 2026-09-04 at 12.09.00 AM.jpeg` | `assets/screens/onboarding.jpeg` | Onboarding / "Get Started" splash screen |
| `WhatsApp Image 2026-09-04 at 12.09.02 AM.jpeg` | `assets/screens/splash.jpeg` | App splash/loading screen |
| `index.html` | (reference only) | An older draft landing page exists in the folder — do NOT reuse its content or styling; rebuild from scratch using this spec. |

**Rule: every screenshot/photo used in the FEATURES section and the APP-PREVIEW section must come from this asset list — do not generate, invent, or substitute any of these.** Only for generic **hero-section background/decorative imagery** (e.g. a wide shot of green farmland, wheat fields, a farmer in a field at sunrise) that is not already covered by the video, you may source a free high-quality stock photo (Unsplash/Pexels style) since none is provided for that specific spot.

## 1. Brand colors (extracted directly from the app's actual screens — use these exact values, do not invent a new palette)

```css
:root {
  --color-bg-cream: #F4F0E4;       /* app background, main page background */
  --color-bg-cream-soft: #EFEBDD;  /* section alt background */
  --color-green-primary: #1F7A3D;  /* primary buttons, links, headings accent */
  --color-green-dark: #15381F;     /* dark green used in logo/icon, footer background */
  --color-green-mid: #2D7C3B;      /* gradient start on weather-style cards */
  --color-blue-accent: #1968AA;    /* gradient end on weather-style cards (use sparingly, e.g. one card/section) */
  --color-gold-accent: #E6B43B;    /* logo sun/dot accent — use for small highlights, badges, star ratings */
  --color-text-dark: #1A1A1A;      /* headings/body text */
  --color-text-muted: #6B6B6B;     /* secondary text */
  --color-white: #FFFFFF;
}
```

Buttons and card gradients in the real app go from `--color-green-mid` to `--color-blue-accent` (see the weather card) — you may use this gradient once, tastefully (e.g. hero CTA button or a stats banner), but the dominant palette across the page must stay cream background + dark green + gold accent, matching the onboarding screen.

## 2. Typography (use real, loaded webfonts — no system-font fallback look)

- Import from Google Fonts:
  - **Headings:** `Poppins` (weights 600, 700, 800)
  - **Body text:** `Inter` (weights 400, 500, 600)
- Urdu tagline text ("آپ کا زرعی ساتھی، بر قدم ہمراہ") should use a proper Nastaliq/Urdu-friendly font like `Noto Nastaliq Urdu` (Google Fonts) wherever it appears.
- No emoji characters anywhere in the page — not in headings, not as bullet icons, not in buttons. Every icon must be either: (a) a real screenshot/photo from the assets list, (b) a clean line-icon SVG (e.g. Lucide/Feather-style icons) drawn in the brand green, or (c) the actual logo mark. **Zero emoji characters (🌱🐛💧📱 etc.) anywhere in the code or content.**

## 3. Page structure (build in this exact order)

### A. Header (sticky/fixed navbar)
- Left: `assets/logo.png`
- Center or right: nav links — Features, How it Works, App Preview, Team, Download
- Right: a green pill "Download App" button (links to `assets/kisan-ai.apk`)
- Background: cream (`--color-bg-cream`), subtle bottom border/shadow on scroll

### B. Hero section (directly under header)
- **Autoplaying looping muted background/embedded video using `assets/hero-video.mp4`** (`<video autoplay muted loop playsinline>`) — this is a hard requirement, the hero must show the actual app demo video, not a static image.
- Overlay text on/beside the video: big heading ("Kisan AI — Your AI Agricultural Assistant" / Urdu tagline underneath in Noto Nastaliq Urdu), a short supporting sentence, and two buttons: **"Download App"** (primary, green, downloads the APK) and **"See Features"** (secondary, outlined, scrolls to features).
- You may add a soft farmland photo (stock, from Google/Unsplash) as a background layer behind/around the video frame if it helps composition, but the video itself must be present and playing.

### C. Features section ("Everything a farmer needs, in one app")
Build one card per feature below. **Each card must use the exact screenshot listed** (as a phone-mockup-framed image, not cropped randomly) — no emoji icons, no generic stock icons for these specific features:

1. **Disease Detection** — image: `assets/screens/disease-review-photo.jpeg` and/or `assets/screens/disease-analyzing.jpeg`. Copy: AI scans crop leaf photos and detects diseases instantly.
2. **Pest Detection** — reuse the pest icon area from `assets/screens/dashboard-home.jpeg` crop, or describe using the same visual family (green field close-up); copy: Identify pest infestations early with AI photo analysis.
3. **Crop Recommendation** — copy: Get AI-driven crop suggestions based on your soil, water, and season.
4. **Irrigation Guide** — image: `assets/screens/irrigation-guide.jpeg`. Copy: Personalized irrigation schedules based on plot, crop, and water availability.
5. **Ask Kisan AI (Chatbot)** — image: `assets/screens/ask-kisan-ai.jpeg`. Copy: A multilingual AI chatbot that answers farming questions instantly, in your own language.
6. **Live Weather & Forecast** — image: `assets/screens/weather-details.jpeg`. Copy: Real-time temperature, humidity, UV index, wind, and a 3-day forecast for your exact location.
7. **My Plots & My Plants** — copy: Track every plot and plant you own, with full history of past scans and recommendations.
8. **Multilingual Support** — image: `assets/screens/settings-language.jpeg`. Copy: Fully available in English, Urdu, Punjabi, Sindhi, Pashto, and Balochi, so every farmer can use it comfortably.

Lay these out as a responsive grid (2 columns tablet, 3–4 columns desktop, 1 column mobile), cream cards with soft shadow and rounded corners, matching the rounded-card look of the app's own Quick Actions grid.

### D. "See it in action" / App Preview section
- Show `assets/screens/dashboard-home.jpeg` and `assets/screens/onboarding.jpeg` and `assets/screens/splash.jpeg` inside realistic phone-frame mockups, side by side (like an app-store style carousel or a 3-phone showcase).
- Short heading: "A dashboard built for the field" with 2–3 lines of supporting copy.

### E. How it Works (3–4 step section)
Simple numbered steps (Download → Create account → Scan/Ask → Get AI recommendations), styled with the brand green numbers, no emoji.

### F. Team / Credits section
Heading: **"Built at the Alibaba Hackathon"** (or "A project from the Alibaba Hackathon" — phrase it naturally). Below it, show the team members as clean name cards (initials avatar circle in brand green, no photos needed unless supplied):
- Hafiz Muhammad Abubakar Rana
- Adnan Rana
- Ali Turab

### G. Final CTA / Download section
Full-width dark green (`--color-green-dark`) band with the logo mark watermark (`assets/logo-mark.png`) faded in the background, heading "Get Kisan AI on your phone today", and a large "Download APK" button linking to `assets/kisan-ai.apk`.

### H. Footer
Dark green background, cream text. Include:
- Logo + one-line tagline
- Quick links (Features, How it Works, Team, Download)
- Contact/social placeholders (icons as simple SVG line icons, not emoji)
- Team credit line again: "Made by Hafiz Muhammad Abubakar Rana, Adnan Rana & Ali Turab — Alibaba Hackathon"
- Copyright line: "© 2026 Kisan AI. All rights reserved."

## 4. Hard constraints (do not skip these)
- **No emoji characters anywhere** in the final HTML/text/CSS content.
- **Every feature-section image must be one of the exact provided screenshots** (renamed per the table above) shown inside a phone-frame or rounded card — do not replace them with generic AI-generated icons.
- Only the hero section's *extra* decorative background imagery (not the video, which is mandatory) may be sourced externally from the web/stock libraries.
- Use real Google Fonts (`Poppins`, `Inter`, `Noto Nastaliq Urdu`) loaded via `<link>` or `@import` — not just `sans-serif` fallback.
- The "Download App"/"Download APK" buttons must point to the actual `assets/kisan-ai.apk` file (use the `download` attribute on the `<a>` tag).
- Fully responsive, clean spacing, consistent border-radius (rounded, matching the app's soft rounded-card style), subtle shadows, smooth scroll for in-page nav links.
- Keep it a static site: plain HTML/CSS/vanilla JS only (or React if the target tool defaults to it), no backend required.
