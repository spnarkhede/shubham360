import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const TOPICS = [
  { id: 'all',         label: 'All Sections',    color: '#6b7280' },
  { id: 'consent',     label: 'Consent Flow',     color: '#8B5CF6' },
  { id: 'otp-auth',    label: 'OTP Auth',         color: '#4d8ece' },
  { id: 'deletion',    label: 'Data Deletion',    color: '#ef476f' },
  { id: 'crossborder', label: 'Cross-Border',     color: '#00a676' },
  { id: 'children',    label: 'Children Data',    color: '#ffc233' },
  { id: 'grievance',   label: 'Grievance Officer',color: '#f97316' },
];

const DEFINITIONS = [
  { term: 'Personal Data',            def: 'Any data that can identify a natural person — name, email, phone, IP address, location, device ID, biometric data, health records, financial info.' },
  { term: 'Data Principal',           def: 'The individual (user) whose personal data is being processed. They hold rights under the Act.' },
  { term: 'Data Fiduciary',           def: 'Any entity — individual, company, startup, app — that determines the purpose and means of processing personal data.' },
  { term: 'Data Processor',           def: 'Any entity that processes personal data on behalf of a Data Fiduciary (e.g. AWS, Firebase, Supabase, Razorpay).' },
  { term: 'Significant Data Fiduciary (SDF)', def: 'Data Fiduciaries designated by the Central Government based on volume, sensitivity, or national security risk. Higher compliance obligations.' },
  { term: 'Consent Manager',          def: 'A registered entity that facilitates consent collection, management, and withdrawal between Data Principals and Fiduciaries.' },
  { term: 'Data Protection Board',    def: 'Adjudicatory body constituted by the Central Government to handle complaints and impose penalties.' },
];

const APPLICABILITY = [
  { id: 'q01', text: 'Does your app/website collect name, email, phone number, or any identifier from Indian users?' },
  { id: 'q02', text: 'Does your app process location data, device IDs, or IP addresses of Indian users?' },
  { id: 'q03', text: 'Does your SaaS platform store user account data on any server (including cloud)?' },
  { id: 'q04', text: 'Does your app use OTP-based authentication using phone numbers?' },
  { id: 'q05', text: 'Does your platform use analytics tools (Google Analytics, Mixpanel, Amplitude) on Indian users?' },
  { id: 'q06', text: 'Does your product serve users who could be under the age of 18?' },
  { id: 'q07', text: 'Does your app collect health, financial, or biometric data in any form?' },
  { id: 'q08', text: 'Does your app use third-party SDKs (Firebase, Crashlytics, Segment) that may collect user data?' },
];

