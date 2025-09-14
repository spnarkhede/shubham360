import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Code, Book, Briefcase, Heart } from 'lucide-react';

export default function CuriousVisitorIntroduction() {
  const interestAreas = {
    "Technology": [
      "Web Development", "Cloud Computing", "DevOps", "AI/ML", "Open Source", "Software Architecture", "Mobile Apps", "Data Analytics"
    ],
    "Reading & Learning": [
      "Tech Books", "Business Strategy", "Psychology", "Personal Development", "Industry Reports", "Research Papers", "Biographies", "Philosophy"
    ],
    "Professional Growth": [
      "Leadership", "Mentoring", "Public Speaking", "Technical Writing", "Project Management", "Team Building", "Innovation", "Problem Solving"
    ],
    "Community & Networking": [
      "Tech Meetups", "Open Source", "Knowledge Sharing", "Volunteering", "Conferences", "Workshops", "Online Communities", "Collaboration"
    ]
  };

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="introduction"
      title="Curious Visitor | Introduction"
      description="Welcome to Shubham Narkhede's personal website. Learn about my background, interests, and explore my portfolio."
    >
      <SectionTemplate
        title="Personal Profile"
        subtitle="Full Stack Developer & Technology Enthusiast"
      >
        <div className={styles.introductionContent}>
          <div className={styles.profileImageContainer}>
            <img 
              src="/img/profilesquare.png" 
              alt="Shubham Narkhede" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src="/img/default-profile.png";
              }}
            />
          </div>
          
          <div className={styles.profileSummary}>
            <p className={styles.summaryText}>
              I'm a technology enthusiast with a passion for building innovative solutions that solve real-world problems. 
              With experience spanning front-end development, back-end systems, and cloud infrastructure, I bring a 
              holistic approach to software development and continuous learning.
            </p>
            
            <p className={styles.summaryText}>
              Beyond coding, I enjoy reading, writing technical articles, and contributing to open source projects. 
              I believe in continuous learning and sharing knowledge with the community to foster growth and innovation 
              in the tech industry. Welcome to my digital space where curiosity meets creativity.
            </p>
            
            <div className={styles.techStack}>
              <h3 className={styles.techStackTitle}>Areas of Interest</h3>
              <div className={styles.techCategories}>
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Code size={16} /> Technology
                  </h4>
                  <div className={styles.techList}>
                    {interestAreas["Technology"].map((interest, index) => (
                      <span key={index} className={styles.techTag}>{interest}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Book size={16} /> Reading & Learning
                  </h4>
                  <div className={styles.techList}>
                    {interestAreas["Reading & Learning"].map((interest, index) => (
                      <span key={index} className={styles.techTag}>{interest}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Briefcase size={16} /> Professional Growth
                  </h4>
                  <div className={styles.techList}>
                    {interestAreas["Professional Growth"].map((interest, index) => (
                      <span key={index} className={styles.techTag}>{interest}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.categoryTitle}>
                    <Heart size={16} /> Community & Networking
                  </h4>
                  <div className={styles.techList}>
                    {interestAreas["Community & Networking"].map((interest, index) => (
                      <span key={index} className={styles.techTag}>{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <Link to="/curious-visitor/portfolio" className={styles.primaryButton}>
                View Portfolio
                <ArrowRight size={16} />
              </Link>
              <Link to="/curious-visitor/articles" className={styles.secondaryButton}>
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Personal Philosophy"
        subtitle="My approach to life, learning, and professional growth"
        withBackground={true}
      >
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>Continuous Learning & Curiosity</h3>
            <p>
              I believe that curiosity is the driving force behind innovation and personal growth. I'm constantly 
              exploring new technologies, reading diverse books, and seeking out learning opportunities. Every 
              challenge is a chance to grow, and every failure is a lesson in disguise.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Knowledge Sharing & Community</h3>
            <p>
              Knowledge becomes more valuable when shared. I actively contribute to the tech community through 
              mentoring, writing articles, and participating in open source projects. I believe that by helping 
              others grow, we create a stronger, more innovative tech ecosystem for everyone.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Balance & Well-being</h3>
            <p>
              Professional success means nothing without personal well-being. I strive to maintain a healthy 
              work-life balance, pursue hobbies outside of technology, and prioritize relationships with family 
              and friends. A balanced life leads to better creativity and sustained productivity.
            </p>
          </div>
          
          <div className={styles.philosophyCard}>
            <h3>Purpose-Driven Work</h3>
            <p>
              I'm passionate about working on projects that make a positive impact. Whether it's building tools 
              that help businesses grow, contributing to open source projects, or mentoring aspiring developers, 
              I believe technology should be used to solve real problems and improve lives.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="Current Exploration"
        subtitle="What I'm currently reading, learning, and exploring"
      >
        <div className={styles.learningFocusGrid}>
          <div className={styles.learningFocusCard}>
            <h3>AI & Machine Learning</h3>
            <p>
              I'm exploring the fascinating world of artificial intelligence and machine learning, focusing on 
              practical applications in web development and how AI can enhance user experiences and automate 
              complex workflows in modern applications.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Personal Development Books</h3>
            <p>
              Currently reading books on leadership, psychology, and personal growth. I'm particularly interested 
              in understanding how great leaders think, make decisions, and inspire teams to achieve extraordinary results.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Creative Side Projects</h3>
            <p>
              I enjoy working on creative side projects that combine technology with art and storytelling. 
              These projects allow me to experiment with new technologies while exploring my creative side and 
              building solutions that bring joy to users.
            </p>
          </div>
          
          <div className={styles.learningFocusCard}>
            <h3>Travel & Cultural Exploration</h3>
            <p>
              I believe that experiencing different cultures and places broadens perspective and inspires creativity. 
              I love to travel, meet new people, and learn about different ways of life, which often leads to 
              new insights and approaches in my professional work.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}