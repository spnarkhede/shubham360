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
        // Famous personalities and Naturals
        { id: 53, src: '/img/sketches/53.png', alt: 'Sketch 53', title: 'Madhubala' },
        { id: 19, src: '/img/sketches/19.png', alt: 'Sketch 19', title: 'Sharukh Khan' },
        { id: 12, src: '/img/sketches/12.png', alt: 'Sketch 12', title: 'K-Pop Girl' },
        { id: 54, src: '/img/sketches/54.png', alt: 'Sketch 54', title: 'Sushant Singh Rajput' },
        { id: 10, src: '/img/sketches/10.png', alt: 'Sketch 10', title: 'K-Pop Girl' },
        { id: 7, src: '/img/sketches/7.png', alt: 'Sketch 7', title: 'Man with Cap' },
        { id: 16, src: '/img/sketches/16.png', alt: 'Sketch 16', title: 'Hermione Granger' },
        { id: 24, src: '/img/sketches/24.png', alt: 'Sketch 24', title: 'Ron & Hermione' },
        { id: 9, src: '/img/sketches/9.png', alt: 'Sketch 9', title: 'Korean Girl' },
        { id: 3, src: '/img/sketches/3.png', alt: 'Sketch 3', title: 'CM Devendra Fadnavis' },
        { id: 6, src: '/img/sketches/6.png', alt: 'Sketch 6', title: 'Priyanka Chopra' },
        { id: 25, src: '/img/sketches/25.png', alt: 'Sketch 25', title: 'Deep Thought' },
        { id: 26, src: '/img/sketches/26.png', alt: 'Sketch 26', title: 'Horse Front' },
        { id: 27, src: '/img/sketches/27.png', alt: 'Sketch 27', title: 'Amir Khan' },
        { id: 13, src: '/img/sketches/13.png', alt: 'Sketch 13', title: 'Playful Kiss Kdrama' },
        { id: 5, src: '/img/sketches/5.png', alt: 'Sketch 5', title: 'Portrait' },
        { id: 28, src: '/img/sketches/28.png', alt: 'Sketch 28', title: 'Playful Kiss' },
        { id: 29, src: '/img/sketches/29.png', alt: 'Sketch 29', title: 'Twilight' },
        { id: 30, src: '/img/sketches/30.png', alt: 'Sketch 30', title: 'Horse Side' },
        { id: 31, src: '/img/sketches/31.png', alt: 'Sketch 31', title: 'Rose with Dice' },

        // Hindu God Portraits and Sketches
        { id: 21, src: '/img/sketches/21.png', alt: 'Sketch 21', title: 'Lord Shiv Parvati' },
        { id: 32, src: '/img/sketches/32.png', alt: 'Sketch 32', title: 'Lord Shiva' },

        // Live Portraits and My Friends 
        { id: 1, src: '/img/sketches/1.png', alt: 'Sketch 1', title: 'Vikram Sir' },
        { id: 8, src: '/img/sketches/8.png', alt: 'Sketch 8', title: 'Ashutosh Sir' },
        { id: 18, src: '/img/sketches/18.png', alt: 'Sketch 18', title: 'Manish Kuhad' },
        { id: 2, src: '/img/sketches/2.png', alt: 'Sketch 2', title: 'My Friend' },
        { id: 4, src: '/img/sketches/4.png', alt: 'Sketch 4', title: 'Shivani' },
        { id: 11, src: '/img/sketches/11.png', alt: 'Sketch 11', title: 'My Sister' },
        { id: 14, src: '/img/sketches/14.png', alt: 'Sketch 14', title: 'Nitasha' },
        { id: 15, src: '/img/sketches/15.png', alt: 'Sketch 15', title: 'Nidhi' },
        { id: 17, src: '/img/sketches/17.png', alt: 'Sketch 17', title: 'Sayali' },

        
        { id: 20, src: '/img/sketches/20.png', alt: 'Sketch 20', title: '' },
        { id: 22, src: '/img/sketches/22.png', alt: 'Sketch 22', title: 'Mayuri' },
        { id: 23, src: '/img/sketches/23.png', alt: 'Sketch 23', title: 'Snehal' },
        { id: 33, src: '/img/sketches/33.png', alt: 'Sketch 33', title: '' },
        { id: 34, src: '/img/sketches/34.png', alt: 'Sketch 34', title: '' },
        { id: 35, src: '/img/sketches/35.png', alt: 'Sketch 35', title: '' },
        { id: 36, src: '/img/sketches/36.png', alt: 'Sketch 36', title: '' },
        { id: 37, src: '/img/sketches/37.png', alt: 'Sketch 37', title: '' },
        { id: 38, src: '/img/sketches/38.png', alt: 'Sketch 38', title: '' },
        { id: 39, src: '/img/sketches/39.png', alt: 'Sketch 39', title: '' },
        { id: 40, src: '/img/sketches/40.png', alt: 'Sketch 40', title: '' },
        { id: 41, src: '/img/sketches/41.png', alt: 'Sketch 41', title: '' },
        { id: 42, src: '/img/sketches/42.png', alt: 'Sketch 42', title: '' },
        { id: 43, src: '/img/sketches/43.png', alt: 'Sketch 43', title: '' },
        { id: 44, src: '/img/sketches/44.png', alt: 'Sketch 44', title: '' },
        { id: 45, src: '/img/sketches/45.png', alt: 'Sketch 45', title: '' },
        { id: 46, src: '/img/sketches/46.png', alt: 'Sketch 46', title: '' },
        { id: 47, src: '/img/sketches/47.png', alt: 'Sketch 47', title: '' },
        { id: 48, src: '/img/sketches/48.png', alt: 'Sketch 48', title: '' },
        { id: 49, src: '/img/sketches/49.png', alt: 'Sketch 49', title: '' },
        { id: 50, src: '/img/sketches/50.png', alt: 'Sketch 50', title: '' },
        { id: 51, src: '/img/sketches/51.png', alt: 'Sketch 51', title: '' },
        { id: 52, src: '/img/sketches/52.png', alt: 'Sketch 52', title: '' },
        // { id: 55, src: '/img/sketches/55.png', alt: 'Sketch 55', title: '' },
        // { id: 56, src: '/img/sketches/56.png', alt: 'Sketch 56', title: '' },
        // { id: 57, src: '/img/sketches/57.png', alt: 'Sketch 57', title: '' },
        // { id: 58, src: '/img/sketches/58.png', alt: 'Sketch 58', title: '' },
        // { id: 59, src: '/img/sketches/59.png', alt: 'Sketch 59', title: '' },
        // { id: 60, src: '/img/sketches/60.png', alt: 'Sketch 60', title: '' },
        // { id: 61, src: '/img/sketches/61.png', alt: 'Sketch 61', title: '' },
        // { id: 62, src: '/img/sketches/62.png', alt: 'Sketch 62', title: '' },
        // { id: 63, src: '/img/sketches/63.png', alt: 'Sketch 63', title: '' },
        // { id: 64, src: '/img/sketches/64.png', alt: 'Sketch 64', title: '' },
        // { id: 65, src: '/img/sketches/65.png', alt: 'Sketch 65', title: '' },
        // { id: 66, src: '/img/sketches/66.png', alt: 'Sketch 66', title: '' },
        // { id: 67, src: '/img/sketches/67.png', alt: 'Sketch 67', title: '' },
        // { id: 68, src: '/img/sketches/68.png', alt: 'Sketch 68', title: '' },
        // { id: 69, src: '/img/sketches/69.png', alt: 'Sketch 69', title: '' },
        // { id: 70, src: '/img/sketches/70.png', alt: 'Sketch 70', title: '' },
        // { id: 71, src: '/img/sketches/71.png', alt: 'Sketch 71', title: '' },
        // { id: 72, src: '/img/sketches/72.png', alt: 'Sketch 72', title: '' },
        // { id: 73, src: '/img/sketches/73.png', alt: 'Sketch 73', title: '' },
        // { id: 74, src: '/img/sketches/74.png', alt: 'Sketch 74', title: '' },
        // { id: 75, src: '/img/sketches/75.png', alt: 'Sketch 75', title: '' },
        // { id: 76, src: '/img/sketches/76.png', alt: 'Sketch 76', title: '' },
        // { id: 77, src: '/img/sketches/77.png', alt: 'Sketch 77', title: '' },
        // { id: 78, src: '/img/sketches/78.png', alt: 'Sketch 78', title: '' },
        // { id: 79, src: '/img/sketches/79.png', alt: 'Sketch 79', title: '' },
        // { id: 80, src: '/img/sketches/80.png', alt: 'Sketch 80', title: '' }
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