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
                  role="Senior Frontend Architect & Full-Stack Developer"
                  company="Robert Bosch GmbH"
                  dates={<>Jul 2022 &mdash; <span className={styles.presentText}>Present</span></>}
                  location="Stuttgart, Germany"
                  bullets={[
                    'Architected scalable frontend systems for connected vehicle and e-mobility platforms — establishing Vue.js and Angular component design systems adopted across 8 European product teams.',
                    'Engineered high-performance UIs: canvas-based charting at 10K+ data points/sec, sub-300ms geospatial map rendering for 50K+ points, and WebSocket-driven real-time dashboards at 60fps.',
                    'Defined frontend architecture standards — Pinia/Vuex state management patterns, API contracts with PHP (Symfony) backends, WCAG 2.1 AA accessibility, and Vite build pipelines.',
                    'Led end-to-end CI/CD delivery on AWS with Docker and Kubernetes via GitHub Actions and GoCD, cutting deployment cycles by 40%+.',
                    'Set engineering standards through architecture reviews, code ownership, and mentorship across multiple product squads.',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/rexroth.png" alt="Bosch Rexroth AG" className={styles.expLogoImg} />}
                  role="Frontend Architect & Fullstack Developer"
                  company="Bosch Rexroth AG"
                  dates="Apr 2020 — Jun 2022"
                  location="Ulm, Germany"
                  bullets={[
                    'Designed and shipped modular Vue.js component libraries and Angular micro-frontends for factory automation teams across Europe, integrated with PHP (Symfony) REST backends.',
                    'Architected the Application Product Selector (APS) with Pinia state management, Vite tooling, and Redis caching — adopted by 100+ global partners, cutting configuration time by 35%.',
                    'Led frontend modernisation from legacy monoliths to Kubernetes-deployed, Vite-built micro-frontends with full CI/CD coverage.',
                    'Partnered with UX designers in Figma to define and enforce a shared component system across all internal and customer-facing portals.',
                  ]}
                />

                <ExperienceRow
                  logo={<img src="/img/amazon.png" alt="Amazon" className={styles.expLogoImg} />}
                  role="Software Developer — Associate"
                  company="Amazon"
                  dates="Apr 2019 — Mar 2020"
                  location="Leipzig, Germany"
                  bullets={[
                    'Built and maintained internal dashboards and tooling for EU fulfillment center operations with a focus on usability and data clarity.',
                    'Automated repetitive operational workflows, reducing manual effort for operations teams and improving monitoring coverage.',
                    'Collaborated with cross-functional teams to deliver production features reliably under strict SLAs.',
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
                  <SkillBadge name="TypeScript" slug="typescript" />
                  <SkillBadge name="JavaScript (ES6+)" slug="javascript" />
                  <SkillBadge name="Vue.js" slug="vuedotjs" />
                  <SkillBadge name="Pinia / Vuex" slug="pinia" />
                  <SkillBadge name="Angular" slug="angular" />
                  <SkillBadge name="React" slug="react" />
                  <SkillBadge name="Next.js" slug="nextdotjs" />
                  <SkillBadge name="Vite" slug="vite" />
                  <SkillBadge name="Tailwind CSS" slug="tailwindcss" />
                  <SkillBadge name="CSS3" slug="css3" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><CodeIcon /></span>
                  Backend
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="Node.js" slug="nodedotjs" />
                  <SkillBadge name="PHP (Symfony)" slug="symfony" />
                  <SkillBadge name="REST APIs" />
                  <SkillBadge name="GraphQL" slug="graphql" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  Database
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="SQL / MySQL" slug="mysql" />
                  <SkillBadge name="Redis" slug="redis" />
                  <SkillBadge name="RabbitMQ" slug="rabbitmq" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  Testing
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="PHPUnit" slug="php" />
                  <SkillBadge name="Jest" slug="jest" />
                  <SkillBadge name="Playwright" slug="playwright" />
                  <SkillBadge name="E2E" />
                  <SkillBadge name="TDD" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  DevOps &amp; Cloud
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="Docker" slug="docker" />
                  <SkillBadge name="Kubernetes" slug="kubernetes" />
                  <SkillBadge name="AWS" src="/img/aws.png" />
                  <SkillBadge name="Azure DevOps" slug="microsoftazure" />
                  <SkillBadge name="GitHub Actions" slug="githubactions" />
                  <SkillBadge name="GoCD" />
                  <SkillBadge name="CI / CD" />
                </div>
              </div>

              <div className={styles.skillRow}>
                <div className={styles.skillLabel}>
                  <span className={styles.skillLabelIcon}><DesignIcon /></span>
                  Design &amp; UX
                </div>
                <div className={styles.skillChips}>
                  <SkillBadge name="Figma" slug="figma" />
                  <SkillBadge name="Design Systems" />
                  <SkillBadge name="Component Libraries" />
                  <SkillBadge name="WCAG 2.1 AA" />
                  <SkillBadge name="Agile / Scrum" />
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
                      {['Angular', 'TypeScript', 'Vite', 'PHP (Symfony)', 'OCPP', 'Docker', 'AWS'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                      Vue.js dashboards and Symfony backend for 450,000+ charge points across 30 countries, 99.9% uptime. (Bosch GmbH)
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
                      {['Vue.js', 'Pinia', 'TypeScript', 'Vite', 'PHP (Symfony)', 'MySQL', 'Redis', 'SAP Integration'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                      {['Vue.js', 'TypeScript', 'PHP (Symfony)', 'MySQL', 'Kubernetes', 'Docker'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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
                  <span className={styles.projLogo}><BoschLogo /></span>
                  <div className={styles.projBody}>
                    <h3 className={styles.projTitle}>Support Portal 2.0</h3>
                    <div className={styles.projTags}>
                      {['Vue.js', 'TypeScript', 'PHP (Symfony)', 'REST APIs', 'Figma'].map(t => <span key={t} className={styles.projTag}>{t}</span>)}
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