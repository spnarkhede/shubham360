import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './now.module.css';

const sections = [
  {
    title: 'Building',
    items: [
      'Real-time charging infrastructure software (CPMS) at Robert Bosch GmbH — dashboards monitoring 450,000+ charge points across 30 countries.',
      'Chase My Career — an AI-powered job matching and resume review platform, live in Germany as an end-to-end solo build.',
    ],
  },
  {
    title: 'Learning',
    items: [
      'AI-enabled development workflows — agentic coding tools, prompt systems, and automation with n8n.',
      'German language — working from B1 toward B2.',
    ],
  },
  {
    title: 'Reading & Writing',
    items: [
      'Reading and reviewing books — latest reviews are on the Books page.',
      'Summarizing what I learn into guides and system prompts in the PromptVault.',
    ],
  },
];

export default function Now() {
  return (
    <Layout
      title="Now"
      description="What Shubham Narkhede is focused on right now — current projects, learning, and interests."
    >
      <main className={styles.nowWrapper}>
        <div className={styles.nowInner}>
          <h1 className={styles.nowTitle}>What I&rsquo;m doing now</h1>
          <p className={styles.nowUpdated}>Updated July 2026 &middot; Stuttgart, Germany</p>
          <p className={styles.nowIntro}>
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a> —
            a snapshot of where my time and attention actually go, beyond the job title.
          </p>

          {sections.map((section) => (
            <section key={section.title} className={styles.nowSection}>
              <h2 className={styles.nowHeading}>{section.title}</h2>
              <ul className={styles.nowList}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <p className={styles.nowFooter}>
            Want to talk about any of this? <Link to="/contact">Get in touch</Link>.
          </p>
        </div>
      </main>
    </Layout>
  );
}
