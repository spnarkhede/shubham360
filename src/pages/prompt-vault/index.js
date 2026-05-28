import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { PROMPTS } from './promptVaultData';
import styles from './styles.module.css';

/* ─── Constants ─── */

const TYPES = ['All', 'Prompts', 'Agents', 'System Prompts', 'Guide'];

const CATEGORIES = [
  'All', 'Architecture', 'Art', 'Business', 'Coding', 'Customer Service',
  'Design', 'E-Commerce', 'Education', 'Finance', 'Human Resources',
  'Lawyers', 'Marketing', 'Photography', 'Productivity', 'Real Estate',
  'Sales', 'SEO', 'Solopreneurs', 'Writing',
];

const TOOLS = ['All tools', 'ChatGPT', 'Claude', 'DeepSeek', 'Gemini', 'Grok', 'Midjourney', 'Nano Banana'];

const TOOL_COLORS = {
  ChatGPT:       '#10A37F',
  Claude:        '#C96442',
  DeepSeek:      '#4D6BFE',
  Gemini:        '#8AB4F8',
  Grok:          '#E7E7E7',
  Midjourney:    '#FFFFFF',
  'Nano Banana': '#FACC15',
};

const TYPE_COLORS = {
  Prompts:          '#8B5CF6',
  Agents:           '#3B82F6',
  'System Prompts': '#EC4899',
  Guide:            '#F59E0B',
};

/* ─── Icons ─── */

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
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

/* ─── Prompt Detail Modal ─── */

