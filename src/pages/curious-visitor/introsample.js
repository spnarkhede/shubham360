import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Code, Book, Briefcase, Heart, User, Sparkles, Target, Lightbulb, Zap } from 'lucide-react';

export default function CuriousVisitorIntroduction() {
  const [activeTab, setActiveTab] = useState('personal-profile');

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

  const personalPassions = [
    {
      title: "Art & Creativity",
      description: "Exploring various art forms and creative outlets. From digital design to traditional sketching, art teaches patience and attention to detail.",
      lessons: "Patience and precision developed through artistic practice translates directly to meticulous code review and thoughtful problem-solving."
    },
    {
      title: "Fitness & Wellness",
      description: "Regular fitness routine including yoga, running, and strength training. Physical wellness is deeply connected to mental clarity and emotional stability.",
      lessons: "Discipline and consistency required in fitness mirrors the approach needed for continuous learning and skill development in technology."
    },
    {
      title: "Travel & Exploration",
      description: "Love exploring new places, cultures, and cuisines. Each journey brings fresh perspectives and breaks routine thinking patterns.",
      lessons: "Cultural exposure enhances empathy and adaptability, crucial traits for understanding diverse user needs and collaborating with global teams."
    },
    {
      title: "Sports & Strategy Games",
      description: "Enjoy team sports like basketball and strategic board games. Both require planning ahead and adapting to changing circumstances.",
      lessons: "Strategic thinking and teamwork skills are invaluable in project planning and cross-functional collaboration."
    },
    {
      title: "Photography",
      description: "Capturing moments through photography. It's about observing details, composition, and finding beauty in ordinary scenes.",
      lessons: "Attention to detail and aesthetic sensibility developed through photography enhances UI/UX design intuition."
    },
    {
      title: "Music",
      description: "Playing guitar and exploring various genres of music. Music is both a creative outlet and a way to relax and recharge.",
      lessons: "Rhythm and harmony teach the importance of balance and coordination, essential for orchestrating complex technical systems."
    }
  ];

  const lifeLessons = [
    {
      title: "Patience",
      hobby: "Art/Music",
      insight: "Creating something beautiful takes time. Whether it's a painting or a melody, rushing leads to mediocrity. In software development, taking time to plan and refactor produces cleaner, more maintainable code."
    },
    {
      title: "Strategy",
      hobby: "Sports/Games",
      insight: "Winning requires more than raw talent—it needs planning, adaptability, and understanding your opponents. Similarly, successful projects need strategic thinking, risk assessment, and course correction based on feedback."
    },
    {
      title: "Cultural Awareness",
      hobby: "Travel",
      insight: "Experiencing different cultures broadens perspective and builds empathy. This translates to designing products that serve diverse users and collaborating effectively with international teams."
    },
    {
      title: "Leadership",
      hobby: "Team Events",
      insight: "Organizing group activities taught me that leadership isn't about authority but about enabling others to perform their best. In tech teams, this means creating environments where everyone can contribute meaningfully."
    },
    {
      title: "Mindfulness",
      hobby: "Fitness/Nature",
      insight: "Physical activity grounds me in the present moment, reducing stress and improving focus. This mindfulness directly impacts my ability to debug complex issues and make thoughtful decisions under pressure."
    }
  ];

  const valuesInAction = [
    {
      value: "Environmental Consciousness",
      action: "Choosing sustainable options in daily life—reusable items, minimal packaging, supporting eco-friendly brands, and carbon offsetting for travel."
    },
    {
      value: "Community Engagement",
      action: "Actively participating in local tech meetups, volunteering for coding workshops, and mentoring newcomers to the field."
    },
    {
      value: "Authentic Relationships",
      action: "Prioritizing quality time with family and friends, maintaining regular contact, and being genuinely present during interactions."
    },
    {
      value: "Financial Mindfulness",
      action: "Practicing conscious spending, investing in experiences over possessions, and saving for meaningful goals like education and travel."
    },
    {
      value: "Health & Wellness",
      action: "Maintaining consistent sleep schedules, preparing nutritious meals, scheduling regular health check-ups, and balancing work with relaxation."
    }
  ];

  const tabs = [
    { id: 'personal-profile', label: 'Personal Profile', icon: User },
    { id: 'area-of-interest', label: 'Area of Interest', icon: Sparkles },
    { id: 'personal-philosophy', label: 'Personal Philosophy', icon: Lightbulb },
    { id: 'current-explorations', label: 'Current Explorations', icon: Target },
    { id: 'life-lessons', label: 'Life Lessons from Hobbies', icon: Zap },
    { id: 'values-action', label: 'Values in Action', icon: Heart }
  ];

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="introduction"
      title="Curious Visitor | Introduction"
      description="Welcome to Shubham Narkhede's personal website. Learn about my background, interests, and explore my portfolio."
    >
      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <IconComponent size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Personal Profile Tab */}
        {activeTab === 'personal-profile' && (
          <SectionTemplate
            title="Personal Profile"
            subtitle="Warm narrative introduction"
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
                  Beyond the professional titles and technical skills, I'm someone who finds wonder in everyday moments—the way light filters through leaves, 
                  the satisfaction of solving a challenging puzzle, or the joy of connecting with someone new. My curiosity isn't confined to technology; 
                  it extends to understanding people, cultures, and the intricate patterns that shape our world.
                </p>
                
                <p className={styles.summaryText}>
                  At my core, I value authenticity, continuous growth, and meaningful connections. I believe that our personal passions and experiences 
                  enrich our professional capabilities, bringing unique perspectives to problem-solving and innovation. Whether I'm debugging code, 
                  exploring a new hiking trail, or discussing philosophy with friends, I approach each experience with genuine curiosity and an open mind.
                </p>
                
                <div className={styles.ctaButtons}>
                  <Link to="/curious-visitor/books" className={styles.primaryButton}>
                    Explore My Books
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/curious-visitor/gallery" className={styles.secondaryButton}>
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </SectionTemplate>
        )}

        {/* Area of Interest Tab */}
        {activeTab === 'area-of-interest' && (
          <SectionTemplate
            title="Area of Interest"
            subtitle="Personal Passions & Reflective Insights"
          >
            <div className={styles.passionsGrid}>
              {personalPassions.map((passion, index) => (
                <div key={index} className={styles.passionCard}>
                  <h3>{passion.title}</h3>
                  <p className={styles.passionDescription}>{passion.description}</p>
                  <div className={styles.passionLesson}>
                    <strong>Key Lesson:</strong> {passion.lessons}
                  </div>
                </div>
              ))}
            </div>
          </SectionTemplate>
        )}

        {/* Personal Philosophy Tab */}
        {activeTab === 'personal-philosophy' && (
          <SectionTemplate
            title="Personal Philosophy"
            subtitle="Life lessons & guiding mindset"
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
              
              <div className={styles.philosophyCard}>
                <h3>Authentic Connections</h3>
                <p>
                  Genuine relationships—with colleagues, friends, and strangers alike—are what make life rich. 
                  I value honest communication, empathy, and the willingness to be vulnerable. These qualities 
                  not only enrich personal life but also lead to more collaborative and innovative work environments.
                </p>
              </div>
              
              <div className={styles.philosophyCard}>
                <h3>Growth Through Adversity</h3>
                <p>
                  Challenges and setbacks aren't roadblocks—they're stepping stones. I've learned that resilience 
                  and adaptability are cultivated through difficult times. Embracing discomfort and uncertainty 
                  has made me a better problem solver and more compassionate person.
                </p>
              </div>
            </div>
            
            <div className={styles.favoriteQuotes}>
              <h3>Favorite Quotes That Guide Me</h3>
              <blockquote>
                "The only way to do great work is to love what you do." – Steve Jobs
              </blockquote>
              <blockquote>
                "Be the change you wish to see in the world." – Mahatma Gandhi
              </blockquote>
              <blockquote>
                "In the middle of difficulty lies opportunity." – Albert Einstein
              </blockquote>
            </div>
          </SectionTemplate>
        )}

        {/* Current Explorations Tab */}
        {activeTab === 'current-explorations' && (
          <SectionTemplate
            title="Current Explorations"
            subtitle="Ongoing learning & projects"
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
                  Planning upcoming trips to experience different cultures and perspectives. I'm researching destinations 
                  that offer unique historical insights and opportunities to engage with local communities and traditions.
                </p>
              </div>
              
              <div className={styles.learningFocusCard}>
                <h3>Photography Project</h3>
                <p>
                  Working on a long-term photography project documenting urban landscapes and street life. This project 
                  combines my interest in visual storytelling with my desire to capture the essence of different places 
                  and moments.
                </p>
              </div>
              
              <div className={styles.learningFocusCard}>
                <h3>Wellness & Mindfulness Practices</h3>
                <p>
                  Experimenting with different wellness routines and mindfulness techniques to optimize mental and physical 
                  health. Tracking the impact of various practices on productivity, creativity, and overall well-being.
                </p>
              </div>
            </div>
          </SectionTemplate>
        )}

        {/* Life Lessons Tab */}
        {activeTab === 'life-lessons' && (
          <SectionTemplate
            title="Life Lessons from Hobbies"
            subtitle="How hobbies inform life & work"
            withBackground={true}
          >
            <div className={styles.lifeLessonsGrid}>
              {lifeLessons.map((lesson, index) => (
                <div key={index} className={styles.lifeLessonCard}>
                  <div className={styles.lessonHeader}>
                    <h3>{lesson.title}</h3>
                    <span className={styles.hobbyReference}>({lesson.hobby})</span>
                  </div>
                  <p className={styles.lessonInsight}>{lesson.insight}</p>
                </div>
              ))}
            </div>
          </SectionTemplate>
        )}

        {/* Values in Action Tab */}
        {activeTab === 'values-action' && (
          <SectionTemplate
            title="Values in Action"
            subtitle="Daily application of personal values"
          >
            <div className={styles.valuesGrid}>
              {valuesInAction.map((valueItem, index) => (
                <div key={index} className={styles.valueCard}>
                  <h3>{valueItem.value}</h3>
                  <p>{valueItem.action}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.reflectionSection}>
              <h3>Reflection on Values</h3>
              <p>
                Living according to my values isn't always easy—it requires constant self-awareness and intentional choices. 
                But I've found that when my actions align with my beliefs, I experience greater fulfillment and authenticity. 
                These values serve as my compass, guiding decisions both big and small, and helping me stay true to myself 
                even in challenging situations.
              </p>
            </div>
          </SectionTemplate>
        )}
      </div>
    </DashboardLayout>
  );
}


