import React from 'react';
import Head from '@docusaurus/Head';
import styles from './landing.module.css';

/* ============ Inline Icon Components ============ */

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.37 1.86.7 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.27a2 2 0 0 1 2.11-.45c.87.33 1.79.57 2.73.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PinIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 3c5 4 8 10 9 18M21 11c-8-1-14 1-18 6M2 13c7-3 12-2 18 3" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.9-2.3-.8.5-1.7.9-2.7 1.1-.8-.8-1.9-1.3-3.1-1.3-2.3 0-4.2 1.9-4.2 4.2 0 .3 0 .7.1 1C8 8.9 4.8 7.1 2.7 4.4c-.4.7-.6 1.5-.6 2.3 0 1.5.7 2.8 1.9 3.5-.7 0-1.4-.2-2-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 3.9 2.9-1.4 1.1-3.2 1.8-5.2 1.8H1c1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.24 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v7.45h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.46V8z" />
  </svg>
);

/* ============ Brand Logos ============ */

const MetaLogo = () => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metaG" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#0081FB" />
        <stop offset="0.5" stopColor="#0064E0" />
        <stop offset="1" stopColor="#8A3DE8" />
      </linearGradient>
    </defs>
    <path
      d="M20 11c-4 0-6 4-8 7-2 3-3 5-5 5-1 0-2-1-2-3 0-3 2-7 4-7 1 0 2 1 3 2l1-2c-1-1-3-3-5-3-4 0-6 5-6 8 0 4 2 6 5 6 3 0 5-3 7-6 2-3 3-5 5-5 2 0 3 2 5 5 2 3 4 6 7 6 3 0 5-2 5-6 0-3-2-8-6-8-2 0-3 2-4 3l1 2c1-1 2-2 3-2 2 0 4 4 4 7 0 2-1 3-2 3-2 0-3-2-5-5-2-3-4-7-8-7z"
      fill="url(#metaG)"
    />
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-primary)' }}>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const TeslaLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#E31937" />
    <path d="M8 12 L32 12 L32 17 L22.5 17 L22.5 30 L17.5 30 L17.5 17 L8 17 Z" fill="#fff" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const VectornatorLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#F8F9FA" />
    <path d="M12 28 L20 10 L28 28 L26 28 L20 15 L14 28 Z" fill="#FF4757" />
    <circle cx="20" cy="10" r="2.5" fill="#FF4757" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 40 40">
    <path d="M14 6h6v10h-6a5 5 0 0 1 0-10z" fill="#F24E1E" />
    <path d="M20 6h6a5 5 0 0 1 0 10h-6V6z" fill="#FF7262" />
    <path d="M14 16h6v10h-6a5 5 0 0 1 0-10z" fill="#A259FF" />
    <circle cx="25" cy="21" r="5" fill="#1ABCFE" />
    <path d="M14 26h6v5a5 5 0 0 1-5 5 5 5 0 0 1-1-10z" fill="#0ACF83" />
  </svg>
);

const MazeLogo = () => (
  <svg viewBox="0 0 40 40">
    <path d="M6 26 Q12 14 20 20 Q28 26 34 14" fill="none" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round" />
    <path d="M6 26 Q12 14 20 20 Q28 26 34 14" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" opacity="0.6" transform="translate(0, 4)" />
  </svg>
);

const SplineLogo = () => (
  <svg viewBox="0 0 40 40">
    <defs>
      <radialGradient id="splineG" cx="0.3" cy="0.3">
        <stop offset="0" stopColor="#FFE5F1" />
        <stop offset="0.3" stopColor="#FF6B9D" />
        <stop offset="0.6" stopColor="#9333EA" />
        <stop offset="1" stopColor="#1E3A8A" />
      </radialGradient>
    </defs>
    <circle cx="20" cy="20" r="14" fill="url(#splineG)" />
  </svg>
);

