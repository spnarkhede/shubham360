import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import {
  ArrowRight,
  MapPin,
  BadgeCheck,
  CalendarClock,
  Laptop,
  Plane,
  Layers,
  MonitorSmartphone,
  Server,
  Workflow,
  FlaskConical,
  PenTool,
  Cloud,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { introData } from '../../data/recruiter-dashboard/content';

const factIcons = {
  availability: null, // rendered as a live pulse dot instead of an icon
  visa: BadgeCheck,
  notice: CalendarClock,
  location: MapPin,
  workModel: Laptop,
  relocation: Plane,
};

const expertiseIcons = {
  fullstack: Layers,
  frontend: MonitorSmartphone,
  backend: Server,
  devops: Workflow,
  testing: FlaskConical,
  design: PenTool,
  cloud: Cloud,
  leadership: Users,
  security: ShieldCheck,
};

export default function RecruiterDashboardIntroduction() {
  // Calculate years of experience dynamically from April 2019 to current date
  const startDate = new Date('2019-04-01');
  const currentDate = new Date();
  const diffMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const totalYears = Math.floor(diffMonths / 12) + (diffMonths % 12) / 12;
  const shortExperienceString = `${totalYears.toFixed(1)} years`;

  return (
    <DashboardLayout
      role="recruiter-dashboard"
      activeTab="introduction"
      title="Recruiter Dashboard | Introduction"
      description="Information for hiring managers and recruiters about Shubham Narkhede's professional background"
    >
      <SectionTemplate
        title="Professional Summary"
        subtitle={`Senior Full-Stack Developer with ${shortExperienceString} of experience in Germany — TypeScript, Node.js & React`}
      >
        <div className={styles.introductionContent}>
          <div className={styles.profileImageContainer}>
            <img
              src="/img/profileintro-thumb.webp"
              srcSet="/img/profileintro-small.webp 400w, /img/profileintro-medium.webp 800w, /img/profileintro.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
              loading="lazy"
              alt="Shubham Narkhede"
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '../../../static/img/profile.webp';
              }}
            />
          </div>

          <div className={styles.profileSummary}>
            {introData.summaryParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.summaryText}>
                {paragraph}
              </p>
            ))}

            <div className={styles.statStrip}>
              {introData.stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statValue}>
                    {stat.dynamic ? totalYears.toFixed(1) : stat.value}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  {stat.note && <span className={styles.statNote}>{stat.note}</span>}
                </div>
              ))}
            </div>

            <div className={styles.ctaButtons}>
              <a
                href="/documents/resume/ShubhamNarkhede_CV_Frontend.pdf"
                download
                className={styles.primaryButton}
              >
                Download Resume
                <ArrowRight size={16} />
              </a>
              <Link to="/recruiter-dashboard/resume" className={styles.secondaryButton}>
                All Resume Versions
              </Link>
              <Link to="/contact" className={styles.secondaryButton}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Hiring Snapshot"
        subtitle="Everything a recruiter checks first — at a glance"
      >
        <div className={styles.glanceGrid}>
          {introData.hiringFacts.map((fact) => {
            const Icon = factIcons[fact.icon];
            return (
              <div key={fact.label} className={styles.glanceCard}>
                <span className={styles.glanceIconWrap} aria-hidden="true">
                  {Icon ? <Icon size={18} /> : <span className={styles.pulseDot} />}
                </span>
                <div className={styles.glanceBody}>
                  <span className={styles.glanceLabel}>{fact.label}</span>
                  <span className={styles.glanceValue}>{fact.value}</span>
                  <span className={styles.glanceNote}>{fact.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Key Achievements"
        subtitle="Quantified impact across Bosch, Bosch Rexroth, and Amazon"
      >
        <ul className={styles.achievementsList}>
          {introData.keyHighlights.map((highlight, index) => (
            <li key={index} className={styles.achievementItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </SectionTemplate>

      <SectionTemplate
        title="Area of Expertise"
        subtitle="Top skills and core competencies"
      >
        <div className={styles.skillsGrid}>
          {introData.expertise.map((skill) => {
            const Icon = expertiseIcons[skill.icon];
            return (
              <div key={skill.title} className={styles.skillCard}>
                <h3 className={styles.skillTitle}>
                  {Icon && <Icon size={18} aria-hidden="true" />}
                  {skill.title}
                </h3>
                <p className={styles.skillText}>{skill.text}</p>
              </div>
            );
          })}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Next Steps"
        centered={true}
        className={styles.nextStepsSection}
      >
        <p className={styles.nextStepsText}>
          Explore more details about my professional background through the tabs above,
          or contact me directly to discuss potential opportunities.
        </p>

        <div className={styles.nextStepsButtons}>
          <Link to="/recruiter-dashboard/experience" className={styles.nextStepButton}>
            View Experience Timeline
          </Link>
          <Link to="/recruiter-dashboard/skills" className={styles.nextStepButton}>
            Explore Skills & Certifications
          </Link>
          <Link to="/recruiter-dashboard/projects" className={styles.nextStepButton}>
            Browse Projects
          </Link>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
