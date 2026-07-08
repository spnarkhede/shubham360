import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className={styles.notFoundWrapper}>
        <p className={styles.errorCode}>404</p>
        <Heading as="h1" className={styles.title}>
          This page took a wrong turn.
        </Heading>
        <p className={styles.subtitle}>
          The page you're looking for doesn't exist or has moved. Let's get you
          back somewhere useful.
        </p>
        <div className={styles.linkGrid}>
          <Link to="/landing" className={styles.linkCard}>
            <span className={styles.linkLabel}>Home</span>
            <span className={styles.linkDesc}>Resume-style landing page</span>
          </Link>
          <Link to="/recruiter-dashboard" className={styles.linkCard}>
            <span className={styles.linkLabel}>Recruiter Dashboard</span>
            <span className={styles.linkDesc}>Experience, resume &amp; projects</span>
          </Link>
          <Link to="/blog" className={styles.linkCard}>
            <span className={styles.linkLabel}>Blog</span>
            <span className={styles.linkDesc}>Articles &amp; write-ups</span>
          </Link>
          <Link to="/contact" className={styles.linkCard}>
            <span className={styles.linkLabel}>Contact</span>
            <span className={styles.linkDesc}>Get in touch</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