const ZeplinLogo = () => (
  <svg viewBox="0 0 40 40">
    <ellipse cx="20" cy="20" rx="15" ry="7" fill="#FFC940" />
    <circle cx="15" cy="18" r="1.5" fill="#1E293B" />
    <path d="M32 18 L38 14 L38 22 Z" fill="#FFC940" />
    <path d="M8 20 Q5 22 6 24" stroke="#FFC940" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const MemoriselyLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect x="6" y="10" width="22" height="22" rx="2" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
    <rect x="12" y="6" width="22" height="22" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" transform="rotate(8 23 17)" />
    <line x1="15" y1="14" x2="26" y2="14" stroke="#94A3B8" strokeWidth="1" />
    <line x1="15" y1="17" x2="28" y2="17" stroke="#94A3B8" strokeWidth="1" />
    <line x1="15" y1="20" x2="24" y2="20" stroke="#94A3B8" strokeWidth="1" />
  </svg>
);

const UxAcademyLogo = () => (
  <svg viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" fill="none" stroke="#10B981" strokeWidth="2" />
    <text x="20" y="25" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle" fill="#10B981">UX</text>
  </svg>
);

const CourseraLogo = () => (
  <svg viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" fill="#0056D2" />
    <path d="M26 15 Q22 12 18 14 Q13 17 14 22 Q15 27 20 27 Q24 27 26 25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 10v6m4.22-17.78-4.24 4.24m0 5.08-4.24 4.24m12.72-7.78h-6m-10 0H1" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

/* ============ Text-based Brand Marks ============ */

const TextLogo = ({ label, bg = '#1E293B', fg = '#fff', size = 11 }) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6" fill={bg} />
    <text
      x="20"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize={size}
      fontWeight="700"
      textAnchor="middle"
      fill={fg}
    >
      {label}
    </text>
  </svg>
);

const BoschLogo = () => <TextLogo label="BOSCH" bg="#EA0016" fg="#fff" size={9} />;
const BoschRexrothLogo = () => <TextLogo label="REXROTH" bg="#00529B" fg="#fff" size={8} />;
const AmazonLogo = () => <TextLogo label="amazon" bg="#232F3E" fg="#FF9900" size={10} />;
const TUChemnitzLogo = () => <TextLogo label="TUC" bg="#006E9F" fg="#fff" size={12} />;
const NagpurUniLogo = () => <TextLogo label="RTMNU" bg="#B4861F" fg="#fff" size={9} />;
const AWSLogo = () => <TextLogo label="AWS" bg="#232F3E" fg="#FF9900" size={12} />;
const DockerLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill="#2496ED" />
    <g fill="#fff">
      <rect x="9" y="20" width="4" height="4" />
      <rect x="14" y="20" width="4" height="4" />
      <rect x="19" y="20" width="4" height="4" />
      <rect x="14" y="15" width="4" height="4" />
      <rect x="19" y="15" width="4" height="4" />
      <rect x="19" y="10" width="4" height="4" />
    </g>
  </svg>
);
const KubernetesLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill="#326CE5" />
    <polygon points="20,8 30,13 30,24 20,30 10,24 10,13" fill="none" stroke="#fff" strokeWidth="1.5" />
    <circle cx="20" cy="19" r="3" fill="none" stroke="#fff" strokeWidth="1.5" />
  </svg>
);
const JenkinsLogo = () => <TextLogo label="JENKINS" bg="#D33833" fg="#fff" size={7} />;
const GrafanaLogo = () => <TextLogo label="Grafana" bg="#F46800" fg="#fff" size={8} />;
const ReactLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="6" fill="#20232A" />
    <circle cx="20" cy="20" r="2.5" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
      <ellipse cx="20" cy="20" rx="11" ry="4.2" />
      <ellipse cx="20" cy="20" rx="11" ry="4.2" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="11" ry="4.2" transform="rotate(120 20 20)" />
    </g>
  </svg>
);

/* ============ Main Component ============ */

