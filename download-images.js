const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const highlightsDir = path.join(__dirname, 'assets', 'highlights');
if (!fs.existsSync(highlightsDir)) fs.mkdirSync(highlightsDir, { recursive: true });

// Reliable Pexels image URLs (known working IDs)
const images = [
  { url: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'crop-disease.jpeg' },
  { url: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'weather-field.jpeg' },
  { url: 'https://images.pexels.com/photos/209801/pexels-photo-209801.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'crop-spraying.jpeg' },
  { url: 'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'farmer-phone.jpeg' },
  { url: 'https://images.pexels.com/photos/1593066/pexels-photo-1593066.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'seedlings.jpeg' },
  { url: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400', name: 'irrigation.jpeg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
      file.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  for (const img of images) {
    const dest = path.join(highlightsDir, img.name);
    try {
      await download(img.url, dest);
      const stats = fs.statSync(dest);
      console.log(`OK: ${img.name} (${Math.round(stats.size/1024)}KB)`);
    } catch (e) {
      console.log(`FAIL: ${img.name} - ${e.message}`);
    }
  }
  console.log('Done!');
})();
