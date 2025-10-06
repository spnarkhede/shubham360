import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import { SkillsMatrix } from '../../components/SkillsMatrix';
import styles from './styles.module.css';
import { Globe } from 'lucide-react';

export default function RecruitmentSpecialistSkills() {
  const skills = {
    "Frontend": [
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Angular", level: 4 },
      { name: "React.js", level: 5 },
      { name: "Vue.js", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Dart", level: 3 },
      { name: "Flutter", level: 3 },
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
      { name: "Material UI", level: 4 }
    ],
    "Backend": [
      { name: "Node.js", level: 5 },
      { name: "Express.js", level: 5 },
      { name: "Spring Boot", level: 4 },
      { name: "Java", level: 4 },
      { name: "Kotlin", level: 3 },
      { name: "PHP", level: 3 },
      { name: "Python", level: 4 },
      { name: ".NET", level: 3 },
      { name: "C++", level: 3 },
      { name: "C", level: 3 },
      { name: "MySQL", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "SQL", level: 5 }
    ],
    "Designer": [
      { name: "Miro", level: 4 },
      { name: "Notion", level: 5 },
      { name: "Figma", level: 4 },
      { name: "Sketch", level: 3 },
      { name: "Adobe XD", level: 3 },
      { name: "Balsamiq", level: 4 },
      { name: "Canva", level: 4 },
      { name: "Wireframing", level: 4 },
      { name: "Prototyping", level: 4 }
    ],
    "Testing": [
      { name: "Playwright", level: 4 },
      { name: "Cypress", level: 4 },
      { name: "Jest", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Swagger/Open API", level: 4 },
      { name: "AWS", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "SoapUI", level: 3 },
      { name: "Manual Testing", level: 5 }
    ],
    "DevOps": [
      { name: "GitHub", level: 5 },
      { name: "Docker", level: 5 },
      { name: "Jenkins", level: 4 },
      { name: "Azure DevOps", level: 4 },
      { name: "CI/CD Pipeline", level: 5 },
      { name: "Maven", level: 4 },
      { name: "Grafana", level: 4 },
      { name: "Nginx", level: 4 },
      { name: "IAM (SSO, OpenID/SKID)", level: 4 }
    ],
    "Documentation": [
      { name: "JIRA", level: 5 },
      { name: "arc 42", level: 4 },
      { name: "Kanban", level: 4 },
      { name: "Confluence", level: 5 },
      { name: "Docupedia", level: 3 },
      { name: "Docusaurus", level: 4 },
      { name: "InnerScource", level: 4 },
      { name: "VitePress", level: 3 }
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
      role="recruitment-specialist"
      activeTab="skills"
      title="Recruitment Specialist | Skills & Certifications"
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