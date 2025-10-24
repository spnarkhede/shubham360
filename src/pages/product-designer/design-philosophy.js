import React from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { Heart, Brain, Shield, Users, TrendingUp, BarChart3, Quote, Lightbulb, Target, Eye } from 'lucide-react';

export default function ProductDesignerDesignPhilosophy() {
  const { activeTab } = useRoleStore();
  
  // Design Philosophy data with additional content for alternating sections
  const philosophySections = [
    {
      id: 'human-centered',
      title: 'Human-Centered Design Principles',
      subtitle: 'Core beliefs that guide every design decision',
      icon: <Heart />,
      content: [
        'Empathy first - Understanding users\' needs, emotions, and challenges through deep research and observation',
        'Inclusivity - Designing for diverse abilities, backgrounds, and contexts to ensure equal access for all',
        'Iterative improvement - Continuously refining solutions based on feedback and evolving user needs',
        'Purposeful simplicity - Removing complexity to reveal essential functionality and reduce cognitive load',
        'Emotional connection - Creating meaningful relationships between users and products through thoughtful interactions'
      ],
      description: 'At the heart of my design practice lies a commitment to putting people first. Every pixel, interaction, and feature begins with a deep understanding of who will use it and why.',
      image: '/img/design-philosophy/empathy-design.svg',
      imageAlt: 'Illustration showing empathy in design process'
    },
    {
      id: 'problem-solving',
      title: 'Problem-Solving Methodology',
      subtitle: 'Structured approach to tackling design challenges',
      icon: <Brain />,
      content: [
        'Discovery - Immersing in user context to uncover real problems rather than surface-level symptoms',
        'Problem reframing - Challenging assumptions and finding better problem statements through collaborative workshops',
        'Ideation - Generating diverse solutions through structured brainstorming and creative thinking techniques',
        'Prototyping - Building tangible representations to explore ideas quickly and fail fast',
        'Validation - Testing solutions with users to learn, measure impact, and identify areas for improvement',
        'Implementation support - Ensuring design vision translates effectively to final product through close collaboration'
      ],
      description: 'Effective design isn\'t just about making things look good—it\'s about solving real problems. My methodology combines analytical rigor with creative exploration to arrive at solutions that truly matter.',
      image: '/img/design-philosophy/problem-solving.svg',
      imageAlt: 'Visual representation of design problem-solving process'
    },
    {
      id: 'ethics',
      title: 'Design Ethics and Responsibility',
      subtitle: 'Moral framework for responsible design practice',
      icon: <Shield />,
      content: [
        'Privacy - Protecting user data and respecting digital boundaries through transparent data practices',
        'Accessibility - Ensuring equal access regardless of physical or cognitive abilities, following WCAG guidelines',
        'Avoid dark patterns - Rejecting manipulative design techniques that exploit cognitive biases for business gain',
        'Environmental impact - Considering sustainability in digital solutions through efficient design and green hosting',
        'Cultural sensitivity - Respecting diverse values, traditions, and worldviews in global product design',
        'Transparency - Being honest about system capabilities, limitations, and potential unintended consequences'
      ],
      description: 'With great design power comes great responsibility. As designers, we shape how people interact with technology, and therefore have an obligation to do so ethically and thoughtfully.',
      image: '/img/design-philosophy/ethical-design.svg',
      imageAlt: 'Illustration of ethical design principles'
    },
    {
      id: 'collaboration',
      title: 'Collaboration and Communication Philosophy',
      subtitle: 'Approach to working effectively with teams and stakeholders',
      icon: <Users />,
      content: [
        'Collaborative discipline - Bridging design, engineering, and business perspectives to create holistic solutions',
        'Stakeholder communication - Translating design decisions to various audiences through storytelling and visualization',
        'Workshop facilitation - Guiding teams through creative processes to unlock collective intelligence',
        'Design culture advocacy - Promoting design value within organizations through education and demonstration',
        'User advocacy - Championing user needs in product decisions, especially when business pressures conflict'
      ],
      description: 'Great design doesn\'t happen in isolation. My collaborative approach brings together diverse perspectives to create solutions that work for users, business, and technology.',
      image: '/img/design-philosophy/collaboration.svg',
      imageAlt: 'Team collaboration in design process'
    },
    {
      id: 'learning',
      title: 'Continuous Learning and Growth',
      subtitle: 'Commitment to evolving design practice',
      icon: <TrendingUp />,
      content: [
        'Trends awareness - Staying informed about industry developments without chasing every shiny object',
        'Cross-discipline learning - Drawing insights from psychology, behavioral economics, business, and technology',
        'Feedback integration - Actively seeking and incorporating critique to refine both work and process',
        'Experimentation - Testing new approaches, methodologies, and tools to expand creative possibilities',
        'Community contribution - Sharing knowledge through writing, speaking, mentoring, and open-source contributions'
      ],
      description: 'Design is a constantly evolving field. I maintain a growth mindset, continuously expanding my skills and knowledge while contributing back to the design community.',
      image: '/img/design-philosophy/learning.svg',
      imageAlt: 'Continuous learning and growth in design'
    },
    {
      id: 'success',
      title: 'Design Success Measurement',
      subtitle: 'Frameworks for evaluating design effectiveness',
      icon: <BarChart3 />,
      content: [
        'UX metrics - Task success rates, error frequency, time-on-task, and user satisfaction scores',
        'Business impact - Conversion rates, retention, customer lifetime value, and revenue growth attribution',
        'Accessibility compliance - Meeting WCAG standards and monitoring inclusive usage analytics',
        'Team adoption - How well design systems, processes, and guidelines are embraced by product teams',
        'Long-term effect - Lasting positive impact on user behavior, brand perception, and business outcomes'
      ],
      description: 'Design success isn\'t just about aesthetics—it\'s about measurable impact. I use both qualitative and quantitative methods to assess whether designs achieve their intended outcomes.',
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
      reverse: false
    },
    {
      id: 'approach',
      title: 'Holistic Approach',
      content: 'I approach each project with a holistic mindset, considering not just the immediate user interface but the entire ecosystem in which it exists. This includes understanding business goals, technical constraints, user workflows, and long-term strategic objectives. By taking a 360-degree view, I ensure that design solutions are both innovative and implementable.',
      image: '/img/design-philosophy/approach.svg',
      reverse: true
    },
    {
      id: 'impact',
      title: 'Measurable Impact',
      content: 'Design should drive tangible results. Whether it\'s improving user satisfaction scores, increasing conversion rates, or reducing support tickets, I focus on creating solutions that deliver measurable value. I work closely with product and analytics teams to define success metrics and track progress throughout the design lifecycle.',
      image: '/img/design-philosophy/impact.svg',
      reverse: false
    }
  ];

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab={activeTab['product-designer']}
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

        {/* Alternating Sections with Images */}
        <div className={styles.alternatingContent}>
          {alternatingSections.map((section, index) => (
            <div 
              key={section.id} 
              className={`${styles.alternatingSection} ${section.reverse ? styles.reverse : ''}`}
            >
              <div className={styles.philosophyImage}>
                <div className={styles.philosophyImagePlaceholder}>
                  <Lightbulb size={48} />
                </div>
              </div>
              <div className={styles.philosophyText}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.philosophyGrid}>
          {philosophySections.map((section, index) => (
            <SectionTemplate 
              key={section.id} 
              title={section.title} 
              subtitle={section.subtitle}
              icon={section.icon}
              className={styles.philosophySection}
            >
              <div className={styles.philosophyContent}>
                {section.description && (
                  <p className={styles.sectionDetail}>{section.description}</p>
                )}
                <ul className={styles.principleList}>
                  {section.content.map((item, index) => (
                    <li key={index} className={styles.principleItem}>
                      <span className={styles.principleBullet}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionTemplate>
          ))}
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