import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from '../../components/ToolCollections/styles.module.css';
import { 
  Search,
  Star,
  Filter,
  X,
  BookOpen,
  Code,
  GitBranch,
  Server,
  Palette,
  Database,
  Globe,
  Terminal,
  FileText,
  Settings,
  Wrench,
  Brain
} from 'lucide-react';

// Technical learnings data with categories, descriptions, and metadata - ALPHABETICAL ORDER
const technicalLearningsData = [
  {
    id: 'angular',
    title: 'Angular',
    description: 'Frontend framework mastery with Angular - components, services, routing, and state management.',
    icon: <Code size={32} />,
    category: 'Frontend',
    tags: ['Angular', 'Frontend', 'Framework', 'TypeScript'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'ai-directory-cheatsheets',
    title: 'AI Directory Cheatsheets',
    description: 'Comprehensive directory of AI tools and resources for various categories.',
    icon: <Brain size={32} />,
    category: 'AI',
    tags: ['AI', 'Tools', 'Resources', 'Cheatsheets'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'c',
    title: 'C',
    description: 'Fundamentals of C programming language - pointers, memory management, and system programming.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['C', 'System Programming', 'Pointers', 'Memory Management'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'cpp',
    title: 'C++',
    description: 'Advanced C++ programming - templates, STL, and performance optimization techniques.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['C++', 'Templates', 'STL', 'Performance'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'csharp',
    title: 'C#',
    description: 'Object-oriented programming with C# - .NET framework, LINQ, and modern C# features.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['C#', 'Object-Oriented', '.NET', 'LINQ'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'chatbots-idp',
    title: 'Chatbots & Intelligent Document Processing (IDP)',
    description: 'AI-powered conversational interfaces and automated document understanding technologies that extract, classify, and process unstructured data from various document types.',
    icon: <Brain size={32} />,
    category: 'AI',
    tags: ['Chatbots', 'IDP', 'AI', 'Document Processing', 'NLP'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Modern CSS techniques - Flexbox, Grid, animations, and responsive design patterns.',
    icon: <Palette size={32} />,
    category: 'Frontend',
    tags: ['CSS', 'Styling', 'Responsive Design', 'Animations'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Containerization with Docker - building images, managing containers, and orchestration basics.',
    icon: <Server size={32} />,
    category: 'DevOps',
    tags: ['Docker', 'Containers', 'DevOps', 'Virtualization'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'es6',
    title: 'ES6 (JavaScript)',
    description: 'Modern JavaScript features - arrow functions, promises, modules, and ES6+ syntax.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['JavaScript', 'ES6', 'ECMAScript', 'Modern JS'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'generative-ai-hyperautomation',
    title: 'Generative AI in Hyperautomation',
    description: 'The fusion of autonomous process execution with AI-driven creativity and reasoning through Large Language Models, Generative Transformers, and AI orchestration layers for intelligent, adaptive decision-making.',
    icon: <Brain size={32} />,
    category: 'AI',
    tags: ['Generative AI', 'Hyperautomation', 'LLM', 'AI', 'Automation'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'git',
    title: 'Git',
    description: 'Version control mastery with Git - branching strategies, merging, rebasing, and collaboration workflows.',
    icon: <GitBranch size={32} />,
    category: 'Version Control',
    tags: ['Git', 'Version Control', 'Branching', 'Collaboration'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'go',
    title: 'Go',
    description: 'Go programming language - concurrency, goroutines, and building efficient backend services.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['Go', 'Golang', 'Concurrency', 'Backend'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'Semantic HTML, accessibility best practices, and modern markup techniques.',
    icon: <Globe size={32} />,
    category: 'Frontend',
    tags: ['HTML', 'Markup', 'Accessibility', 'Semantics'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'hyperautomation',
    title: 'Hyperautomation',
    description: 'End-to-end automation strategy that orchestrates diverse technologies including AI, ML, RPA, low-code/no-code platforms, IDP, and workflow orchestration for comprehensive digital transformation.',
    icon: <Brain size={32} />,
    category: 'Automation',
    tags: ['Hyperautomation', 'AI', 'RPA', 'Digital Transformation', 'Workflow'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Java programming - object-oriented design, collections, and enterprise development.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['Java', 'Object-Oriented', 'Enterprise', 'JVM'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Core JavaScript concepts, ES6+ features, and modern development patterns.',
    icon: <Code size={32} />,
    category: 'Frontend',
    tags: ['JavaScript', 'ES6', 'Programming', 'Frontend'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    description: 'Modern Kotlin programming - Android development, coroutines, and functional programming.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['Kotlin', 'Android', 'Coroutines', 'JVM'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container orchestration with Kubernetes - deployments, services, and cluster management.',
    icon: <Server size={32} />,
    category: 'DevOps',
    tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'low-code-no-code',
    title: 'Low-Code / No-Code',
    description: 'Platforms that democratize automation by eliminating the need for extensive programming expertise, enabling citizen developers to build solutions using visual interfaces.',
    icon: <Settings size={32} />,
    category: 'Development Tools',
    tags: ['Low-Code', 'No-Code', 'Citizen Developers', 'Rapid Development'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'nvm',
    title: 'NVM (Node Version Manager)',
    description: 'Managing multiple Node.js versions efficiently with NVM for different project requirements.',
    icon: <Terminal size={32} />,
    category: 'Development Tools',
    tags: ['NVM', 'Node.js', 'Version Management', 'Development'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'php',
    title: 'PHP',
    description: 'Server-side scripting with PHP - web development, frameworks, and modern PHP practices.',
    icon: <Code size={32} />,
    category: 'Backend',
    tags: ['PHP', 'Web Development', 'Backend', 'Server-side'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'python',
    title: 'Python',
    description: 'Python programming - data science, automation, web development, and scripting.',
    icon: <Code size={32} />,
    category: 'Programming Languages',
    tags: ['Python', 'Data Science', 'Automation', 'Scripting'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    description: 'Automating high-volume, repetitive, rule-based tasks by mimicking human interactions with digital systems - clicking buttons, entering data, copying information.',
    icon: <Server size={32} />,
    category: 'Automation',
    tags: ['RPA', 'Automation', 'Process Automation', 'Task Automation'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'vim',
    title: 'Vim',
    description: 'Advanced text editing with Vim - commands, shortcuts, and productivity tips for efficient coding.',
    icon: <FileText size={32} />,
    category: 'Text Editors',
    tags: ['Vim', 'Text Editor', 'Productivity', 'Terminal'],
    recommended: true,
    free: true,
    usedInProjects: true
  }
];

// Available filter categories - Automatically generated from data
const categories = ['All', ...new Set(technicalLearningsData.map(item => item.category).sort())];

// Individual Learning Card Component
const LearningCard = ({ learning }) => {
  const getDocumentationUrl = (learningId) => {
    // Map each technology to its documentation folder path
    const documentationFolderMap = {
      'chatbots-idp': '/ComputerScience/Hyperautomation/Chatbots & IDP/Chatbots_IDP',
      'generative-ai-hyperautomation': '/ComputerScience/Hyperautomation/Generative AI/GenAIIntroduction',
      'hyperautomation': '/ComputerScience/Hyperautomation/Hyper Automation/HyperAutomation',
      'low-code-no-code': '/ComputerScience/Hyperautomation/Low Code_No Code/LowCodeNoCode',
      'rpa': '/ComputerScience/Hyperautomation/RPA/RoboticProcessAutomation',
      'git': '/ComputerScience/Programming/Git/GitBasicNotes',
      'docker': '/ComputerScience/DevOpsTools/Docker/DockerizeAngularSetup',
      'nvm': '/ComputerScience/Programming/Nvm/NvmUserGuide',
      'vim': '/ComputerScience/Programming/Vim/VimBasicNotes',
      'angular': '/ComputerScience/WebTechnologies/Angular/AngularBasicNotes',
      'css': '/ComputerScience/WebTechnologies/CSS/CSSAdvancedNotes',
      'html': '/ComputerScience/WebTechnologies/HTML/HTMLBasicNotes',
      'ai-directory-cheatsheets': '/ComputerScience/ArtificialIntelligence/AIDirectoryCheatsheets',
      'c': '/ComputerScience/Programming/C/CBasicNotes',
      'csharp': '/ComputerScience/Programming/CSharp/CSharpBasicNotes',
      'cpp': '/ComputerScience/Programming/Cpp/CppBasicNotes',
      'es6': '/ComputerScience/Programming/JavaScript/ES6Guide',
      'go': '/ComputerScience/Programming/Go/GoBasicNotes',
      'java': '/ComputerScience/Programming/Java/JavaBasicNotes',
      'javascript': '/ComputerScience/Programming/JavaScript/JavaScriptBasicNotes',
      'kotlin': '/ComputerScience/Programming/Kotlin/KotlinBasicNotes',
      'kubernetes': '/ComputerScience/DevOpsTools/Kubernetes/KubernetesBasicNotes',
      'php': '/ComputerScience/Programming/PHP/PHPBasicNotes',
      'python': '/ComputerScience/Programming/Python/PythonBasicNotes',
      // 'typescript': '/ComputerScience/Programming/TypeScript/',
      // 'react': '/ComputerScience/Frontend/React/',
      // 'nodejs': '/ComputerScience/Backend/NodeJS/'
    };
    
    // If we have a specific folder mapping, use it
    if (documentationFolderMap[learningId]) {
      return documentationFolderMap[learningId];
    }
    
    // Fallback to the original conversion method
    const docName = learningId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    return `/ComputerScience/${docName}`;
  };

  return (
    <div className={styles.toolCard}>
      <div className={styles.toolCardHeader}>
        <div className={styles.toolIcon}>
          {learning.icon}
        </div>
        <div className={styles.toolBadges}>
          {learning.recommended && (
            <span className={`${styles.badge} ${styles.recommendedBadge}`} title="Recommended">
              <Star size={12} />
            </span>
          )}
          {learning.free && (
            <span className={`${styles.badge} ${styles.freeBadge}`} title="Free">
              🆓
            </span>
          )}
          {learning.usedInProjects && (
            <span className={`${styles.badge} ${styles.projectBadge}`} title="Used in Projects">
              💼
            </span>
          )}
        </div>
      </div>

      <div className={styles.toolCardContent}>
        <h3 className={styles.toolTitle}>{learning.title}</h3>
        <p className={styles.toolDescription}>{learning.description}</p>
        
        <div className={styles.toolTags}>
          {learning.tags.map((tag, index) => (
            <span key={index} className={styles.toolTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.toolCardFooter}>
        <a
          href={getDocumentationUrl(learning.id)}
          className={styles.exploreButton}
        >
          Explore →
        </a>
      </div>
    </div>
  );
};

const TechnicalLearnings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);

  // Filter learnings based on search term, category, and recommended filter
  const filteredLearnings = useMemo(() => {
    return technicalLearningsData.filter(learning => {
      const matchesSearch = learning.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           learning.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           learning.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || learning.category === selectedCategory;
      
      const matchesRecommended = !showRecommendedOnly || learning.recommended;
      
      return matchesSearch && matchesCategory && matchesRecommended;
    });
  }, [searchTerm, selectedCategory, showRecommendedOnly]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setShowRecommendedOnly(false);
  };

  return (
    <DashboardLayout role="tech-enthusiast" activeTab="technical-learnings">
      <SectionTemplate
        title="📚 Technical Learnings & Knowledge Summarization"
        subtitle="Explore my curated collection of technical skills, tools, and concepts I've mastered through hands-on experience and continuous learning."
        className={styles.sectionWrapper}
      >
        {/* Search and Filter Controls */}
        <div className={styles.controlsSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search technical skills, frameworks, concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={styles.clearSearchButton}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className={styles.filtersContainer}>
            <div className={styles.categoryFilters}>
              <Filter size={16} className={styles.filterIcon} />
              <span className={styles.filterLabel}>Categories:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.categoryChip} ${selectedCategory === category ? styles.activeChip : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.toggleContainer}>
              <label className={styles.toggleLabel}>
                <input
                  type="checkbox"
                  checked={showRecommendedOnly}
                  onChange={(e) => setShowRecommendedOnly(e.target.checked)}
                  className={styles.toggleInput}
                />
                <span className={styles.toggleSlider}></span>
                <Star size={14} className={styles.toggleIcon} />
                Show Only Recommended
              </label>
            </div>

            {(searchTerm || selectedCategory !== 'All' || showRecommendedOnly) && (
              <button onClick={clearFilters} className={styles.clearFiltersButton}>
                <X size={14} />
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className={styles.resultsInfo}>
          <p className={styles.resultsCount}>
            Showing {filteredLearnings.length} of {technicalLearningsData.length} technical learnings
          </p>
        </div>

        {/* Learnings Grid */}
        <div className={styles.toolsGrid}>
          {filteredLearnings.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No technical learnings found</h3>
              <p>Try adjusting your search criteria or clearing filters.</p>
              <button onClick={clearFilters} className={styles.clearFiltersButton}>
                Clear Filters
              </button>
            </div>
          ) : (
            filteredLearnings.map(learning => (
              <LearningCard key={learning.id} learning={learning} />
            ))
          )}
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
};

export default TechnicalLearnings;