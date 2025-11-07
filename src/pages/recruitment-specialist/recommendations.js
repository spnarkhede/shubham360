import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import RecommendationsPanel from '../../components/RecommendationsPanel';
import styles from './styles.module.css';
import { Quote, Users, MessageSquare, Eye, Lock } from 'lucide-react';

export default function RecruitmentSpecialistRecommendations() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [unlockedTestimonial, setUnlockedTestimonial] = useState(null); // Changed to store single index
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(null);
  const [unlockedImages, setUnlockedImages] = useState(new Set()); // Track unlocked images

  // Extended recommendations data
 const professionalRecommendations = [
  {
    firstName: "Edgar",
    lastName: "Koepplin",
    title: "Director Area Sales & Global Distribution Partner Management for Mobile Hydraulics & Digital Sales E2E Process Owner at BOSCH REXROTH AG",
    image: "/img/testimonials/edgar.webp",
    quote: "Shubham did an exceptional job on recent projects. He did a great job in Bosch Rexroth AG presence in terms of developing digital tools and software for the Sales and Distribution division. He started working with me as a Full-stack Software Engineer intern. The role included creating applications and software tools for digitalizing the sales market, and later expanded his role into DevOps Software Engineer. As I remember, Shubham was a very productive person and is a multiskilled person with vast knowledge. He is careful, proactive, intelligent, a team player and a customer-service oriented colleague. A great employee — whenever there was a problem, Shubham found a solution. He is truly an asset to any company.",
    rating: 5,
    date: "May 2022",
    relationship: "Direct Manager"
  },
  {
    firstName: "Andrea",
    lastName: "Alberti",
    title: "Product Manager & Product Owner @Bosch Rexroth | Ubuntu lifestyle",
    image: "/img/testimonials/andrea.webp",
    quote: "I have been working for one year in close contact with Mr. Shubham Narkhede as part of the Sales and Distribution Management team at Bosch Rexroth. Shubham has been supporting me and my team as SW developer for many of the digital tools we are currently supplying to our sales partners, and I am happy to recommend him as a highly skilled professional in this field based on this experience. In addition to the technical skills, Shubham showed a strong entrepreneurial mindset by investing time to continuously learn new skills that could help the team in reaching better results, and by personally taking over many activities and successfully bringing them to an end.",
    rating: 5,
    date: "August 2022",
    relationship: "Senior Colleague (didn't manage directly)"
  },
  {
    firstName: "Selin",
    lastName: "Kelles",
    title: "Program Manager at Bosch Rexroth AG",
    image: "/img/testimonials/selin.webp",
    quote: "Shubham is a great developer with great skills. He has impressed all the team with his passion for his projects and ability to do everything possible to reach the goal. His help to his colleagues is impressive as well. He developed tools that strongly impact our Bosch Rexroth industry, which is great. His motivation everyday is strong and he has the strength to motivate people around him, which is amazing. He's a great colleague and friend at the same time, and I wish him all the best!",
    rating: 5,
    date: "July 2022",
    relationship: "Teammate"
  },
  {
    firstName: "Jakob",
    lastName: "Tempel",
    title: "Team Manager at Bosch Rexroth AG | Co-Founder at O7EAN GmbH",
    image: "/img/testimonials/jakob.webp",
    quote: "I am impressed with Mr. Shubham Narkhede's ability to program software, his knowledge of DevOps tools, and his advanced communication skills, which he uses to his advantage when presenting to customers and colleagues. Shubham Narkhede has done a great job expanding Bosch Rexroth AG's presence in terms of software and application development for the Sales and Distribution division. He also diligently ensures that his KPIs are updated and tracked, which helped me understand what was going well and what was not. His expertise as a software engineer is considerable and has helped our team find more efficient solutions and develop various projects. His contributions such as blogs, resources, information, documentation and helpfulness have been very valuable to the community. He is a very focused and analytical person and can add value to any team he is a part of. His energy to push things forward was contagious and helped us achieve great goals. I highly recommend Shubham as a software engineer and would love to work with him again. I am sure Shubham will achieve great things in his career.",
    rating: 5,
    date: "April 2022",
    relationship: "Team Administrtor"
  },
  {
    firstName: "Dr. Neeranjan",
    lastName: "Chitare",
    title: "Birmingham City University | Lecturer & Expert Fellow SPRITE+",
    image: "/img/testimonials/neeranjan.webp",
    quote: "Shubham was my student during his graduation (2014-18). Given any assignment to him, he does it in the best possible way and always before time. His passion for learning will definitely boost his graph of growing. He is equally enthusiastic to work with and help his teammates. His acute interest in arts gives him an additional edge. I am sure he can confidently handle the research as well as professional portfolio in the best manner.",
    rating: 5,
    date: "May 2018",
    relationship: "Professor"
  },
  {
    firstName: "Ashwini",
    lastName: "Borle",
    title: "Senior Technical Product Manager at Mastercard",
    image: "/img/testimonials/ashwini.webp",
    quote: "Shubham is a positive thinker, self motivated and has a lot of software skills. He has done several web development projects. He is good in arts, full with passion, enthusiasm and positive attitude. Completes all his work before time. He is the perfect candidate to hire. Wish you best of luck!!",
    rating: 5,
    date: "May 2019",
    relationship: "Mentor"
  },
  {
    firstName: "Deepak",
    lastName: "Dhote",
    title: "Operations Manager at IT-NetworkZ",
    image: "/img/testimonials/deepak.webp",
    quote: "Hi Shubham. Hope you are doing good! You are one of the best interns we had worked with. There are so many trainees & engineers to whom we trained and worked with, you are a special one. Keep your enthusiasm and willingness to learn new things like earlier. I always saw you as a key person in a team. I would strongly suggest companies to not miss a candidate like you if they are planning to offer you any role. I must say that you are an intelligent & hardworking person of outstanding character. I wish you a successful career ahead.",
    rating: 5,
    date: "May 2019",
    relationship: "Direct Manager"
  },
  {
    firstName: "Anup",
    lastName: "Borle",
    title: "SRE Engineer - AVP at Deutsche Bank | ITIL, DevOps",
    image: "/img/testimonials/anup.webp",
    quote: "Mr. Shubham is motivated, forward thinking and highly talented individual with lots of knowledge in his field. His unmatched skills and ingenuity makes him a perfect candidate for anyone who is open to hire and want to take an enthusiastic and energetic person by their side.",
    rating: 5,
    date: "February 2019",
    relationship: "Mentor"
  },
  {
    firstName: "Akshay",
    lastName: "Saraf",
    title: "Doctoral Researcher | Ph.D. Scholar at VNIT Nagpur",
    image: "/img/testimonials/akshay.webp",
    quote: "Shubham is one of my talented and hardworking students. He always strives to achieve set target on time. He worked under me on a Mini Project based on Java Language. I wish him Luck for future endeavors.",
    rating: 5,
    date: "May 2018",
    relationship: "Professor"
  }
];

  // Function to handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, we'll use a simple password
    // In a real application, this should be handled securely on the backend
    if (password === 'portfolio') {
      // Unlock only the specific testimonial that was requested
      setUnlockedTestimonial(currentRecommendationIndex);
      
      // If it's an image unlock request, add to unlocked images
      if (typeof currentRecommendationIndex === 'number' || currentRecommendationIndex === 'featured') {
        setUnlockedImages(prev => new Set([...prev, currentRecommendationIndex]));
      }
      
      setShowPasswordModal(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  // Function to show password modal
  const showPasswordModalForRecommendation = (index) => {
    setCurrentRecommendationIndex(index);
    setShowPasswordModal(true);
  };

  // Function to hide last name
  const hideLastName = (recommendation, index) => {
    // Check if this specific testimonial is the currently unlocked one
    if (unlockedTestimonial === index) return `${recommendation.firstName} ${recommendation.lastName}`;
    
    // Keep first name, hide last name with blurred effect
    return (
      <span className={styles.hiddenName} onClick={() => showPasswordModalForRecommendation(index)}>
        <span>{recommendation.firstName}</span> <span className={styles.blurredName}>•••••</span> <Eye size={16} className={styles.eyeIcon} />
      </span>
    );
  };

  // Function to render image with privacy protection
  const renderProtectedImage = (imageSrc, alt, index, isFeatured = false) => {
    const isUnlocked = isFeatured 
      ? unlockedImages.has('featured') 
      : unlockedImages.has(index);
    
    if (isUnlocked) {
      return (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={isFeatured ? styles.featuredAuthorImage : styles.authorImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src="/img/default-avatar.webp";
          }}
        />
      );
    }
    
    // Render blurred/locked image
    return (
      <div 
        className={`${isFeatured ? styles.featuredAuthorImage : styles.authorImage} ${styles.protectedImage}`}
        onClick={() => showPasswordModalForRecommendation(isFeatured ? 'featured' : index)}
      >
        <Lock size={24} className={styles.lockIcon} />
        <span className={styles.unlockText}>Unlock</span>
      </div>
    );
  };

  return (
    <DashboardLayout
      role="recruitment-specialist"
      activeTab="recommendations"
      title="Recruitment Specialist | Recommendations"
      description="Professional recommendations and testimonials for Shubham Narkhede"
    >
      <SectionTemplate
        title="Professional Recommendations"
        subtitle="Testimonials from managers, colleagues, and clients"
      >
        <div className={styles.recommendationsIntro}>
          <p>
            Below are recommendations from professionals I've worked with throughout my career. 
            These testimonials reflect my work ethic, technical abilities, and collaborative approach.
          </p>
        </div>
        
        {/* <div className={styles.featuredRecommendation}>
          <div className={styles.featuredRecommendationContent}>
            <div className={styles.quoteIconLarge}>
              <Quote size={40} />
            </div>
            <blockquote className={styles.featuredQuote}>
              Shubham is one of the most talented and dedicated engineers I've had the pleasure to work with. 
              His technical expertise is exceptional, but what truly sets him apart is his ability to 
              understand business needs and translate them into elegant technical solutions. He's a natural 
              leader who elevates the entire team.
            </blockquote>
            <div className={styles.featuredAuthor}>
              {renderProtectedImage(
                "https://media.licdn.com/dms/image/v2/C4E03AQGo2VfKAySFWg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517459866915?e=1762992000&v=beta&t=vtIdo9hVYyLQwfDWLfsjwR4kJmVYt1X7OLmMkOKaOIM", 
                "Alex", 
                null, 
                true
              )}
              <div className={styles.featuredAuthorInfo}>
                <h3>{unlockedTestimonial === 'featured' ? "Alex" : <span className={styles.hiddenName} onClick={() => showPasswordModalForRecommendation('featured')}><span>Alex</span> <span className={styles.blurredName}>•••••</span> <Eye size={16} className={styles.eyeIcon} /></span>}</h3>
                <p>Product Manager for eMobility Services</p>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className={styles.recommendationsCarousel}>
          <RecommendationsPanel 
            recommendations={professionalRecommendations} 
            nameFormatter={(recommendation, index) => hideLastName(recommendation, index)} 
            imageRenderer={(imageSrc, alt, index) => renderProtectedImage(imageSrc, alt, index)}
          />
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Team Collaboration"
        subtitle="Insights into my team dynamics and collaborative approach"
        withBackground={true}
      >
        <div className={styles.collaborationSection}>
          <div className={styles.collaborationCard}>
            <div className={styles.collaborationIcon}>
              <Users size={24} />
            </div>
            <h3 className={styles.collaborationTitle}>Leadership Style</h3>
            <p className={styles.collaborationText}>
              I lead by example and focus on empowering team members to take ownership of their work. 
              My approach emphasizes clear communication, setting realistic expectations, and providing 
              the support needed for success. I believe in recognizing contributions and fostering a 
              culture of continuous improvement.
            </p>
          </div>
          
          <div className={styles.collaborationCard}>
            <div className={styles.collaborationIcon}>
              <MessageSquare size={24} />
            </div>
            <h3 className={styles.collaborationTitle}>Communication Approach</h3>
            <p className={styles.collaborationText}>
              I prioritize transparent and timely communication, adapting my style to different stakeholders. 
              With technical teams, I focus on clarity and precision; with non-technical stakeholders, 
              I translate complex concepts into accessible language. I'm proactive about providing updates 
              and addressing concerns before they become issues.
            </p>
          </div>
        </div>
      </SectionTemplate>
      
      <SectionTemplate
        title="References"
        subtitle="Professional references available upon request"
        centered={true}
        className={styles.referencesSection}
      >
        <p className={styles.referencesText}>
          Additional professional references are available upon request. These include former managers, 
          colleagues, and clients who can speak to my technical abilities, work ethic, and collaborative approach.
        </p>
        <a href="/contact" className={styles.referencesButton}>
          Request References
        </a>
      </SectionTemplate>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className={styles.passwordModalOverlay}>
          <div className={styles.passwordModal}>
            <div className={styles.passwordModalHeader}>
              <h2 className={styles.passwordModalTitle}>View Protected Content</h2>
              <p className={styles.passwordModalDescription}>Enter password to view the protected content</p>
            </div>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className={styles.passwordInput}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className={styles.passwordError}>{passwordError}</div>}
              <div className={styles.passwordModalActions}>
                <button
                  type="button"
                  className={styles.passwordCancelButton}
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                    setPasswordError('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.passwordSubmitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}