/** .introductionContent {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.welcomeSection {
  text-align: center;
  margin-bottom: 3rem;
}

.welcomeHeading {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--ifm-color-primary);
}

.welcomeSubheading {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-emphasis-700);
}

.welcomeDescription {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
}

.profileSection {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 2rem 0;
}

.profileImage {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 5px solid var(--ifm-color-primary);
}

.profileInfo {
  flex: 1;
}

.profileName {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-primary);
}

.profileTitle {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--ifm-color-emphasis-700);
}

.profileBio {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: var(--ifm-color-emphasis-800);
}

.socialLinks {
  display: flex;
  gap: 1rem;
}

.socialLink {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--ifm-color-primary);
  color: white;
  transition: all 0.3s ease;
}

.socialLink:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(var(--ifm-color-primary-rgb), 0.4);
  color: white;
}

.interestsSection {
  margin: 3rem 0;
}

.interestsTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
  text-align: center;
}

.interestsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interestCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.interestCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.interestIcon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--ifm-color-primary);
}

.interestTitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--ifm-color-emphasis-900);
}

.interestDescription {
  font-size: 1rem;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
}

.journeySection {
  margin: 4rem 0;
}

.journeyTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
  text-align: center;
}

.journeyTimeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.journeyTimeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: var(--ifm-color-primary);
  transform: translateX(-50%);
}

.journeyEvent {
  position: relative;
  margin-bottom: 3rem;
}

.journeyEvent:nth-child(odd) {
  padding-right: calc(50% + 30px);
  text-align: right;
}

.journeyEvent:nth-child(even) {
  padding-left: calc(50% + 30px);
}

.journeyEventDot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--ifm-color-primary);
  transform: translateX(-50%);
  z-index: 1;
}

.journeyEventYear {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-primary);
}

.journeyEventTitle {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-emphasis-900);
}

.journeyEventDescription {
  font-size: 1rem;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
}

.exploreSection {
  margin: 4rem 0;
  text-align: center;
}

.exploreTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
}

.exploreDescription {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
}

.exploreGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.exploreCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.exploreCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.exploreCardImage {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.exploreCardContent {
  padding: 1.5rem;
}

.exploreCardTitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--ifm-color-emphasis-900);
}

.exploreCardDescription {
  font-size: 1rem;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.exploreCardLink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ifm-color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.exploreCardLink:hover {
  text-decoration: underline;
  transform: translateX(5px);
}

.ctaSection {
  margin: 4rem 0;
  text-align: center;
}

.ctaTitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--ifm-color-primary);
}

.ctaDescription {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
}

.ctaButtons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.ctaButton {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--ifm-color-primary);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(var(--ifm-color-primary-rgb), 0.3);
}

.ctaButton:hover {
  background-color: var(--ifm-color-primary-darker);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(var(--ifm-color-primary-rgb), 0.4);
  color: white;
  text-decoration: none;
}

.secondaryButton {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--ifm-color-primary);
  padding: 0.8rem 2rem;
  border: 2px solid var(--ifm-color-primary);
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.secondaryButton:hover {
  background-color: var(--ifm-color-primary);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .profileSection {
    flex-direction: column;
    text-align: center;
  }
  
  .socialLinks {
    justify-content: center;
  }
  
  .ctaButtons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .ctaButton,
  .secondaryButton {
    width: 100%;
    max-width: 300px;
  }
  
  .journeyTimeline::before {
    left: 20px;
  }
  
  .journeyEvent:nth-child(odd),
  .journeyEvent:nth-child(even) {
    padding-left: 50px;
    padding-right: 0;
    text-align: left;
  }
  
  .journeyEventDot {
    left: 20px;
  }
}

.gallerySection {
  margin: 4rem 0;
}

.galleryTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
  text-align: center;
}

.galleryDescription {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
  text-align: center;
}

.galleryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.galleryItem {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.galleryItem:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.galleryImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.galleryItem:hover .galleryImage {
  filter: brightness(0.8);
}

.galleryOverlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 1rem;
  color: white;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.galleryItem:hover .galleryOverlay {
  transform: translateY(0);
}

.galleryItemTitle {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.galleryItemDescription {
  font-size: 0.9rem;
  opacity: 0.9;
}

.bookReviewsSection {
  margin: 4rem 0;
}

.bookReviewsTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
  text-align: center;
}

.bookReviewsDescription {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
  text-align: center;
}

.bookReviewsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.bookReviewCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.bookReviewCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.bookCover {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.bookReviewContent {
  padding: 1.5rem;
}

.bookTitle {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-emphasis-900);
}

.bookAuthor {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--ifm-color-emphasis-700);
}

.bookRating {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;
  color: #ffc107;
}

.bookExcerpt {
  font-size: 1rem;
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.readReviewLink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ifm-color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.readReviewLink:hover {
  text-decoration: underline;
  transform: translateX(5px);
}

.contactForm {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.formGroup {
  margin-bottom: 1.5rem;
}

.formLabel {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--ifm-color-emphasis-900);
}

.formInput,
.formTextarea,
.formSelect {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 8px;
  background-color: var(--ifm-background-color);
  color: var(--ifm-color-emphasis-900);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.formInput:focus,
.formTextarea:focus,
.formSelect:focus {
  outline: none;
  border-color: var(--ifm-color-primary);
  box-shadow: 0 0 0 2px rgba(var(--ifm-color-primary-rgb), 0.2);
}

.formTextarea {
  resize: vertical;
  min-height: 120px;
}

.submitButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--ifm-color-primary);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submitButton:hover {
  background-color: var(--ifm-color-primary-darker);
}

.faqSection {
  margin: 4rem 0;
}

.faqTitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
  text-align: center;
}

.faqDescription {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  color: var(--ifm-color-emphasis-800);
  text-align: center;
}

.faqItem {
  margin-bottom: 1.5rem;
  background-color: var(--ifm-card-background-color);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faqQuestion {
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ifm-color-emphasis-900);
  background-color: var(--ifm-color-emphasis-100);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faqAnswer {
  padding: 1.2rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--ifm-color-emphasis-800);
}

.tabNavigation {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--ifm-color-emphasis-200);
  padding-bottom: 1rem;
}

.tabButton {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--ifm-color-emphasis-100);
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: 600;
  color: var(--ifm-color-emphasis-700);
  transition: all 0.3s ease;
}

.tabButton:hover {
  background-color: var(--ifm-color-emphasis-200);
  color: var(--ifm-color-emphasis-800);
}

.tabButton.activeTab {
  background-color: var(--ifm-color-primary);
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.passionsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.passionCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.passionCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.passionCard h3 {
  color: var(--ifm-color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.passionDescription {
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.passionLesson {
  background-color: rgba(var(--ifm-color-primary-rgb), 0.1);
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.favoriteQuotes {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--ifm-color-emphasis-100);
  border-radius: 12px;
}

.favoriteQuotes h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--ifm-color-primary);
}

.favoriteQuotes blockquote {
  font-style: italic;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--ifm-color-primary);
  color: var(--ifm-color-emphasis-800);
}

.favoriteQuotes blockquote:last-child {
  margin-bottom: 0;
}

.lifeLessonsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.lifeLessonCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--ifm-color-primary);
}

.lessonHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.lessonHeader h3 {
  color: var(--ifm-color-primary);
  margin: 0;
}

.hobbyReference {
  background-color: rgba(var(--ifm-color-primary-rgb), 0.1);
  color: var(--ifm-color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.lessonInsight {
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
}

.valuesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.valueCard {
  background-color: var(--ifm-card-background-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.valueCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.valueCard h3 {
  color: var(--ifm-color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.valueCard p {
  color: var(--ifm-color-emphasis-700);
  line-height: 1.6;
}

.reflectionSection {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--ifm-color-emphasis-100);
  border-radius: 12px;
}

.reflectionSection h3 {
  color: var(--ifm-color-primary);
  margin-bottom: 1rem;
  text-align: center;
}

.reflectionSection p {
  color: var(--ifm-color-emphasis-800);
  line-height: 1.7;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .tabNavigation {
    flex-direction: column;
  }
  
  .tabButton {
    justify-content: center;
    border-radius: 8px;
  }
  
  .passionsGrid,
  .lifeLessonsGrid,
  .valuesGrid {
    grid-template-columns: 1fr;
  }
  
  .lessonHeader {
    flex-direction: column;
    gap: 0.5rem;
  }
}
 */