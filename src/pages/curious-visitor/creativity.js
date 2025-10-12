import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Palette, Brush, Pen, Image } from 'lucide-react';

export default function CuriousVisitorCreativity() {
  const [activeTab, setActiveTab] = useState('sketches');

  const tabs = [
    { id: 'sketches', label: 'Sketches', icon: Pen },
    { id: 'painting', label: 'Painting', icon: Brush },
    { id: 'onelineart', label: 'One Line Art', icon: Image }
  ];

  // Sample gallery data - you can replace this with actual data
  const galleryData = {
    sketches: [
        { id: 1, src: '/img/sketches/sketch1.jpg', alt: 'Sketch 1', title: 'Urban Sketch' },
        { id: 2, src: '/img/sketches/sketch2.jpg', alt: 'Sketch 2', title: 'Nature Study' },
        { id: 3, src: '/img/sketches/sketch3.jpg', alt: 'Sketch 3', title: 'Portrait Study' },
        { id: 4, src: '/img/sketches/sketch1.jpg', alt: 'Sketch 4', title: 'Urban Sketch' },
        { id: 5, src: '/img/sketches/sketch2.jpg', alt: 'Sketch 5', title: 'Nature Study' },
        { id: 6, src: '/img/sketches/sketch3.jpg', alt: 'Sketch 6', title: 'Portrait Study' }
    ],
    painting: [
      { id: 1, src: '/img/paintings/painting1.jpg', alt: 'Painting 1', title: 'Watercolor Landscape' },
      { id: 2, src: '/img/paintings/painting2.jpg', alt: 'Painting 2', title: 'Acrylic Portrait' },
      { id: 3, src: '/img/paintings/painting3.jpg', alt: 'Painting 3', title: 'Oil Still Life' }
    ],
    onelineart: [
      { id: 1, src: '/img/linearts/oneline1.jpg', alt: 'One Line Art 1', title: 'Mountain Range' },
      { id: 2, src: '/img/linearts/oneline2.jpg', alt: 'One Line Art 2', title: 'Animal Silhouette' },
      { id: 3, src: '/img/linearts/oneline3.jpg', alt: 'One Line Art 3', title: 'Abstract Form' }
    ]
  };

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="creativity"
      title="Curious Visitor | Creativity"
      description="Explore Shubham Narkhede's artistic creations including sketches, paintings, and one-line art."
    >
      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <IconComponent size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Sketches Tab */}
        {activeTab === 'sketches' && (
          <SectionTemplate
            title="Sketches"
            subtitle="Exploring ideas through quick sketches and detailed drawings"
          >
            <div className={styles.galleryGrid}>
              {galleryData.sketches.map((item) => (
                <div key={item.id} className={styles.galleryItem}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={styles.galleryImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/default-art.jpg";
                    }}
                  />
                  <div className={styles.galleryOverlay}>
                    <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </SectionTemplate>
        )}

        {/* Painting Tab */}
        {activeTab === 'painting' && (
          <SectionTemplate
            title="Paintings"
            subtitle="Expressing emotions and concepts through color and texture"
          >
            <div className={styles.galleryGrid}>
              {galleryData.painting.map((item) => (
                <div key={item.id} className={styles.galleryItem}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={styles.galleryImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/default-art.jpg";
                    }}
                  />
                  <div className={styles.galleryOverlay}>
                    <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </SectionTemplate>
        )}

        {/* One Line Art Tab */}
        {activeTab === 'onelineart' && (
          <SectionTemplate
            title="One Line Art"
            subtitle="Simplifying complex forms into elegant single-line compositions"
          >
            <div className={styles.galleryGrid}>
              {galleryData['onelineart'].map((item) => (
                <div key={item.id} className={styles.galleryItem}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={styles.galleryImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/default-art.jpg";
                    }}
                  />
                  <div className={styles.galleryOverlay}>
                    <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </SectionTemplate>
        )}
      </div>
    </DashboardLayout>
  );
}