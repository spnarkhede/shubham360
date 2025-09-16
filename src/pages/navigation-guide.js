import React from 'react';
// import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './navigation-guide.module.css';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function NavigationGuide() {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationGuideContainer}>
        <div className={styles.guideHeader}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Welcome
          </Link>
          
          <h1 className={styles.guideTitle}>Choose Your Path</h1>
          <p className={styles.guideDescription}>
            Select the option that best describes you to personalize your experience:
          </p>
        </div>
        
        <div className={styles.roleCardsRow}>
          <Link to="/recruitment-specialist" className={styles.roleCard}>
            <div className={styles.roleCardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleTitle}>Recruitment Specialist</h2>
              <p className={styles.roleDescription}>
                For hiring managers and recruiters looking for skilled professionals
              </p>
              <div className={styles.roleCardFooter}>
                <span className={styles.viewProfileText}>View Profile</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
          
          <Link to="/tech-enthusiast" className={styles.roleCard}>
            <div className={styles.roleCardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleTitle}>Tech Enthusiast</h2>
              <p className={styles.roleDescription}>
                For developers and technical professionals interested in technical insights
              </p>
              <div className={styles.roleCardFooter}>
                <span className={styles.viewProfileText}>View Profile</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
          
          <Link to="/curious-visitor" className={styles.roleCard}>
            <div className={styles.roleCardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleTitle}>Curious Visitor</h2>
              <p className={styles.roleDescription}>
                For those who want to explore my journey, discoveries, and diverse interests
              </p>
              <div className={styles.roleCardFooter}>
                <span className={styles.viewProfileText}>View Profile</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
          
          <Link to="/growth-partner" className={styles.roleCard}>
            <div className={styles.roleCardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleTitle}>Growth Partner</h2>
              <p className={styles.roleDescription}>
                For those interested in collaboration, mentorship, and partnership opportunities
              </p>
              <div className={styles.roleCardFooter}>
                <span className={styles.viewProfileText}>View Profile</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>

          <Link to="/product-designer" className={styles.roleCard}>
            <div className={styles.roleCardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                <path d="m9 16 1.5-1.5L12 16l1.5-1.5L15 16"></path>
                <path d="m9 8 1.5 1.5L12 8l1.5 1.5L15 8"></path>
              </svg>
            </div>
            <div className={styles.roleCardContent}>
              <h2 className={styles.roleTitle}>Product Designer</h2>
              <p className={styles.roleDescription}>
                For those interested in design thinking, creative solutions, and visual storytelling
              </p>
              <div className={styles.roleCardFooter}>
                <span className={styles.viewProfileText}>View Profile</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
        </div>
        
        <div className={styles.guideFooter}>
          <p className={styles.guideNote}>
            Each path provides a tailored experience based on your interests, 
            but all content remains accessible regardless of your selection.
          </p>
        </div>
      </div>
    </div>
  );
}