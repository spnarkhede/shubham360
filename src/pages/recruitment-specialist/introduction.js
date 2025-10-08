import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import RecommendationsPanel from '../../components/RecommendationsPanel';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Eye } from 'lucide-react';

export default function RecruitmentSpecialistIntroduction() {
  const [unlockedTestimonial, setUnlockedTestimonial] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(null);

  // Calculate years and months of experience dynamically from April 2019 to current date
  const startDate = new Date('2019-04-01');
  const currentDate = new Date();
  const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  const yearsOfExperience = Math.floor(diffMonths / 12);
  const monthsOfExperience = diffMonths % 12;
  
  // Format the experience string in short format (e.g., 6.5 years)
  const totalYears = yearsOfExperience + (monthsOfExperience / 12);
  const shortExperienceString = `${totalYears.toFixed(1)} years`;

  // Professional recommendations data
  const professionalRecommendations = [
    {
      firstName: "Edgar",
      lastName: "Koepplin",
      title: "Director Area Sales & Global Distribution Partner Management for Mobile Hydraulics & Digital Sales E2E Process Owner at BOSCH REXROTH AG",
      image: "/img/testimonials/edgar.jpg",
      quote: "Shubham did an exceptional job on recent projects. He did a great job in Bosch Rexroth AG presence in terms of developing digital tools and software for the Sales and Distribution division. He started working with me as a Full-stack Software Engineer intern. The role included creating applications and software tools for digitalizing the sales market, and later expanded his role into DevOps Software Engineer. As I remember, Shubham was a very productive person and is a multiskilled person with vast knowledge. He is careful, proactive, intelligent, a team player and a customer-service oriented colleague. A great employee — whenever there was a problem, Shubham found a solution. He is truly an asset to any company.",
      rating: 5,
      date: "May 2022",
      relationship: "Direct Manager"
    },
    {
      firstName: "Andrea",
      lastName: "Alberti",
      title: "Product Manager & Product Owner @Bosch Rexroth | Ubuntu lifestyle",
      image: "/img/testimonials/andrea.jpg",
      quote: "I have been working for one year in close contact with Mr. Shubham Narkhede as part of the Sales and Distribution Management team at Bosch Rexroth. Shubham has been supporting me and my team as SW developer for many of the digital tools we are currently supplying to our sales partners, and I am happy to recommend him as a highly skilled professional in this field based on this experience. In addition to the technical skills, Shubham showed a strong entrepreneurial mindset by investing time to continuously learn new skills that could help the team in reaching better results, and by personally taking over many activities and successfully bringing them to an end.",
      rating: 5,
      date: "August 2022",
      relationship: "Senior Colleague (didn't manage directly)"
    },
    {
      firstName: "Selin",
      lastName: "Kelles",
      title: "Program Manager at Bosch Rexroth AG",
      image: "/img/testimonials/selin.jpg",
      quote: "Shubham is a great developer with great skills. He has impressed all the team with his passion for his projects and ability to do everything possible to reach the goal. His help to his colleagues is impressive as well. He developed tools that strongly impact our Bosch Rexroth industry, which is great. His motivation everyday is strong and he has the strength to motivate people around him, which is amazing. He's a great colleague and friend at the same time, and I wish him all the best!",
      rating: 5,
      date: "July 2022",
      relationship: "Teammate"
    },
    {
      firstName: "Jakob",
      lastName: "Tempel",
      title: "Team Manager at Bosch Rexroth AG | Co-Founder at O7EAN GmbH",
      image: "/img/testimonials/jakob.jpg",
      quote: "I am impressed with Mr. Shubham Narkhede's ability to program software, his knowledge of DevOps tools, and his advanced communication skills, which he uses to his advantage when presenting to customers and colleagues. Shubham Narkhede has done a great job expanding Bosch Rexroth AG's presence in terms of software and application development for the Sales and Distribution division. He also diligently ensures that his KPIs are updated and tracked, which helped me understand what was going well and what was not. His expertise as a software engineer is considerable and has helped our team find more efficient solutions and develop various projects. His contributions such as blogs, resources, information, documentation and helpfulness have been very valuable to the community. He is a very focused and analytical person and can add value to any team he is a part of. His energy to push things forward was contagious and helped us achieve great goals. I highly recommend Shubham as a software engineer and would love to work with him again. I am sure Shubham will achieve great things in his career.",
      rating: 5,
      date: "April 2022",
      relationship: "Team Administrtor"
    },
    {
      firstName: "Dr. Neeranjan",
      lastName: "Chitare",
      title: "Birmingham City University | Lecturer & Expert Fellow SPRITE+",
      image: "/img/testimonials/neeranjan.jpg",
      quote: "Shubham was my student during his graduation (2014-18). Given any assignment to him, he does it in the best possible way and always before time. His passion for learning will definitely boost his graph of growing. He is equally enthusiastic to work with and help his teammates. His acute interest in arts gives him an additional edge. I am sure he can confidently handle the research as well as professional portfolio in the best manner.",
      rating: 5,
      date: "May 2018",
      relationship: "Professor"
    },
    {
      firstName: "Ashwini",
      lastName: "Borle",
      title: "Senior Technical Product Manager at Mastercard",
      image: "/img/testimonials/ashwini.jpg",
      quote: "Shubham is a positive thinker, self motivated and has a lot of software skills. He has done several web development projects. He is good in arts, full with passion, enthusiasm and positive attitude. Completes all his work before time. He is the perfect candidate to hire. Wish you best of luck!!",
      rating: 5,
      date: "May 2019",
      relationship: "Mentor"
    },
    {
      firstName: "Deepak",
      lastName: "Dhote",
      title: "Operations Manager at IT-NetworkZ",
      image: "/img/testimonials/deepak.jpg",
      quote: "Hi Shubham. Hope you are doing good! You are one of the best interns we had worked with. There are so many trainees & engineers to whom we trained and worked with, you are a special one. Keep your enthusiasm and willingness to learn new things like earlier. I always saw you as a key person in a team. I would strongly suggest companies to not miss a candidate like you if they are planning to offer you any role. I must say that you are an intelligent & hardworking person of outstanding character. I wish you a successful career ahead.",
      rating: 5,
      date: "May 2019",
      relationship: "Direct Manager"
    },
    {
      firstName: "Anup",
      lastName: "Borle",
      title: "SRE Engineer - AVP at Deutsche Bank | ITIL, DevOps",
      image: "/img/testimonials/anup.jpg",
      quote: "Mr. Shubham is motivated, forward thinking and highly talented individual with lots of knowledge in his field. His unmatched skills and ingenuity makes him a perfect candidate for anyone who is open to hire and want to take an enthusiastic and energetic person by their side.",
      rating: 5,
      date: "February 2019",
      relationship: "Mentor"
    },
    {
      firstName: "Akshay",
      lastName: "Saraf",
      title: "Doctoral Researcher | Ph.D. Scholar at VNIT Nagpur",
      image: "/img/testimonials/akshay.jpg",
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
              src="/img/profileintro.png" 
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
                <li>{shortExperienceString} of experience in software development and DevOps</li>
                <li>Expertise in React, Node.js, Docker, Kubernetes, and AWS</li>
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
              <Link to="/recruitment-specialist/contact" className={styles.secondaryButton}>
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
      
      <SectionTemplate
        title="What Colleagues Say"
        subtitle="Testimonials from past and current collaborators"
        withBackground={true}
        className={styles.recommendationsSection}
      >
        <RecommendationsPanel 
          recommendations={professionalRecommendations} 
          nameFormatter={(recommendation, index) => hideLastName(recommendation, index)} 
        />
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

      {/* Password Modal */}
      {showPasswordModal && (
        <div className={styles.passwordModalOverlay}>
          <div className={styles.passwordModal}>
            <div className={styles.passwordModalHeader}>
              <h2 className={styles.passwordModalTitle}>View Full Name</h2>
              <p className={styles.passwordModalDescription}>Enter password to view the full name of this recommender</p>
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