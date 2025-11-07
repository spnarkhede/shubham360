import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
// import RecommendationsPanel from '../../components/RecommendationsPanel';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

export default function RecruitmentSpecialistIntroduction() {
  // Calculate years and months of experience dynamically from April 2019 to current date
  const startDate = new Date('2019-04-01');
  const currentDate = new Date();
  const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  const yearsOfExperience = Math.floor(diffMonths / 12);
  const monthsOfExperience = diffMonths % 12;
  
  // Format the experience string in short format (e.g., 6.5 years)
  const totalYears = yearsOfExperience + (monthsOfExperience / 12);
  const shortExperienceString = `${totalYears.toFixed(1)} years`;

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="introduction"
      title="Recruitment Specialist | Introduction"
      description="Information for hiring managers and recruiters about Shubham Narkhede's professional background"
    >
      <SectionTemplate
        title="Professional Summary"
        subtitle={`DevOps Engineer & Full Stack Developer with ${shortExperienceString} of experience in Germany`}
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
                e.target.src="/img/default-profile.webp";
              }}
            />
          </div>
          
          <div className={styles.profileSummary}>
            <p className={styles.summaryText}>
              I am a passionate DevOps Engineer and Full Stack Developer with a proven track record of building scalable, 
              high-performance applications and implementing efficient CI/CD pipelines. With expertise spanning frontend, 
              backend, and infrastructure technologies, I bring a holistic approach to software development.
            </p>
            
            <p className={styles.summaryText}>
              My experience includes working with leading organizations where I've consistently delivered innovative 
              solutions that drive business value. I thrive in collaborative environments and am committed to 
              continuous learning and improvement.
            </p>
            
            <div className={styles.keyHighlights}>
              <h3 className={styles.highlightsTitle}>Key Highlights</h3>
              <ul className={styles.highlightsList}>
                <li>{shortExperienceString} of experience in software development, CI/CD and DevOps</li>
                <li>Expertise in Angular, React, Node.js, Docker, Kubernetes, and AWS</li>
                <li>Led multiple successful projects from conception to deployment</li>
                <li>Strong problem-solving skills and attention to detail</li>
                <li>Excellent communicator and team player</li>
                <li>Passionate about clean code and best practices</li>
              </ul>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/recruitment-specialist/resume" className={styles.primaryButton}>
                View Resume
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className={styles.secondaryButton}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate> 

      <SectionTemplate
        title="Area of Expertise"
        subtitle="Top skills and core competencies"
      >
        <div className={styles.skillsGrid}>
          {[
            { title: "Full-Stack Web Development", text: "Proficient in Angular, React, Node.js, and RESTful APIs." },
            { title: "Frontend Engineering", text: "Expert in building responsive, accessible, and performant UIs." },
            { title: "Backend Development", text: "Experience with Express.js, NestJS, and database modeling." },
            { title: "DevOps & CI/CD", text: "Skilled in Docker, GitHub Actions, Jenkins, and deployment pipelines." },
            { title: "Automation Testing", text: "Well-versed with Playwright, Cypress, and E2E testing." },
            { title: "UI/UX Design", text: "Strong eye for intuitive design, wireframing, and prototyping." },
            { title: "Cloud & Hosting", text: "Deploying apps on AWS, Azure, and Vercel with performance tuning." },
            { title: "Project Leadership", text: "Leading teams, agile workflows, JIRA, and stakeholder engagement." },
            { title: "Security & Auth", text: "SSO integration, OAuth2, JWT, and secure application practices." },
          ].map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillText}>{skill.text}</p>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Current Status"
        subtitle="Work permit and availability information"
      >
        <div className={styles.statusGrid}>
          <div className={styles.statusCard}>
            <h3 className={styles.statusTitle}>Work Permit Status</h3>
            <p className={styles.statusText}>
              EU Blau Karte holder in Germany & Niederlassungserlaubnis in process, fully authorized to work for any employer.
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <h3 className={styles.statusTitle}>Availability</h3>
            <p className={styles.statusText}>
              Open to new opportunities with a 2-month notice period.
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <h3 className={styles.statusTitle}>Preferred Work Model</h3>
            <p className={styles.statusText}>
              Flexible to remote, hybrid, or on-site roles, with a preference for hybrid arrangements.
            </p>
          </div>
          
          <div className={styles.statusCard}>
            <h3 className={styles.statusTitle}>Relocation</h3>
            <p className={styles.statusText}>
              Open to relocating for the right opportunity, particularly to major technology hubs.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      {/* <SectionTemplate
        title="What Colleagues Say"
        subtitle="Testimonials from past and current collaborators"
        withBackground={true}
        className={styles.recommendationsSection}
      >
        <RecommendationsPanel />
      </SectionTemplate> */}
      
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
          <Link to="/recruitment-specialist/experience" className={styles.nextStepButton}>
            View Experience Timeline
          </Link>
          <Link to="/recruitment-specialist/skills" className={styles.nextStepButton}>
            Explore Skills & Certifications
          </Link>
          <Link to="/recruitment-specialist/projects" className={styles.nextStepButton}>
            Browse Projects
          </Link>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}
