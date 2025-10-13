import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { ChevronRight } from 'lucide-react';
import styles from './landing.module.css';

export default function Landing() {
  const slogans = [
    "Learning, leading, delivering.",
    "Shaping my journey, empowering yours.",
    "Designing tomorrow's digital experiences.",
    "Code. Lead. Inspire."
  ];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000); // Matches the 3-second CSS animation duration

    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <div className={styles.landingWrapper}>
      <div className={styles.welcomeScreen}>
        <div className={styles.welcomeContent}>
          <div className={styles.logoContainer}>
            <img 
              src="/img/profilesquare.png"
              alt="Shubham Narkhede Logo" 
              className={styles.logo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/profilesquare.png";
              }}
            />
          </div>
          <h1 className={styles.welcomeTitle}>Shubham Narkhede</h1>
          <p className={styles.welcomeSubtitle}>DevOps Engineer | Software Developer | Product Designer</p>
          
          <div className={styles.sloganCarousel}>
            <p className={styles.slogan} key={currentSloganIndex}>
              {slogans[currentSloganIndex]}
            </p>
          </div>

          <p className={styles.welcomeDescription}>
            Welcome to my professional portfolio showcasing my work, expertise, and creative endeavors.
          </p>
          <Link 
            to="/navigation-guide" 
            className={styles.enterButton}
          >
            Get Started
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}