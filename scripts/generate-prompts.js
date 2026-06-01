/**
 * generate-prompts.js
 * Parses ReadMeData.md and generates .prompt.js files for each entry
 * Run: node scripts/generate-prompts.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'ReadMeData.md');
const OUTPUT_DIR = path.join(
  __dirname,
  '../src/pages/prompt-vault/prompt-vault-data/entries'
);

// ── Category & Subcategory Maps ────────────────────────────────────────────

const CATEGORY_MAP = {
  personal: (sub) => {
    const map = {
      productivity: 'Productivity',
      networking: 'Technology',
      'time management': 'Productivity',
      'public speaking': 'Communication',
    };
    return map[sub] || 'Personal';
  },
  marketing: () => 'Marketing',
  health: () => 'Health',
  career: () => 'Career',
  creative: () => 'Creative',
  business: () => 'Business',
};

const EMOJI_MAP = {
  // personal
  productivity: '🎯',
  networking: '🌐',
  'time management': '⏰',
  'public speaking': '🎤',
  // marketing
  branding: '🏷️',
  'social media': '📱',
  'content marketing': '✍️',
  'email marketing': '📧',
  seo: '🔍',
  'influencer marketing': '🤳',
  'public relations': '📰',
  'digital marketing': '💻',
  // health
  'mental health': '🧠',
  'workplace wellness': '💼',
  fitness: '💪',
  'sleep science': '😴',
  // career
  freelancing: '🔥',
  'resume writing': '📄',
  'interview preparation': '🎙️',
  // creative
  photography: '📸',
  'ux design': '🖥️',
  'character design': '🎭',
  'graphic design': '🖌️',
  'digital art': '🎨',
  design: '🎨',
  'video editing': '🎬',
  animation: '🎞️',
  // business
  finance: '💰',
  csr: '🌿',
  'event planning': '🎪',
};

const TOOL_MAP = {
  photography: 'ChatGPT',
  'ux design': 'ChatGPT',
  'character design': 'ChatGPT',
  'graphic design': 'ChatGPT',
  'digital art': 'ChatGPT',
  design: 'ChatGPT',
  'video editing': 'ChatGPT',
  animation: 'ChatGPT',
  productivity: 'ChatGPT',
  networking: 'ChatGPT',
  'time management': 'ChatGPT',
  'public speaking': 'ChatGPT',
  branding: 'ChatGPT',
  'social media': 'ChatGPT',
  'content marketing': 'ChatGPT',
  'email marketing': 'ChatGPT',
  seo: 'ChatGPT',
  'influencer marketing': 'ChatGPT',
  'public relations': 'ChatGPT',
  'digital marketing': 'ChatGPT',
  'mental health': 'ChatGPT',
  'workplace wellness': 'ChatGPT',
  fitness: 'ChatGPT',
  'sleep science': 'ChatGPT',
  freelancing: 'ChatGPT',
  'resume writing': 'ChatGPT',
  'interview preparation': 'ChatGPT',
  finance: 'ChatGPT',
  csr: 'ChatGPT',
  'event planning': 'ChatGPT',
};

const RECOMMENDED_TOOLS = ['ChatGPT', 'Claude', 'Gemini', 'Grok'];

// ── Month Map ──────────────────────────────────────────────────────────────

const MONTH_MAP = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

function parseDate(dateStr) {
  // e.g. "Mar 29, 2025" or "Feb 13, 2026"
  const match = dateStr.match(/(\w+)\s+(\d+),\s+(\d+)/);
  if (!match) return '2025-01-01';
  const [, mon, day, year] = match;
  const m = MONTH_MAP[mon] || '01';
  const d = day.padStart(2, '0');
  return `${year}-${m}-${d}`;
}

// ── Prompt Text Formatter ──────────────────────────────────────────────────

function formatPromptText(raw) {
  let text = raw
    // remove trailing "Show less" / "Show more" artifacts
    .replace(/Show less\s*$/i, '')
    .replace(/Show more\s*$/i, '')
    .trim();

  // Strip wrapping quotes if the whole prompt is quoted
  if (text.startsWith('"') && text.endsWith('"')) {
    text = text.slice(1, -1).trim();
  }

  // Normalize bold artifacts like ****text**** → **text**
  text = text.replace(/\*{4}([^*]+)\*{4}/g, '**$1**');
  text = text.replace(/\*{3}([^*]+)\*{3}/g, '**$1**');

  // Convert inline `## N. **Title**` section headers → numbered list items
  // Pattern: "### **Header:**" or "### **Header**"
  text = text.replace(/###\s*\*{0,2}([^*\n]+)\*{0,2}/g, (_, title) => `\n\n### ${title.trim()}`);

  // Convert "## N. **Title**" → "\n\nN. **Title**"
  text = text.replace(/##\s*(\d+)\.\s*/g, (_, n) => `\n\n${n}. `);

  // Convert "## **Title**" → "\n\n**Title**"
  text = text.replace(/##\s*\*{0,2}([^*\n]+)\*{0,2}/g, (_, t) => `\n\n**${t.trim()}**`);

  // Convert bullet points: match ONLY single * (not preceded and not followed by *)
  // This preserves **bold** markers while converting "* item" → "- item"
  text = text.replace(/(?<!\*)\*(?!\*) /g, '\n- ');

  // Handle start-of-line * bullets
  text = text.replace(/^(?!\*\*)\* /gm, '- ');

  // Handle "--- " section dividers
  text = text.replace(/---\s*/g, '\n---\n');

  // Collapse more than 2 consecutive newlines
  text = text.replace(/\n{3,}/g, '\n\n');

  return text.trim();
}

