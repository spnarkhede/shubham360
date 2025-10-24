import React, { useState, useMemo } from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import styles from '../../components/ToolCollections/styles.module.css';
import { 
  Search,
  Star,
  Filter,
  X,
  BookOpen,
  Palette,
  Eye,
  Users,
  Target,
  Lightbulb,
  FileText,
  Settings,
  Wrench,
  Heart,
  Cpu,
  UserCircle
} from 'lucide-react';

// Design learnings data with categories, descriptions, and metadata - ALPHABETICAL ORDER
const designLearningsData = [
  {
    id: 'product-manager-guide-for-team',
    title: 'A product manager guide to understanding your team',
    description: 'Principles and practices for designing products that prioritize user needs, behaviors, and experiences throughout the design process.',
    icon: <UserCircle size={32} />,
    category: 'Design Principles',
    tags: ['User Research', 'Empathy', 'Usability', 'Accessibility'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'human-centered-design',
    title: 'Human-Centered Design',
    description: 'Principles and practices for designing products that prioritize user needs, behaviors, and experiences throughout the design process.',
    icon: <Users size={32} />,
    category: 'Design Principles',
    tags: ['User Research', 'Empathy', 'Usability', 'Accessibility'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Creating and maintaining scalable design systems for consistent, efficient product development across teams and platforms.',
    icon: <Settings size={32} />,
    category: 'Design Systems',
    tags: ['Components', 'Tokens', 'Documentation', 'Consistency'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    description: 'Rapid prototyping techniques for validating design concepts and iterating on solutions before development.',
    icon: <Wrench size={32} />,
    category: 'Design Process',
    tags: ['Figma', 'InVision', 'Interaction Design', 'Testing'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'accessibility',
    title: 'Accessibility Design',
    description: 'Designing inclusive products that are usable by people with diverse abilities and disabilities.',
    icon: <Heart size={32} />,
    category: 'Design Principles',
    tags: ['WCAG', 'ARIA', 'Screen Readers', 'Inclusive Design'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    description: 'Human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and the requirements for business success.',
    icon: <Lightbulb size={32} />,
    category: 'Design Process',
    tags: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'engineering-and-product-design-processes',
    title: 'Engineering and Product Design Processes',
    description: 'Analyzed and distinguished key stages in engineering and product design workflows to enhance innovation and structured problem-solving.',
    icon: <Cpu size={32} />,
    category: 'Engineering Design',
    tags: ['Engineering Design', 'Product Design', 'Design Process Analysis', 'Innovation', 'Problem Solving'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    description: 'Methods and techniques for understanding user behaviors, needs, and motivations through observation and feedback.',
    icon: <Eye size={32} />,
    category: 'Research',
    tags: ['Interviews', 'Surveys', 'Analytics', 'Usability Testing'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Principles of visual composition, color theory, typography, and layout for creating aesthetically pleasing interfaces.',
    icon: <Palette size={32} />,
    category: 'Visual Design',
    tags: ['Color Theory', 'Typography', 'Layout', 'Hierarchy'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'user-journeys',
    title: 'User Journeys & Mapping',
    description: 'Creating visual representations of user interactions with products to identify pain points and opportunities.',
    icon: <Target size={32} />,
    category: 'Research',
    tags: ['Personas', 'Touchpoints', 'Pain Points', 'Opportunities'],
    recommended: true,
    free: true,
    usedInProjects: true
  }
];

// Available filter categories - Automatically generated from data
const categories = ['All', ...new Set(designLearningsData.map(item => item.category).sort())];

// Individual Learning Card Component
const LearningCard = ({ learning }) => {
  const getDocumentationUrl = (learningId) => {
    // Map each learning topic to its documentation path
    const documentationFolderMap = {
      'human-centered-design': '/Design/Principles/HumanCenteredDesign',
      'design-systems': '/Design/Systems/DesignSystems',
      'prototyping': '/Design/Process/Prototyping',
      'accessibility': '/Design/Principles/Accessibility',
      'design-thinking': '/Design/Process/DesignThinking',
      'ux-research': '/Design/Research/UXResearch',
      'visual-design': '/Design/Visual/VisualDesign',
      'user-journeys': '/Design/Research/UserJourneys',
      'engineering-and-product-design-processes': '/Design/Engineering/DesignProcesses'
    };
    
    // If we have a specific folder mapping, use it
    if (documentationFolderMap[learningId]) {
      return documentationFolderMap[learningId];
    }
    
    // Fallback to the original conversion method
    const docName = learningId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    return `/Design/${docName}`;
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

const DesignLearnings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);

  // Filter learnings based on search term, category, and recommended filter
  const filteredLearnings = useMemo(() => {
    return designLearningsData.filter(learning => {
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
    <ProductDesignerDashboard role="product-designer" activeTab="learning">
      <SectionTemplate
        title="📚 Design Learnings & Knowledge"
        subtitle="Explore my curated collection of design skills, principles, and concepts I've mastered through hands-on experience and continuous learning."
        className={styles.sectionWrapper}
      >
        {/* Search and Filter Controls */}
        <div className={styles.controlsSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search design skills, principles, concepts..."
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
            Showing {filteredLearnings.length} of {designLearningsData.length} design learnings
          </p>
        </div>

        {/* Learnings Grid */}
        <div className={styles.toolsGrid}>
          {filteredLearnings.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No design learnings found</h3>
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
    </ProductDesignerDashboard>
  );
};

export default DesignLearnings;