function ExperienceRow({ logo, role, company, dates, location, current, bullets }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className={`${styles.expItem} ${current ? styles.expItemCurrent : ''} ${open ? styles.expItemOpen : ''}`}>
      <button
        type="button"
        className={styles.expHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.expLogo} aria-hidden="true">{logo}</span>
        <div className={styles.expBody}>
          <p className={styles.expRole}>{role}</p>
          <p className={styles.expCompany}>{company}</p>
        </div>
        <div className={styles.expMeta}>
          <span className={styles.expDates}>{dates}</span>
          <span className={styles.expLocation}>
            <PinIconSmall /> {location}
          </span>
        </div>
        <span className={`${styles.expChevron} ${open ? styles.expChevronOpen : ''}`} aria-hidden="true">
          <ChevronDown />
        </span>
      </button>
      {open && (
        <ul className={styles.expBullets}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </article>
  );
}

function SkillBadge({ name, slug, src }) {
  const iconSrc = src || (slug ? `https://cdn.simpleicons.org/${slug}` : null);
  return (
    <div className={styles.skillBadge} title={name}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={styles.skillBadgeIcon}
        />
      )}
      <span>{name}</span>
    </div>
  );
}

function DockIcon({ name }) {
  const s = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home': return (<svg viewBox="0 0 24 24" {...s}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>);
    case 'briefcase': return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>);
    case 'layout': return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>);
    case 'cpu': return (<svg viewBox="0 0 24 24" {...s}><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>);
    case 'sparkles': return (<svg viewBox="0 0 24 24" {...s}><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></svg>);
    case 'book': return (<svg viewBox="0 0 24 24" {...s}><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2V5z" /><path d="M4 18h14" /></svg>);
    case 'feather': return (<svg viewBox="0 0 24 24" {...s}><path d="M20 4c-8 0-13 5-13 13v3h3c8 0 13-5 13-13h-3z" /><path d="M7 20l7-7M12 8h5" /></svg>);
    case 'bookOpen': return (<svg viewBox="0 0 24 24" {...s}><path d="M2 5h7a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H2V5z" /><path d="M22 5h-7a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h7V5z" /></svg>);
    case 'brain': return (<svg viewBox="0 0 24 24" {...s}><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3h1V4H9z" /><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3h-1V4h1z" /></svg>);
    case 'wand': return (<svg viewBox="0 0 24 24" {...s}><path d="M3 21l12-12M14 4l2 2M18 8l2 2M4 14l2 2" /></svg>);
    case 'award': return (<svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="9" r="6" /><path d="M8 14l-2 7 6-3 6 3-2-7" /></svg>);
    case 'mail': return (<svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
    default: return null;
  }
}

