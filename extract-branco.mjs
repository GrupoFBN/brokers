import fs from 'fs';

const content = fs.readFileSync('src/assets/Logo-FBN-SVG-Branco.svg', 'utf8');
const match = content.match(/data:image\/png;base64,([^"]+)/);
if (match && match[1]) {
  fs.writeFileSync('src/assets/fbn-logo-branco.png', Buffer.from(match[1], 'base64'));
  console.log('Successfully extracted Branco PNG!');
} else {
  console.log('No base64 found.');
}
