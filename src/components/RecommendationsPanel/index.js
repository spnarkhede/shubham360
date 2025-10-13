import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const RecommendationCard = ({ recommendation, nameFormatter, imageRenderer, index }) => {
  // Add a check to ensure recommendation exists
  if (!recommendation) {
    return <div className={styles.recommendationCard}>Loading...</div>;
  }

  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationHeader}>
        {imageRenderer && recommendation.image ? (
          imageRenderer(recommendation.image, `${recommendation.firstName} ${recommendation.lastName}`, index)
        ) : recommendation.image ? (
          <img 
            src={recommendation.image} 
            alt={`${recommendation.firstName} ${recommendation.lastName}`}
            className={styles.recommendationImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src="/img/default-avatar.png";
            }}
          />
        ) : (
          <div className={styles.recommendationImagePlaceholder}>
            {recommendation.firstName?.charAt(0) || 'A'}
          </div>
        )}
        <div className={styles.recommendationAuthor}>
          <h3 className={styles.recommendationName}>
            {nameFormatter ? nameFormatter(recommendation, index) : `${recommendation.firstName} ${recommendation.lastName}`}
          </h3>
          <p className={styles.recommendationTitle}>{recommendation.title}</p>
        </div>
      </div>
      
      <div className={styles.recommendationRating}>
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={clsx(
              styles.ratingStar,
              i < (recommendation.rating || 0) && styles.ratingStarFilled
            )} 
          />
        ))}
      </div>
      
      <blockquote className={styles.recommendationQuote}>
        {recommendation.quote}
      </blockquote>
      
      <div className={styles.recommendationFooter}>
        <span className={styles.recommendationDate}>{recommendation.date}</span>
        {recommendation.relationship && (
          <span className={styles.recommendationRelationship}>{recommendation.relationship}</span>
        )}
      </div>
    </div>
  );
};

const RecommendationsPanel = ({ recommendations = [], nameFormatter, imageRenderer, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Auto-rotate recommendations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
      );
    }, 13000);
    
    return () => clearInterval(interval);
  }, [recommendations.length]);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next
      handleNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous
      handlePrevious();
    }
  };
  
  return (
    <div className={clsx(styles.recommendationsPanel, className)}>
      <div 
        className={styles.recommendationsCarousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className={clsx(styles.carouselButton, styles.carouselButtonPrev)}
          onClick={handlePrevious}
          aria-label="Previous recommendation"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.recommendationsContainer}>
          {recommendations && recommendations.length > 0 && recommendations[currentIndex] ? (
            <RecommendationCard 
              recommendation={recommendations[currentIndex]} 
              nameFormatter={nameFormatter}
              imageRenderer={imageRenderer}
              index={currentIndex}
            />
          ) : (
            <div>Loading recommendations...</div>
          )}
        </div>
        
        <button 
          className={clsx(styles.carouselButton, styles.carouselButtonNext)}
          onClick={handleNext}
          aria-label="Next recommendation"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className={styles.recommendationIndicators}>
        {recommendations && recommendations.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.recommendationIndicator,
              index === currentIndex && styles.activeIndicator
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to recommendation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;