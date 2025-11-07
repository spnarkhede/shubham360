import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, TrendingUp, Users, Handshake, Target } from 'lucide-react';

export default function GrowthPartnerIntroduction() {
  const partnershipAreas = {
    "Collaboration": [
      "Joint Projects", "Technical Partnerships", "Creative Ventures", "Research Initiatives", "Open Source", "Innovation Labs", "Product Development", "Strategic Alliances"
    ],
    "Mentorship": [
      "Career Guidance", "Technical Mentoring", "Leadership Development", "Skill Building", "Knowledge Transfer", "Growth Planning", "Professional Networks", "Success Strategies"
    ],
    "Services": [
      "Consulting", "Technical Advisory", "Code Reviews", "Architecture Design", "Project Management", "Team Building", "Process Optimization", "Technology Assessment"
    ],
    "Community": [
      "Event Speaking", "Workshop Facilitation", "Content Creation", "Community Building", "Knowledge Sharing", "Networking", "Industry Connections", "Thought Leadership"
    ]
  };

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="introduction"
      title="Growth Partner | Introduction"
      description="Learn about collaboration opportunities and partnership possibilities with Shubham Narkhede."
    >
      <SectionTemplate
        title="Partnership Profile"
        subtitle="Collaboration Specialist & Growth Catalyst"
      >
        <div className={styles.introductionContent}>
          <div className={styles.profileImageContainer}>
            <img 
              src="/img/profilesquare.webp" 
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
              I'm a collaboration specialist and growth catalyst with a passion for building meaningful partnerships 
              that drive innovation and mutual success. My approach combines technical expertise with strategic thinking 
              to create value for all parties involved in collaborative ventures.
            </p>
            
            <p className={styles.summaryText}>
              With experience across diverse industries and technologies, I specialize in fostering partnerships that 
              leverage collective strengths, accelerate growth, and create lasting impact. I'm committed to building 
              relationships that go beyond transactions to create genuine value and shared success.
            </p>
            
            <div className={styles.techStack}>
              <h3 className={styles.techStackTitle}>Partnership Areas</h3>
              <div className={styles.techCategories}>
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Handshake size={16} /> Collaboration
                  </h4>
                  <div className={styles.techList}>
                    {partnershipAreas["Collaboration"].map((area, index) => (
                      <span key={index} className={styles.techTag}>{area}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Users size={16} /> Mentorship
                  </h4>
                  <div className={styles.techList}>
                    {partnershipAreas["Mentorship"].map((area, index) => (
                      <span key={index} className={styles.techTag}>{area}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Target size={16} /> Services
                  </h4>
                  <div className={styles.techList}>
                    {partnershipAreas["Services"].map((area, index) => (
                      <span key={index} className={styles.techTag}>{area}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <TrendingUp size={16} /> Community
                  </h4>
                  <div className={styles.techList}>
                    {partnershipAreas["Community"].map((area, index) => (
                      <span key={index} className={styles.techTag}>{area}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/growth-partner/collaboration" className={styles.primaryButton}>
                Explore Partnerships
                <ArrowRight size={16} />
              </Link>
              <Link to="/growth-partner/services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Partnership Philosophy"
        subtitle="My approach to collaboration and mutual growth"
        withBackground={true}
      >
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>Mutual Value Creation</h3>
            <p>
              I believe that the best partnerships are those where all parties benefit and grow together. 
              I focus on understanding each partner's unique strengths and goals to create synergies that 
              amplify everyone's success. True collaboration goes beyond transactions to build lasting value.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Trust & Transparency</h3>
            <p>
              Strong partnerships are built on a foundation of trust and open communication. I prioritize 
              transparency in all my collaborations, ensuring clear expectations, honest feedback, and 
              reliable follow-through. Trust is earned through consistent actions and delivered promises.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Innovation Through Diversity</h3>
            <p>
              I actively seek partnerships with individuals and organizations from diverse backgrounds and 
              perspectives. Different viewpoints and approaches often lead to breakthrough innovations and 
              creative solutions that wouldn't be possible in isolation.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Long-term Relationship Building</h3>
            <p>
              I'm interested in building long-term relationships rather than one-off transactions. 
              Sustainable partnerships require ongoing investment in communication, shared learning, 
              and mutual support. The best collaborations evolve and strengthen over time.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Current Partnership Focus"
        subtitle="Areas where I'm actively seeking collaboration"
      >
        <div className={styles.learningFocusGrid}>
          <div className={styles.learningFocusCard}>
            <h3>Technology Innovation Projects</h3>
            <p>
              I'm looking for partners interested in exploring cutting-edge technologies and building 
              innovative solutions. Whether it's AI/ML applications, cloud-native architectures, or 
              emerging development frameworks, I'm excited to collaborate on groundbreaking projects.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Mentorship & Knowledge Exchange</h3>
            <p>
              I'm passionate about both mentoring others and learning from experienced professionals. 
              I'm seeking mentorship relationships that provide mutual growth opportunities and 
              knowledge exchange in both technical and leadership areas.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Community Building Initiatives</h3>
            <p>
              I'm interested in partnering with others to build and nurture tech communities. 
              This includes organizing events, creating educational content, facilitating networking 
              opportunities, and fostering environments where professionals can learn and grow together.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Social Impact Projects</h3>
            <p>
              I'm drawn to partnerships that focus on using technology for social good. 
              Whether it's building tools for nonprofits, creating educational platforms, or 
              developing solutions that address real-world problems, I believe technology should serve humanity.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}