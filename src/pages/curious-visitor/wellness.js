import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Music, Heart, Brain, Apple, Waves, Target, Leaf, Sun } from 'lucide-react';

export default function CuriousVisitorWellness() {
  const [activeTab, setActiveTab] = useState('musical-journey');

  const renderTabNavigation = () => (
    <div className={styles.contentToggleContainer}>
      <div className={styles.contentToggleButtons}>
        <button
          className={`${styles.contentToggleButton} ${activeTab === 'musical-journey' ? styles.active : ''}`}
          onClick={() => setActiveTab('musical-journey')}
        >
          <Music size={16} />
          Musical Journey
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeTab === 'yoga-practice' ? styles.active : ''}`}
          onClick={() => setActiveTab('yoga-practice')}
        >
          <Waves size={16} />
          Yoga Practice
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeTab === 'mental-wellness' ? styles.active : ''}`}
          onClick={() => setActiveTab('mental-wellness')}
        >
          <Brain size={16} />
          Mental Wellness
        </button>
        <button
          className={`${styles.contentToggleButton} ${activeTab === 'nutrition-lifestyle' ? styles.active : ''}`}
          onClick={() => setActiveTab('nutrition-lifestyle')}
        >
          <Apple size={16} />
          Nutrition & Lifestyle
        </button>
      </div>
    </div>
  );

  const renderMusicalJourney = () => (
    <div className={styles.wellnessContent}>
      <div className={styles.wellnessSection}>
        <h3 className={styles.wellnessSubtitle}>The Healing Power of Sound</h3>
        <p className={styles.wellnessText}>
          My journey with musical instruments began as a curiosity but has evolved into a profound practice of wellness and self-discovery. 
          I'm particularly drawn to instruments that produce different frequencies, each resonating with specific aspects of my being.
        </p>
        
        <div className={styles.wellnessHighlights}>
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Frequency Instruments</h4>
            <p className={styles.highlightText}>
              I explore instruments like handpans, singing bowls, and crystal bowls that work on specific frequencies. 
              These instruments create vibrations that seem to align with different energy centers in the body, promoting deep relaxation and inner harmony.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Therapeutic Resonance</h4>
            <p className={styles.highlightText}>
              Playing and listening to these frequency-based instruments helps me enter a meditative state where stress dissolves. 
              The vibrations seem to reset my nervous system, offering a natural way to decompress after intense workdays.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Mind-Body Connection</h4>
            <p className={styles.highlightText}>
              Through consistent practice, I've discovered how sound frequencies can influence mood and energy levels. 
              Lower frequencies ground me during anxious moments, while higher tones uplift my spirit and enhance focus.
            </p>
          </div>
        </div>
        
        <p className={styles.wellnessText}>
          This musical exploration has become an integral part of my wellness routine, offering a unique pathway to relaxation and mindfulness 
          that complements my other wellness practices.
        </p>
      </div>
    </div>
  );

  const renderYogaPractice = () => (
    <div className={styles.wellnessContent}>
      <div className={styles.wellnessSection}>
        <h3 className={styles.wellnessSubtitle}>Mind-Body Harmony Through Yoga</h3>
        <p className={styles.wellnessText}>
          My yoga journey began as a way to improve flexibility and strength, but it has evolved into a profound practice connecting mind, body, and spirit. 
          Through consistent practice, I've discovered the deep interconnection between physical postures, breath awareness, and mental clarity.
        </p>
        
        <div className={styles.wellnessHighlights}>
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Physical Benefits</h4>
            <p className={styles.highlightText}>
              Regular yoga practice has enhanced my flexibility, core strength, and balance. 
              It has also improved my posture, which is especially beneficial during long hours of work at a desk.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Mental Clarity</h4>
            <p className={styles.highlightText}>
              The mindful breathing techniques I've learned through yoga have become invaluable tools for managing stress and maintaining focus. 
              They help me transition between tasks and reset my mental state during challenging projects.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Emotional Balance</h4>
            <p className={styles.highlightText}>
              Yoga has taught me to observe my thoughts and emotions without judgment. 
              This awareness has enhanced my emotional intelligence and resilience in both personal and professional situations.
            </p>
          </div>
        </div>
        
        <p className={styles.wellnessText}>
          My practice includes a mix of Hatha, Vinyasa, and restorative yoga, tailored to my daily needs and energy levels.
        </p>
      </div>
    </div>
  );

  const renderMentalWellness = () => (
    <div className={styles.wellnessContent}>
      <div className={styles.wellnessSection}>
        <h3 className={styles.wellnessSubtitle}>Cultivating Inner Peace and Balance</h3>
        <p className={styles.wellnessText}>
          Mental wellness is the foundation of my overall well-being. I've developed a multifaceted approach to maintaining mental health 
          that includes mindfulness practices, stress management techniques, and intentional lifestyle choices.
        </p>
        
        <div className={styles.wellnessHighlights}>
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Stress Management</h4>
            <p className={styles.highlightText}>
              I employ various techniques to manage stress, including meditation, deep breathing exercises, and regular breaks during work. 
              Recognizing early signs of stress allows me to address them proactively before they escalate.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Mindfulness Practices</h4>
            <p className={styles.highlightText}>
              Daily mindfulness meditation helps me stay present and centered. 
              I also practice mindful walking and eating, which enhance my awareness and appreciation of everyday moments.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Work-Life Balance</h4>
            <p className={styles.highlightText}>
              Maintaining boundaries between work and personal life is crucial for my mental health. 
              I schedule time for hobbies, social connections, and complete disconnection from work-related activities.
            </p>
          </div>
        </div>
        
        <p className={styles.wellnessText}>
          This holistic approach to mental wellness supports my creativity, productivity, and overall happiness.
        </p>
      </div>
    </div>
  );

  const renderNutritionLifestyle = () => (
    <div className={styles.wellnessContent}>
      <div className={styles.wellnessSection}>
        <h3 className={styles.wellnessSubtitle}>Nourishing Body and Soul</h3>
        <p className={styles.wellnessText}>
          My approach to nutrition and lifestyle is centered on fueling my body for optimal energy while respecting its natural rhythms. 
          I believe in a balanced, sustainable approach rather than restrictive diets or extreme measures.
        </p>
        
        <div className={styles.wellnessHighlights}>
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Mindful Eating</h4>
            <p className={styles.highlightText}>
              I practice mindful eating by savoring each meal without distractions. 
              This helps me recognize hunger and fullness cues, leading to better digestion and satisfaction with smaller portions.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Balanced Nutrition</h4>
            <p className={styles.highlightText}>
              My diet emphasizes whole foods, including plenty of vegetables, lean proteins, healthy fats, and complex carbohydrates. 
              I stay hydrated throughout the day and limit processed foods and excessive sugar.
            </p>
          </div>
          
          <div className={styles.wellnessHighlight}>
            <h4 className={styles.highlightTitle}>Lifestyle Habits</h4>
            <p className={styles.highlightText}>
              Consistent sleep patterns, regular physical activity, and time spent in nature are pillars of my lifestyle approach. 
              I also prioritize social connections and engaging in activities that bring joy and fulfillment.
            </p>
          </div>
        </div>
        
        <p className={styles.wellnessText}>
          These practices support not just physical health but also mental clarity and emotional stability, creating a foundation for a vibrant life.
        </p>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="wellness"
      title="Curious Visitor | Wellness"
      description="Explore Shubham Narkhede's wellness journey including musical instruments, yoga practice, mental wellness, and nutrition."
    >
      <SectionTemplate
        title="Wellness Journey"
        subtitle="Finding balance through mindful practices"
        icon={Heart}
      >
        {renderTabNavigation()}
        
        <div className={styles.wellnessTabContent}>
          {activeTab === 'musical-journey' && renderMusicalJourney()}
          {activeTab === 'yoga-practice' && renderYogaPractice()}
          {activeTab === 'mental-wellness' && renderMentalWellness()}
          {activeTab === 'nutrition-lifestyle' && renderNutritionLifestyle()}
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}