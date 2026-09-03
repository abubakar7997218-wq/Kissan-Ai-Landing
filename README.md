# Kisan AI

**Your AI Agricultural Assistant**

آپ کا زرعی کا ساتھی، بر قدم ہمراہ

## About

Kisan AI is an AI-powered agricultural assistant mobile app built for farmers. It brings crop disease detection, pest analysis, irrigation guidance, live weather forecasts, and multilingual AI chat — all into one free, easy-to-use Android app. The app is designed for smallholder farmers in Pakistan and South Asia, with support for six regional languages.

This repository contains the **official landing page** for Kisan AI — a static, single-page website that introduces the app, showcases its features with real screenshots, and provides a direct APK download.

## Features

| Feature | Description |
|---|---|
| **Disease Detection** | Snap a photo of an affected leaf; AI identifies the disease with confidence scores |
| **Pest Detection** | Capture a photo to identify pest infestations early, before damage spreads |
| **Crop Recommendation** | AI-driven crop suggestions based on soil type, water availability, and season |
| **Irrigation Guide** | Personalised irrigation schedule based on plot details, crop type, and water supply |
| **Ask Kisan AI** | Multilingual chatbot answering farming questions in 6 languages |
| **Live Weather & Forecast** | Real-time temperature, humidity, wind speed, and 3-day forecast on the home dashboard |
| **My Plots** | Track and manage multiple farm plots in one place |
| **My Plants** | Monitor individual plants and their growth stages |
| **Multilingual Support** | Full app available in English, Urdu, Punjabi, Sindhi, Pashto, and Balochi |

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, flexbox/grid layouts, responsive media queries
- **Vanilla JavaScript** — header scroll effect, mobile nav toggle, smooth anchor scrolling
- **Google Fonts** — Poppins (headings), Inter (body), Noto Nastaliq Urdu (Urdu text)
- **Inline SVG icons** — Feather/Lucide-style, no external icon library

No frameworks, no build tools, no dependencies.

## Project Structure

```
.
├── index.html                  # Single-page landing site (all CSS + JS inline)
├── README.md
└── assets/
    ├── logo.png                # Full app logo
    ├── logo-mark.png           # Logo mark (icon only)
    ├── app-icon.png            # Android app icon (also used as favicon)
    ├── hero-video.mp4          # Autoplay hero background video
    ├── kisan-ai.apk            # Android app installer (downloadable)
    ├── highlights/             # Stock photos for the Highlights section
    │   ├── crop-disease.jpeg
    │   ├── weather-field.jpeg
    │   ├── pest-macro.jpeg
    │   ├── farmer-phone.jpeg
    │   ├── seedlings.jpeg
    │   └── irrigation.jpeg
    └── screens/                # Real app screenshots used in the carousel
        ├── dashboard-home.jpeg
        ├── dashboard-home-alt.jpeg
        ├── ask-kisan-ai.jpeg
        ├── weather-details.jpeg
        ├── irrigation-guide.jpeg
        ├── disease-review-photo.jpeg
        └── settings-language.jpeg
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/abubakar7997218-wq/kisan-ai-landing.git
cd kisan-ai-landing
```

### Run locally

**Option 1 — Open directly:**
Open `index.html` in any modern browser. No server required for basic preview.

**Option 2 — Local static server (recommended for video autoplay):**
Some browsers block `<video autoplay>` on `file://` URLs. Use any static server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deployment

This is a fully static site with no build step. Deploy to any static hosting platform:

- **Vercel** — Connect the Git repository, set framework preset to "Other", deploy.
- **Netlify** — Drag-and-drop the project folder, or connect the Git repository.
- **GitHub Pages** — Push to the `gh-pages` branch or enable Pages on the `main` branch.

No environment variables, no server-side code, no configuration needed.

## Download the App

The Android APK is available directly from the landing page or via this path:

```
assets/kisan-ai.apk
```

Three download buttons on the page (header, hero, and final CTA section) all link to this file with the `download` attribute for direct installation.

## Team

| Name | Role |
|---|---|
| **Hafiz Muhammad Abubakar** | Founder & Developer |
| **Rana Adnan** | Founder & Developer |
| **Rana Ali Turab** | Founder & Developer |

Built at the **Alibaba Hackathon**.

## Contact

- **Email:** [abubakar7997218@gmail.com](mailto:abubakar7997218@gmail.com)
- **GitHub:** [github.com/abubakar7997218-wq](https://github.com/abubakar7997218-wq)

## License

MIT
