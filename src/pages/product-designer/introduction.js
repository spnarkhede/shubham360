import React from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { Palette, Users, Lightbulb, Target, Award, Mail } from 'lucide-react';

export default function ProductDesignerIntroduction() {
  const { activeTab } = useRoleStore();
  
  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab={activeTab['product-designer']}
      title="Product Designer Portfolio"
      description="Design philosophy, creative process, and portfolio showcase"
    >
      <div className={styles.introductionContainer}>
        {/* Welcome Section */}
        <SectionTemplate title="Welcome to My Design World" icon={<Palette />}>
          <div className={styles.welcomeContent}>
            <div className={styles.profileSection}>
              <div className={styles.profileText}>
                <h2 className={styles.profileTitle}>Creating Meaningful Digital Experiences</h2>
                <p className={styles.profileDescription}>
                  I'm a passionate product designer who believes in the power of design to solve real problems 
                  and create delightful user experiences. With a focus on user-centered design and innovative 
                  thinking, I help brands and businesses connect with their audiences through compelling digital solutions.
                </p>
                <div className={styles.highlights}>
                  <div className={styles.highlight}>
                    <Award className={styles.highlightIcon} />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className={styles.highlight}>
                    <Users className={styles.highlightIcon} />
                    <span>50+ Projects Delivered</span>
                  </div>
                  <div className={styles.highlight}>
                    <Target className={styles.highlightIcon} />
                    <span>User-Centered Approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTemplate>

        {/* Design Interests */}
        <SectionTemplate title="Design Focus Areas" icon={<Lightbulb />}>
          <div className={styles.interestsGrid}>
            <div className={styles.interestCard}>
              <div className={styles.interestIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and visually appealing user interfaces that enhance user experience</p>
            </div>
            <div className={styles.interestCard}>
              <div className={styles.interestIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"></path>
                </svg>
              </div>
              <h3>Product Strategy</h3>
              <p>Aligning design decisions with business goals and user needs for successful products</p>
            </div>
            <div className={styles.interestCard}>
              <div className={styles.interestIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l3-3-1.5-1.5L12 9l-3 3z"></path>
                </svg>
              </div>
              <h3>Design Systems</h3>
              <p>Building scalable and consistent design systems that empower teams and products</p>
            </div>
            <div className={styles.interestCard}>
              <div className={styles.interestIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Prototyping</h3>
              <p>Rapid prototyping and testing to validate ideas and iterate on design solutions</p>
            </div>
          </div>
        </SectionTemplate>

        {/* Design Journey */}
        <SectionTemplate title="My Design Journey" icon={<Target />}>
          <div className={styles.journeyTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <h4>Senior Product Designer</h4>
                <p>Leading design initiatives for enterprise software solutions, focusing on complex workflows and data visualization</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2022</div>
              <div className={styles.timelineContent}>
                <h4>Product Designer</h4>
                <p>Designed mobile-first experiences for fintech applications, improving user onboarding by 40%</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2020</div>
              <div className={styles.timelineContent}>
                <h4>UI/UX Designer</h4>
                <p>Created design systems and conducted user research for e-commerce platforms</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2019</div>
              <div className={styles.timelineContent}>
                <h4>Junior Designer</h4>
                <p>Started my design career working on web applications and learning design fundamentals</p>
              </div>
            </div>
          </div>
        </SectionTemplate>

        {/* Explore Cards */}
        <SectionTemplate title="Explore My Work" icon={<Users />}>
          <div className={styles.exploreCards}>
            <div className={styles.exploreCard}>
              <h3>Design Portfolio</h3>
              <p>View my latest design projects and case studies</p>
              <button className={styles.exploreButton}>View Portfolio</button>
            </div>
            <div className={styles.exploreCard}>
              <h3>Design Process</h3>
              <p>Learn about my design methodology and approach</p>
              <button className={styles.exploreButton}>See Process</button>
            </div>
            <div className={styles.exploreCard}>
              <h3>Tools & Skills</h3>
              <p>Discover the tools and technologies I work with</p>
              <button className={styles.exploreButton}>View Skills</button>
            </div>
          </div>
        </SectionTemplate>

        {/* Call to Action */}
        <SectionTemplate title="Let's Create Together" icon={<Mail />}>
          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with passionate teams. Let's discuss how we can create something amazing together.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Start a Project</button>
              <button className={styles.secondaryButton}>View My Work</button>
            </div>
          </div>
        </SectionTemplate>
      </div>
    </ProductDesignerDashboard>
  );
}