import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './tool-collection.module.css';
import { 
  Search,
  Zap,
  Database,
  Cloud,
  Shield,
  Cpu,
  Code,
  GitBranch,
  Lightbulb,
  Star,
  ExternalLink,
  Filter,
  X
} from 'lucide-react';

// Tools data with categories, descriptions, and metadata
const toolsData = [
  {
    id: 'frontend-frameworks',
    title: 'Frontend Frameworks',
    description: 'Curated docs, tools, and best practices I use for React, Angular, Vue.',
    icon: <Zap size={32} />,
    category: 'Frontend',
    tags: ['React', 'Angular', 'Vue', 'TypeScript'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    description: 'Node.js, Express, Django, REST/GraphQL resources and best practices.',
    icon: <Database size={32} />,
    category: 'Backend',
    tags: ['Node.js', 'Express', 'Django', 'GraphQL'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD',
    description: 'Docker, Kubernetes, GitHub Actions, Jenkins automation tools.',
    icon: <GitBranch size={32} />,
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'cloud-hosting',
    title: 'Cloud & Hosting',
    description: 'AWS, GCP, Azure, Vercel, Netlify deployment and cloud services.',
    icon: <Cloud size={32} />,
    category: 'Cloud',
    tags: ['AWS', 'GCP', 'Azure', 'Vercel'],
    recommended: true,
    free: false,
    usedInProjects: true
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Libraries',
    description: 'TensorFlow, PyTorch, LangChain, OpenAI APIs for machine learning.',
    icon: <Cpu size={32} />,
    category: 'AI',
    tags: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'],
    recommended: true,
    free: true,
    usedInProjects: false
  },
  {
    id: 'security-privacy',
    title: 'Security & Privacy',
    description: 'Auth, JWT, OAuth, SSL, security best practices and tools.',
    icon: <Shield size={32} />,
    category: 'Security',
    tags: ['JWT', 'OAuth', 'SSL', 'Auth0'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'open-source',
    title: 'Open Source Contributions',
    description: 'Links to my GitHub repositories and notable pull requests.',
    icon: <Code size={32} />,
    category: 'Open Source',
    tags: ['GitHub', 'Open Source', 'Contributions'],
    recommended: false,
    free: true,
    usedInProjects: true
  },
  {
    id: 'learning-platforms',
    title: 'Learning Platforms',
    description: 'FreeCodeCamp, Coursera, Udemy, documentation, blogs for continuous learning.',
    icon: <Lightbulb size={32} />,
    category: 'Learning',
    tags: ['Coursera', 'Udemy', 'FreeCodeCamp', 'Documentation'],
    recommended: true,
    free: true,
    usedInProjects: false
  },
  {
    id: 'miscellaneous-gems',
    title: 'Miscellaneous Gems',
    description: 'Small utilities, niche tools, and personal productivity enhancers.',
    icon: <Star size={32} />,
    category: 'Utilities',
    tags: ['Productivity', 'Utilities', 'Tools'],
    recommended: false,
    free: true,
    usedInProjects: false
  }
];

// Available filter categories
const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Cloud', 'AI', 'Security', 'Open Source', 'Learning', 'Utilities'];

const ToolCollections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);

  // Filter tools based on search term, category, and recommended filter
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      
      const matchesRecommended = !showRecommendedOnly || tool.recommended;
      
      return matchesSearch && matchesCategory && matchesRecommended;
    });
  }, [searchTerm, selectedCategory, showRecommendedOnly]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setShowRecommendedOnly(false);
  };

  return (
    <DashboardLayout role="tech-enthusiast" activeTab="tool-collection">
      <SectionTemplate
        title="🔗 Curated Links & Resources"
        subtitle="Explore my personal library of tools, frameworks, and learning resources I use in projects and daily engineering practice."
        className={styles.sectionWrapper}
      >
        {/* Search and Filter Controls */}
        <div className={styles.controlsSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search tools, frameworks, technologies..."
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
            Showing {filteredTools.length} of {toolsData.length} tool collections
          </p>
        </div>

        {/* Tools Grid */}
        <div className={styles.toolsGrid}>
          {filteredTools.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No tools found</h3>
              <p>Try adjusting your search criteria or clearing filters.</p>
              <button onClick={clearFilters} className={styles.clearFiltersButton}>
                Clear Filters
              </button>
            </div>
          ) : (
            filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          )}
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
};

// Individual Tool Card Component
const ToolCard = ({ tool }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.toolCard}>
      <div className={styles.toolCardHeader}>
        <div className={styles.toolIcon}>
          {tool.icon}
        </div>
        <div className={styles.toolBadges}>
          {tool.recommended && (
            <span className={`${styles.badge} ${styles.recommendedBadge}`} title="Recommended">
              <Star size={12} />
            </span>
          )}
          {tool.free && (
            <span className={`${styles.badge} ${styles.freeBadge}`} title="Free">
              🆓
            </span>
          )}
          {tool.usedInProjects && (
            <span className={`${styles.badge} ${styles.projectBadge}`} title="Used in Projects">
              💼
            </span>
          )}
        </div>
      </div>

      <div className={styles.toolCardContent}>
        <h3 className={styles.toolTitle}>{tool.title}</h3>
        <p className={styles.toolDescription}>{tool.description}</p>
        
        <div className={styles.toolTags}>
          {tool.tags.map((tag, index) => (
            <span key={index} className={styles.toolTag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Tool Links */}
        <div className={styles.toolDetails}>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className={styles.detailsToggle}
          >
            {showDetails ? 'Hide Tools' : 'View Tools'} ({tool.tools.length})
            <span className={`${styles.chevron} ${showDetails ? styles.chevronUp : ''}`}>▼</span>
          </button>

          {showDetails && (
            <div className={styles.toolLinks}>
              {tool.tools.map((toolLink, index) => (
                <a
                  key={index}
                  href={toolLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.toolLink}
                >
                  <div className={styles.toolLinkContent}>
                    <span className={styles.toolLinkName}>{toolLink.name}</span>
                    <span className={styles.toolLinkDescription}>{toolLink.description}</span>
                  </div>
                  <ExternalLink size={14} className={styles.externalIcon} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.toolCardFooter}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={styles.exploreButton}
        >
          Explore →
        </button>
      </div>
    </div>
  );
};

export default ToolCollections;