const CHECKLIST = [
  {
    id: 'consent', topic: 'consent', title: 'Consent Flow',
    desc: 'Lawful, informed, and revocable consent must be obtained before processing any personal data.',
    items: [
      { id: 'c01', text: 'Consent notice is in plain language — no legalese or bundled terms.' },
      { id: 'c02', text: 'Consent is purpose-specific — each data use has a separately named consent item.' },
      { id: 'c03', text: 'Consent is obtained before any data is collected — no retroactive consent.' },
      { id: 'c04', text: 'Bundled or conditional consent ("sign up to agree to all") is not used.' },
      { id: 'c05', text: 'A withdrawal mechanism exists that is as easy to use as giving consent.' },
      { id: 'c06', text: 'Consent timestamps and version numbers are stored with user records.' },
      { id: 'c07', text: 'Consent notice is available in the language the user understands.' },
      { id: 'c08', text: 'Users are notified when consent is used for a new or changed purpose.' },
    ],
  },
  {
    id: 'otp-auth', topic: 'otp-auth', title: 'OTP Authentication',
    desc: 'Phone number collection via OTP triggers data protection obligations from the first interaction.',
    items: [
      { id: 'o01', text: 'Consent notice is shown before the user enters their phone number for OTP.' },
      { id: 'o02', text: 'The purpose for collecting the phone number is explicitly stated at signup.' },
      { id: 'o03', text: 'OTP transaction logs do not store more data than strictly needed.' },
      { id: 'o04', text: 'Phone numbers are not shared with third-party marketing platforms without separate consent.' },
      { id: 'o05', text: 'Users can request deletion of their phone number from your records.' },
      { id: 'o06', text: 'OTP delivery logs are retained only for the minimum required period.' },
    ],
  },
  {
    id: 'deletion', topic: 'deletion', title: 'Data Deletion & Erasure',
    desc: 'Data Principals have the right to erasure. Your product must support this technically and operationally.',
    items: [
      { id: 'd01', text: 'A self-service "Delete My Account" or "Erase My Data" option exists in the product.' },
      { id: 'd02', text: 'Data is fully deleted (not just deactivated) when the user requests erasure.' },
      { id: 'd03', text: 'Downstream processors (AWS, Firebase, etc.) are instructed to delete data on request.' },
      { id: 'd04', text: 'Backups and logs containing personal data are purged per a documented retention schedule.' },
      { id: 'd05', text: 'Personal data is deleted automatically when the purpose for collection is fulfilled.' },
      { id: 'd06', text: 'A documented data deletion process exists and is available to support staff.' },
      { id: 'd07', text: 'Deletion requests are acknowledged and completed within the prescribed timeframe.' },
    ],
  },
  {
    id: 'crossborder', topic: 'crossborder', title: 'Cross-Border Data Transfers',
    desc: 'Transferring Indian user data outside India requires compliance with DPDP Act transfer rules.',
    items: [
      { id: 'x01', text: 'Every country where Indian user data is stored or processed has been identified.' },
      { id: 'x02', text: 'Data is only transferred to countries/territories permitted under DPDP Act rules.' },
      { id: 'x03', text: 'Cross-border transfer destinations are disclosed in the consent notice.' },
      { id: 'x04', text: 'Contracts with overseas processors include obligations to comply with the DPDP Act.' },
      { id: 'x05', text: 'SaaS tools (CDNs, email delivery, analytics) routing Indian data are documented.' },
      { id: 'x06', text: 'A data flow map exists showing all cross-border data movements.' },
    ],
  },
  {
    id: 'children', topic: 'children', title: "Children's Data",
    desc: 'Processing data of users under 18 requires verifiable parental consent and additional safeguards.',
    items: [
      { id: 'k01', text: 'Age verification exists before collecting data from users who may be under 18.' },
      { id: 'k02', text: 'Verifiable parental consent is obtained for users confirmed or suspected to be under 18.' },
      { id: 'k03', text: 'Behavioral monitoring and tracking are disabled for minor users.' },
      { id: 'k04', text: 'Targeted advertising is not served to users identified as children.' },
      { id: 'k05', text: "No processing of children's data that could adversely affect their wellbeing." },
      { id: 'k06', text: "Parental consent withdrawal removes the child's data and access." },
    ],
  },
  {
    id: 'grievance', topic: 'grievance', title: 'Grievance Officer & DPO',
    desc: 'A designated contact point for data-related grievances is mandatory under the Act.',
    items: [
      { id: 'g01', text: 'A Grievance Officer (or DPO for Significant Data Fiduciaries) is formally appointed.' },
      { id: 'g02', text: "Grievance Officer's name and contact details are published on the website and app." },
      { id: 'g03', text: 'A grievance submission mechanism (form, email, or portal) is accessible from the product.' },
      { id: 'g04', text: 'Grievances are acknowledged within the prescribed timeframe.' },
      { id: 'g05', text: 'Records of all grievances received, investigated, and resolved are maintained.' },
      { id: 'g06', text: 'Escalation path to the Data Protection Board is documented and accessible to users.' },
    ],
  },
];

function topicColor(id) {
  return TOPICS.find(t => t.id === id)?.color ?? '#6b7280';
}

