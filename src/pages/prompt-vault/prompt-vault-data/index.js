function getFolderPrompts() {
  const context = require.context('./entries', false, /^(?!.*_template).*\.prompt\.js$/);
  return context.keys().map((key) => {
    const mod = context(key);
    const item = mod.default || mod;
    return {
      ...item,
      id: item.id ?? key.replace('./', '').replace('.prompt.js', ''),
    };
  });
}

function normalizePrompt(prompt, index) {
  return {
    ...prompt,
    id: typeof prompt.id !== 'undefined' ? prompt.id : 10000 + index,
    tags: Array.isArray(prompt.tags) ? prompt.tags : [],
    views: Number.isFinite(prompt.views) ? prompt.views : Math.max(24, 400 - index * 3),
    date: prompt.date || '2026-01-01',
  };
}

const folderPrompts = getFolderPrompts();
const merged = [...folderPrompts]
  .filter((prompt, index, arr) => arr.findIndex((p) => p.title === prompt.title) === index)
  .map(normalizePrompt)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const PROMPTS = merged;
