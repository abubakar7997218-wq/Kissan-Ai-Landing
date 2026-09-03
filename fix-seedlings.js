const fs = require('fs');
const path = require('path');
const https = require('https');

const dest = path.join(__dirname, 'assets', 'highlights', 'seedlings.jpeg');

// Try multiple known Pexels photo IDs for seedlings/plants
const urls = [
  'https://images.pexels.com/photos/1593066/pexels-photo-1593066.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1620924/pexels-photo-1620924.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1001999/pexels-photo-1001999.jpeg?auto=compress&cs=tinysrgb&w=400',
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error(`Status ${res.statusCode}`)); return; }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (buf.length < 1000) { reject(new Error('Too small')); return; }
        fs.writeFileSync(dest, buf);
        resolve(buf.length);
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const url of urls) {
    try {
      const size = await download(url);
      console.log(`OK: ${Math.round(size/1024)}KB from ${url.split('/').pop()}`);
      return;
    } catch (e) {
      console.log(`FAIL: ${url.split('/').pop()} - ${e.message}`);
    }
  }
  console.log('All failed');
})();
