import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

// The full prompt dataset is loaded lazily (dynamic import) so the page shell
// renders immediately instead of blocking on a multi-MB data chunk.

// Types available before the data finishes loading
const BASE_TYPES = ['Prompts', 'Agents', 'System Prompts', 'Guide'];

// Categories that must always be available (in filters and the Add Prompt form),
// even before any prompt uses them yet
const BASE_CATEGORIES = ['LinkedIn', 'Resume'];

function computeTypes(prompts) {
  return ['All', ...Array.from(new Set([
    ...BASE_TYPES,
    ...prompts.map((p) => p.type).filter(Boolean),
  ])).sort()];
}

function computeCategories(prompts) {
  return ['All', ...Array.from(new Set([
    ...BASE_CATEGORIES,
    ...prompts.map((p) => p.category).filter(Boolean),
  ])).sort()];
}

const TOOLS = ['All tools', 'ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Grok', 'Midjourney', 'Nano Banana'];
const OUTPUTS = ['All', 'Text', 'Image'];

const TOOL_COLORS = {
  ChatGPT: '#10A37F',
  Claude: '#C96442',
  DeepSeek: '#4D6BFE',
  Gemini: '#8AB4F8',
  Grok: '#E7E7E7',
  Midjourney: '#FFFFFF',
  'Nano Banana': '#FACC15',
};

const TYPE_COLORS = {
  Prompts: '#8B5CF6',
  Agents: '#3B82F6',
  'System Prompts': '#EC4899',
  Guide: '#F59E0B',
};

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function RadioIcon({ checked }) {
  return (
    <span className={`${styles.radioIcon} ${checked ? styles.radioIconChecked : ''}`} aria-hidden="true">
      <span className={styles.radioIconInner} />
    </span>
  );
}

function buildCopyText(prompt) {
  const parts = [];
  if (prompt.prompt) parts.push(prompt.prompt);
  else parts.push(prompt.description || '');
  return parts.join('\n');
}