export default function Landing() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </Head>

      <div className={styles.landingWrapper}>
        <div className={styles.resume}>

          {/* =================== SIDEBAR =================== */}
          <aside className={styles.sidebar}>
            <div className={styles.portrait}>
              <img
                src="/img/profileintro.webp"
                alt="Profile"
                className={styles.portraitImg}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className={styles.sideInner}>
              <h1 className={styles.name}>Shubham Narkhede</h1>
              <p className={styles.role}>Senior Full-Stack Developer | TypeScript, Node.js &amp; React</p>

              <blockquote className={styles.quote}>
                <span className={`${styles.qMark} ${styles.qOpen}`}>&ldquo;</span>
                Build, automate, and ship &mdash; the best systems feel invisible to the user.
                <span className={`${styles.qMark} ${styles.qClose}`}>&rdquo;</span>
                <span className={styles.quoteAuthor}>&mdash; my engineering mantra</span>
              </blockquote>

              <h2 className={styles.sectionHeadingSide}>Contacts</h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true"><MailIcon /></span>
                  <span>
                    <span className={styles.itemLabel}>Email</span>
                    <a className={styles.itemValue} href="mailto:shubhampnarkede@gmail.com">shubhampnarkede@gmail.com</a>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true"><PhoneIcon /></span>
                  <span>
                    <span className={styles.itemLabel}>Phone</span>
                    <span className={styles.itemValue}>+49 171 510 8059</span>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true"><PinIcon /></span>
                  <span>
                    <span className={styles.itemLabel}>Address</span>
                    <span className={styles.itemValue}>Stuttgart, 70376 Germany</span>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true"><LinkIcon /></span>
                  <span>
                    <span className={styles.itemLabel}>Website</span>
                    <a className={styles.itemValue} href="https://www.shubhamnarkhede.com">shubhamnarkhede.com</a>
                  </span>
                </li>
                 <li className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true"><LinkIcon /></span>
                  <span>
                    <span className={styles.itemLabel}>Founder</span>
                    <a className={styles.itemValue} href="https://www.chasemycareer.com">chasemycareer.com</a>
                  </span>
                </li>
              </ul>

              <h2 className={styles.sectionHeadingSide}>Languages</h2>
              <ul className={styles.langList}>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagUk}`} aria-hidden="true" />
                    <span className={styles.langName}>English</span>
                  </span>
                  <span className={styles.langLevel}>Fluent</span>
                </li>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagGermany}`} aria-hidden="true" />
                    <span className={styles.langName}>German</span>
                  </span>
                  <span className={styles.langLevel}>B1 &rarr; B2</span>
                </li>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagIndia}`} aria-hidden="true" />
                    <span className={styles.langName}>Hindi</span>
                  </span>
                  <span className={styles.langLevel}>Native</span>
                </li>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagIndia}`} aria-hidden="true" />
                    <span className={styles.langName}>Marathi</span>
                  </span>
                  <span className={styles.langLevel}>Mother Tongue</span>
                </li>
              </ul>

              <h2 className={styles.sectionHeadingSide}>Certifications</h2>

              <a href="/recruiter-dashboard/certifications" className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <svg className={styles.certCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8 14l-2 7 6-3 6 3-2-7" />
                  </svg>
                  <div>
                    <p className={styles.certCardCount}>90+ Certifications</p>
                    <p className={styles.certCardSub}>AWS · Coursera · Pluralsight · LinkedIn</p>
                  </div>
                </div>
                <span className={styles.certCardCta}>View all &rarr;</span>
              </a>

              <h2 className={styles.sectionHeadingSide}> Badges</h2>

              <div className={styles.certBadgesRow}>
                {[
                  { src: '/img/badges/generative-ai-overview-for-project-managers.webp', label: 'Generative AI Overview — PMI', url: 'https://www.pmi.org/certifications/verify' },
                  { src: '/img/badges/python-for-data-science.webp', label: 'Python for Data Science — IBM', url: 'https://www.credly.com/badges/47a39917-a8c1-41f7-b745-73b2fe8dcba9/public_url' },
                  { src: '/img/badges/data-science-foundations-level-1.webp', label: 'Data Science Foundations — IBM', url: 'https://www.credly.com/badges/e97fb38c-4adf-4e65-b992-ceea41718418/public_url' },
                  { src: '/img/badges/pluralsightbadge.webp', label: 'Pluralsight Badges', url: 'https://app.pluralsight.com/profile/spnarkhede' },
                  { src: '/img/badges/introductiontoGenAI&agents.svg', label: 'Introduction to Generative AI and Agents — Microsoft', url: 'https://learn.microsoft.com/api/achievements/share/en-us/spnarkhede/WVUUS3JN?sharingId=3149A10F852F5E7C' },
                  { src: '/img/badges/GenAIsolutionforORG.svg', label: 'Build Effective Generative AI Solutions in Your Organization — Microsoft', url: 'https://learn.microsoft.com/api/achievements/share/en-us/spnarkhede/CY55VCN9?sharingId=3149A10F852F5E7C' },
                  { src: '/img/badges/foundationofgenAIforBL.svg', label: 'Foundations of Generative AI for Business Leaders — Microsoft', url: 'https://learn.microsoft.com/api/achievements/share/en-us/spnarkhede/AKFFDBX7?sharingId=3149A10F852F5E7C' },
                  { src: '/img/badges/GenAIbusinesstrophy.svg', label: 'Explore the Business Value of Generative AI Solutions — Microsoft', url: 'https://learn.microsoft.com/api/achievements/share/en-us/spnarkhede/FQHHDFZX?sharingId=3149A10F852F5E7C' },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certBadgeSmall}
                    title={b.label}
                  >
                    <img src={b.src} alt={b.label} loading="lazy" />
                  </a>
                ))}
              </div>

              <h2 className={styles.sectionHeadingSide}>Socials</h2>
              <ul className={styles.socialGrid}>
                {[
                  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/spnarkhede/', icon: '/img/social/linkedin.svg' },
                  { name: 'GitHub', link: 'https://github.com/spnarkhede', icon: '/img/social/github.svg' },
                  { name: 'Medium', link: 'https://medium.com/@snarkhede', icon: '/img/social/medium.svg' },
                  { name: 'Twitter', link: 'https://x.com/LetsTrackLife', icon: '/img/social/twitter.svg' },
                  { name: 'Instagram', link: 'https://www.instagram.com/lets.track.life/', icon: '/img/social/instagram.svg' },
                  { name: 'Instagram Tech', link: 'https://www.instagram.com/shubh_welt/', icon: '/img/social/instagram.svg' },
                  { name: 'Instagram Life', link: 'https://www.instagram.com/growwithin_official/', icon: '/img/social/instagram.svg' },
                  { name: 'YouTube', link: 'https://www.youtube.com/@LetsTrackLife', icon: '/img/social/youtube.svg' },
                  { name: 'Facebook', link: 'https://www.facebook.com/spnarkhede', icon: '/img/social/facebook.svg' },
                  { name: 'Spotify', link: 'https://open.spotify.com/show/6YlaMmZZwOjMMGJd5fwOnR', icon: '/img/social/spotify.svg' },
                  { name: 'Stack Overflow', link: 'https://stackoverflow.com/users/22744195/spnarkhede', icon: '/img/social/stackoverflow.svg' },
                ].map((s) => (
                  <li key={s.name} className={styles.socialChip}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                    >
                      <img src={s.icon} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* =================== MAIN =================== */}
          <main className={styles.main}>

            {/* PROFESSIONAL SUMMARY */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <p className={styles.summaryText}>
                Senior Full-Stack Developer with 6+ years of experience designing and shipping
                production-grade web platforms across automotive, e-mobility, and e-commerce.
                Specialized in <strong>TypeScript</strong>, <strong>Node.js</strong>, and
                <strong> React</strong>, with deep hands-on expertise in cloud-native architectures
                on <strong>AWS</strong>, containerization with <strong>Docker</strong> and
                <strong> Kubernetes</strong>, and end-to-end CI/CD automation.
              </p>
              <p className={styles.summaryText}>
                Currently building connected vehicle and charging infrastructure software at
                Robert Bosch GmbH &mdash; owning scalable microservices, driving engineering
                standards, and mentoring developers to deliver resilient, secure, and observable
                systems.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Professional Experience</h2>

              <div className={styles.expList}>
                <ExperienceRow
                  current
                  logo={<img src="/img/bosch.png" alt="Robert Bosch GmbH" className={styles.expLogoImg} />}
                  role="Senior Full-Stack Developer"
                  company="Robert Bosch GmbH"
                  dates={<>Jul 2022 &mdash; <span className={styles.presentText}>Present</span></>}
                  location="Stuttgart, Germany"
                  bullets={[
                    'Architect and ship microservices for connected vehicle and e-mobility platforms using Node.js, TypeScript, and React.',
                    'Lead end-to-end CI/CD delivery on AWS with Docker and Kubernetes, cutting deployment cycles by 40%+.',
                    'Drive engineering standards, code reviews, and mentorship across multiple product squads.',
                    'Champion observability with Grafana, Prometheus, and structured logging to improve incident response.',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/rexroth.png" alt="Bosch Rexroth AG" className={styles.expLogoImg} />}
                  role="Fullstack Web Developer"
                  company="Bosch Rexroth AG"
                  dates="Apr 2020 — Jun 2022"
                  location="Ulm, Germany"
                  bullets={[
                    'Built and scaled internal web platforms serving factory automation teams across Europe.',
                    'Modernized legacy services into containerized microservices on Kubernetes with full CI/CD coverage.',
                    'Partnered with designers and PMs to ship customer-facing portals with React and TypeScript.',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/amazon.png" alt="Amazon" className={styles.expLogoImg} />}
                  role="Software Developer — Associate"
                  company="Amazon"
                  dates="Apr 2019 — Mar 2020"
                  location="Leipzig, Germany"
                  bullets={[
                    'Developed and maintained internal tools supporting EU fulfillment center operations.',
                    'Automated repetitive workflows and monitoring, reducing manual effort for operations teams.',
                    'Collaborated with cross-functional teams to deliver production features under strict SLAs.',
                  ]}
                />
              </div>
            </section>

            {/* SKILLS */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}> Technical Skills</h2>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><CodeIcon /></span>
                  Frontend
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="React" slug="react" />
                  <SkillBadge name="TypeScript" slug="typescript" />
                  <SkillBadge name="Next.js" slug="nextdotjs" />
                  <SkillBadge name="Redux" slug="redux" />
                  <SkillBadge name="Material UI" slug="mui" />
                  <SkillBadge name="Angular" slug="angular" />
                  <SkillBadge name="JavaScript" slug="javascript" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><CodeIcon /></span>
                  Backend
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="Node.js" slug="nodedotjs" />
                  <SkillBadge name="REST APIs" />
                  <SkillBadge name="GraphQL" slug="graphql" />
                  <SkillBadge name="Microservices" />
                  <SkillBadge name="Scalable Arch" />
                  <SkillBadge name="Java" slug="openjdk" />
                  <SkillBadge name="Spring" slug="spring" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  Cloud &amp; DevOps
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="AWS" src="/img/aws.png" />
                  <SkillBadge name="Azure" slug="microsoftazure" />
                  <SkillBadge name="Docker" slug="docker" />
                  <SkillBadge name="Kubernetes" slug="kubernetes" />
                  <SkillBadge name="GitHub Actions" slug="githubactions" />
                  <SkillBadge name="CI / CD" />
                  <SkillBadge name="Grafana" slug="grafana" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  Testing &amp; Security
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="Playwright" slug="playwright" />
                  <SkillBadge name="Jest" slug="jest" />
                  <SkillBadge name="E2E" />
                  <SkillBadge name="TDD" />
                  <SkillBadge name="Code Reviews" />
                  <SkillBadge name="OAuth2" slug="oauth" />
                  <SkillBadge name="OIDC" slug="openid" />
                  <SkillBadge name="JWT" slug="jsonwebtokens" />
                  <SkillBadge name="SSO" />
                </div>
              </div>
            </section>

            {/* EDUCATION */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Education</h2>

              <div className={styles.eduGrid}>
                <div className={styles.eduCard}>
                  <div className={styles.eduHead}>
                    <span className={styles.eduLogo}><img src="/img/tuc.png" alt="TU Chemnitz" className={styles.eduLogoImg} /></span>
                    <p className={styles.eduInstitution}>TU Chemnitz, Germany</p>
                  </div>
                  <div>
                    <p className={styles.eduTitle}>M.Sc. Automotive Software Engineering</p>
                    <p className={styles.eduDate}>Oct 2018 &mdash; Aug 2020</p>
                  </div>
                </div>

                <div className={styles.eduCard}>
                  <div className={styles.eduHead}>
                    <span className={styles.eduLogo}><img src="/img/rtmnu.png" alt="RTMNU Nagpur" className={styles.eduLogoImg} /></span>
                    <p className={styles.eduInstitution}>R.T.M.N.U. Nagpur, India</p>
                  </div>
                  <div>
                    <p className={styles.eduTitle}>B.E. Computer Science &amp; Engineering</p>
                    <p className={styles.eduDate}>Jun 2014 &mdash; May 2018</p>
                  </div>
                </div>

                <div className={styles.eduCard}>
                  <div className={styles.eduHead}>
                    <span className={styles.eduLogo}><img src="/img/aws.png" alt="AWS" className={styles.eduLogoImg} /></span>
                    <p className={styles.eduInstitution}>Certifications</p>
                  </div>
                  <div>
                    <p className={styles.eduTitle}>AWS Fundamentals &amp; Serverless</p>
                    <p className={styles.eduDate}>tinyurl.com/1000cert</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ACADEMIC INTERNSHIPS */}
            {/* <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Academic Internships</h2>

              <div className={styles.internList}>
                <div className={styles.internItem}>
                  <span className={styles.internLogo}>
                    <img src="/img/bosch.png" alt="Robert Bosch GmbH" className={styles.internLogoImg} />
                  </span>
                  <div className={styles.internInfo}>
                    <p className={styles.internCompany}>Robert Bosch GmbH</p>
                    <p className={styles.internTitle}>Working Student — Software Engineering</p>
                  </div>
                  <span className={styles.internPeriod}>Jan 2019 &mdash; Mar 2019</span>
                </div>

                <div className={styles.internItem}>
                  <span className={styles.internLogo}>
                    <img src="/img/tuc.png" alt="TU Chemnitz" className={styles.internLogoImg} />
                  </span>
                  <div className={styles.internInfo}>
                    <p className={styles.internCompany}>TU Chemnitz</p>
                    <p className={styles.internTitle}>Research Assistant — Automotive Software Lab</p>
                  </div>
                  <span className={styles.internPeriod}>Oct 2018 &mdash; Dec 2018</span>
                </div>
              </div>
            </section> */}

            {/* PROJECTS */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Industrial projects</h2>

              <div className={styles.projGrid}>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Connected Charging Cable Platform</h3>
                    <div className={styles.projTags}>
                      {['React', 'TypeScript', 'Java Spring Boot', 'OCPP', 'AWS'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Real-time operator interface processing 10K+ OCPP messages/sec, sub-200ms latency across 8 European markets. (Bosch eMobility R&amp;D)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Charge Point Management System</h3>
                    <div className={styles.projTags}>
                      {['React', 'Azure', 'OCPP', 'Docker', 'CI/CD'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      450,000+ charge points across 30 countries, 99.9% uptime with real-time OCPP event processing. (Bosch GmbH)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Real-Time Geospatial Dashboard</h3>
                    <div className={styles.projTags}>
                      {['React', 'TypeScript', 'Leaflet.js', 'REST APIs'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Interactive map rendering 50K+ data points — sub-300ms render time, 60fps pan/zoom with dynamic filtering. (Bosch GmbH)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>High-Volume Data Visualization Platform</h3>
                    <div className={styles.projTags}>
                      {['React', 'TypeScript', 'D3.js', 'WebSockets'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      10K+ data points/second charting at 60fps, canvas rendering across 8 enterprise products. (Bosch GmbH)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschRexrothLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Application Product Selector (APS)</h3>
                    <div className={styles.projTags}>
                      {['Angular', 'TypeScript', '.NET Core', 'SAP UI5'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      SAP-integrated catalog with 3D visualisation — 100+ global partners, 35% faster configuration, 200+ manual requests eliminated monthly. (Bosch Rexroth)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschRexrothLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Smart Project Management v3.0</h3>
                    <div className={styles.projTags}>
                      {['Angular', 'Java Spring Boot', 'Kubernetes', 'PostgreSQL'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Multi-tenant PM system — 1,000+ users, 22% faster project cycles with real-time collaboration. (Bosch Rexroth)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Support Portal 2.0</h3>
                    <div className={styles.projTags}>
                      {['Angular', 'TypeScript', 'REST APIs', 'Figma'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      40% faster ticket resolution, 60% of L1 tasks automated for 300+ users. (Bosch GmbH)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={`${styles.projLogo} ${styles.projLogoTeal}`}><BoltIcon /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Chase My Career (Personal)</h3>
                    <div className={styles.projTags}>
                      {['Next.js', 'TypeScript', 'Supabase', 'Cloudflare'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      AI-powered job matching &amp; resume review platform, live in Germany.
                    </p>
                    <a className={styles.projLink} href="https://www.chasemycareer.com" target="_blank" rel="noopener noreferrer">
                      <LinkIcon /> chasemycareer.com
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* TOOLS */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}>Tools</h2>

              <div className={styles.toolsGrid}>
                <div className={styles.toolCard}>
                  <span className={styles.toolLogo}><DockerLogo /></span>
                  <h3 className={styles.toolName}>Docker</h3>
                  <p className={styles.toolDesc}>Containerization</p>
                </div>
                <div className={styles.toolCard}>
                  <span className={styles.toolLogo}><KubernetesLogo /></span>
                  <h3 className={styles.toolName}>Kubernetes</h3>
                  <p className={styles.toolDesc}>Orchestration</p>
                </div>
                <div className={styles.toolCard}>
                  <span className={styles.toolLogo}><JenkinsLogo /></span>
                  <h3 className={styles.toolName}>GitHub Actions</h3>
                  <p className={styles.toolDesc}>CI/CD pipelines</p>
                </div>
                <div className={styles.toolCard}>
                  <span className={styles.toolLogo}><GrafanaLogo /></span>
                  <h3 className={styles.toolName}>Grafana</h3>
                  <p className={styles.toolDesc}>Monitoring</p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}