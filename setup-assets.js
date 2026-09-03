const fs = require('fs');
const path = require('path');

const base = __dirname;

// Create directories
fs.mkdirSync(path.join(base, 'assets'), { recursive: true });
fs.mkdirSync(path.join(base, 'assets', 'screens'), { recursive: true });

// File mappings: source -> destination
const copies = [
  ['logo.png', 'assets/logo.png'],
  ['app-icon.png', 'assets/app-icon.png'],
  ['logo-mark.png', 'assets/logo-mark.png'],
  ['hero-video.mp4', 'assets/hero-video.mp4'],
  ['kisan-ai.apk', 'assets/kisan-ai.apk'],
  ['dashboard-home.jpeg', 'assets/screens/dashboard-home.jpeg'],
  ['dashboard-home-alt.jpeg', 'assets/screens/dashboard-home-alt.jpeg'],
  ['ask-kisan-ai.jpeg', 'assets/screens/ask-kisan-ai.jpeg'],
  ['settings-language.jpeg', 'assets/screens/settings-language.jpeg'],
  ['irrigation-guide.jpeg', 'assets/screens/irrigation-guide.jpeg'],
  ['disease-analyzing.jpeg', 'assets/screens/disease-analyzing.jpeg'],
  ['disease-review-photo.jpeg', 'assets/screens/disease-review-photo.jpeg'],
  ['weather-details.jpeg', 'assets/screens/weather-details.jpeg'],
  ['onboarding.jpeg', 'assets/screens/onboarding.jpeg'],
  ['splash.jpeg', 'assets/screens/splash.jpeg'],
];

for (const [src, dest] of copies) {
  const srcPath = path.join(base, src);
  const destPath = path.join(base, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${src} -> ${dest}`);
  } else {
    console.log(`WARNING: Source file not found: ${src}`);
  }
}

console.log('\nDone!');
