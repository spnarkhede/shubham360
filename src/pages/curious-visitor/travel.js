import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { MapPin, Camera, Plane, Mountain } from 'lucide-react';

export default function CuriousVisitorTravel() {
  const travelExperiences = [
    {
      location: "Japan",
      year: "2023",
      duration: "2 weeks",
      highlights: ["Tokyo tech scene", "Traditional temples", "Mount Fuji"],
      description: "Exploring the intersection of traditional culture and cutting-edge technology.",
      image: "/img/travel/japan.jpg"
    },
    {
      location: "Switzerland",
      year: "2022",
      duration: "10 days",
      highlights: ["Alpine hiking", "Tech conferences", "Scenic railways"],
      description: "Combining outdoor adventures with professional development.",
      image: "/img/travel/switzerland.jpg"
    },
    {
      location: "Singapore",
      year: "2022",
      duration: "1 week",
      highlights: ["Smart city tour", "Food exploration", "Marina Bay"],
      description: "Learning about smart city initiatives and urban technology solutions.",
      image: "/img/travel/singapore.jpg"
    }
  ];

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="travel"
      title="Curious Visitor | Travel & Adventures"
      description="Join Shubham Narkhede's travel adventures and cultural explorations"
    >
      <SectionTemplate
        title="Travel Adventures"
        subtitle="Exploring the world, one destination at a time"
      >
        <div className={styles.travelGrid}>
          {travelExperiences.map((travel, index) => (
            <div key={index} className={styles.travelCard}>
              <div className={styles.travelImage}>
                <img 
                  src={travel.image} 
                  alt={travel.location}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/img/default-travel.jpg";
                  }}
                />
              </div>
              
              <div className={styles.travelContent}>
                <div className={styles.travelHeader}>
                  <h3 className={styles.travelLocation}>{travel.location}</h3>
                  <span className={styles.travelYear}>{travel.year}</span>
                </div>
                
                <p className={styles.travelDescription}>{travel.description}</p>
                
                <div className={styles.travelMeta}>
                  <span className={styles.travelDuration}>
                    <Plane size={14} />
                    {travel.duration}
                  </span>
                </div>
                
                <div className={styles.travelHighlights}>
                  <h4>Highlights:</h4>
                  <ul>
                    {travel.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}