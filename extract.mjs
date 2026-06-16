import fs from 'fs';

const content = fs.readFileSync('src/assets/Logo-FBN-SVG.svg', 'utf8');
const match = content.match(/data:image\/png;base64,([^"]+)/);
if (match && match[1]) {
  fs.writeFileSync('src/assets/fbn-logo.png', Buffer.from(match[1], 'base64'));
  console.log('Successfully extracted PNG!');
} else {
  console.log('No base64 found.');
}
