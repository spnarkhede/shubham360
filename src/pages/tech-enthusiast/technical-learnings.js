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
  Wrench
} from 'lucide-react';

// Technical learnings data with categories, descriptions, and metadata - ALPHABETICAL ORDER
const technicalLearningsData = [
  // {
  //   id: 'technical-writing',
  //   title: 'Technical Writing and Knowledge Summarization',
  //   description: 'Master the art of documenting technical concepts, creating knowledge bases, and summarizing complex information.',
  //   icon: <BookOpen size={32} />,
  //   category: 'Documentation',
  //   tags: ['Technical Writing', 'Documentation', 'Knowledge Base', 'Summarization'],
  //   recommended: true,
  //   free: true,
  //   usedInProjects: true
  // },
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
    id: 'vim',
    title: 'Vim',
    description: 'Advanced text editing with Vim - commands, shortcuts, and productivity tips for efficient coding.',
    icon: <FileText size={32} />,
    category: 'Text Editors',
    tags: ['Vim', 'Text Editor', 'Productivity', 'Terminal'],
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
  // {
  //   id: 'javascript',
  //   title: 'JavaScript',
  //   description: 'Core JavaScript concepts, ES6+ features, and modern development patterns.',
  //   icon: <Code size={32} />,
  //   category: 'Frontend',
  //   tags: ['JavaScript', 'ES6', 'Programming', 'Frontend'],
  //   recommended: true,
  //   free: true,
  //   usedInProjects: true
  // },
  // {
  //   id: 'typescript',
  //   title: 'TypeScript',
  //   description: 'Type-safe JavaScript development with TypeScript - interfaces, generics, and advanced types.',
  //   icon: <Settings size={32} />,
  //   category: 'Development',
  //   tags: ['TypeScript', 'Typing', 'JavaScript', 'Development'],
  //   recommended: true,
  //   free: true,
  //   usedInProjects: true
  // },
  // {
  //   id: 'react',
  //   title: 'React',
  //   description: 'Building modern UIs with React - hooks, context, performance optimization, and best practices.',
  //   icon: <Code size={32} />,
  //   category: 'Frontend',
  //   tags: ['React', 'Frontend', 'Hooks', 'Components'],
  //   recommended: true,
  //   free: true,
  //   usedInProjects: true
  // },
  // {
  //   id: 'nodejs',
  //   title: 'Node.js',
  //   description: 'Server-side JavaScript with Node.js - APIs, middleware, and backend development.',
  //   icon: <Server size={32} />,
  //   category: 'Backend',
  //   tags: ['Node.js', 'Backend', 'API', 'Server'],
  //   recommended: true,
  //   free: true,
  //   usedInProjects: true
  // }
];

// Available filter categories - Automatically generated from data
const categories = ['All', ...new Set(technicalLearningsData.map(item => item.category).sort())];

// Individual Learning Card Component
const LearningCard = ({ learning }) => {
  const getDocumentationUrl = (learningId) => {
    // Map each technology to its documentation folder path
    const documentationFolderMap = {
      'git': '/ComputerScience/Programming/Git/GitBasicNotes',
      'docker': '/ComputerScience/DevOpsTools/Docker/DockerizeAngularSetup',
      'nvm': '/ComputerScience/Programming/Nvm/NvmUserGuide',
      'vim': '/ComputerScience/Programming/Vim/VimBasicNotes',
      'angular': '/ComputerScience/WebTechnologies/Angular/AngularBasicNotes',
      'css': '/ComputerScience/WebTechnologies/CSS/CSSAdvancedNotes',
      'html': '/ComputerScience/WebTechnologies/HTML/HTMLBasicNotes',
      // 'javascript': '/ComputerScience/Programming/JavaScript/',
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
        title="📚 Technical Learnings & Knowlege Summarization"
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