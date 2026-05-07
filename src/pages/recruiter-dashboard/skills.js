import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { SkillsMatrix } from '../../components/SkillsMatrix';
import styles from './styles.module.css';
import { Globe } from 'lucide-react';

export default function RecruiterDashboardSkills() {
  const skills = {
    "Frontend": [
      { name: "TypeScript / JavaScript (ES6+)", level: 5 },
      { name: "Vue.js (Vue 3, Composition API)", level: 5 },
      { name: "Pinia / Vuex", level: 4 },
      { name: "Angular", level: 4 },
      { name: "React (Hooks, Redux, Zustand)", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Vite", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "CSS3 / HTML5", level: 5 }
    ],
    "Backend": [
      { name: "Node.js", level: 5 },
      { name: "PHP (Symfony, Composer)", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 4 }
    ],
    "Database": [
      { name: "SQL / MySQL", level: 5 },
      { name: "Redis", level: 4 },
      { name: "RabbitMQ", level: 4 }
    ],
    "Testing": [
      { name: "PHPUnit", level: 4 },
      { name: "Jest", level: 5 },
      { name: "Playwright", level: 4 },
      { name: "E2E Testing", level: 4 },
      { name: "TDD", level: 4 }
    ],
    "DevOps & Cloud": [
      { name: "Docker", level: 5 },
      { name: "Kubernetes", level: 4 },
      { name: "AWS (EC2, S3, Lambda)", level: 4 },
      { name: "Azure DevOps", level: 4 },
      { name: "CI/CD (GitHub Actions, GoCD)", level: 5 }
    ],
    "Design & UX": [
      { name: "Figma", level: 4 },
      { name: "Design Systems", level: 4 },
      { name: "Component Libraries", level: 4 },
      { name: "WCAG 2.1 AA", level: 4 },
      { name: "Agile / Scrum", level: 5 }
    ]
  };

  const languages = [
    {
      name: "English",
      proficiency: "Professional Working",
      level: "C1/C2",
      description: "Fluent in business and technical communication",
      context: "Daily work language, technical documentation, presentations",
      flag: "🇬🇧"
    },
    {
      name: "German",
      proficiency: "Intermediate",
      level: "B1",
      description: "Conversational level with ongoing improvement",
      context: "Living and working in Germany, local interactions",
      flag: "🇩🇪"
    },
    {
      name: "Hindi",
      proficiency: "Native",
      level: "Native",
      description: "Native fluency in speaking and writing",
      context: "Personal communication, cultural context",
      flag: "🇮🇳"
    },
    {
      name: "Marathi",
      proficiency: "Native (Mother Tongue)",
      level: "Native",
      description: "Mother tongue with complete fluency",
      context: "Family communication, regional cultural context",
      flag: "🇮🇳"
    },
    {
      name: "Punjabi",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural awareness",
      flag: "🇮🇳"
    },
    {
      name: "Sanskrit",
      proficiency: "Academic Level",
      level: "B1",
      description: "Reading, writing, and listening comprehension with basic speaking",
      context: "Religious texts, cultural studies, academic research",
      flag: "🇮🇳"
    },
    {
      name: "Urdu",
      proficiency: "Conversational",
      level: "B1",
      description: "Speaking and listening skills",
      context: "Cultural communication, poetry appreciation",
      flag: "🇵🇰"
    },
    {
      name: "Bengali",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional interactions, cultural awareness",
      flag: "🇧🇩"
    },
    {
      name: "Gujarati",
      proficiency: "Proficient",
      level: "B2",
      description: "Reading, writing, listening, and speaking skills",
      context: "Business communication, regional interactions",
      flag: "🇮🇳"
    },
    {
      name: "Nepali",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural awareness",
      flag: "🇳🇵"
    },
    {
      name: "Konkani",
      proficiency: "Basic Understanding",
      level: "A2",
      description: "Understanding of spoken language",
      context: "Regional communication, cultural heritage",
      flag: "🇮🇳"
    }
  ];

  return (
    <DashboardLayout
      role="recruiter-dashboard"
      activeTab="skills"
      title="Recruiter Dashboard | Skills & Certifications"
      description="Shubham Narkhede's technical skills, expertise, and professional certifications"
    >
      <SectionTemplate
        title="Technical Proficiency"
        subtitle="Overview of my technical skills and expertise levels"
      >
        <SkillsMatrix skills={skills} />
      </SectionTemplate>

      <SectionTemplate
        title="Language Proficiency"
        subtitle="Multilingual communication abilities for global collaboration"
        className={styles.languagesSection}
      >
        <div className={styles.languagesGrid}>
          {languages.map((language, index) => (
            <div key={index} className={styles.languageCard}>
              <div className={styles.languageHeader}>
                <div className={styles.languageFlag}>
                  {language.flag}
                </div>
                <div className={styles.languageHeaderContent}>
                  <h3 className={styles.languageName}>{language.name}</h3>
                  <div className={styles.languageLevel}>
                    <Globe size={16} />
                    <span>{language.level}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.languageBody}>
                <div className={styles.languageProficiency}>
                  <strong>{language.proficiency}</strong>
                </div>
                <p className={styles.languageDescription}>{language.description}</p>
                <div className={styles.languageContext}>
                  <em>Usage: {language.context}</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      {/* <SectionTemplate
        title="Continuous Learning"
        subtitle="My approach to skill development and ongoing education"
        withBackground={true}
      >
        <div className={styles.learningSection}>
          <p className={styles.learningSectionText}>
            I am committed to continuous learning and staying current with industry trends and technologies.
            My approach to professional development includes:
          </p>
          
          <div className={styles.learningApproaches}>
            <div className={styles.learningApproach}>
              <h3>Structured Learning</h3>
              <p>
                I regularly complete online courses and certification programs to deepen my knowledge in specific areas.
                Recent courses include Advanced Kubernetes Security and Enterprise Cloud Architecture.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Hands-on Projects</h3>
              <p>
                I believe in learning by doing, so I regularly work on side projects to experiment with new technologies
                and methodologies. This practical approach helps solidify theoretical knowledge.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Community Engagement</h3>
              <p>
                I actively participate in tech communities, attend conferences, and contribute to open-source projects.
                This keeps me connected to the broader tech ecosystem and exposes me to diverse perspectives.
              </p>
            </div>
            
            <div className={styles.learningApproach}>
              <h3>Knowledge Sharing</h3>
              <p>
                I regularly write technical articles and mentor junior developers. Teaching others is one of the
                most effective ways to deepen my own understanding and identify knowledge gaps.
              </p>
            </div>
          </div>
        </div>
      </SectionTemplate> */}
    </DashboardLayout>
  );
}