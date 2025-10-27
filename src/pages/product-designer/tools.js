import React from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { 
  Figma, 
  PenTool, 
  Smartphone, 
  Monitor, 
  Zap, 
  Users, 
  Eye, 
  Heart, 
  Palette,
  Cpu,
  Settings,
  Wrench,
  Lightbulb,
  FileText,
  BookOpen,
  Target,
  Grid,
  Database,
  GitBranch,
  MousePointer,
  Layout,
  StickyNote,
  Frame,
  Type,
  Image,
  Share2,
  Code
} from 'lucide-react';

export default function ProductDesignerTools() {
  const { activeTab } = useRoleStore();
  
  // Tools and skills data organized by category
  const toolsData = [
    {
      category: "Design Tools",
      icon: <PenTool />,
      items: [
        { name: "Figma", level: "Expert", icon: <Figma />, description: "Collaborative design and prototyping platform" },
        { name: "Adobe Creative Suite", level: "Advanced", icon: <Palette />, description: "Industry-standard creative tools including Photoshop, Illustrator, and XD" },
        { name: "Sketch", level: "Advanced", icon: <PenTool />, description: "Vector design tool for UI/UX" },
        { name: "InVision", level: "Advanced", icon: <Smartphone />, description: "Prototyping and collaboration platform" },
        { name: "Framer", level: "Intermediate", icon: <Monitor />, description: "Interactive design and prototyping" },
        { name: "Canva", level: "Intermediate", icon: <Image />, description: "Graphic design platform for presentations and social media" }
      ]
    },
    {
      category: "Design Systems & Development",
      icon: <Settings />,
      items: [
        { name: "Design Systems", level: "Expert", icon: <Grid />, description: "Creating and maintaining scalable design systems" },
        { name: "Component Libraries", level: "Expert", icon: <Cpu />, description: "Building reusable UI component libraries" },
        { name: "Design Tokens", level: "Advanced", icon: <Zap />, description: "Managing design values consistently across platforms" },
        { name: "Version Control (Git)", level: "Intermediate", icon: <GitBranch />, description: "Collaborative code management and version tracking" },
        { name: "HTML/CSS", level: "Advanced", icon: <FileText />, description: "Frontend markup and styling implementation" },
        { name: "SAPUI5 SDK: Demo Kit", level: "Intermediate", icon: <Code />, description: "Enterprise UI development framework with comprehensive component library" }
      ]
    },
    {
      category: "Prototyping & Testing",
      icon: <Wrench />,
      items: [
        { name: "User Testing", level: "Expert", icon: <Users />, description: "Conducting usability tests and gathering feedback" },
        { name: "A/B Testing", level: "Advanced", icon: <Target />, description: "Testing design variations for optimal results" },
        { name: "Accessibility Testing", level: "Advanced", icon: <Heart />, description: "Ensuring inclusive design practices" },
        { name: "Usability Testing", level: "Expert", icon: <Eye />, description: "Evaluating product ease of use" },
        { name: "Analytics", level: "Intermediate", icon: <Database />, description: "Using data to inform design decisions" },
        { name: "Prototyping", level: "Expert", icon: <Frame />, description: "Creating interactive prototypes to validate design concepts" }
      ]
    },
    {
      category: "Design Methodologies",
      icon: <Lightbulb />,
      items: [
        { name: "Design Thinking", level: "Expert", icon: <Lightbulb />, description: "Human-centered problem-solving approach" },
        { name: "User-Centered Design", level: "Expert", icon: <Users />, description: "Design philosophy focused on user needs" },
        { name: "Agile Design", level: "Advanced", icon: <Zap />, description: "Iterative design within agile workflows" },
        { name: "Lean UX", level: "Advanced", icon: <Wrench />, description: "Lean principles applied to UX design" },
        { name: "Wireframing", level: "Expert", icon: <Layout />, description: "Creating low-fidelity layouts to establish structure and flow" }
      ]
    },
    {
      category: "Research & Analysis",
      icon: <BookOpen />,
      items: [
        { name: "User Research", level: "Expert", icon: <BookOpen />, description: "Methods for understanding user behaviors and needs" },
        { name: "Persona Development", level: "Advanced", icon: <Users />, description: "Creating user archetypes for design decisions" },
        { name: "Journey Mapping", level: "Advanced", icon: <Target />, description: "Visualizing user experiences across touchpoints" },
        { name: "Competitive Analysis", level: "Advanced", icon: <Monitor />, description: "Analyzing competitor products and strategies" }
      ]
    },
    {
      category: "Collaboration Tools",
      icon: <Share2 />,
      items: [
        { name: "Miro", level: "Expert", icon: <StickyNote />, description: "Online collaborative whiteboarding platform" },
        { name: "Notion", level: "Advanced", icon: <FileText />, description: "All-in-one workspace for documentation and project management" },
        { name: "Balsamiq", level: "Intermediate", icon: <MousePointer />, description: "Rapid wireframing tool with sketch-style UI" }
      ]
    }
  ];

  // Skills Summary
  const skillsSummary = [
    {
      category: "Visual Design",
      items: [
        "Typography & Layout",
        "Color Theory",
        "Icon Design",
        "Composition & Hierarchy"
      ]
    },
    {
      category: "Interaction Design",
      items: [
        "Microinteractions",
        "Transitions & Animations",
        "User Flows",
        "Prototyping"
      ]
    },
    {
      category: "Product Strategy",
      items: [
        "User Research",
        "Information Architecture",
        "Design Sprints",
        "Product Vision"
      ]
    },
    {
      category: "Collaboration",
      items: [
        "Cross-functional Teams",
        "Design Systems",
        "Feedback Integration",
        "Presentation & Communication"
      ]
    }
  ];

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab="tools"
      title="Product Designer Tools & Skills"
      description="Explore the tools, technologies, and methodologies I use in my design practice"
    >
      <div className={styles.toolsContainer}>
        {/* Introduction Section */}
        <SectionTemplate 
          title="Design Tools & Skills" 
          subtitle="A comprehensive overview of my design toolkit and expertise"
        >
          <div className={styles.toolsIntro}>
            <p>
              As a product designer, I leverage a diverse set of tools, technologies, and methodologies to create 
              meaningful digital experiences. This page showcases the tools I use regularly and the skills I've 
              developed through years of practice and continuous learning.
            </p>
          </div>
        </SectionTemplate>

        {/* Tools by Category */}
        {toolsData.map((category, categoryIndex) => (
          <SectionTemplate 
            key={categoryIndex}
            title={category.category}
            icon={category.icon}
            className={styles.toolsCategory}
          >
            <div className={styles.toolsGrid}>
              {category.items.map((tool, toolIndex) => (
                <div key={toolIndex} className={styles.toolCard}>
                  <div className={styles.toolIcon}>
                    {tool.icon}
                  </div>
                  <div className={styles.toolContent}>
                    <h3 className={styles.toolName}>{tool.name}</h3>
                    <span className={`${styles.skillLevel} ${styles[tool.level.toLowerCase()]}`}>
                      {tool.level}
                    </span>
                    <p className={styles.toolDescription}>{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionTemplate>
        ))}

        {/* Skills Summary */}
        <SectionTemplate 
          title="Core Competencies"
          subtitle="Key areas of expertise that define my approach to product design"
        >
          <div className={styles.skillsSummary}>
            {skillsSummary.map((skillCategory, index) => (
              <div key={index} className={styles.skillCategory}>
                <h3>{skillCategory.category}</h3>
                <ul>
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionTemplate>
      </div>
    </ProductDesignerDashboard>
  );
}