export default function DPDPAct() {
  const [activeTopic, setActiveTopic]         = useState('all');
  const [checkedItems, setCheckedItems]         = useState(new Set());
  const [applicability, setApplicability]       = useState({});

  const toggleItem = (id) =>
    setCheckedItems(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const toggleApplicability = (id) =>
    setApplicability(prev => ({ ...prev, [id]: prev[id] === 'yes' ? null : 'yes' }));

  const isDataFiduciary   = Object.values(applicability).includes('yes');
  const hasAnsweredAny    = Object.keys(applicability).length > 0;

  const visibleSections = useMemo(
    () => activeTopic === 'all' ? CHECKLIST : CHECKLIST.filter(s => s.topic === activeTopic),
    [activeTopic],
  );

  const totalItems    = CHECKLIST.reduce((s, sec) => s + sec.items.length, 0);
  const checkedCount  = checkedItems.size;
  const overallPct    = totalItems ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <Layout
      title="DPDP Act 2023 — Technical Compliance Checklist"
      description="India's Digital Personal Data Protection Act 2023 — technical compliance checklist for software products, SaaS platforms, and mobile applications."
    >
      <div className={styles.page}>

        {/* ─── Hero ─── */}
        <div className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              India &nbsp;·&nbsp; August 11, 2023 &nbsp;·&nbsp; Gazette of India
            </div>
            <h1 className={styles.heroTitle}>
              DPDP <span className={styles.heroAccent}>Act 2023</span>
            </h1>
            <p className={styles.heroSubtitle}>Digital Personal Data Protection Act</p>
            <p className={styles.heroDesc}>
              Technical Compliance Checklist for Software Products, SaaS Platforms &amp; Mobile Applications
            </p>
            <div className={styles.topicPills}>
              {TOPICS.filter(t => t.id !== 'all').map(t => (
                <button
                  key={t.id}
                  className={styles.topicPill}
                  style={{ '--pill-color': t.color }}
                  data-active={activeTopic === t.id}
                  onClick={() => setActiveTopic(prev => prev === t.id ? 'all' : t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.metaBadge}>Penalties up to ₹250 Crore</span>
              <span className={styles.metaBadge}>Replaces IT Act 2000</span>
              <span className={styles.metaBadge}>Applies to Indian Users' Data</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>

          {/* ─── Section 01: Definitions ─── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum}>01</span>
              <div>
                <h2 className={styles.sectionTitle}>What is the DPDP Act 2023?</h2>
                <p className={styles.sectionDesc}>
                  India's first comprehensive data protection law — key terms every builder must know.
                </p>
              </div>
            </div>
            <div className={styles.definitionsGrid}>
              {DEFINITIONS.map(({ term, def }) => (
                <div key={term} className={styles.definitionCard}>
                  <div className={styles.definitionTerm}>{term}</div>
                  <div className={styles.definitionDef}>{def}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Section 02: Applicability Test ─── */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNum}>02</span>
              <div>
                <h2 className={styles.sectionTitle}>Are You a Data Fiduciary?</h2>
                <p className={styles.sectionDesc}>
                  Answer YES to any one question and the full Act applies to you.
                </p>
              </div>
            </div>
            <div className={styles.applicabilityList}>
              {APPLICABILITY.map(({ id, text }, i) => (
                <button
                  key={id}
                  className={styles.applicabilityRow}
                  data-checked={applicability[id] === 'yes'}
                  onClick={() => toggleApplicability(id)}
                >
                  <span className={styles.applicabilityNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.applicabilityText}>{text}</span>
                  <span className={styles.applicabilityToggle} data-yes={applicability[id] === 'yes'}>
                    {applicability[id] === 'yes' ? 'YES' : 'NO'}
                  </span>
                </button>
              ))}
            </div>
            {hasAnsweredAny && (
              <div className={styles.applicabilityResult} data-fiduciary={isDataFiduciary}>
                {isDataFiduciary
                  ? 'You are a Data Fiduciary. The full DPDP Act 2023 compliance checklist below applies to you.'
                  : 'Based on your answers so far, you may not be a Data Fiduciary. Review all questions carefully before concluding.'}
              </div>
            )}
          </section>

          {/* ─── Overall Progress ─── */}
          <div className={styles.progressBanner}>
            <div className={styles.progressTop}>
              <span className={styles.progressLabel}>Overall Compliance Progress</span>
              <span className={styles.progressCount}>{checkedCount} / {totalItems} items checked</span>
            </div>
            <div className={styles.progressBarWrap}>
              <div className={styles.progressBarFill} style={{ width: `${overallPct}%` }} />
            </div>
            <span className={styles.progressPct}>{overallPct}%</span>
          </div>

          {/* ─── Topic Filter ─── */}
          <div className={styles.filterRow}>
            {TOPICS.map(t => (
              <button
                key={t.id}
                className={styles.filterBtn}
                data-active={activeTopic === t.id}
                style={{ '--pill-color': t.color }}
                onClick={() => setActiveTopic(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ─── Checklist Sections ─── */}
          {visibleSections.map(sec => {
            const checked = sec.items.filter(i => checkedItems.has(i.id)).length;
            const pct     = Math.round((checked / sec.items.length) * 100);
            const color   = topicColor(sec.topic);
            return (
              <section
                key={sec.id}
                className={styles.checklistSection}
                style={{ '--section-color': color }}
              >
                <div className={styles.checklistHeader}>
                  <div className={styles.checklistMeta}>
                    <span
                      className={styles.checklistTag}
                      style={{ color, borderColor: color, background: `${color}1a` }}
                    >
                      {sec.title}
                    </span>
                    <p className={styles.checklistDesc}>{sec.desc}</p>
                  </div>
                  <div className={styles.checklistProg}>
                    <span className={styles.checklistProgLabel}>{checked}/{sec.items.length}</span>
                    <div className={styles.checklistProgBar}>
                      <div
                        className={styles.checklistProgFill}
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                    <span className={styles.checklistProgPct}>{pct}%</span>
                  </div>
                </div>
                <div className={styles.checklistItems}>
                  {sec.items.map(item => (
                    <label
                      key={item.id}
                      className={styles.checklistItem}
                      data-checked={checkedItems.has(item.id)}
                    >
                      <input
                        type="checkbox"
                        className={styles.hiddenCheck}
                        checked={checkedItems.has(item.id)}
                        onChange={() => toggleItem(item.id)}
                      />
                      <span className={styles.checkboxBox} />
                      <span className={styles.checklistItemText}>{item.text}</span>
                    </label>
                  ))}
                </div>
              </section>
            );
          })}

        </div>
      </div>
    </Layout>
  );
}
