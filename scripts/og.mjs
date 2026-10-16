// builds public/og-image.png, the 1200x630 preview shown when the site is shared.
// run with `node scripts/og.mjs` after changing the photo or the text below.
import sharp from "sharp";

const photo = await sharp("src/assets/portrait.jpg").resize(360, 360).png().toBuffer();
const circle = Buffer.from('<svg width="360" height="360"><circle cx="180" cy="180" r="180"/></svg>');
const avatar = await sharp(photo).composite([{ input: circle, blend: "dest-in" }]).png().toBuffer();

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="8" fill="#1f55d1"/>
  <circle cx="900" cy="315" r="186" fill="#e5e7eb"/>
  <g font-family="Inter, Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="90" y="250" font-size="76" font-weight="700" fill="#16191d" letter-spacing="-2">Naman Goyal</text>
    <text x="92" y="318" font-size="32" fill="#464d59">Electrical Engineering, IIT Delhi</text>
    <text x="92" y="366" font-size="32" fill="#464d59">Department Rank 1</text>
    <text x="92" y="440" font-size="26" fill="#1f55d1" font-weight="600">Incoming Software Engineering Intern, Virtu Financial</text>
    <text x="92" y="540" font-size="24" fill="#767d8a">namangoyal.me</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: avatar, left: 720, top: 135 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og-image.png");
console.log("wrote public/og-image.png");
