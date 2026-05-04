import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function DockIcon({ name }) {
  const s = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home':      return (<svg viewBox="0 0 24 24" {...s}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>);
    case 'briefcase': return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>);
    case 'layout':    return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>);
    case 'cpu':       return (<svg viewBox="0 0 24 24" {...s}><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>);
    case 'sparkles':  return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg>);
    case 'feather':   return (<svg viewBox="0 0 24 24" {...s}><path d="M20 4c-8 0-13 5-13 13v3h3c8 0 13-5 13-13h-3z" /><path d="M7 20l7-7M12 8h5" /></svg>);
    case 'bookOpen':  return (<svg viewBox="0 0 24 24" {...s}><path d="M2 5h7a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H2V5z" /><path d="M22 5h-7a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h7V5z" /></svg>);
    case 'brain':     return (<svg viewBox="0 0 24 24" {...s}><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3h1V4H9z" /><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3h-1V4h1z" /></svg>);
    case 'wand':      return (<svg viewBox="0 0 24 24" {...s}><path d="M3 21l12-12M14 4l2 2M18 8l2 2M4 14l2 2" /></svg>);
    case 'award':     return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="9" r="6" /><path d="M8 14l-2 7 6-3 6 3-2-7" /></svg>);
    case 'mail':      return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
    default: return null;
  }
}

function PinSvg({ active }) {
  const s = { width: 14, height: 14, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  return active
    ? (<svg viewBox="0 0 24 24" {...s} fill="currentColor" stroke="none"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.6 2.8-1.5 3.8L16 14H8l1.5-4.2A5.4 5.4 0 0 1 8 6a4 4 0 0 1 4-4zM12 22v-8" /></svg>)
    : (<svg viewBox="0 0 24 24" {...s}><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.6 2.8-1.5 3.8L16 14H8l1.5-4.2A5.4 5.4 0 0 1 8 6a4 4 0 0 1 4-4zM12 22v-8" /></svg>);
}

const ITEMS = [
  { label: 'Home',           href: '/landing',                                          icon: 'home',      color: '#8B5CF6' },
  { label: 'Recruiter View', href: '/recruiter-dashboard/introduction',                 icon: 'briefcase', color: '#3B82F6' },
  { label: 'Product Design', href: '/product-designer/introduction',                    icon: 'layout',    color: '#EC4899' },
  { label: 'Tech Enthusiast',href: '/tech-enthusiast/technical-learnings',              icon: 'cpu',       color: '#10B981' },
  { label: 'Curious Visitor',href: '/curious-visitor/introduction',                     icon: 'sparkles',  color: '#F59E0B' },
  { label: 'Blog',           href: '/blog',                                             icon: 'feather',   color: '#06B6D4' },
  { label: 'Books',          href: '/books',                                            icon: 'bookOpen',  color: '#F97316' },
  { label: 'My Learnings',   href: '/MyLearnings/HardReset/50PsychologySkills',         icon: 'brain',     color: '#A855F7' },
  { label: 'AI Tools',       href: '/tech-enthusiast/tools-collection',                 icon: 'wand',      color: '#14B8A6' },
  { label: 'Certifications', href: '/recruiter-dashboard/certifications',               icon: 'award',     color: '#EAB308' },
  { label: 'Contact',        href: '/contact',                                          icon: 'mail',      color: '#EF4444' },
];

function FloatingDockInner() {
  const [pinned, setPinned] = useState(false);

  return (
    <nav
      className={`${styles.dock} ${pinned ? styles.dockPinned : ''}`}
      aria-label="Explore portfolio"
    >
      <button
        className={`${styles.pinBtn} ${pinned ? styles.pinBtnActive : ''}`}
        onClick={() => setPinned(p => !p)}
        title={pinned ? 'Unpin — collapse on mouse-out' : 'Pin open — keep expanded'}
        aria-pressed={pinned}
      >
        <PinSvg active={pinned} />
      </button>

      {ITEMS.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={styles.dockItem}
          style={{ '--dock-delay': `${i * 25}ms`, '--dock-color': item.color }}
        >
          <span className={styles.dockIcon} aria-hidden="true">
            <DockIcon name={item.icon} />
          </span>
          <span className={styles.dockLabel}>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default function FloatingDock() {
  return (
    <BrowserOnly>
      {() => <FloatingDockInner />}
    </BrowserOnly>
  );
}