function PromptModal({ prompt, onClose, onEngage }) {
  const [copied, setCopied] = useState(false);
  const typeColor = TYPE_COLORS[prompt.type] || '#8B5CF6';
  const views = Number(prompt.views || 0);

  const copyPrompt = () => {
    navigator.clipboard.writeText(buildCopyText(prompt)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
      onEngage?.(prompt, ENGAGE_POINTS.copy);
    });
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label={prompt.title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── header bar ── */}
        <div className={styles.modalHeader}>
          <div className={styles.modalMeta}>
            <span className={styles.modalTypeBadge} style={{ '--type-color': typeColor }}>{prompt.type}</span>
            <span className={styles.modalCategoryBadge}>{prompt.category}</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* ── scrollable body ── */}
        <div className={styles.modalBody}>

          {/* title */}
          <h2 className={styles.modalTitle}>
            {prompt.emoji && <span className={styles.modalEmoji}>{prompt.emoji}</span>}
            {prompt.title}
          </h2>

          {/* description */}
          <p className={styles.modalDesc}>{prompt.description}</p>

          {/* views */}
          <div className={styles.modalViewsRow}>
            <span className={styles.modalViews}>{views.toLocaleString()} views</span>
          </div>

          {/* recommended tools */}
          {prompt.recommendedTools?.length > 0 && (
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>Recommended tools</h3>
              <div className={styles.modalToolPills}>
                {prompt.recommendedTools.map((tool) => (
                  <span
                    key={tool}
                    className={styles.modalToolPill}
                    style={{ '--tool-color': TOOL_COLORS[tool] || '#ffffff' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.modalDivider} />

          {/* prompt block */}
          <div className={styles.modalSection}>
            <div className={styles.modalSectionHeader}>
              <h3 className={styles.modalSectionTitle}>Prompt</h3>
              <button
                className={`${styles.copyPromptBtn} ${copied ? styles.copyPromptBtnDone : ''}`}
                onClick={copyPrompt}
              >
                {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy prompt</>}
              </button>
            </div>
            <pre className={styles.promptCode}>
              {prompt.prompt || prompt.description || ''}
            </pre>
          </div>

          {/* what it does */}
          {prompt.whatItDoes?.length > 0 && (
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>What this prompt does</h3>
              <ul className={styles.modalList}>
                {prompt.whatItDoes.map((item, i) => (
                  <li key={i} className={styles.modalListItem}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* tips */}
          {prompt.tips?.length > 0 && (
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>Tips for this prompt</h3>
              <ul className={styles.modalList}>
                {prompt.tips.map((tip, i) => (
                  <li key={i} className={styles.modalListItem}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* how to use */}
          {prompt.howToUse?.length > 0 && (
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>How to use the prompt</h3>
              <ul className={styles.modalList}>
                {prompt.howToUse.map((step, i) => (
                  <li key={i} className={styles.modalListItem}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {/* category tags */}
          {prompt.tags?.length > 0 && (
            <div className={styles.modalCategoryTags}>
              {prompt.tags.map((tag) => (
                <span key={tag} className={styles.modalCategoryTag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PromptCard({ prompt, onOpen, onSeen }) {
  const [copied, setCopied] = useState(false);
  const typeColor = TYPE_COLORS[prompt.type] || '#8B5CF6';
  const views = Number(prompt.views || 0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!onSeen || !cardRef.current) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onSeen(prompt);
        });
      },
      { threshold: 0.55 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [onSeen, prompt]);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(buildCopyText(prompt)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  const openDetails = (e) => {
    e.stopPropagation();
    onOpen(prompt);
  };

  return (
    <article className={styles.card} ref={cardRef}>
      {/* type badge */}
      <div className={styles.cardTop}>
        <span className={styles.cardType} style={{ '--type-color': typeColor }}>{prompt.type}</span>
      </div>

      {/* title with optional emoji */}
      <h3 className={styles.cardTitle}>
        {prompt.emoji && <span className={styles.cardEmoji}>{prompt.emoji}</span>}
        {prompt.title}
      </h3>

      {/* description */}
      <p className={styles.cardDesc}>{prompt.description}</p>

      {/* views */}
      <div className={styles.cardViewsRow}>
        <span className={styles.cardViews}>{views.toLocaleString()} views</span>
      </div>

      {/* recommended tools */}
      {prompt.recommendedTools?.length > 0 && (
        <div className={styles.cardToolsSection}>
          <span className={styles.cardToolsLabel}>Recommended tools</span>
          <div className={styles.cardToolPills}>
            {prompt.recommendedTools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className={styles.cardToolPill}
                style={{ '--tool-color': TOOL_COLORS[tool] || '#ffffff' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* view detail button */}
      <button className={styles.viewDetailsBtn} onClick={openDetails}>
        View in detail
      </button>
    </article>
  );
}

// ── STORAGE ──────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'pvault-local-entries';

// Per-prompt engagement boosts (clicks + copies) persisted in localStorage.
// Displayed views = static base views + this boost, so counts grow
// incrementally as the visitor interacts with prompts.
const VIEW_BOOST_KEY = 'pvault-view-boosts';
const ENGAGE_POINTS = { open: 1, copy: 2 };

function loadViewBoosts() {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(VIEW_BOOST_KEY) || '{}'); } catch { return {}; }
}

function saveViewBoosts(boosts) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(VIEW_BOOST_KEY, JSON.stringify(boosts)); } catch { /* storage full — ignore */ }
}
const PUBLIC_COUNT_NAMESPACE = 'shubham360-promptvault';

function getPromptStorageKey(prompt) {
  const raw = String(prompt?.id ?? prompt?.title ?? 'unknown-prompt');
  return raw.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/(^-|-$)/g, '');
}

function loadLocalPrompts() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function saveLocalPrompts(entries) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// countapi.xyz shut down — public view counters are disabled until a
// replacement backend exists. This avoids ~1,800 doomed network requests
// per page load; static per-prompt view counts are shown instead.
const PUBLIC_COUNTS_ENABLED = false;

async function getPublicPromptCount(promptKey) {
  if (!PUBLIC_COUNTS_ENABLED) return Promise.reject(new Error('Public counts disabled'));
  const url = `https://api.countapi.xyz/get/${PUBLIC_COUNT_NAMESPACE}/${encodeURIComponent(promptKey)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch public count');
  const data = await res.json();
  return Number(data?.value) || 0;
}

async function hitPublicPromptCount(promptKey) {
  if (!PUBLIC_COUNTS_ENABLED) return Promise.reject(new Error('Public counts disabled'));
  const url = `https://api.countapi.xyz/hit/${PUBLIC_COUNT_NAMESPACE}/${encodeURIComponent(promptKey)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to increment public count');
  const data = await res.json();
  return Number(data?.value) || 0;
}

function generateFileContent(data) {
  const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const varName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'Prompt';
  const arr = (items) => !items?.length
    ? '[]'
    : `[\n${items.map((i) => `    ${JSON.stringify(i)},`).join('\n')}\n  ]`;
  const content = [
    `const ${varName} = {`,
    `  emoji: ${JSON.stringify(data.emoji || '')},`,
    `  title: ${JSON.stringify(data.title)},`,
    `  description: ${JSON.stringify(data.description)},`,
    `  type: ${JSON.stringify(data.type)},`,
    `  category: ${JSON.stringify(data.category)},`,
    `  tool: ${JSON.stringify(data.tool)},`,
    `  output: ${JSON.stringify(data.output)},`,
    `  date: ${JSON.stringify(data.date)},`,
    `  tags: ${arr(data.tags)},`,
    `  views: ${Number(data.views) || 0},`,
    `  recommendedTools: ${arr(data.recommendedTools)},`,
    `  prompt: ${JSON.stringify(data.prompt)},`,
    `  whatItDoes: ${arr(data.whatItDoes)},`,
    `  tips: ${arr(data.tips)},`,
    `  howToUse: ${arr(data.howToUse)},`,
    `};`,
    ``,
    `export default ${varName};`,
  ].join('\n');
  return { slug, content, category: data.category };
}

// ── EXTRA ICONS ───────────────────────────────────────────────────────────────
function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

// ── DYNAMIC LIST FIELD ────────────────────────────────────────────────────────
function DynamicListField({ items, onChange, placeholder, addLabel }) {
  const updateItem = (i, v) => { const n = [...items]; n[i] = v; onChange(n); };
  const addItem = () => onChange([...items, '']);
  const removeItem = (i) => { if (items.length === 1) return; onChange(items.filter((_, idx) => idx !== i)); };

  return (
    <div className={styles.dynamicList}>
      {items.map((val, i) => (
        <div key={i} className={styles.dynamicItem}>
          <input
            type="text"
            className={styles.formInput}
            value={val}
            placeholder={placeholder}
            onChange={(e) => updateItem(i, e.target.value)}
          />
          <button
            type="button"
            className={styles.removeItemBtn}
            onClick={() => removeItem(i)}
            disabled={items.length === 1}
            aria-label="Remove"
          >
            <TrashIcon />
          </button>
        </div>
      ))}
      <button type="button" className={styles.addItemBtn} onClick={addItem}>
        <PlusIcon /> {addLabel}
      </button>
    </div>
  );
}

// ── ADD ENTRY FORM ────────────────────────────────────────────────────────────
const FORM_DEFAULTS = () => ({
  emoji: '', title: '', description: '',
  type: 'Prompts', category: 'Marketing', tool: 'ChatGPT', output: 'Text',
  date: new Date().toISOString().slice(0, 10),
  tagsRaw: '', views: 0, recommendedTools: [],
  prompt: '', whatItDoes: [''], tips: [''], howToUse: [''],
});

// Draft is auto-saved to localStorage so the form survives closing the modal,
// switching tabs, or reloading the page
const DRAFT_KEY = 'promptvault-add-prompt-draft';

function loadDraft() {
  if (typeof window === 'undefined') return FORM_DEFAULTS();
  try {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) return { ...FORM_DEFAULTS(), ...JSON.parse(saved) };
  } catch { /* corrupted draft — start fresh */ }
  return FORM_DEFAULTS();
}

function clearDraft() {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
}

function AddEntryForm({ onClose, onSaved, types, categories }) {
  const [form, setForm] = useState(loadDraft);
  const [errors, setErrors] = useState({});
  const [generated, setGenerated] = useState(null);
  const [codeCopied, setCodeCopied] = useState(false);

  // Auto-save the draft on every change
  useEffect(() => {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(form)); } catch { /* storage full — ignore */ }
  }, [form]);

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const toggleTool = (tool) => set(
    'recommendedTools',
    form.recommendedTools.includes(tool)
      ? form.recommendedTools.filter((t) => t !== tool)
      : [...form.recommendedTools, tool],
  );

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.prompt.trim()) e.prompt = 'Prompt text is required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSave = () => {
    if (!validate()) return;
    const entry = {
      id: `local-${Date.now()}`,
      emoji: form.emoji,
      title: form.title.trim(),
      description: form.description.trim(),
      type: form.type,
      category: form.category,
      tool: form.tool,
      output: form.output,
      date: form.date,
      tags: form.tagsRaw.split(',').map((t) => t.trim()).filter(Boolean),
      views: Number(form.views) || 0,
      recommendedTools: form.recommendedTools,
      prompt: form.prompt.trim(),
      whatItDoes: form.whatItDoes.filter(Boolean),
      tips: form.tips.filter(Boolean),
      howToUse: form.howToUse.filter(Boolean),
    };
    onSaved(entry);
    setGenerated(generateFileContent(entry));
    clearDraft();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generated.content).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  };

  const downloadFile = () => {
    const blob = new Blob([generated.content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generated.slug}.prompt.js`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  // ── Success state: show generated file ──
  if (generated) {
    return (
      <div className={styles.backdrop} onClick={onClose}>
        <div className={styles.generatedModal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <div className={styles.modalMeta}>
              <span className={styles.successBadge}>✓ Prompt added to grid</span>
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close"><CloseIcon /></button>
          </div>
          <div className={styles.generatedBody}>
            <h3 className={styles.generatedTitle}>Your .prompt.js file is ready</h3>
            <p className={styles.generatedSub}>
              Copy or download this file, then place it in its category folder{' '}
              <code className={styles.pathCode}>src/pages/prompt-vault/prompt-vault-data/entries/{generated.category}/</code>
              {' '}to make it permanent across rebuilds.
            </p>
            <div className={styles.generatedFilenameRow}>
              <span className={styles.filenameText}>{generated.slug}.prompt.js</span>
              <div className={styles.generatedActions}>
                <button
                  className={`${styles.copyCodeBtn} ${codeCopied ? styles.copyCodeBtnDone : ''}`}
                  onClick={copyCode}
                >
                  {codeCopied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy code</>}
                </button>
                <button className={styles.downloadBtn} onClick={downloadFile}>↓ Download</button>
              </div>
            </div>
            <pre className={styles.generatedCode}>{generated.content}</pre>
          </div>
        </div>
      </div>
    );
  }

  // ── Form state ──
  // Note: backdrop click intentionally does NOT close the form — accidental
  // outside clicks were wiping in-progress entries. Close via ✕ or Escape;
  // the draft is preserved either way.
  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Add new prompt">
      <div className={styles.formModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span className={styles.formModalTitle}>Add New Prompt</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close"><CloseIcon /></button>
        </div>

        <div className={styles.formBody}>

          {/* Basic Info */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Basic Info</h3>
            <div className={styles.formRow}>
              <div className={`${styles.formField} ${styles.formFieldEmoji}`}>
                <label className={styles.formLabel}>Emoji</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={form.emoji}
                  onChange={(e) => set('emoji', e.target.value)}
                  placeholder="📝"
                  maxLength={4}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldGrow}`}>
                <label className={styles.formLabel}>Title *</label>
                <input
                  type="text"
                  className={`${styles.formInput} ${errors.title ? styles.inputError : ''}`}
                  value={form.title}
                  onChange={(e) => set('title', e.target.value)}
                  placeholder="Optimize Blog Post SEO"
                />
                {errors.title && <span className={styles.fieldError}>{errors.title}</span>}
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Description *</label>
              <textarea
                className={`${styles.formTextarea} ${styles.formTextareaSm} ${errors.description ? styles.inputError : ''}`}
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                placeholder="Short description shown on the card (1–2 lines)..."
                rows={2}
              />
              {errors.description && <span className={styles.fieldError}>{errors.description}</span>}
            </div>
          </div>

          {/* Classification */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Classification</h3>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Type</label>
                <select className={styles.formSelect} value={form.type} onChange={(e) => set('type', e.target.value)}>
                  {types.filter((t) => t !== 'All').map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Category</label>
                <select className={styles.formSelect} value={form.category} onChange={(e) => set('category', e.target.value)}>
                  {categories.filter((c) => c !== 'All').map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Primary Tool</label>
                <select className={styles.formSelect} value={form.tool} onChange={(e) => set('tool', e.target.value)}>
                  {TOOLS.filter((t) => t !== 'All tools').map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Output</label>
                <select className={styles.formSelect} value={form.output} onChange={(e) => set('output', e.target.value)}>
                  {OUTPUTS.filter((o) => o !== 'All').map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Date</label>
                <input type="date" className={styles.formInput} value={form.date} onChange={(e) => set('date', e.target.value)} />
              </div>
              <div className={`${styles.formField} ${styles.formFieldGrow}`}>
                <label className={styles.formLabel}>
                  Tags <span className={styles.formLabelHint}>(comma-separated)</span>
                </label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={form.tagsRaw}
                  onChange={(e) => set('tagsRaw', e.target.value)}
                  placeholder="SEO, SEO Basics, Blog"
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldViews}`}>
                <label className={styles.formLabel}>Views</label>
                <input type="number" className={styles.formInput} value={form.views} min={0} onChange={(e) => set('views', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Recommended Tools */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Recommended Tools</h3>
            <div className={styles.formCheckGroup}>
              {TOOLS.filter((t) => t !== 'All tools').map((tool) => (
                <label
                  key={tool}
                  className={`${styles.formCheckItem} ${form.recommendedTools.includes(tool) ? styles.formCheckItemActive : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={form.recommendedTools.includes(tool)}
                    onChange={() => toggleTool(tool)}
                    className={styles.optionInput}
                  />
                  {tool}
                </label>
              ))}
            </div>
          </div>

          {/* Prompt */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Prompt Text *</h3>
            <textarea
              className={`${styles.formTextarea} ${errors.prompt ? styles.inputError : ''}`}
              value={form.prompt}
              onChange={(e) => set('prompt', e.target.value)}
              placeholder={"#CONTEXT:\n...\n\n#ROLE:\n...\n\n#RESPONSE GUIDELINES:\n..."}
              rows={9}
            />
            {errors.prompt && <span className={styles.fieldError}>{errors.prompt}</span>}
          </div>

          {/* What it does */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>What this prompt does</h3>
            <DynamicListField
              items={form.whatItDoes}
              onChange={(v) => set('whatItDoes', v)}
              placeholder="Describe a key capability..."
              addLabel="Add point"
            />
          </div>

          {/* Tips */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Tips for this prompt</h3>
            <DynamicListField
              items={form.tips}
              onChange={(v) => set('tips', v)}
              placeholder="Tip for better results..."
              addLabel="Add tip"
            />
          </div>

          {/* How to use */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>How to use the prompt</h3>
            <DynamicListField
              items={form.howToUse}
              onChange={(v) => set('howToUse', v)}
              placeholder="Step-by-step instruction..."
              addLabel="Add step"
            />
          </div>

        </div>

        <div className={styles.formFooter}>
          <button className={styles.formCancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.formSaveBtn} onClick={handleSave}>Save &amp; Generate File</button>
        </div>
      </div>
    </div>
  );
}

export default function PromptVault() {
  const [search, setSearch] = useState('');
  const [activeType, setType] = useState('All');
  const [activeCat, setCat] = useState('All');
  const [activeTool, setTool] = useState('All tools');
  const [activeOutput, setOutput] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [showAll, setShowAll] = useState(false);
  const [activePrompt, setActivePrompt] = useState(null);
  const [localPrompts, setLocalPrompts] = useState([]);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [publicCounts, setPublicCounts] = useState({});
  const seenInSessionRef = useRef(new Set());

  // Load persisted entries from localStorage on mount
  useEffect(() => {
    setLocalPrompts(loadLocalPrompts());
  }, []);

  // Lazy-load the full prompt dataset so the page shell paints instantly
  const [basePrompts, setBasePrompts] = useState([]);
  const [promptsLoading, setPromptsLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    import('./prompt-vault-data').then((mod) => {
      if (cancelled) return;
      setBasePrompts(mod.PROMPTS || []);
      setPromptsLoading(false);
    }).catch(() => { if (!cancelled) setPromptsLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const TYPES = useMemo(() => computeTypes(basePrompts), [basePrompts]);
  const CATEGORIES = useMemo(() => computeCategories(basePrompts), [basePrompts]);

  const closeModal = useCallback(() => setActivePrompt(null), []);

  const handleEntrySaved = useCallback((entry) => {
    setLocalPrompts((prev) => {
      const next = [entry, ...prev];
      saveLocalPrompts(next);
      return next;
    });
  }, []);

  const rawPrompts = useMemo(() => [...localPrompts, ...basePrompts], [localPrompts, basePrompts]);

  // Load public counts for all current prompts.
  useEffect(() => {
    if (!PUBLIC_COUNTS_ENABLED) return undefined;
    let cancelled = false;
    const run = async () => {
      const keys = Array.from(new Set(rawPrompts.map((p) => getPromptStorageKey(p))));
      if (!keys.length) {
        if (!cancelled) setPublicCounts({});
        return;
      }

      const results = await Promise.allSettled(keys.map((key) => getPublicPromptCount(key)));
      if (cancelled) return;

      const next = {};
      keys.forEach((key, i) => {
        const result = results[i];
        if (result.status === 'fulfilled') next[key] = result.value;
      });
      setPublicCounts(next);
    };

    run();
    return () => { cancelled = true; };
  }, [rawPrompts]);

  const handleCardSeen = useCallback((prompt) => {
    if (!PUBLIC_COUNTS_ENABLED) return;
    const key = getPromptStorageKey(prompt);
    if (seenInSessionRef.current.has(key)) return;
    seenInSessionRef.current.add(key);

    hitPublicPromptCount(key)
      .then((value) => {
        setPublicCounts((prev) => ({ ...prev, [key]: value }));
      })
      .catch(() => {
        // If external counter is unavailable, keep current displayed count.
      });
  }, []);

  const allPrompts = useMemo(() => (
    rawPrompts.map((prompt) => {
      const key = getPromptStorageKey(prompt);
      const liveViews = Number.isFinite(publicCounts[key]) ? publicCounts[key] : Number(prompt.views || 0);
      return {
        ...prompt,
        views: liveViews,
      };
    })
  ), [rawPrompts, publicCounts]);

  const filtered = useMemo(() => {
    let list = [...allPrompts];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => (
        p.title.toLowerCase().includes(q)
        || p.description.toLowerCase().includes(q)
        || p.tags.some((t) => t.toLowerCase().includes(q))
      ));
    }

    if (activeType !== 'All') list = list.filter((p) => p.type === activeType);
    if (activeCat !== 'All') list = list.filter((p) => p.category === activeCat);
    if (activeTool !== 'All tools') list = list.filter((p) => p.tool === activeTool);
    if (activeOutput !== 'All') list = list.filter((p) => p.output === activeOutput);

    list.sort((a, b) => (sort === 'Newest'
      ? new Date(b.date) - new Date(a.date)
      : Number(b.views || 0) - Number(a.views || 0)));

    return list;
  }, [allPrompts, search, activeType, activeCat, activeTool, activeOutput, sort]);

  const activePromptResolved = useMemo(() => {
    if (!activePrompt) return null;
    const key = getPromptStorageKey(activePrompt);
    return allPrompts.find((p) => getPromptStorageKey(p) === key) || activePrompt;
  }, [activePrompt, allPrompts]);

  const visiblePrompts = showAll ? filtered : filtered.slice(0, 24);

  useEffect(() => {
    setShowAll(false);
  }, [search, activeType, activeCat, activeTool, activeOutput, sort]);

  const resetFilters = () => {
    setSearch('');
    setType('All');
    setCat('All');
    setTool('All tools');
    setOutput('All');
    setSort('Newest');
  };

  const hasActiveFilters = (
    search || activeType !== 'All' || activeCat !== 'All' || activeTool !== 'All tools' || activeOutput !== 'All'
  );

  return (
    <Layout title="PromptVault" description="A curated library of prompts for every AI agent">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Open Prompt Library
            </div>
            <h1 className={styles.heroTitle}>Prompt<span className={styles.heroAccent}>Vault</span></h1>
            <p className={styles.heroSub}>
              {allPrompts.length} battle-tested prompts across {CATEGORIES.length - 1} categories.
              <br />
              Filter, copy, and deploy with markdown-ready detail view.
            </p>

            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}><SearchIcon /></span>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search prompts, categories, or tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                onKeyUp={(e) => e.stopPropagation()}
                aria-label="Search prompts"
              />
              {search && (
                <button className={styles.searchClear} onClick={() => setSearch('')} aria-label="Clear search">x</button>
              )}
            </div>
          </div>
        </header>

        <div className={styles.contentWrap}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <h2 className={styles.sidebarTitle}>Filter prompts</h2>
              {hasActiveFilters && (
                <button className={styles.resetBtn} onClick={resetFilters}>Reset filters</button>
              )}
            </div>

            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Type</span>
              <div className={styles.sidebarOptions}>
                {TYPES.map((t) => (
                  <label key={t} className={`${styles.optionRow} ${activeType === t ? styles.optionRowActive : ''}`}>
                    <input type="radio" name="typeFilter" checked={activeType === t} onChange={() => setType(t)} className={styles.optionInput} />
                    <RadioIcon checked={activeType === t} />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Category</span>
              <div className={`${styles.sidebarOptions} ${styles.sidebarOptionsScroll}`}>
                {CATEGORIES.map((c) => (
                  <label key={c} className={`${styles.optionRow} ${activeCat === c ? styles.optionRowActive : ''}`}>
                    <input type="radio" name="catFilter" checked={activeCat === c} onChange={() => setCat(c)} className={styles.optionInput} />
                    <RadioIcon checked={activeCat === c} />
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Tools</span>
              <div className={`${styles.sidebarOptions} ${styles.sidebarOptionsScroll}`}>
                {TOOLS.map((tool) => (
                  <label
                    key={tool}
                    className={`${styles.optionRow} ${activeTool === tool ? styles.optionRowActive : ''}`}
                    style={activeTool === tool && tool !== 'All tools' ? { '--pill-color': TOOL_COLORS[tool] } : {}}
                  >
                    <input type="radio" name="toolFilter" checked={activeTool === tool} onChange={() => setTool(tool)} className={styles.optionInput} />
                    <RadioIcon checked={activeTool === tool} />
                    <span>{tool}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Output</span>
              <div className={styles.sidebarOptions}>
                {OUTPUTS.map((o) => (
                  <label key={o} className={`${styles.optionRow} ${activeOutput === o ? styles.optionRowActive : ''}`}>
                    <input type="radio" name="outputFilter" checked={activeOutput === o} onChange={() => setOutput(o)} className={styles.optionInput} />
                    <RadioIcon checked={activeOutput === o} />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Sort</span>
              <div className={styles.sidebarOptions}>
                {['Newest', 'Top'].map((s) => (
                  <label key={s} className={`${styles.optionRow} ${sort === s ? styles.optionRowActive : ''}`}>
                    <input type="radio" name="sortFilter" checked={sort === s} onChange={() => setSort(s)} className={styles.optionInput} />
                    <RadioIcon checked={sort === s} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <section className={styles.mainArea}>
            <div className={styles.resultsBar}>
              <span className={styles.resultsCount}>
                {filtered.length} prompts{hasActiveFilters ? ' matching your filters' : ''}
              </span>
              <div className={styles.resultsBarRight}>
                <button className={styles.addEntryBtn} onClick={() => setShowEntryForm(true)}>
                  + Add Prompt
                </button>
                <Link to="/PromptVault" className={styles.vaultLink}>Browse PromptVault docs -&gt;</Link>
              </div>
            </div>

            <main className={styles.grid}>
              {visiblePrompts.length > 0 ? (
                visiblePrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} onOpen={setActivePrompt} onSeen={handleCardSeen} />
                ))
              ) : promptsLoading ? (
                <div className={styles.empty}>
                  <p className={styles.emptyTitle}>Loading prompts&hellip;</p>
                  <p className={styles.emptySub}>The vault is being unpacked.</p>
                </div>
              ) : (
                <div className={styles.empty}>
                  <p className={styles.emptyTitle}>No prompts found</p>
                  <p className={styles.emptySub}>Try adjusting your filters or search terms.</p>
                  <button className={styles.resetBtn} onClick={resetFilters}>Reset all filters</button>
                </div>
              )}
            </main>

            {!showAll && filtered.length > 24 && (
              <div className={styles.loadMore}>
                <button className={styles.loadMoreBtn} onClick={() => setShowAll(true)}>Show all {filtered.length} prompts</button>
              </div>
            )}
            {showAll && filtered.length > 24 && (
              <div className={styles.loadMore}>
                <button className={styles.loadMoreBtn} onClick={() => setShowAll(false)}>Show less</button>
              </div>
            )}
          </section>
        </div>
      </div>

      {activePromptResolved && (
        <PromptModal
          prompt={activePromptResolved}
          onClose={closeModal}
        />
      )}
      {showEntryForm && (
        <AddEntryForm
          onClose={() => setShowEntryForm(false)}
          onSaved={handleEntrySaved}
          types={TYPES}
          categories={CATEGORIES}
        />
      )}
    </Layout>
  );
}
