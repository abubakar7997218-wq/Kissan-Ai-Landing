# Kisan AI — Landing Page

**Kisan AI** — an AI-powered agricultural assistant app for farmers.

This repository contains the static landing page for the Kisan AI Android app, built for the Alibaba Hackathon.

## What Is This?

A single-page, responsive static website that introduces the Kisan AI app, showcases its core features with real app screenshots, and provides a direct APK download link. The Android app itself is a separate project; this site serves as its public-facing landing page.

## Tech Stack

- **Plain HTML / CSS** — no framework, no build step, no dependencies
- **Google Fonts** — Poppins (headings), Inter (body), Noto Nastaliq Urdu (Urdu text)
- **Inline SVG icons** — Feather/Lucide-style, no icon library
- **CSS-only carousel** — horizontal scroll with `scroll-snap`, no JavaScript slider

## Folder Structure

```
.
├── index.html                  # Single-page landing site (all CSS inline)
├── assets/
│   ├── logo.png                # App logo (full)
│   ├── logo-mark.png           # Logo mark (icon only)
│   ├── app-icon.png            # Android app icon
│   ├── hero-video.mp4          # Autoplay hero background video
│   ├── kisan-ai.apk            # Android app installer (downloadable)
│   ├── screens/                # Real app screenshots used in carousel
│   │   ├── dashboard-home.jpeg
│   │   ├── dashboard-home-alt.jpeg
│   │   ├── ask-kisan-ai.jpeg
│   │   ├── weather-details.jpeg
│   │   ├── irrigation-guide.jpeg
│   │   ├── disease-analyzing.jpeg
│   │   ├── disease-review-photo.jpeg
│   │   ├── settings-language.jpeg
│   │   ├── onboarding.jpeg
│   │   └── splash.jpeg
│   └── highlights/             # Stock photos for the Highlights section
│       ├── crop-disease.jpeg
│       ├── weather-field.jpeg
│       ├── crop-spraying.jpeg
│       ├── farmer-phone.jpeg
│       ├── seedlings.jpeg
│       └── irrigation.jpeg
└── README.md
```

## How to Run Locally

**Option 1 — Direct open:**
Open `index.html` in any browser. No server needed for basic preview.

**Option 2 — Static server (recommended for video autoplay):**
Some browsers block `<video autoplay>` on `file://` URLs. Use any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

## How to Deploy

This is a fully static site — deploy anywhere that serves HTML:

- **Vercel** — Connect the Git repo, framework preset "Other", deploy.
- **Netlify** — Drag-and-drop the folder, or connect the Git repo.
- **GitHub Pages** — Push to `gh-pages` branch or enable Pages on `main`.
- **Any static host** — Upload the folder contents as-is.

No build step, no environment variables, no server-side code.

## App Features

The landing page highlights these six real features from the Kisan AI app:

| Feature | Description |
|---|---|
| **Disease Detection** | Snap a photo of an affected leaf; AI identifies the disease with confidence scores |
| **Pest Detection** | Capture a photo to identify pest infestations early, before damage spreads |
| **Crop Recommendation** | AI-driven crop suggestions based on soil type, water availability, and season |
| **Irrigation Guide** | Personalised irrigation schedule based on plot details, crop type, and water supply |
| **Ask Kisan AI** | Multilingual chatbot answering farming questions in 6 languages |
| **Weather** | Live temperature, humidity, wind speed, and 3-day forecast on the home dashboard |

Additional features in the app: My Plots, My Plants, View History, and full multilingual support (English, Urdu, Punjabi, Sindhi, Pashto, Balochi).

## Team

- **Hafiz Muhammad Abubakar Rana**
- **Adnan Rana**
- **Ali Turab**

Built at the **Alibaba Hackathon**.

## License

MIT
