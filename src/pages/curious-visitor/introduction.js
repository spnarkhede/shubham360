import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ArrowRight, Code, Book, Briefcase, Heart, User, Sparkles, Target, Lightbulb, Zap } from 'lucide-react';

export default function CuriousVisitorIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of 5 images for the carousel
  const carouselImages = [
    { src: "/img/painterprofile.png", alt: "Shubham Narkhede - Art" },
    { src: "/img/readerprofile.jpeg", alt: "Shubham Narkhede - Reader" },
    { src: "/img/handpanprofile.png", alt: "Shubham Narkhede - Music" },
    { src: "/img/tabletennisprofile.png", alt: "Shubham Narkhede - Sports" },
    { src: "/img/workoutprofile.png", alt: "Shubham Narkhede - Fitness" }
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

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

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="introduction"
      title="Curious Visitor | Introduction"
      description="Welcome to Shubham Narkhede's personal website. Learn about my background, interests, and explore my portfolio."
    >
      {/* Personal Profile Section */}
      <SectionTemplate
        title="Personal Overview"
        subtitle="The Art of Living Curiously"
        icon={User}
      >
        <div className={styles.profileLayout}>
          <div className={styles.profileText}>
            <p className={styles.summaryText}>
              Beyond job titles and technical frameworks, I'm the kind of person who notices the little wonders: sunlight quilting the pavement, the perfect rhythm of a solved problem, or a chance conversation that changes the day. My curiosity travels beyond screens — it reaches into people, places, and the curious threads that connect cultures and ideas.
            </p>

            <p className={styles.summaryText}>
              I value honesty, steady growth, and conversations that matter. I believe passions outside the office — whether messy, quiet, or wildly social — sharpen how I think and create. So when I'm not debugging, I'm learning from hikes, sketches, or the unexpected insights of a late-night chat.
            </p>

            <p className={styles.summaryText}>
              My life beyond work is a patchwork of practical play and creative ritual: organizing team events that spark laughter and connection, sketching and painting to slow time, keeping fit with yoga and workouts, and chasing sunlight with a camera on nature walks. I love the quick focus of a table-tennis rally, the friendly chaos of foosball, and the quiet aim of darts — all tiny laboratories of attention.
            </p>

            <p className={styles.summaryText}>
              I'm also a wanderer and a listener — traveling to learn new rhythms, playing frequency instruments to feel sound as texture, and reading books that nudge my thinking. Each hobby teaches me something useful: patience, pattern-recognition, or a new way to see the world. That curiosity is the constant — energetic, open, and easily delighted.
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
          
          <div className={styles.profileImageContainer}>
            <div className={styles.carousel}>
              {carouselImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className={styles.carouselImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src="/img/default-profile.png";
                    }}
                  />
                </div>
              ))}
              <div className={styles.carouselIndicators}>
                {carouselImages.map((_, index) => (
                  <div 
                    key={index} 
                    className={`${styles.carouselIndicator} ${index === currentSlide ? styles.active : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Area of Personal Passions Section */}
      <SectionTemplate
        title="Personal Interests & Hobbies"
        subtitle="Personal Passions & Reflective Insights"
        icon={Sparkles}
        withBackground={true}
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

      {/* Personal Philosophy Section */}
      <SectionTemplate
        title="Personal Philosophy"
        subtitle="Life lessons & guiding mindset"
        icon={Lightbulb}
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

      {/* Current Explorations Section */}
      <SectionTemplate
        title="Current Explorations"
        subtitle="Ongoing learning & projects"
        icon={Target}
        withBackground={true}
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

      {/* Life Lessons Section */}
      <SectionTemplate
        title="Life Lessons from Hobbies"
        subtitle="How hobbies inform life & work"
        icon={Zap}
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

      {/* Values in Action Section */}
      <SectionTemplate
        title="Values in Action"
        subtitle="Daily application of personal values"
        icon={Heart}
        withBackground={true}
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
    </DashboardLayout>
  );
}