import React from 'react';
import Head from '@docusaurus/Head';
import styles from './landing.module.css';

// Icon components organized into separate modules for better maintainability
import {
  ChevronDown,
  MailIcon,
  LinkIcon,
  PhoneIcon,
  PinIcon,
  PinIconSmall,
  BoltIcon,
  DesignIcon,
  CodeIcon,
  GithubIcon,
  GlobeIcon
} from '../components/Icons/UIIcons';

import {
  InstagramIcon,
  DribbbleIcon,
  TwitterIcon,
  LinkedinIcon
} from '../components/Icons/SocialIcons';

import {
  MetaLogo,
  AppleLogo,
  TeslaLogo,
  GoogleLogo,
  BoschLogo,
  BoschRexrothLogo,
  AmazonLogo,
  TUChemnitzLogo,
  NagpurUniLogo
} from '../components/Icons/CompanyLogos';

import {
  VectornatorLogo,
  FigmaLogo,
  MazeLogo,
  SplineLogo,
  ZeplinLogo,
  MemoriselyLogo,
  UxAcademyLogo,
  CourseraLogo,
  AWSLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  GrafanaLogo,
  ReactLogo
} from '../components/Icons/ToolLogos';

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

const VISIBLE_SKILLS = 5;

function SkillRow({ icon, label, skills }) {
  const [expanded, setExpanded] = React.useState(false);
  const hiddenCount = skills.length - VISIBLE_SKILLS;
  const shown = expanded ? skills : skills.slice(0, VISIBLE_SKILLS);
  return (
    <div
      className={styles.skillRow}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.skillLabel}>
        <span className={styles.skillLabelIcon}>{icon}</span>
        {label}
      </div>
      <div className={styles.skillChips}>
        {shown.map((s) => <SkillBadge key={s.name} {...s} />)}
        {hiddenCount > 0 && (
          <button
            type="button"
            className={styles.skillMoreChip}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : `+${hiddenCount} more`}
          </button>
        )}
      </div>
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
  // Career start: April 2019 (Amazon) — keeps the years of experience current forever
  const careerStart = new Date('2019-04-01');
  const now = new Date();
  const diffMonths = (now.getFullYear() - careerStart.getFullYear()) * 12 + (now.getMonth() - careerStart.getMonth());
  const yearsOfExperience = Math.floor(diffMonths / 12);

  // Downloaded file is renamed to Resume_Shubham_Narkhede_DDMMYYYY.pdf (today's date)
  const resumeFileName = `Resume_Shubham_Narkhede_${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}${now.getFullYear()}.pdf`;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Shubham Narkhede',
            jobTitle: 'Senior Full Stack Engineer & Product Designer',
            worksFor: { '@type': 'Organization', name: 'Robert Bosch GmbH' },
            url: 'https://www.shubhamnarkhede.com',
            image: 'https://www.shubhamnarkhede.com/img/profileintro.webp',
            email: 'mailto:shubhampnarkhede@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Stuttgart', postalCode: '70376', addressCountry: 'DE' },
            alumniOf: [
              { '@type': 'CollegeOrUniversity', name: 'Chemnitz University of Technology' },
              { '@type': 'CollegeOrUniversity', name: 'Rashtrasant Tukadoji Maharaj Nagpur University' },
            ],
            knowsAbout: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Kubernetes', 'Product Design'],
            sameAs: [
              'https://www.linkedin.com/in/spnarkhede/',
              'https://github.com/spnarkhede',
              'https://stackoverflow.com/users/spnarkhede',
              'https://x.com/LetsTrackLife',
              'https://medium.com/@snarkhede',
            ],
          })}
        </script>
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
              <p className={styles.role}>Senior Full Stack Engineer &amp; Product Designer @ Bosch</p>

              <blockquote className={styles.quote}>
                <span className={`${styles.qMark} ${styles.qOpen}`}>&ldquo;</span>
                Build, automate, and ship &mdash; the best systems feel invisible to the user.
                <span className={`${styles.qMark} ${styles.qClose}`}>&rdquo;</span>
                <span className={styles.quoteAuthor}>&mdash; my engineering mantra</span>
              </blockquote>

              <a
                href="/documents/resume/Shubham_Narkhede_July_2026.pdf"
                download={resumeFileName}
                className={styles.resumeButton}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M4 19h16" />
                </svg>
                Download Resume
              </a>

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

              <h2 className={styles.sectionHeadingSide}>Availability</h2>
              <ul className={styles.availGrid}>
                <li className={`${styles.availItem} ${styles.availItemWide}`}>
                  <span className={styles.availLabel}>
                    <span className={styles.availDot} aria-hidden="true" />
                    Status
                  </span>
                  <span className={styles.availValue}>Open for challenging opportunities</span>
                </li>
                <li className={styles.availItem}>
                  <span className={styles.availLabel}>Visa</span>
                  <span className={styles.availValue}>
                    Permanent Residency
                    <span className={styles.availValueSub}>Niederlassungserlaubnis</span>
                  </span>
                </li>
                <li className={styles.availItem}>
                  <span className={styles.availLabel}>Notice Period</span>
                  <span className={styles.availValue}>Min. 1&ndash;3 months</span>
                </li>
                <li className={styles.availItem}>
                  <span className={styles.availLabel}>Relocation</span>
                  <span className={styles.availValue}>Germany</span>
                </li>
                <li className={styles.availItem}>
                  <span className={styles.availLabel}>Work Model</span>
                  <span className={styles.availValue}>Remote &middot; Hybrid &middot; Onsite</span>
                </li>
              </ul>

              <h2 className={styles.sectionHeadingSide}>Languages</h2>
              <ul className={styles.langList}>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagUk}`} aria-hidden="true" />
                    <span className={styles.langName}>English</span>
                  </span>
                  <span className={styles.langLevel}>Fluent (C1)</span>
                </li>
                <li className={styles.langItem}>
                  <span className={styles.langLeft}>
                    <span className={`${styles.flagIcon} ${styles.flagGermany}`} aria-hidden="true" />
                    <span className={styles.langName}>German</span>
                  </span>
                  <span className={styles.langLevel}>Intermediate (B1)</span>
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
                  { src: '/img/badges/generative-ai-overview-for-project-managers.webp', label: 'Generative AI Overview — PMI', url: 'https://www.credly.com/badges/e771ecf8-64e4-4a3c-985b-d2821e8e3ea7/public_url' },
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
                <strong>Senior Full-Stack Software Engineer</strong> with {yearsOfExperience}+ years of experience
                building scalable software systems across enterprise environments like
                <strong> Bosch</strong> and <strong>Amazon</strong>, based in Germany. Specialized
                in frontend-led product engineering &mdash; combining system thinking with user
                experience &mdash; with deep expertise in <strong>React</strong>,
                <strong> TypeScript</strong>, <strong>Angular</strong>, <strong>Vue.js</strong>,
                <strong> Node.js</strong>, <strong>Python (FastAPI)</strong>, and cloud platforms
                like <strong>AWS</strong> and <strong>Azure</strong>.
              </p>
              <p className={styles.summaryText}>
                Proven end-to-end feature ownership &mdash; from design discussions with product
                teams to implementation, deployment, and production monitoring. Built scalable
                frontend architectures and component systems adopted across multiple enterprise
                platforms, backed by standard DevOps practices: CI/CD automation, containerization
                with Docker and Kubernetes, automated testing, zero-downtime deployments, and
                production observability. Recently exploring AI-enabled development workflows and
                shipping side projects that keep me close to fast iteration and end-user feedback.
              </p>
              <p className={styles.summaryText}>
                Proven track record of owning end-to-end feature delivery from concept to
                production, automating complex workflows, and mentoring developers in
                cross-functional teams. Strong in balancing product trade-offs, maintaining high
                code quality, and improving developer productivity while managing multiple
                responsibilities simultaneously.
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
                  role="Senior Full Stack Engineer & Product Designer"
                  company="Robert Bosch GmbH"
                  dates={<>Jul 2022 &mdash; <span className={styles.presentText}>Present</span></>}
                  location="Stuttgart-Feuerbach, Germany"
                  bullets={[
                    'Architected end-to-end full-stack features using TypeScript, React, Angular, Vue.js, Node.js, and Python with scalable modular patterns — establishing frontend standards adopted by 30+ engineers across 5 enterprise platforms.',
                    'Designed and deployed high-volume data visualization dashboards with React, D3.js, and Canvas API, processing 10,000+ data points/second at 60fps for the CPMS — delivering real-time charging session monitoring, live power curves, and station health metrics for 30 countries.',
                    'Built real-time geospatial monitoring interfaces with React, WebSockets, and Leaflet.js, rendering 50,000+ dynamic charging points at sub-300ms latency, enabling live location tracking and status (available/charging/fault) visualization.',
                    'Implemented RESTful and GraphQL APIs using Node.js and Python FastAPI to serve frontend clients, handling complex queries and real-time state synchronization.',
                    'Engineered CI/CD pipelines (GitHub Actions) with zero-downtime deployments, integrated Playwright E2E testing covering 80%+ user journeys — achieving 95% pass rates and reducing production bugs by 20%.',
                    'Enforced OAuth2, OIDC, and JWT authentication flows, improving access management efficiency by 40%.',
                    'Drove Gen AI adoption across product teams, accelerating feature delivery by 50% via intelligent tooling (Copilot, Cursor, n8n).',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/rexroth.png" alt="Bosch Rexroth AG" className={styles.expLogoImg} />}
                  role="Full Stack Software Developer"
                  company="Bosch Rexroth AG"
                  dates="Apr 2020 — Jun 2022"
                  location="Ulm, Germany"
                  bullets={[
                    'Delivered 6 full-stack applications using Angular, React, TypeScript, Node.js, and Python for 600+ global partners — integrating REST/SOAP APIs and real-time data feeds to improve product transparency and increase partner onboarding efficiency by 16% within 9 months.',
                    'Automated partner onboarding through API-driven workflows, reducing onboarding time from 2 weeks to 3 days and increasing operational productivity by 23%.',
                    'Engineered an Angular/.NET Core Product Selector with SAP integration, 3D asset visualization, and real-time product configuration — deployed to 100+ partners, reducing configuration time from 2 hours to 30 minutes per setup.',
                    'Architected a real-time IoT video integration platform streaming at <150ms latency, adopted by 600+ global partners, enabling reliable low-latency hardware-software communication and distributed real-time collaboration.',
                    'Led the migration to Azure-based microservices (20-service decomposition) and implemented CI/CD pipelines using Jenkins and Docker — reducing deployment time from 4 hours to 36 minutes, lowering infrastructure costs by 40%, and improving system availability to 99.8% uptime.',
                    'Built a Vue.js component library aligned with a Figma design system, delivering 45+ reusable dashboard and visualization components adopted by 4 product teams — reducing code redundancy by 35% and increasing sprint velocity by 18%.',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/amazon.png" alt="Amazon" className={styles.expLogoImg} />}
                  role="Software Developer — Associate"
                  company="Amazon"
                  dates="Apr 2019 — Mar 2020"
                  location="Leipzig, Germany"
                  bullets={[
                    'Delivered scalable internal tools (TypeScript, Node.js, Java, Spring Boot), improving operational efficiency by 30% across fulfillment and logistics operations.',
                    'Designed RESTful APIs handling high-throughput workflows, applied test-driven development (Jest, unit testing) and code reviews (50+ reviews) to reduce production incidents by 20%.',
                    'Accelerated cross-functional delivery by 25% through agile sprint planning, collaborating with UX, product, and engineering teams on feature prioritization and rapid prototyping.',
                  ]}
                />
              </div>
            </section>

            {/* SKILLS */}
            <section className={styles.section}>
              <span className={styles.sectionDot} aria-hidden="true" />
              <h2 className={styles.sectionTitle}> Technical Skills</h2>

              {[
                {
                  label: 'Frontend',
                  icon: <CodeIcon />,
                  skills: [
                    { name: 'React', slug: 'react' },
                    { name: 'Vue.js', slug: 'vuedotjs' },
                    { name: 'Angular', slug: 'angular' },
                    { name: 'TypeScript', slug: 'typescript' },
                    { name: 'JavaScript (ES6+)', slug: 'javascript' },
                    { name: 'Redux', slug: 'redux' },
                    { name: 'Pinia', slug: 'pinia' },
                    { name: 'Next.js', slug: 'nextdotjs' },
                    { name: 'Vite', slug: 'vite' },
                    { name: 'Tailwind CSS', slug: 'tailwindcss' },
                    { name: 'HTML5 / CSS3', slug: 'css3' },
                  ],
                },
                {
                  label: 'AI & Security',
                  icon: <BoltIcon />,
                  skills: [
                    { name: 'LLM' },
                    { name: 'Claude', slug: 'claude' },
                    { name: 'Gemini', slug: 'googlegemini' },
                    { name: 'Copilot', slug: 'githubcopilot' },
                    { name: 'Cursor' },
                    { name: 'n8n', slug: 'n8n' },
                    { name: 'SSO / OAuth' },
                    { name: 'JWT', slug: 'jsonwebtokens' },
                    { name: 'OpenID', slug: 'openid' },
                    { name: 'WebAuthn' },
                  ],
                },
                {
                  label: 'Backend & APIs',
                  icon: <CodeIcon />,
                  skills: [
                    { name: 'Node.js', slug: 'nodedotjs' },
                    { name: 'Python (FastAPI, Flask)', slug: 'python' },
                    { name: 'PHP (Symfony)', slug: 'symfony' },
                    { name: 'REST APIs' },
                    { name: 'GraphQL', slug: 'graphql' },
                    { name: 'Microservices' },
                    { name: 'WebSockets' },
                    { name: 'Socket.io', slug: 'socketdotio' },
                    { name: 'gRPC' },
                    { name: 'OCPP' },
                  ],
                },
                {
                  label: 'Database',
                  icon: <DesignIcon />,
                  skills: [
                    { name: 'PostgreSQL', slug: 'postgresql' },
                    { name: 'MySQL', slug: 'mysql' },
                    { name: 'MongoDB', slug: 'mongodb' },
                    { name: 'Redis', slug: 'redis' },
                    { name: 'RabbitMQ', slug: 'rabbitmq' },
                  ],
                },
                {
                  label: 'Testing & Quality',
                  icon: <DesignIcon />,
                  skills: [
                    { name: 'Playwright', slug: 'playwright' },
                    { name: 'Jest', slug: 'jest' },
                    { name: 'Vitest', slug: 'vitest' },
                    { name: 'E2E' },
                    { name: 'TDD' },
                    { name: 'Postman', slug: 'postman' },
                    { name: 'Swagger', slug: 'swagger' },
                    { name: 'WCAG Accessibility' },
                  ],
                },
                {
                  label: 'DevOps & CI/CD',
                  icon: <DesignIcon />,
                  skills: [
                    { name: 'Azure DevOps', slug: 'microsoftazure' },
                    { name: 'GitHub Actions', slug: 'githubactions' },
                    { name: 'Jenkins', slug: 'jenkins' },
                    { name: 'Docker', slug: 'docker' },
                    { name: 'Kubernetes', slug: 'kubernetes' },
                    { name: 'AWS', src: '../../build/img/aws.png' },
                    { name: 'Grafana', slug: 'grafana' },
                    { name: 'Git', slug: 'git' },
                  ],
                },
                {
                  label: 'Designer',
                  icon: <DesignIcon />,
                  skills: [
                    { name: 'Figma', slug: 'figma' },
                    { name: 'Sketch', slug: 'sketch' },
                    { name: 'Adobe XD' },
                    { name: 'Balsamiq' },
                    { name: 'Canva', slug: 'canva' },
                    { name: 'Miro', slug: 'miro' },
                    { name: 'Notion', slug: 'notion' },
                    { name: 'Wireframing' },
                    { name: 'Prototyping' },
                  ],
                },
                {
                  label: 'Agile & Collaboration',
                  icon: <DesignIcon />,
                  skills: [
                    { name: 'Scrum' },
                    { name: 'Kanban' },
                    { name: 'Jira', slug: 'jira' },
                    { name: 'Confluence', slug: 'confluence' },
                    { name: 'Design Systems' },
                    { name: 'Docusaurus', slug: 'docusaurus' },
                    { name: 'InnerSource' },
                    { name: 'VitePress', slug: 'vitepress' },
                  ],
                },
              ].map((row) => (
                <SkillRow key={row.label} icon={row.icon} label={row.label} skills={row.skills} />
              ))}
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
                    <span className={styles.eduLogo}><img src="../../build/img/aws.png" alt="AWS" className={styles.eduLogoImg} /></span>
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
                      {['Angular', 'TypeScript', 'Vite', 'REST APIs', 'OCPP', 'Docker', 'AWS'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Real-time operator interface processing 10K+ OCPP messages/sec at sub-200ms latency across 8 European markets. (Bosch eMobility R&amp;D)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Charge Point Management System (CPMS)</h3>
                    <div className={styles.projTags}>
                      {['React', 'Vue.js', 'TypeScript', 'PHP (Symfony)', 'MySQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Micro-frontend architecture dashboards and Symfony backend for 450,000+ charge points across 30 countries, 99.9% uptime. (Bosch GmbH)
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
                      {['React', 'TypeScript', 'Leaflet.js', 'REST APIs', 'WebSockets'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                      {['React', 'TypeScript', 'D3.js', 'WebSockets', 'Canvas API'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                      {['Vue.js', 'Pinia', 'TypeScript', 'Vite', 'PHP (Symfony)', 'MySQL', '3D MAPs', 'SAP'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      SAP-connected product catalog — 100+ global partners, 35% faster configuration, 200+ manual requests eliminated monthly. (Bosch Rexroth)
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
                      {['Angular', 'TypeScript', 'PHP', 'MySQL', 'Azure', 'Kubernetes', 'Docker'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      Multi-tenant PM system — 1,000+ users, 22% faster project cycles. (Bosch Rexroth)
                    </p>
                    <a className={styles.projLink} href="/recruiter-dashboard/projects">
                      <LinkIcon /> View case study
                    </a>
                  </div>
                </div>

                <div className={styles.projCard}>
                  <span className={styles.projLogo}><BoschRexrothLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Virtual Streaming Platform</h3>
                    <div className={styles.projTags}>
                      {['Vue.js', 'TypeScript', 'Node.js', 'WebRTC', 'WebSockets', 'OBS', 'Green Room'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      COVID-era live streaming platform — 500+ direct streaming lines for sales engineers across 40+ countries, with OBS &amp; Green Room integration, chats, bots, interactive rooms, webinars, and product demonstrations. Saved &euro;14M over 3 years. (Bosch Rexroth)
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
                      {['React', 'Vue.js', 'TypeScript', 'OAuth', 'REST APIs', 'Figma'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                      {['Next.js', 'TypeScript', 'React', 'Supabase', 'Cloudflare', 'AI/LLM APIs'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
                    </div>
                    <p className={styles.projDesc}>
                      AI-powered job matching &amp; resume review platform, live in Germany. End-to-end solo build.
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