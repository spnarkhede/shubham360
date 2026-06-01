const fs = require('fs');
const c = fs.readFileSync('C:/Users/nas1ul/Desktop/spnarkhede/0deployed/shubham360/scripts/ReadMeData.md', 'utf-8');
const lines = c.split(/\r\n|\n/);
const text = lines[11];

console.log('RAW input (first 200 chars):', JSON.stringify(text.slice(0, 200)));

// Simulate formatPromptText
let t = text.replace(/Show less\s*$/i, '').replace(/Show more\s*$/i, '').trim();
if (t.startsWith('"') && t.endsWith('"')) t = t.slice(1,-1).trim();
t = t.replace(/\*{4}([^*]+)\*{4}/g, '**$1**');
t = t.replace(/\*{3}([^*]+)\*{3}/g, '**$1**');
t = t.replace(/###\s*\*{0,2}([^*\n]+)\*{0,2}/g, (_, x) => '\n\n### ' + x.trim());
t = t.replace(/##\s*(\d+)\.\s*/g, (_, n) => '\n\n' + n + '. ');
t = t.replace(/##\s*\*{0,2}([^*\n]+)\*{0,2}/g, (_, x) => '\n\n**' + x.trim() + '**');

console.log('After ## replacements (first 200 chars):', JSON.stringify(t.slice(0, 200)));

t = t.replace(/(?<!\n)\s*\*\s+/g, '\n- ');
t = t.replace(/^\s*\*\s+/gm, '- ');

console.log('After * replacement (first 400 chars):', JSON.stringify(t.slice(0, 400)));