// ── Title Extractor ────────────────────────────────────────────────────────

function extractTitle(promptText, subcategory) {
  // Remove quotes, leading role-play openers
  let clean = promptText
    .replace(/^["']/, '')
    .replace(/^(Imagine you are|You are|As an?|As a)\s+[^.]+[,.]\s+/i, '')
    .replace(/^(Develop|Design|Create|Build|Generate|Outline|Craft)\s+/i, '')
    .replace(/Show less.*/i, '')
    .trim();

  // Take the first sentence-ish fragment (up to first period or 80 chars)
  const firstSentence = clean.split(/[.!?]/)[0].trim();
  const title = firstSentence.length > 70
    ? firstSentence.slice(0, 67) + '...'
    : firstSentence;

  return title || `${toTitleCase(subcategory)} Guide`;
}

function toTitleCase(str) {
  return str
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ── Description Extractor ─────────────────────────────────────────────────

function extractDescription(promptText, category, subcategory) {
  const clean = promptText
    .replace(/Show less.*/i, '')
    .replace(/^["']/, '')
    .trim();
  const snippet = clean.slice(0, 150).replace(/\n/g, ' ').trim();
  return `${snippet}${snippet.length >= 150 ? '...' : ''}`;
}

// ── WhatItDoes Extractor ──────────────────────────────────────────────────

function generateWhatItDoes(promptText, subcategory) {
  const base = [
    `Provides a comprehensive guide on ${subcategory} with structured steps and practical examples.`,
    `Helps users understand key concepts and apply them effectively in real-world scenarios.`,
    `Delivers actionable strategies tailored to the user's specific level and context.`,
  ];
  return base;
}

// ── Tips Generator ────────────────────────────────────────────────────────

function generateTips(subcategory, category) {
  return [
    `Be as specific as possible when describing your context or goals so the AI can tailor its response to your exact needs.`,
    `Review the generated output and ask follow-up questions to drill deeper into any section that needs more detail.`,
    `Adapt the output to your own voice and situation — use it as a starting framework, not a final answer.`,
  ];
}

// ── HowToUse Generator ────────────────────────────────────────────────────

function generateHowToUse(promptText, subcategory) {
  return [
    `Copy the prompt into your preferred AI tool (ChatGPT, Claude, or Gemini).`,
    `Replace any placeholder text in brackets with your specific details, such as your skill level, context, or topic.`,
    `Review the output and ask follow-up questions or request adjustments to refine the results further.`,
  ];
}

// ── Tags Generator ────────────────────────────────────────────────────────

function generateTags(category, subcategory) {
  const tags = [
    toTitleCase(category),
    toTitleCase(subcategory),
  ];

  const extraTagMap = {
    productivity: ['Efficiency', 'Goals'],
    networking: ['Networking', 'Security'],
    'time management': ['Time Management', 'Planning'],
    'public speaking': ['Communication', 'Presentation'],
    branding: ['Brand Identity', 'Strategy'],
    'social media': ['Social Media', 'Content'],
    'content marketing': ['Content', 'Marketing'],
    'email marketing': ['Email', 'Campaign'],
    seo: ['SEO', 'Search'],
    'influencer marketing': ['Influencer', 'Collaboration'],
    'public relations': ['PR', 'Communications'],
    'digital marketing': ['Digital', 'Marketing'],
    'mental health': ['Wellness', 'Mindfulness'],
    'workplace wellness': ['Wellness', 'Work'],
    fitness: ['Fitness', 'Exercise'],
    'sleep science': ['Sleep', 'Recovery'],
    freelancing: ['Freelance', 'Career'],
    'resume writing': ['Resume', 'Career'],
    'interview preparation': ['Interview', 'Career'],
    photography: ['Photography', 'Visual'],
    'ux design': ['UX', 'Design', 'UI'],
    'character design': ['Character', 'Design', 'Art'],
    'graphic design': ['Design', 'Visual', 'Graphics'],
    'digital art': ['Art', 'Digital', 'Creative'],
    design: ['Design', 'Creative'],
    'video editing': ['Video', 'Editing', 'Content'],
    animation: ['Animation', 'Motion', 'Film'],
    finance: ['Finance', 'Planning'],
    csr: ['CSR', 'Sustainability'],
    'event planning': ['Events', 'Planning'],
  };

  const extra = extraTagMap[subcategory] || [];
  return [...new Set([...tags, ...extra])];
}

// ── Filename Generator ────────────────────────────────────────────────────

function toKebab(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

function generateFilename(promptText, subcategory, category, date, index) {
  const clean = promptText
    .replace(/^["']/, '')
    .replace(/Show less.*/i, '')
    .replace(/^(Imagine you are|You are|As an?|As a)\s+[^,.]+[,.]\s+/i, '')
    .trim();

  // Get first 6-8 meaningful words
  const words = clean
    .replace(/[^a-zA-Z\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 7)
    .join(' ');

  const base = toKebab(words) || `${toKebab(subcategory)}-guide`;
  // append category prefix and index to avoid collisions
  return `${toKebab(category)}-${base}`;
}

// ── Variable Name Generator ───────────────────────────────────────────────

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .split(/\s+/)
    .map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function generateVarName(filename) {
  return toCamelCase(filename.replace(/-/g, ' ')) + 'Prompt';
}

// ── JS File Writer ────────────────────────────────────────────────────────

function writePromptFile(entry, filename, varName) {
  const {
    category, subcategory, date, promptRaw, views,
  } = entry;

  const vaultCategory = CATEGORY_MAP[category]
    ? CATEGORY_MAP[category](subcategory)
    : toTitleCase(category);

  const emoji = EMOJI_MAP[subcategory] || '💡';
  const tool = TOOL_MAP[subcategory] || 'ChatGPT';
  const title = extractTitle(promptRaw, subcategory);
  const description = extractDescription(promptRaw, category, subcategory);
  const formattedPrompt = formatPromptText(promptRaw);
  const tags = generateTags(category, subcategory);
  const whatItDoes = generateWhatItDoes(promptRaw, subcategory);
  const tips = generateTips(subcategory, category);
  const howToUse = generateHowToUse(promptRaw, subcategory);
  const isoDate = parseDate(date);

  const tagsStr = tags.map((t) => `    '${t.replace(/'/g, "\\'")}'`).join(',\n');
  const toolsStr = RECOMMENDED_TOOLS.map((t) => `    '${t}'`).join(',\n');
  const whatStr = whatItDoes.map((w) => `    '${w.replace(/'/g, "\\'")}'`).join(',\n');
  const tipsStr = tips.map((t) => `    '${t.replace(/'/g, "\\'")}'`).join(',\n');
  const howStr = howToUse.map((h) => `    '${h.replace(/'/g, "\\'")}'`).join(',\n');

  // Escape backticks and ${} in prompt text
  const escapedPrompt = formattedPrompt
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  return `const ${varName} = {
  emoji: '${emoji}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  type: 'Prompts',
  category: '${vaultCategory}',
  tool: '${tool}',
  output: 'Text',
  date: '${isoDate}',
  tags: [
${tagsStr},
  ],
  views: ${views},
  recommendedTools: [
${toolsStr},
  ],
  prompt: \`${escapedPrompt}\`,
  whatItDoes: [
${whatStr},
  ],
  tips: [
${tipsStr},
  ],
  howToUse: [
${howStr},
  ],
};

export default ${varName};
`;
}

// ── Main Parser ───────────────────────────────────────────────────────────

function parseReadMeData(content) {
  const lines = content.split(/\r?\n/);
  const entries = [];

  let i = 0;
  const VALID_CATEGORIES = new Set([
    'personal', 'marketing', 'health', 'career', 'creative', 'business',
  ]);

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip section headers like "# Business > Sub Categories"
    if (line.startsWith('#')) {
      i++;
      continue;
    }

    // Check if this line is a known category
    if (VALID_CATEGORIES.has(line.toLowerCase())) {
      const category = line.toLowerCase();
      const subcategory = (lines[i + 1] || '').trim().toLowerCase();
      const dateStr = (lines[i + 2] || '').trim();
      const promptLine = (lines[i + 3] || '').trim();

      // Basic validation
      if (!subcategory || !dateStr.match(/\w+ \d+, \d{4}/) || !promptLine) {
        i++;
        continue;
      }

      // Find star rating — it comes after 2 blank lines following the prompt
      // Walk forward to find ⭐
      let stars = 1;
      let j = i + 4;
      while (j < lines.length && j < i + 20) {
        const starLine = lines[j].trim();
        const starMatch = starLine.match(/^⭐\s*(\d+)/);
        if (starMatch) {
          stars = parseInt(starMatch[1], 10);
          break;
        }
        j++;
      }

      entries.push({
        category,
        subcategory,
        date: dateStr,
        promptRaw: promptLine,
        views: stars,
      });

      i += 4; // advance past category/sub/date/prompt
      continue;
    }

    i++;
  }

  return entries;
}

// ── Collision Handler ─────────────────────────────────────────────────────

const usedFilenames = new Set();

function uniqueFilename(base) {
  if (!usedFilenames.has(base)) {
    usedFilenames.add(base);
    return base;
  }
  let count = 2;
  while (usedFilenames.has(`${base}-${count}`)) count++;
  const unique = `${base}-${count}`;
  usedFilenames.add(unique);
  return unique;
}

// ── Entry Point ───────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error('ReadMeData.md not found at:', INPUT_FILE);
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const content = fs.readFileSync(INPUT_FILE, 'utf-8');
  const entries = parseReadMeData(content);
  console.log(`Parsed ${entries.length} entries from ReadMeData.md`);

  // Pre-load existing filenames to avoid overwriting
  const existing = new Set(
    fs.readdirSync(OUTPUT_DIR)
      .filter((f) => f.endsWith('.prompt.js'))
      .map((f) => f.replace('.prompt.js', ''))
  );

  let created = 0;
  let skipped = 0;

  entries.forEach((entry, idx) => {
    const fileBase = generateFilename(
      entry.promptRaw,
      entry.subcategory,
      entry.category,
      entry.date,
      idx
    );
    const uniqueBase = uniqueFilename(fileBase);
    const filename = `${uniqueBase}.prompt.js`;
    const filepath = path.join(OUTPUT_DIR, filename);

    if (existing.has(uniqueBase)) {
      console.log(`  SKIP (exists): ${filename}`);
      skipped++;
      return;
    }

    const varName = generateVarName(uniqueBase);
    const fileContent = writePromptFile(entry, uniqueBase, varName);

    try {
      fs.writeFileSync(filepath, fileContent, 'utf-8');
      console.log(`  CREATED: ${filename}`);
      created++;
    } catch (err) {
      console.error(`  ERROR writing ${filename}:`, err.message);
    }
  });

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}, Total parsed: ${entries.length}`);
}

main();
