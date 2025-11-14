import React, { useState, useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from '../../components/ToolCollections/styles.module.css';
import { 
  Search,
  Shield,
  Brain,
  MonitorPlay,
  Headphones,
  Gamepad2,
  BookOpen,
  Download,
  Share2,
  GraduationCap,
  Smartphone,
  Terminal,
  Globe,
  Wrench,
  Star,
  ExternalLink,
  Filter,
  X,
  Settings,
  FileText,
  Wifi,
  Type,
  ImageIcon,
  Video,
  Volume2,
  Users,
  Code,
  HelpCircle
} from 'lucide-react';

// Tools data with categories, descriptions, and metadata - Beginner Guide FIRST, then ALPHABETICAL ORDER
const toolsData = [
  {
    id: 'beginners-guide',
    title: 'Beginners Guide',
    description: 'Essential guides and resources for newcomers to get started.',
    icon: <HelpCircle size={32} />,
    category: 'Beginners',
    tags: ['Beginners', 'Guide', 'Getting Started', 'Basics'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'adblocking-privacy',
    title: 'Adblocking / Privacy',
    description: 'Learn how to block ads, trackers and other nasty things.',
    icon: <Shield size={32} />,
    category: 'Privacy',
    tags: ['Privacy', 'AdBlock', 'Security', 'VPN'],
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
    id: 'android-ios',
    title: 'Android / iOS',
    description: 'All forms of content for Android and iOS.',
    icon: <Smartphone size={32} />,
    category: 'Mobile',
    tags: ['Android', 'iOS', 'Mobile', 'Apps'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'free-tools-for-developers',
    title: 'Free Tools for Developers',
    description: 'Collection of free tools, resources, and services available for developers.',
    icon: <Code size={32} />,
    category: 'Development',
    tags: ['Free Tools', 'Developer Resources', 'Open Source', 'Services'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Explore the world of AI and machine learning.',
    icon: <Brain size={32} />,
    category: 'AI',
    tags: ['AI', 'Machine Learning', 'ChatGPT', 'Models'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'audio-tools',
    title: 'Audio Tools',
    description: 'Audio editing, music production, sound processing, and audio conversion tools.',
    icon: <Volume2 size={32} />,
    category: 'Audio Tools',
    tags: ['Audio Editing', 'Music Production', 'Sound', 'Conversion'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'books-comics-manga',
    title: 'Books / Comics / Manga',
    description: 'Download books, comics, manga and all sorts of reading material.',
    icon: <BookOpen size={32} />,
    category: 'Literature',
    tags: ['Books', 'Comics', 'Manga', 'E-books'],
    recommended: true,
    free: true,
    usedInProjects: false
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    description: 'Programming tools, IDEs, debugging utilities, and development resources.',
    icon: <Code size={32} />,
    category: 'Development',
    tags: ['Programming', 'IDE', 'Debugging', 'Development'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'downloading',
    title: 'Downloading',
    description: 'Download all your favourite software, movies, shows, music, games and more!',
    icon: <Download size={32} />,
    category: 'Downloads',
    tags: ['Downloads', 'Software', 'Media', 'Files'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'educational',
    title: 'Educational',
    description: 'Educational content for all ages.',
    icon: <GraduationCap size={32} />,
    category: 'Education',
    tags: ['Learning', 'Education', 'Courses', 'Knowledge'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'educational-tools',
    title: 'Educational Tools',
    description: 'Learning platforms, educational resources, and knowledge management tools.',
    icon: <GraduationCap size={32} />,
    category: 'Educational Tools',
    tags: ['Learning', 'Education', 'Knowledge', 'Resources'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'file-tools',
    title: 'File Tools',
    description: 'File management, compression, conversion, and organization utilities.',
    icon: <FileText size={32} />,
    category: 'Files',
    tags: ['File Management', 'Compression', 'Conversion', 'Organization'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'gaming-emulation',
    title: 'Gaming / Emulation',
    description: 'Find games and tools to enhance your gaming experience.',
    icon: <Gamepad2 size={32} />,
    category: 'Gaming',
    tags: ['Games', 'Gaming', 'Steam', 'Emulation'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'gaming-tools',
    title: 'Gaming Tools',
    description: 'Gaming utilities, optimization tools, and gaming enhancement software.',
    icon: <Gamepad2 size={32} />,
    category: 'Gaming Tools',
    tags: ['Gaming', 'Optimization', 'Enhancement', 'Utilities'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'image-tools',
    title: 'Image Tools',
    description: 'Image editing, optimization, conversion, and graphic design tools.',
    icon: <ImageIcon size={32} />,
    category: 'Images',
    tags: ['Image Editing', 'Graphics', 'Design', 'Optimization'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'internet-tools',
    title: 'Internet Tools',
    description: 'Web browsers, downloaders, network utilities, and internet productivity tools.',
    icon: <Wifi size={32} />,
    category: 'Internet',
    tags: ['Web', 'Browsers', 'Network', 'Productivity'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'linux-macos',
    title: 'Linux / macOS',
    description: 'The $HOME of Linux and macOS.',
    icon: <Terminal size={32} />,
    category: 'Operating Systems',
    tags: ['Linux', 'macOS', 'Unix', 'Terminal'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous',
    description: 'Content too niche to be included elsewhere.',
    icon: <Wrench size={32} />,
    category: 'Utilities',
    tags: ['Utilities', 'Tools', 'Miscellaneous', 'Niche'],
    recommended: false,
    free: true,
    usedInProjects: false
  },
  {
    id: 'movies-tv-anime',
    title: 'Movies / TV / Anime',
    description: 'Stream, download, torrent and binge all your favourite movies and shows!',
    icon: <MonitorPlay size={32} />,
    category: 'Entertainment',
    tags: ['Movies', 'TV Shows', 'Anime', 'Streaming'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'music-podcasts-radio',
    title: 'Music / Podcasts / Radio',
    description: 'Listen to music, podcasts, audiobooks and radio.',
    icon: <Headphones size={32} />,
    category: 'Audio',
    tags: ['Music', 'Podcasts', 'Audio', 'Radio'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'non-english',
    title: 'Non-English',
    description: 'Content in languages other than English.',
    icon: <Globe size={32} />,
    category: 'International',
    tags: ['Languages', 'International', 'Localization', 'Translation'],
    recommended: false,
    free: true,
    usedInProjects: false
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Master the art of crafting effective prompts for AI models with comprehensive job search templates.',
    icon: <Brain size={32} />,
    category: 'AI',
    tags: ['AI', 'Prompt Engineering', 'Job Search', 'LLM'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'social-media-tools',
    title: 'Social Media Tools',
    description: 'Social media enhancement, privacy tools, and alternative frontends.',
    icon: <Users size={32} />,
    category: 'Social Media',
    tags: ['Social Media', 'Privacy', 'Frontends', 'Enhancement'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'system-tools',
    title: 'System Tools',
    description: 'Essential system utilities, performance monitoring, and system optimization tools.',
    icon: <Settings size={32} />,
    category: 'System',
    tags: ['System', 'Performance', 'Monitoring', 'Optimization'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'text-tools',
    title: 'Text Tools',
    description: 'Text editors, writing tools, document processing, and text manipulation utilities.',
    icon: <Type size={32} />,
    category: 'Text',
    tags: ['Text Editing', 'Writing', 'Documents', 'Processing'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'tiny-tools-directory',
    title: 'Tiny Tools Directory',
    description: 'A curated collection of small, experimental, and artful tools for creative projects and game development.',
    icon: <Wrench size={32} />,
    category: 'Development',
    tags: ['Creative Tools', 'Game Development', 'Experimental', 'Small Tools', 'Art Tools'],
    recommended: true,
    free: true,
    usedInProjects: true
  },
  {
    id: 'torrenting',
    title: 'Torrenting',
    description: 'Download your favourite media using the BitTorrent protocol.',
    icon: <Share2 size={32} />,
    category: 'P2P',
    tags: ['BitTorrent', 'P2P', 'Sharing', 'Downloads'],
    recommended: false,
    free: true,
    usedInProjects: false
  },
  {
    id: 'video-tools',
    title: 'Video Tools',
    description: 'Video editing, conversion, streaming, and multimedia processing tools.',
    icon: <Video size={32} />,
    category: 'Video',
    tags: ['Video Editing', 'Conversion', 'Streaming', 'Multimedia'],
    recommended: true,
    free: true,
    usedInProjects: true
  }
];

// Available filter categories - Automatically generated from data
const categories = ['All', ...new Set(toolsData.map(item => item.category).sort())];

// Individual Tool Card Component
const ToolCard = ({ tool }) => {
  const getDocumentationUrl = (toolId) => {
    // Special case for prompt-engineering to point to the JobSearch.md file
    if (toolId === 'prompt-engineering') {
      return '/PromptEngineering/JobSearch';
    }
    
    // Convert tool ID to proper documentation filename
    const docName = toolId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    // Fix the URL to point to the correct docs path
    return `/ToolsCollection/${docName}`;
  };

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
      </div>

      <div className={styles.toolCardFooter}>
        <a
          href={getDocumentationUrl(tool.id)}
          className={styles.exploreButton}
        >
          View Documentation →
        </a>
      </div>
    </div>
  );
};

const ToolCollection = () => {
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

export default ToolCollection;