function PromptModal({ prompt, onClose }) {
  const [copied, setCopied] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);

  const typeColor = TYPE_COLORS[prompt.type] || '#8B5CF6';
  const toolColor = TOOL_COLORS[prompt.tool] || '#ffffff';

  const copyPrompt = () => {
    const text = prompt.prompt || prompt.description;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const copyDescription = () => {
    navigator.clipboard.writeText(prompt.description).then(() => {
      setCopiedDesc(true);
      setTimeout(() => setCopiedDesc(false), 2000);
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
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Modal header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalMeta}>
            <span className={styles.modalType} style={{ '--type-color': typeColor }}>
              {prompt.type}
            </span>
            <span className={styles.modalTool} style={{ '--tool-color': toolColor }}>
              {prompt.tool}
            </span>
            <span className={styles.modalOutput} data-output={prompt.output}>
              {prompt.output}
            </span>
            <span className={styles.modalCategory}>{prompt.category}</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Title + description */}
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{prompt.title}</h2>
          <p className={styles.modalDesc}>{prompt.description}</p>

          {/* Full prompt block */}
          <div className={styles.promptBlock}>
            <div className={styles.promptBlockHeader}>
              <span className={styles.promptBlockLabel}>
                {prompt.prompt ? 'Full Prompt' : 'Description'}
              </span>
              <button
                className={`${styles.copyPromptBtn} ${copied ? styles.copyPromptBtnDone : ''}`}
                onClick={copyPrompt}
              >
                {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy prompt</>}
              </button>
            </div>
            <pre className={styles.promptText}>
              {prompt.prompt || prompt.description}
            </pre>
          </div>

          {/* What it does */}
          {prompt.whatItDoes && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>What it does</h3>
              <ul className={styles.bulletList}>
                {prompt.whatItDoes.map((item, i) => (
                  <li key={i} className={styles.bulletItem}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* How to use */}
          {prompt.howToUse && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>How to use</h3>
              <ol className={styles.numberedList}>
                {prompt.howToUse.map((item, i) => (
                  <li key={i} className={styles.numberedItem}>{item}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Tips */}
          {prompt.tips && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tips</h3>
              <ul className={styles.tipList}>
                {prompt.tips.map((tip, i) => (
                  <li key={i} className={styles.tipItem}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommended tools */}
          {prompt.recommendedTools && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Works best with</h3>
              <div className={styles.toolPills}>
                {prompt.recommendedTools.map(tool => (
                  <span
                    key={tool}
                    className={styles.toolPill}
                    style={{ '--tool-color': TOOL_COLORS[tool] || '#fff' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {prompt.tags && prompt.tags.length > 0 && (
            <div className={styles.modalTags}>
              {prompt.tags.map(tag => (
                <span key={tag} className={styles.modalTag}>#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Prompt Card ─── */

function PromptCard({ prompt, onOpen }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.title + '\n\n' + prompt.description).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
  };

  const typeColor = TYPE_COLORS[prompt.type] || '#8B5CF6';
  const toolColor = TOOL_COLORS[prompt.tool] || '#ffffff';

  return (
    <article className={styles.card} onClick={() => onOpen(prompt)} role="button" tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(prompt); }}>
      <div className={styles.cardTop}>
        <span className={styles.cardType} style={{ '--type-color': typeColor }}>
          {prompt.type}
        </span>
        <div className={styles.cardActions}>
          <button className={styles.cardBtn} onClick={handleCopy} title="Copy prompt" aria-label="Copy">
            {copied ? <span className={styles.copiedText}>Copied</span> : <CopyIcon />}
          </button>
          <button className={styles.cardBtn} onClick={handleBookmark} title="Save" aria-label="Bookmark">
            <BookmarkIcon />
          </button>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{prompt.title}</h3>
      <p className={styles.cardDesc}>{prompt.description}</p>

      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {prompt.tags.slice(0, 2).map(tag => (
            <span key={tag} className={styles.tag}>#{tag}</span>
          ))}
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.cardOutput} data-output={prompt.output}>
            {prompt.output}
          </span>
          <span className={styles.cardTool} style={{ '--tool-color': toolColor }}>
            {prompt.tool}
          </span>
        </div>
      </div>

      {prompt.prompt && (
        <div className={styles.cardViewHint}>View full prompt</div>
      )}
    </article>
  );
}

/* ─── Main Page ─── */

export default function PromptVault() {
  const [search, setSearch]       = useState('');
  const [activeType, setType]     = useState('All');
  const [activeCat, setCat]       = useState('All');
  const [activeTool, setTool]     = useState('All tools');
  const [activeOutput, setOutput] = useState('All');
  const [sort, setSort]           = useState('Newest');
  const [showAll, setShowAll]     = useState(false);
  const [activePrompt, setActivePrompt] = useState(null);

  const closeModal = useCallback(() => setActivePrompt(null), []);

  const filtered = useMemo(() => {
    let list = [...PROMPTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    if (activeType !== 'All')       list = list.filter(p => p.type === activeType);
    if (activeCat !== 'All')        list = list.filter(p => p.category === activeCat);
    if (activeTool !== 'All tools') list = list.filter(p => p.tool === activeTool);
    if (activeOutput !== 'All')     list = list.filter(p => p.output === activeOutput);

    list.sort((a, b) =>
      sort === 'Newest'
        ? new Date(b.date) - new Date(a.date)
        : b.id - a.id
    );

    return list;
  }, [search, activeType, activeCat, activeTool, activeOutput, sort]);

  const visiblePrompts = showAll ? filtered : filtered.slice(0, 12);

  const resetFilters = () => {
    setSearch(''); setType('All'); setCat('All');
    setTool('All tools'); setOutput('All'); setSort('Newest');
  };

  const hasActiveFilters =
    search || activeType !== 'All' || activeCat !== 'All' ||
    activeTool !== 'All tools' || activeOutput !== 'All';

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

        {/* ── HERO HEADER ── */}
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Open Prompt Library
            </div>
            <h1 className={styles.heroTitle}>
              Prompt<span className={styles.heroAccent}>Vault</span>
            </h1>
            <p className={styles.heroSub}>
              {PROMPTS.length} battle-tested prompts across {TOOLS.length - 1} AI agents.<br />
              Filter, copy, and deploy — no fluff, just signal.
            </p>

            {/* Search */}
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}><SearchIcon /></span>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search prompts, categories, or tags..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search prompts"
              />
              {search && (
                <button className={styles.searchClear} onClick={() => setSearch('')} aria-label="Clear search">
                  ×
                </button>
              )}
            </div>
          </div>
        </header>

        {/* ── FILTER BAR ── */}
        <div className={styles.filterBar}>
          <div className={styles.filterBarInner}>

            {/* Type pills */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Type</span>
              <div className={styles.filterPills}>
                {TYPES.map(t => (
                  <button
                    key={t}
                    className={`${styles.pill} ${activeType === t ? styles.pillActive : ''}`}
                    onClick={() => setType(t)}
                    style={activeType === t && t !== 'All' ? { '--pill-color': TYPE_COLORS[t] } : {}}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort + Output */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Sort</span>
              <div className={styles.filterPills}>
                {['Newest', 'Top'].map(s => (
                  <button
                    key={s}
                    className={`${styles.pill} ${sort === s ? styles.pillActive : ''}`}
                    onClick={() => setSort(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Output</span>
              <div className={styles.filterPills}>
                {['All', 'Text', 'Image'].map(o => (
                  <button
                    key={o}
                    className={`${styles.pill} ${activeOutput === o ? styles.pillActive : ''}`}
                    onClick={() => setOutput(o)}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button className={styles.resetBtn} onClick={resetFilters}>
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* ── CATEGORY SCROLL STRIP ── */}
        <div className={styles.categoryStrip}>
          <div className={styles.categoryInner}>
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`${styles.catChip} ${activeCat === c ? styles.catChipActive : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── TOOL FILTER STRIP ── */}
        <div className={styles.toolStrip}>
          <div className={styles.toolStripInner}>
            {TOOLS.map(tool => (
              <button
                key={tool}
                className={`${styles.toolChip} ${activeTool === tool ? styles.toolChipActive : ''}`}
                onClick={() => setTool(tool)}
                style={activeTool === tool && tool !== 'All tools' ? { '--tool-color': TOOL_COLORS[tool] } : {}}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* ── RESULTS BAR ── */}
        <div className={styles.resultsBar}>
          <span className={styles.resultsCount}>
            {filtered.length} prompt{filtered.length !== 1 ? 's' : ''}
            {hasActiveFilters && <> matching your filters</>}
          </span>
          <Link to="/PromptVault" className={styles.vaultLink}>
            Browse PromptVault docs →
          </Link>
        </div>

        {/* ── PROMPT GRID ── */}
        <main className={styles.grid}>
          {visiblePrompts.length > 0 ? (
            visiblePrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} onOpen={setActivePrompt} />
            ))
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>No prompts found</p>
              <p className={styles.emptySub}>Try adjusting your filters or search terms.</p>
              <button className={styles.resetBtn} onClick={resetFilters}>
                Reset all filters
              </button>
            </div>
          )}
        </main>

        {/* ── LOAD MORE ── */}
        {!showAll && filtered.length > 12 && (
          <div className={styles.loadMore}>
            <button className={styles.loadMoreBtn} onClick={() => setShowAll(true)}>
              Show all {filtered.length} prompts
            </button>
          </div>
        )}
        {showAll && filtered.length > 12 && (
          <div className={styles.loadMore}>
            <button className={styles.loadMoreBtn} onClick={() => setShowAll(false)}>
              Show less
            </button>
          </div>
        )}

      </div>

      {/* ── PROMPT DETAIL MODAL ── */}
      {activePrompt && (
        <PromptModal prompt={activePrompt} onClose={closeModal} />
      )}
    </Layout>
  );
}
