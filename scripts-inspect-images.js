const fs = require('fs');

const path = 'C:\\Users\\Lenovo\\.gemini\\antigravity-cli\\brain\\ed81116c-80aa-4278-afbd-8e5c89f003af\\.system_generated\\steps\\13\\content.md';
if (!fs.existsSync(path)) {
  console.log('File not found:', path);
  process.exit(1);
}

const text = fs.readFileSync(path, 'utf8');

// Match all image URLs
const regex = /(https?:\/\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg|gif))/gi;
const matches = new Set();
let m;
while ((m = regex.exec(text)) !== null) {
  matches.add(m[1]);
}

console.log('=== FOUND IMAGES ===');
for (const url of Array.from(matches).sort()) {
  console.log(url);
}

// Also match img tags
const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
const imgTags = [];
while ((m = imgRegex.exec(text)) !== null) {
  imgTags.push(m[0]);
}

console.log('\n=== TOTAL IMG TAGS:', imgTags.length);
imgTags.forEach((tag, i) => {
  console.log(`[${i}]`, tag.substring(0, 160));
});
