import React from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { Heart, Brain, Shield, Users, TrendingUp, BarChart3, Quote, Lightbulb, Target, Eye, Compass, Zap, Award } from 'lucide-react';

export default function ProductDesignerDesignPhilosophy() {
  const { activeTab } = useRoleStore();
  
  // Design Philosophy data with additional content for alternating sections
  const philosophySections = [
    {
      id: 'human-centered',
      title: 'Human-Centered Design',
      subtitle: 'Empathy-driven solutions',
      icon: <Heart />,
      content: [
        'Empathy first - Deep user research and observation',
        'Inclusivity - Accessible design for all abilities',
        'Iterative improvement - Continuous refinement',
        'Purposeful simplicity - Essential functionality focus',
        'Emotional connection - Meaningful user relationships'
      ],
      description: 'Every design decision begins with understanding who will use it and why. I create solutions that truly resonate with users.',
      image: '/img/design-philosophy/empathy-design.svg',
      imageAlt: 'Illustration showing empathy in design process'
    },
    {
      id: 'problem-solving',
      title: 'Strategic Problem Solving',
      subtitle: 'Structured methodology',
      icon: <Brain />,
      content: [
        'Discovery - Uncovering real user problems',
        'Problem reframing - Better problem statements',
        'Ideation - Diverse solution generation',
        'Prototyping - Rapid exploration',
        'Validation - User testing and learning',
        'Implementation - Seamless execution'
      ],
      description: 'I combine analytical rigor with creative exploration to solve complex challenges with measurable impact.',
      image: '/img/design-philosophy/problem-solving.svg',
      imageAlt: 'Visual representation of design problem-solving process'
    },
    {
      id: 'ethics',
      title: 'Ethical Design',
      subtitle: 'Responsible practices',
      icon: <Shield />,
      content: [
        'Privacy - Transparent data practices',
        'Accessibility - WCAG compliance',
        'Avoid dark patterns - Ethical design',
        'Environmental impact - Sustainable solutions',
        'Cultural sensitivity - Global respect',
        'Transparency - Honest communication'
      ],
      description: 'Design has the power to shape behavior. I wield this power responsibly with ethical considerations at every step.',
      image: '/img/design-philosophy/ethical-design.svg',
      imageAlt: 'Illustration of ethical design principles'
    },
    {
      id: 'collaboration',
      title: 'Collaborative Approach',
      subtitle: 'Cross-functional teamwork',
      icon: <Users />,
      content: [
        'Collaborative discipline - Bridging perspectives',
        'Stakeholder communication - Clear storytelling',
        'Workshop facilitation - Creative processes',
        'Design culture advocacy - Value promotion',
        'User advocacy - Championing user needs'
      ],
      description: 'Great design emerges from diverse perspectives. I facilitate collaboration to create holistic solutions.',
      image: '/img/design-philosophy/collaboration.svg',
      imageAlt: 'Team collaboration in design process'
    },
    {
      id: 'learning',
      title: 'Continuous Growth',
      subtitle: 'Evolution and innovation',
      icon: <TrendingUp />,
      content: [
        'Trends awareness - Industry developments',
        'Cross-discipline learning - Diverse insights',
        'Feedback integration - Constructive critique',
        'Experimentation - New approaches',
        'Community contribution - Knowledge sharing'
      ],
      description: 'Design is constantly evolving. I maintain a growth mindset to stay at the forefront of the field.',
      image: '/img/design-philosophy/learning.svg',
      imageAlt: 'Continuous learning and growth in design'
    },
    {
      id: 'success',
      title: 'Impact Measurement',
      subtitle: 'Data-driven results',
      icon: <BarChart3 />,
      content: [
        'UX metrics - Task success and satisfaction',
        'Business impact - Conversion and retention',
        'Accessibility compliance - WCAG standards',
        'Team adoption - Design system usage',
        'Long-term effect - Lasting positive impact'
      ],
      description: 'Design success is measured by tangible outcomes. I use both qualitative and quantitative methods to validate impact.',
      image: '/img/design-philosophy/measurement.svg',
      imageAlt: 'Metrics and measurement in design'
    }
  ];

  // Alternating content sections with images
  const alternatingSections = [
    {
      id: 'vision',
      title: 'Design Vision',
      content: 'My design vision centers on creating digital experiences that are not only functional and beautiful but also meaningful and inclusive. I believe that great design has the power to solve complex problems, bridge cultural divides, and improve lives. Every project is an opportunity to push boundaries while staying grounded in user needs and business objectives.',
      image: '/img/design-philosophy/vision.svg',
      reverse: false,
      icon: <Compass />
    },
    {
      id: 'approach',
      title: 'Holistic Approach',
      content: 'I approach each project with a holistic mindset, considering not just the immediate user interface but the entire ecosystem in which it exists. This includes understanding business goals, technical constraints, user workflows, and long-term strategic objectives. By taking a 360-degree view, I ensure that design solutions are both innovative and implementable.',
      image: '/img/design-philosophy/approach.svg',
      reverse: true,
      icon: <Zap />
    },
    {
      id: 'impact',
      title: 'Measurable Impact',
      content: 'Design should drive tangible results. Whether it\'s improving user satisfaction scores, increasing conversion rates, or reducing support tickets, I focus on creating solutions that deliver measurable value. I work closely with product and analytics teams to define success metrics and track progress throughout the design lifecycle.',
      image: '/img/design-philosophy/impact.svg',
      reverse: false,
      icon: <Award />
    }
  ];

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab="design-philosophy"
      title="Design Philosophy"
      description="Core principles guiding my approach to product design"
    >
      <div className={styles.philosophyContainer}>
        <div className={styles.introSection}>
          <h1 className={styles.sectionTitle}>Design Philosophy</h1>
          <p className={styles.sectionDescription}>
            My design philosophy centers on creating meaningful experiences that balance user needs, 
            business objectives, and ethical considerations. These principles guide every decision in 
            my design process, from initial research to final implementation.
          </p>
        </div>

        {/* Core Values Section */}
        <div className={styles.coreValuesSection}>
          <SectionTemplate 
            title="Core Design Values" 
            subtitle="Foundational principles that shape my work"
            icon={<Target />}
          >
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Heart size={24} />
                </div>
                <h3>User-Centric</h3>
                <p>Every decision starts with understanding user needs, behaviors, and motivations.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Brain size={24} />
                </div>
                <h3>Strategic Thinking</h3>
                <p>Design solutions aligned with business goals and long-term product vision.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Shield size={24} />
                </div>
                <h3>Ethical Design</h3>
                <p>Creating responsible experiences that respect users and society.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <TrendingUp size={24} />
                </div>
                <h3>Continuous Learning</h3>
                <p>Staying current with industry trends while building on timeless principles.</p>
              </div>
            </div>
          </SectionTemplate>
        </div>

        {/* Alternating Sections with Images */}
        <div className={styles.alternatingContent}>
          {alternatingSections.map((section, index) => (
            <div 
              key={section.id} 
              className={`${styles.alternatingSection} ${section.reverse ? styles.reverse : ''}`}
            >
              <div className={styles.philosophyImage}>
                <div className={styles.philosophyImagePlaceholder}>
                  {section.icon}
                </div>
              </div>
              <div className={styles.philosophyText}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Principles Grid */}
        <div className={styles.philosophyPrinciples}>
          <SectionTemplate 
            title="Design Principles" 
            subtitle="Guiding frameworks for every project"
            icon={<Compass />}
          >
            <div className={styles.principlesGrid}>
              {philosophySections.map((section, index) => (
                <div key={section.id} className={styles.principleCard}>
                  <div className={styles.principleHeader}>
                    <div className={styles.principleIcon}>
                      {section.icon}
                    </div>
                    <div className={styles.principleTitle}>
                      <h3>{section.title}</h3>
                      <p>{section.subtitle}</p>
                    </div>
                  </div>
                  <p className={styles.principleDescription}>{section.description}</p>
                  <ul className={styles.principlePoints}>
                    {section.content.map((item, index) => (
                      <li key={index}>
                        <span className={styles.pointBullet}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionTemplate>
        </div>

        <div className={styles.conclusionSection}>
          <SectionTemplate title="Design Impact" icon={<Eye />}>
            <div className={styles.conclusionContent}>
              <p>
                By adhering to these principles, I aim to create products that not only solve immediate 
                problems but also contribute positively to users' lives and society as a whole. Design 
                has the power to shape behavior, influence emotions, and drive progress – I believe in 
                wielding this power responsibly.
              </p>
              <blockquote className={styles.designQuote}>
                "Good design is as little design as possible. Less, but better – because it concentrates 
                on the essential aspects, and the products are not burdened with non-essentials. Back to 
                purity, back to simplicity."
                <cite className={styles.quoteAuthor}>— Dieter Rams, Industrial Designer</cite>
              </blockquote>
              <p>
                This philosophy drives my commitment to purposeful design that serves users while advancing 
                the broader field of design practice. Each project is an opportunity to demonstrate how 
                thoughtful design can make technology more human, business more ethical, and the world a 
                little bit better.
              </p>
            </div>
          </SectionTemplate>
        </div>
      </div>
    </ProductDesignerDashboard>
  );
}