import React, { useState } from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { 
  BookOpen, 
  Users, 
  Target, 
  Lightbulb, 
  BarChart3, 
  UserCheck, 
  Map, 
  Brain, 
  Palette, 
  Monitor, 
  ThumbsUp, 
  TrendingUp,
  FileText,
  Layers,
  Settings,
  Eye
} from 'lucide-react';

export default function ProductDesignerCaseStudies() {
  const { activeTab } = useRoleStore();
  const [expandedSections, setExpandedSections] = useState({});
  
  // Toggle section expansion
  const toggleSection = (studyId, sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${studyId}-${sectionName}`]: !prev[`${studyId}-${sectionName}`]
    }));
  };
  
  // Case study data
  const caseStudies = [
    {
      id: 'ecommerce-redesign',
      title: 'E-commerce Dashboard Redesign',
      description: 'Complete redesign of an enterprise e-commerce analytics dashboard with focus on data visualization and user workflows.',
      category: 'UI/UX Design',
      year: '2024',
      thumbnail: '/img/portfolio/ecommerce-dashboard.jpg',
      overview: {
        context: 'The client is a leading e-commerce platform serving over 2 million merchants worldwide. Their existing analytics dashboard was outdated and difficult to use, leading to low adoption rates among merchants.',
        problem: 'Merchants struggled to find key metrics and insights, resulting in poor decision-making and decreased platform engagement.',
        role: 'Lead Product Designer',
        timeline: '4 months',
        constraints: 'Limited development resources, tight deadline, complex data sets'
      },
      research: {
        methods: ['User Interviews (15 merchants)', 'Analytics Review', 'Competitive Analysis', 'Usability Testing'],
        goals: ['Identify pain points in current dashboard', 'Understand merchant decision-making processes', 'Discover unmet needs'],
        findings: [
          'Merchants spent 40% more time than necessary finding key metrics',
          '85% of users couldn\'t locate conversion data without assistance',
          'Competitors offered more intuitive data visualization'
        ],
        personas: [
          {
            name: 'Samantha, E-commerce Manager',
            role: 'Manages 50+ products for a mid-sized retailer',
            needs: 'Quick access to sales trends and inventory alerts'
          }
        ]
      },
      problemDefinition: {
        synthesis: 'Merchants needed a simplified, intuitive interface that prioritized actionable insights over raw data.',
        principles: [
          'Data should tell a story',
          'Prioritize frequently accessed metrics',
          'Minimize cognitive load for complex data'
        ],
        opportunities: [
          'Personalized dashboard views',
          'Predictive analytics integration',
          'Mobile-responsive design'
        ]
      },
      ideation: {
        methods: ['Design Studio Workshop', 'Sketching Sessions', 'Card Sorting'],
        sketches: 'Early concepts focused on modular layouts and data visualization hierarchies',
        architecture: 'Organized information into logical sections: Overview, Sales, Customers, Products',
        decisions: 'Chose a card-based layout to allow for modular customization'
      },
      design: {
        evolution: 'Progressed from low-fidelity wireframes to high-fidelity interactive prototypes',
        prototyping: 'Created clickable prototypes for usability testing with 10 merchants',
        ui: 'Used consistent color coding for different data types and clear visual hierarchy',
        accessibility: 'Implemented WCAG 2.1 AA standards, keyboard navigation, and screen reader support'
      },
      testing: {
        methods: ['Usability Testing (10 participants)', 'A/B Testing', 'Analytics Monitoring'],
        feedback: [
          '90% reduction in time to find key metrics',
          'Improved task completion rate from 65% to 92%',
          'Positive sentiment in user interviews'
        ],
        iterations: [
          'Simplified navigation structure',
          'Added data export functionality',
          'Improved error messaging'
        ],
        challenges: [
          'Balancing data density with visual clarity',
          'Ensuring performance with large datasets'
        ]
      },
      solution: {
        designs: 'Implemented a modular dashboard with personalized widgets and improved data visualization',
        implementation: 'Collaborated with front-end developers using design system components',
        system: 'Created reusable dashboard components for future projects'
      },
      results: {
        metrics: [
          '40% increase in dashboard usage',
          '65% reduction in support tickets related to analytics',
          '25% improvement in merchant decision-making speed'
        ],
        feedback: 'Merchants reported significantly improved experience and better business outcomes',
        outcomes: 'Client renewed contract for next 3 years and expanded scope to mobile app',
        learnings: 'User research is critical for complex data products; iterative design leads to better outcomes'
      }
    },
    {
      id: 'mobile-banking',
      title: 'Mobile Banking App',
      description: 'User-centered mobile banking application with emphasis on security and accessibility.',
      category: 'Mobile Design',
      year: '2023',
      thumbnail: '/img/portfolio/banking-app.jpg',
      overview: {
        context: 'A major financial institution wanted to modernize their mobile banking app to compete with fintech startups.',
        problem: 'The existing app had low user satisfaction scores and high abandonment rates during onboarding.',
        role: 'Product Designer & Accessibility Specialist',
        timeline: '6 months',
        constraints: 'Strict regulatory requirements, security protocols, legacy system integration'
      },
      research: {
        methods: ['User Interviews (20 customers)', 'Accessibility Audit', 'Journey Mapping', 'Security Testing'],
        goals: ['Identify onboarding friction points', 'Understand accessibility barriers', 'Map security concerns'],
        findings: [
          '45% of users abandoned app during onboarding',
          'Only 30% of accessibility features were properly implemented',
          'Security measures were perceived as cumbersome'
        ],
        personas: [
          {
            name: 'Robert, Retiree',
            role: 'Recently switched to mobile banking',
            needs: 'Simple interface, clear instructions, reliable security'
          }
        ]
      },
      problemDefinition: {
        synthesis: 'Users needed a secure yet simple banking experience that built trust without sacrificing usability.',
        principles: [
          'Security should enhance rather than hinder experience',
          'Complexity should be hidden, not eliminated',
          'Accessibility is a baseline requirement, not an add-on'
        ],
        opportunities: [
          'Biometric authentication',
          'Progressive onboarding',
          'Voice-assisted navigation'
        ]
      },
      ideation: {
        methods: ['Co-design Sessions', 'Prototyping Workshop', 'Accessibility Testing'],
        sketches: 'Explored various authentication flows and navigation patterns',
        architecture: 'Designed information architecture around user tasks: Check Balance, Transfer Money, Pay Bills',
        decisions: 'Chose bottom navigation for thumb-friendly access and progressive disclosure for complex features'
      },
      design: {
        evolution: 'Evolved from basic wireframes to high-fidelity designs with micro-interactions',
        prototyping: 'Built interactive prototypes for security testing and accessibility validation',
        ui: 'Used financial industry color palette with high contrast for readability',
        accessibility: 'Implemented full screen reader support, voice commands, and alternative text'
      },
      testing: {
        methods: ['Usability Testing (15 participants)', 'Security Audit', 'Accessibility Compliance Testing'],
        feedback: [
          '80% completion rate for onboarding (up from 55%)',
          'Perfect score on WCAG 2.1 AAA compliance',
          'Positive feedback on security features'
        ],
        iterations: [
          'Simplified account linking process',
          'Added security education tooltips',
          'Improved error recovery flows'
        ],
        challenges: [
          'Balancing security with convenience',
          'Meeting diverse accessibility needs'
        ]
      },
      solution: {
        designs: 'Launched a modern mobile banking app with progressive onboarding and comprehensive accessibility features',
        implementation: 'Worked closely with security team to implement biometric authentication and encryption',
        system: 'Developed component library for financial applications with accessibility baked in'
      },
      results: {
        metrics: [
          '75% increase in successful onboarding',
          '40% reduction in customer service calls',
          '95% accessibility compliance score'
        ],
        feedback: 'Customers praised the simplified interface and robust security features',
        outcomes: 'App store rating increased from 2.8 to 4.6 stars; 35% increase in active users',
        learnings: 'Accessibility and security can enhance rather than hinder user experience with thoughtful design'
      }
    }
  ];

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab="case-studies"
      title="Design Case Studies"
      description="In-depth exploration of my design process, research, and problem-solving approach"
    >
      <div className={styles.caseStudiesContainer}>
        {/* Introduction Section */}
        <SectionTemplate 
          title="Design Case Studies" 
          subtitle="Detailed exploration of my design process and problem-solving approach"
          icon={<BookOpen />}
        >
          <div className={styles.caseStudiesIntro}>
            <p>
              These case studies showcase my complete design process, from initial research to final implementation. 
              Each project demonstrates how I approach complex challenges, conduct user research, and create solutions 
              that deliver measurable business impact while providing exceptional user experiences.
            </p>
          </div>
        </SectionTemplate>

        {/* Case Studies Grid */}
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <SectionTemplate 
              key={study.id} 
              title={study.title}
              subtitle={`${study.category} • ${study.year}`}
              icon={<FileText />}
              className={styles.caseStudySection}
            >
              <div className={styles.caseStudyContent}>
                <p className={styles.caseStudyDescription}>{study.description}</p>
                
                {/* Project Overview */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'overview')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Target className={styles.sectionIcon} size={20} />
                      Project Overview
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-overview`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-overview`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Context:</strong> {study.overview.context}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Problem:</strong> {study.overview.problem}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>My Role:</strong> {study.overview.role}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Timeline:</strong> {study.overview.timeline}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Constraints:</strong> {study.overview.constraints}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Research Phase */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'research')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Users className={styles.sectionIcon} size={20} />
                      Research Phase
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-research`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-research`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.research.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Goals:</strong> {study.research.goals.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Findings:</strong>
                        <ul className={styles.bulletList}>
                          {study.research.findings.map((finding, i) => (
                            <li key={i}>{finding}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Problem Definition */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'problem')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Brain className={styles.sectionIcon} size={20} />
                      Problem Definition
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-problem`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-problem`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Synthesis:</strong> {study.problemDefinition.synthesis}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Design Principles:</strong>
                        <ul className={styles.bulletList}>
                          {study.problemDefinition.principles.map((principle, i) => (
                            <li key={i}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Opportunity Areas:</strong>
                        <ul className={styles.bulletList}>
                          {study.problemDefinition.opportunities.map((opportunity, i) => (
                            <li key={i}>{opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Ideation */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'ideation')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Lightbulb className={styles.sectionIcon} size={20} />
                      Ideation
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-ideation`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-ideation`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.ideation.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Decisions:</strong> {study.ideation.decisions}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Design Process */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'design')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Palette className={styles.sectionIcon} size={20} />
                      Design Process
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-design`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-design`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Evolution:</strong> {study.design.evolution}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Accessibility:</strong> {study.design.accessibility}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Testing & Iteration */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'testing')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <UserCheck className={styles.sectionIcon} size={20} />
                      Testing & Iteration
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-testing`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-testing`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Methods:</strong> {study.testing.methods.join(', ')}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key Iterations:</strong>
                        <ul className={styles.bulletList}>
                          {study.testing.iterations.map((iteration, i) => (
                            <li key={i}>{iteration}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Final Solution */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'solution')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <Monitor className={styles.sectionIcon} size={20} />
                      Final Solution
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-solution`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-solution`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Implementation:</strong> {study.solution.implementation}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Results & Impact */}
                <div className={styles.caseStudySection}>
                  <div 
                    className={styles.collapsibleHeader} 
                    onClick={() => toggleSection(study.id, 'results')}
                  >
                    <h3 className={styles.sectionHeading}>
                      <TrendingUp className={styles.sectionIcon} size={20} />
                      Results & Impact
                    </h3>
                    <span className={styles.toggleIcon}>
                      {expandedSections[`${study.id}-results`] ? '−' : '+'}
                    </span>
                  </div>
                  {expandedSections[`${study.id}-results`] && (
                    <div className={styles.sectionGrid}>
                      <div className={styles.detailItem}>
                        <strong>Key Metrics:</strong>
                        <ul className={styles.bulletList}>
                          {study.results.metrics.map((metric, i) => (
                            <li key={i}>{metric}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Business Outcomes:</strong> {study.results.outcomes}
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Learnings:</strong> {study.results.learnings}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionTemplate>
          ))}
        </div>

        {/* Additional Elements */}
        <SectionTemplate 
          title="My Design Process" 
          subtitle="How I approach UX challenges"
          icon={<Layers />}
        >
          <div className={styles.processOverview}>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Research & Discovery</h3>
                <p>Understanding user needs, business goals, and technical constraints through various research methods.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Problem Definition</h3>
                <p>Synthesizing research findings to clearly articulate the problem and establish design principles.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Ideation & Concepting</h3>
                <p>Generating creative solutions through brainstorming, sketching, and collaborative workshops.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Design & Prototyping</h3>
                <p>Creating detailed designs and interactive prototypes to visualize and test solutions.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Testing & Iteration</h3>
                <p>Validating designs with users and iterating based on feedback to optimize the experience.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>6</div>
                <h3>Implementation & Evaluation</h3>
                <p>Collaborating with development teams and measuring the impact of design solutions.</p>
              </div>
            </div>
          </div>
        </SectionTemplate>

        <SectionTemplate 
          title="Skills & Expertise" 
          subtitle="Methods and tools I regularly use"
          icon={<Settings />}
        >
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Research Methods</h3>
              <ul>
                <li>User Interviews</li>
                <li>Surveys & Questionnaires</li>
                <li>Usability Testing</li>
                <li>Analytics Analysis</li>
                <li>Competitive Analysis</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Design Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Adobe Creative Suite</li>
                <li>ProtoPie</li>
                <li>Framer</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Specializations</h3>
              <ul>
                <li>Design Systems</li>
                <li>Data Visualization</li>
                <li>Accessibility</li>
                <li>Mobile Design</li>
                <li>Enterprise Software</li>
              </ul>
            </div>
          </div>
        </SectionTemplate>
      </div>
    </ProductDesignerDashboard>
  );
}