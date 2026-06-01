/**
 * reorganize-promptvault.js
 *
 * Does three things:
 *  1. Ensures docs/PromptVault/ exists as the central hub
 *  2. Moves docs/Agents, docs/Prompts, docs/AIProjectTemplate into docs/PromptVault/
 *     and creates Guides/ and SystemPrompts/ stub folders
 *  3. Reads all 1835 .prompt.js files and writes them into
 *     docs/PromptVault/Prompts/{Category}/{Category}.md  (one file per category)
 */

const fs   = require('fs');
const path = require('path');

const ROOT    = path.resolve(__dirname, '..');
const DOCS    = path.join(ROOT, 'docs');
const VAULT   = path.join(DOCS, 'PromptVault');
const ENTRIES = path.join(ROOT, 'src', 'pages', 'prompt-vault', 'prompt-vault-data', 'entries');

// ── helpers ──────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDirRecursive(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function moveDir(src, dest) {
  if (!fs.existsSync(src)) { console.log(`  SKIP (not found): ${src}`); return; }
  if (fs.existsSync(dest)) { console.log(`  SKIP (already moved): ${path.basename(dest)}`); return; }
  copyDirRecursive(src, dest);
  fs.rmSync(src, { recursive: true, force: true });
  console.log(`  MOVED: ${path.relative(ROOT, src)} → ${path.relative(ROOT, dest)}`);
}

function writeCategoryJson(dir, label, position) {
  const file = path.join(dir, '_category_.json');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({ label, position, collapsed: false }, null, 2));
  }
}

// ── TASK 1 + 2: create PromptVault hub and move folders ──────────────────────

function setupHub() {
  console.log('\n── Task 1 & 2: Setting up docs/PromptVault hub ──');

  ensureDir(VAULT);

  // Move existing docs folders into PromptVault
  moveDir(path.join(DOCS, 'Agents'),           path.join(VAULT, 'Agents'));
  moveDir(path.join(DOCS, 'Prompts'),          path.join(VAULT, 'Prompts'));
  moveDir(path.join(DOCS, 'AIProjectTemplate'),path.join(VAULT, 'AIProject'));

  // Create stub folders if they don't exist
  const stubs = [
    { dir: 'Guides',        label: 'Guides',         pos: 3 },
    { dir: 'SystemPrompts', label: 'System Prompts',  pos: 4 },
  ];

  for (const { dir, label, pos } of stubs) {
    const full = path.join(VAULT, dir);
    ensureDir(full);
    writeCategoryJson(full, label, pos);

    // Create an index README if empty
    const readme = path.join(full, 'README.md');
    if (!fs.existsSync(readme)) {
      fs.writeFileSync(readme, `---\nsidebar_label: Overview\nsidebar_position: 1\n---\n\n# ${label}\n\nComing soon — add your ${label.toLowerCase()} here.\n`);
      console.log(`  CREATED stub: PromptVault/${dir}/README.md`);
    }
  }

  // Write PromptVault root _category_.json
  writeCategoryJson(VAULT, 'PromptVault', 1);

  // Write PromptVault root README if missing
  const vaultReadme = path.join(VAULT, 'README.md');
  if (!fs.existsSync(vaultReadme)) {
    fs.writeFileSync(vaultReadme, `---
sidebar_label: Overview
sidebar_position: 1
---

# PromptVault

Your central hub for all prompts, agents, guides, and system prompts.

| Section | Description |
|---|---|
| [Agents](./Agents/README) | AI agent definitions and templates |
| [Prompts](./Prompts/README) | Categorised prompt library (1835+ prompts) |
| [AIProject](./AIProject/README) | AI project templates and guidelines |
| [Guides](./Guides/README) | Step-by-step guides for prompt engineering |
| [System Prompts](./SystemPrompts/README) | System-level prompt configurations |
`);
    console.log('  CREATED: PromptVault/README.md');
  }
}

// ── TASK 3: generate category markdown files from .prompt.js entries ─────────

function loadPromptFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');

  // Extract fields via regex — no require() needed (avoids ESM issues)
  const get = (field) => {
    const m = raw.match(new RegExp(`${field}:\\s*\`([\\s\\S]*?)\``, 'm'))
             || raw.match(new RegExp(`${field}:\\s*'([^']*)'`, 'm'))
             || raw.match(new RegExp(`${field}:\\s*"([^"]*)"`, 'm'));
    return m ? m[1].trim() : '';
  };

  const getNum = (field) => {
    const m = raw.match(new RegExp(`${field}:\\s*(\\d+)`));
    return m ? parseInt(m[1], 10) : 0;
  };

  const getArray = (field) => {
    const m = raw.match(new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\]`, 'm'));
    if (!m) return [];
    return m[1].match(/'([^']*)'/g)?.map((s) => s.replace(/'/g, '').trim()).filter(Boolean) || [];
  };

  return {
    title:       get('title'),
    description: get('description'),
    type:        get('type'),
    category:    get('category'),
    tool:        get('tool'),
    output:      get('output'),
    date:        get('date'),
    emoji:       get('emoji'),
    views:       getNum('views'),
    tags:        getArray('tags'),
    recommendedTools: getArray('recommendedTools'),
    prompt:      get('prompt'),
    whatItDoes:  getArray('whatItDoes'),
    tips:        getArray('tips'),
    howToUse:    getArray('howToUse'),
  };
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function buildPromptMarkdown(p, index) {
  const lines = [];

  lines.push(`## ${p.emoji ? p.emoji + ' ' : ''}${p.title || 'Untitled'}`);
  lines.push('');

  // Meta table
  lines.push(`| Field | Value |`);
  lines.push(`|---|---|`);
  lines.push(`| **Type** | ${p.type || 'Prompt'} |`);
  lines.push(`| **Tool** | ${p.tool || 'ChatGPT'} |`);
  lines.push(`| **Output** | ${p.output || 'Text'} |`);
  lines.push(`| **Date** | ${p.date || ''} |`);
  if (p.views) lines.push(`| **Views** | ${p.views.toLocaleString()} |`);
  if (p.tags?.length) lines.push(`| **Tags** | ${p.tags.join(', ')} |`);
  if (p.recommendedTools?.length) lines.push(`| **Recommended Tools** | ${p.recommendedTools.join(', ')} |`);
  lines.push('');

  if (p.description) {
    lines.push(`> ${p.description}`);
    lines.push('');
  }

  // Prompt block
  lines.push('### Prompt');
  lines.push('');
  lines.push('```');
  lines.push(p.prompt || '');
  lines.push('```');
  lines.push('');

  if (p.whatItDoes?.length) {
    lines.push('### What it does');
    lines.push('');
    p.whatItDoes.forEach((item) => lines.push(`- ${item}`));
    lines.push('');
  }

  if (p.tips?.length) {
    lines.push('### Tips');
    lines.push('');
    p.tips.forEach((tip) => lines.push(`- ${tip}`));
    lines.push('');
  }

  if (p.howToUse?.length) {
    lines.push('### How to use');
    lines.push('');
    p.howToUse.forEach((step, i) => lines.push(`${i + 1}. ${step}`));
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

function generateCategoryDocs() {
  console.log('\n── Task 3: Generating category markdown files ──');

  const files = fs.readdirSync(ENTRIES).filter((f) => f.endsWith('.prompt.js'));
  console.log(`  Found ${files.length} prompt files`);

  // Group by category
  const byCategory = {};

  for (const file of files) {
    const p = loadPromptFile(path.join(ENTRIES, file));
    const cat = p.category || 'General';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(p);
  }

  const categories = Object.keys(byCategory).sort();
  console.log(`  Categories found: ${categories.join(', ')}`);

  // Target: docs/PromptVault/Prompts/{Category}/
  // (Prompts folder may have been moved from docs/Prompts — create Library subfolder for our generated files)
  const libraryDir = path.join(VAULT, 'Prompts', 'Library');
  ensureDir(libraryDir);

  // Write _category_.json for Library
  writeCategoryJson(libraryDir, 'Prompt Library', 10);

  let totalWritten = 0;

  for (const cat of categories) {
    const prompts = byCategory[cat];
    const catDir  = path.join(libraryDir, cat);
    ensureDir(catDir);

    // _category_.json for each category folder
    writeCategoryJson(catDir, cat, categories.indexOf(cat) + 1);

    // Build the markdown file
    const slug = slugify(cat);
    const mdPath = path.join(catDir, `${slug}.md`);

    const header = [
      `---`,
      `sidebar_label: ${cat}`,
      `sidebar_position: 1`,
      `title: ${cat} Prompts`,
      `description: ${prompts.length} prompts in the ${cat} category`,
      `---`,
      ``,
      `# ${cat} Prompts`,
      ``,
      `> ${prompts.length} prompts in this category.`,
      ``,
      `---`,
      ``,
    ].join('\n');

    const body = prompts.map((p, i) => buildPromptMarkdown(p, i)).join('\n');

    fs.writeFileSync(mdPath, header + body, 'utf-8');
    console.log(`  WRITTEN: Library/${cat}/${slug}.md (${prompts.length} prompts)`);
    totalWritten += prompts.length;
  }

  // Write Library index
  const libIndex = path.join(libraryDir, 'README.md');
  const indexLines = [
    `---`,
    `sidebar_label: Overview`,
    `sidebar_position: 1`,
    `---`,
    ``,
    `# Prompt Library`,
    ``,
    `All ${totalWritten} prompts organised by category.`,
    ``,
    `| Category | Count |`,
    `|---|---|`,
    ...categories.map((c) => `| [${c}](./${c}/${slugify(c)}) | ${byCategory[c].length} |`),
    ``,
  ];
  fs.writeFileSync(libIndex, indexLines.join('\n'), 'utf-8');
  console.log(`\n  WRITTEN: Library/README.md (index of all ${categories.length} categories)`);
  console.log(`  Total prompts written to markdown: ${totalWritten}`);
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

function main() {
  setupHub();
  generateCategoryDocs();
  console.log('\n✅ Done! docs/PromptVault is your new hub.\n');
}

main();
