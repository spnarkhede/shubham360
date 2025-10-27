import React, { useState } from 'react';
import ProductDesignerDashboard from '../../components/ProductDesignerDashboard';
import SectionTemplate from '../../components/SectionTemplate';
import useRoleStore from '../../store/roleStore';
import styles from './styles.module.css';
import { ExternalLink, Maximize2, X } from 'lucide-react';

export default function ProductDesignerPortfolio() {
  const { activeTab } = useRoleStore();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Portfolio projects data with Figma embed URLs
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard Design",
      description: "Complete redesign of an enterprise e-commerce analytics dashboard with focus on data visualization and user workflows.",
      category: "UI/UX Design",
      figmaUrl: "https://uxpilot.ai/s/adbfb26191286f2e5f2a5ead062c9669",
      thumbnail: "/img/portfolio/ecommerce-dashboard.jpg",
      year: "2024"
    },
    {
      id: 2,
      title: "Car Marketplace App Design",
      description: "User-centered mobile Cars application with emphasis on brands and accessibility.",
      category: "Mobile Design",
      figmaUrl: "https://www.figma.com/design/OFr9SRlIotOpwSwU0Z0yoW/Car-Marketplace-App-Design?node-id=0-1&t=BzqGKxSIviorHDJX-1",
      thumbnail: "/img/portfolio/carsmobile-app.jpg",
      year: "2023"
    },
    {
      id: 3,
      title: "Design System Implementation",
      description: "Enterprise design system for consistent UI components across multiple products.",
      category: "Design Systems",
      figmaUrl: "https://uxpilot.ai/s/8849ee04a6b29f45fe24169dd04cb368",
      thumbnail: "/img/portfolio/design-system.jpg",
      year: "2023"
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      description: "Patient portal redesign focusing on usability for diverse age groups and technical abilities.",
      category: "UI/UX Design",
      figmaUrl: "https://uxpilot.ai/s/8849ee04a6b29f45fe24169dd04cb368",
      thumbnail: "/img/portfolio/healthcare.jpg",
      year: "2022"
    }
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  // Function to handle iframe errors
  const handleIframeError = (e) => {
    e.target.style.display = 'none';
    // Find the parent container and show an error message
    const container = e.target.closest(`.${styles.iframeContainer}`);
    if (container) {
      container.innerHTML = `
        <div class="${styles.iframeError}">
          <p>Unable to load Figma prototype</p>
          <a 
            href="${e.target.src.replace('embed', 'file').split('&')[0]}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="${styles.errorLink}"
          >
            <ExternalLink size={16} />
            <span>Open in Figma</span>
          </a>
        </div>
      `;
    }
  };

  return (
    <ProductDesignerDashboard 
      role="product-designer"
      activeTab="portfolio"
      title="Product Designer Portfolio"
      description="Explore my design projects and interactive prototypes"
    >
      <div className={styles.portfolioContainer}>
        {/* Introduction Section */}
        <SectionTemplate 
          title="Design Portfolio" 
          subtitle="Interactive projects showcasing my design process and solutions"
        >
          <div className={styles.portfolioIntro}>
            <p>
              Explore my collection of design projects, each representing a unique challenge and solution. 
              Click on any project to view the interactive prototype or open it in a popup for a fullscreen experience.
            </p>
          </div>
        </SectionTemplate>

        {/* Portfolio Grid */}
        <SectionTemplate 
          title="Featured Projects"
          className={styles.portfolioSection}
        >
          <div className={styles.portfolioGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.portfolioCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                  {/* <span className={styles.projectCategory}>{project.category}</span> */}
                </div>
                
                <div className={styles.cardContent}>
                  {/* Thumbnail Display */}
                  <div className={styles.thumbnailContainer}>
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} thumbnail`}
                      className={styles.projectThumbnail}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        // Show iframe as fallback if thumbnail fails to load
                        const iframeContainer = e.target.closest(`.${styles.cardContent}`).querySelector(`.${styles.iframeContainer}`);
                        if (iframeContainer) {
                          iframeContainer.style.display = 'block';
                        }
                      }}
                    />
                  </div>
                  
                  {/* Figma iframe - hidden by default, shown if thumbnail fails */}
                  <div className={styles.iframeContainer} style={{ display: 'none' }}>
                    <iframe 
                      src={project.figmaUrl} 
                      className={styles.projectIframe}
                      title={`${project.title} Prototype`}
                      loading="lazy"
                      allowFullScreen
                      scrolling="no"
                      onError={handleIframeError}
                    />
                  </div>
                  
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.cardActions}>
                    <button 
                      className={styles.actionButton}
                      onClick={() => openPopup(project)}
                    >
                      <Maximize2 size={16} />
                      <span>View Fullscreen</span>
                    </button>
                    <a 
                      href={project.figmaUrl.replace('embed', 'file').split('&')[0]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                    >
                      <ExternalLink size={16} />
                      <span>Open in Figma</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionTemplate>
      </div>

      {/* Popup Modal for Fullscreen View */}
      {isPopupOpen && selectedProject && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popupHeader}>
              <h2>{selectedProject.title}</h2>
              <button className={styles.popupClose} onClick={closePopup}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.popupIframeContainer}>
              <iframe 
                src={selectedProject.figmaUrl} 
                className={styles.popupIframe}
                title={`${selectedProject.title} Fullscreen Prototype`}
                allowFullScreen
                scrolling="no"
                onError={handleIframeError}
              />
            </div>
            <div className={styles.popupFooter}>
              <p>{selectedProject.description}</p>
              <div className={styles.popupActions}>
                <button 
                  className={styles.popupActionButton}
                  onClick={closePopup}
                >
                  Close
                </button>
                <a 
                  href={selectedProject.figmaUrl.replace('embed', 'file').split('&')[0]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.popupExternalLink}
                >
                  <ExternalLink size={16} />
                  <span>Open in Figma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProductDesignerDashboard>
  );
}