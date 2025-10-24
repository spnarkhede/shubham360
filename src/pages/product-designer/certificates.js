import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Award, CheckCircle, Calendar, Link, Users, Building } from 'lucide-react';
import { certifications, badges, corporateTrainings } from '../../data/product-designer/certificationData';

export default function ProductDesignerCertificates() {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [activeContent, setActiveContent] = useState('certifications'); // 'certifications', 'badges', or 'corporate'
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Get unique platforms and their counts
  const platformCounts = useMemo(() => {
    const counts = { 'All': certifications.length };
    certifications.forEach(cert => {
      counts[cert.platform] = (counts[cert.platform] || 0) + 1;
    });
    return counts;
  }, [certifications]);

  // Get sorted unique platforms
  const sortedPlatforms = useMemo(() => {
    return Object.keys(platformCounts)
      .filter(platform => platform !== 'All')
      .sort((a, b) => platformCounts[b] - platformCounts[a]);
  }, [platformCounts]);

  // Get filtered certifications based on selected platform
  const filteredCertifications = useMemo(() => {
    if (selectedPlatform === 'All') {
      return certifications;
    }
    return certifications.filter(cert => cert.platform === selectedPlatform);
  }, [certifications, selectedPlatform]);

  // Get unique issuers and their counts for corporate trainings
  const issuerCounts = useMemo(() => {
    const counts = { 'All': corporateTrainings.length };
    corporateTrainings.forEach(training => {
      counts[training.issuer] = (counts[training.issuer] || 0) + 1;
    });
    return counts;
  }, [corporateTrainings]);

  // Get sorted unique issuers
  const sortedIssuers = useMemo(() => {
    return Object.keys(issuerCounts)
      .filter(issuer => issuer !== 'All')
      .sort((a, b) => issuerCounts[b] - issuerCounts[a]);
  }, [issuerCounts]);

  // Get filtered corporate trainings based on selected issuer
  const filteredCorporateTrainings = useMemo(() => {
    if (selectedIssuer === 'All') {
      return corporateTrainings;
    }
    return corporateTrainings.filter(training => training.issuer === selectedIssuer);
  }, [corporateTrainings, selectedIssuer]);

  // Function to render content toggle
  const renderContentToggle = () => (
    <div className={styles.contentToggleContainer}>
      <div className={styles.contentToggleButtons}>
        <button
          className={`${styles.contentToggleButton} ${activeContent === 'certifications' ? styles.active : ''}`}
          onClick={() => setActiveContent('certifications')}
        >
          Certificates <span className={styles.contentCount}>{certifications.length}</span>
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeContent === 'badges' ? styles.active : ''}`}
          onClick={() => setActiveContent('badges')}
        >
          Badges <span className={styles.contentCount}>{badges.length}</span>
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeContent === 'corporate' ? styles.active : ''}`}
          onClick={() => setActiveContent('corporate')}
        >
          Corporate Trainings <span className={styles.contentCount}>{corporateTrainings.length}</span>
        </button>
      </div>
    </div>
  );

  // Function to render platform filter
  const renderPlatformFilter = () => (
    activeContent === 'certifications' && (
      <div className={styles.platformFilterContainer}>
        <div className={styles.platformFilterButtons}>
          <button
            className={`${styles.platformFilterButton} ${styles.all} ${selectedPlatform === 'All' ? styles.active : ''}`}
            onClick={() => setSelectedPlatform('All')}
          >
            All <span className={styles.platformCount}>{platformCounts['All']}</span>
          </button>
          {sortedPlatforms.map(platform => (
            <button
              key={platform}
              className={`${styles.platformFilterButton} ${selectedPlatform === platform ? styles.active : ''}`}
              onClick={() => setSelectedPlatform(platform)}
            >
              {platform} <span className={styles.platformCount}>{platformCounts[platform]}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );

  // Function to render issuer filter
  const renderIssuerFilter = () => (
    activeContent === 'corporate' && (
      <div className={styles.platformFilterContainer}>
        <div className={styles.platformFilterButtons}>
          <button
            className={`${styles.platformFilterButton} ${styles.all} ${selectedIssuer === 'All' ? styles.active : ''}`}
            onClick={() => setSelectedIssuer('All')}
          >
            All <span className={styles.platformCount}>{issuerCounts['All']}</span>
          </button>
          {sortedIssuers.map(issuer => (
            <button
              key={issuer}
              className={`${styles.platformFilterButton} ${selectedIssuer === issuer ? styles.active : ''}`}
              onClick={() => setSelectedIssuer(issuer)}
            >
              {issuer} <span className={styles.platformCount}>{issuerCounts[issuer]}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );

  // Function to render certification cards
  const renderCertificationCards = () => (
    <div className={styles.certificatesGrid}>
      {filteredCertifications.map((cert, index) => (
        <div key={index} className={styles.certificateCard}>
          <div className={styles.certificateHeader}>
            <div className={styles.certificateLogo}>
              <Award size={24} />
            </div>
            <div className={styles.certificateHeaderContent}>
              <h3 className={styles.certificateTitle}>{cert.name}</h3>
              <p className={styles.certificateIssuer}>{cert.issuer}</p>
              <p className={styles.certificatePlatform}>{cert.platform}</p>
              
              <div className={styles.certificateMetadata}>
                <div className={styles.certificateDate}>
                  <Calendar size={12} />
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.certificateBody}>
            <p className={styles.certificateDescription}>{cert.description}</p>

            <div className={styles.certificateSkills}>
              {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.certificateSkill}>
                  <CheckCircle size={10} />
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateVerifyButton}
            >
              <Link size={12} />
              Verify
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render badge cards
  const renderBadgeCards = () => (
    <div className={styles.badgesGrid}>
      {badges.map((badge, index) => (
        <div key={index} className={styles.badgeCard}>
          <div className={styles.badgeImage}>
            <img 
              src={badge.imageUrl} 
              alt={badge.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/default-badge.png";
              }}
            />
          </div>
          <div className={styles.badgeContent}>
            <h3 className={styles.badgeTitle}>{badge.name}</h3>
            <p className={styles.badgeIssuer}>{badge.issuer}</p>
            <p className={styles.badgePlatform}>{badge.platform}</p>
            
            <div className={styles.badgeMetadata}>
              <div className={styles.badgeDate}>
                <Calendar size={12} />
                <span>Awarded: {badge.date}</span>
              </div>
            </div>
            
            <p className={styles.badgeDescription}>{badge.description}</p>
            
            <div className={styles.badgeSkills}>
              {badge.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.badgeSkill}>
                  <CheckCircle size={10} />
                  {skill}
                </span>
              ))}
            </div>
            
            <a
              href={badge.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeVerifyButton}
            >
              <Link size={12} />
              Verify
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render corporate training cards
  const renderCorporateTrainingCards = () => (
    <div className={styles.corporateTrainingsGrid}>
      {filteredCorporateTrainings.map((training, index) => (
        <div key={index} className={styles.corporateTrainingCard}>
          <div className={styles.corporateTrainingHeader}>
            <div className={styles.corporateTrainingLogo}>
              <Building size={24} />
            </div>
            <div className={styles.corporateTrainingHeaderContent}>
              <h3 className={styles.corporateTrainingTitle}>{training.name}</h3>
              <p className={styles.corporateTrainingIssuer}>{training.issuer}</p>
              <p className={styles.corporateTrainingPlatform}>{training.platform}</p>
              
              <div className={styles.corporateTrainingMetadata}>
                <div className={styles.corporateTrainingDate}>
                  <Calendar size={12} />
                  <span>Completed: {training.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.corporateTrainingBody}>
            <p className={styles.corporateTrainingDescription}>{training.description}</p>

            <div className={styles.corporateTrainingSkills}>
              {training.skills.slice(0, 3).map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.corporateTrainingSkill}>
                  <Users size={10} />
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={training.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.corporateTrainingVerifyButton}
            >
              <Link size={12} />
              Verify
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render the active content
  const renderActiveContent = () => {
    switch (activeContent) {
      case 'certifications':
        return renderCertificationCards();
      case 'badges':
        return renderBadgeCards();
      case 'corporate':
        return renderCorporateTrainingCards();
      default:
        return renderCertificationCards();
    }
  };

  return (
    <DashboardLayout
      role="product-designer"
      activeTab="certificates"
      title="Product Designer | Certificates"
      description="Explore Shubham Narkhede's design certifications, badges, and corporate training programs"
    >
      <SectionTemplate
        title="Design Credentials"
        subtitle="Certifications, badges, and training that validate my design expertise"
      >
        <div className={styles.certificationsIntro}>
          <p>
            As a product designer, I continuously invest in expanding my knowledge and skills through 
            certifications, specialized training, and industry recognition. These credentials demonstrate 
            my commitment to excellence in design and staying current with the latest methodologies and tools.
          </p>
        </div>

        {renderContentToggle()}
        {renderPlatformFilter()}
        {renderIssuerFilter()}
        {renderActiveContent()}
      </SectionTemplate>
    </DashboardLayout>
  );
}