import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Github, Linkedin, Mail, BookOpen, Instagram, Globe, FileText, FileCode } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="hero fade-in">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <div>
              <h1 className="hero__title">Shubham Narkhede</h1>
              <p className="hero__subtitle">Senior Full-Stack Developer — TypeScript, Node.js & React</p>
              <p>
                I build production-grade web platforms — 7+ years shipping software for automotive,
                e-mobility, and e-commerce, currently developing connected-vehicle and EV-charging
                systems at Robert Bosch GmbH. Backed by deep DevOps expertise: AWS, Docker,
                Kubernetes, and end-to-end CI/CD automation.
              </p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shubhampnarkhede@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Email Contact">
                <Mail size={20} />
              </a>
              <a href="/books" className="social-link" aria-label="Book Reviews">
                <BookOpen size={20} />
              </a>
              <a href="/articles" className="social-link" aria-label="Technical Articles">
                <FileCode size={20} />
              </a>
              <a href="https://instagram.com/spnarkhede" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <Instagram size={20} />
              </a>
              <a href="/Portfolio/Resume" className="social-link" aria-label="Resume">
                <FileText size={20} />
              </a>
              <a href="https://guide-book.vercel.app" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Guide Book">
                <Globe size={20} />
              </a>
            </div>
           
            <div className="button-container" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <Link className="button button--primary" to="/Portfolio/Resume">
                View Resume
              </Link>
              <Link className="button button--secondary" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="col col--5">
            <img 
              src="/img/profilesquare.webp" 
              srcSet="/img/profilesquare-small.webp 400w, /img/profilesquare-medium.webp 800w, /img/profilesquare.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
              loading="lazy"
              alt="Shubham Narkhede" 
              className="hero-image"
              style={{
                float: 'right',
                maxWidth: '60%',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="../../../static/img/profile.webp";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Also provide default export for flexibility
export default HeroSection;