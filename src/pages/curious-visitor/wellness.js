import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Music, Heart, Brain, Apple, Waves, Target, Leaf, Sun, Guitar, Drum, Keyboard, Volume2, Bell, Circle, Square } from 'lucide-react';

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

  const renderMusicalJourney = () => {
    // Musical instruments data with descriptions and Spotify links
    const instruments = [
      {
        id: 1,
        name: "Handpan 10 Nodes",
        description: "My journey with the handpan began during a transformative trip to Goa in 2019. Walking along the beach one evening, I heard the most ethereal sounds echoing across the shoreline. Following the music, I discovered a street performer playing this magnificent instrument. The resonant tones seemed to touch something deep within my soul, and I knew I had to learn. After months of searching, I finally found a craftsman who could create one for me. Each of the 10 nodes produces distinct harmonic frequencies that create a meditative soundscape. When I play, it feels like the entire universe is resonating in harmony, and all my worries simply dissolve into the evening breeze.",
        image: "/img/music/handpan.png",
        spotifyUrl: "https://open.spotify.com/embed/track/3SfNTJMkZaYnMCNduvxQSa"
      },
      {
        id: 2,
        name: "Guitars",
        description: "My relationship with guitars began in my teenage years, but it wasn't until my stressful software engineering days that I truly understood their therapeutic power. During late nights debugging code, I would pick up my old acoustic guitar and let my fingers wander across the strings. The gentle melodies became my emotional release valve. Over time, I've collected several guitars - each with its own voice and personality. The warm, woody tones ground me when I'm feeling overwhelmed, while brighter chords uplift my spirit. Playing guitar has become my daily meditation, a way to reconnect with my creative essence beyond lines of code.",
        image: "/img/music/guitars.png",
        spotifyUrl: "https://open.spotify.com/embed/track/5dsZOeLti9ZLhULcLZEzlq"
      },
      {
        id: 3,
        name: "Singing Bowl Set of 7",
        description: "During a particularly challenging period in my career, I was introduced to sound healing by a yoga instructor. She brought out these beautiful crystal singing bowls, each tuned to a different chakra frequency. As she played them, I felt layers of tension melting away from my body. I was so moved by the experience that I invested in my own set of seven bowls. Now, every morning begins with a ritual - I play each bowl in sequence, starting from the root chakra and moving to the crown. The pure tones create a bridge between my physical and spiritual self, setting a peaceful intention for the day ahead.",
        image: "/img/music/singing-bowl.png",
        spotifyUrl: "https://open.spotify.com/embed/track/153ieEwQs9TxlU4fP0dpXI"
      },
      {
        id: 4,
        name: "Koshi Chimes France",
        description: "These delicate chimes came to me as a gift from a dear friend who knew of my fascination with ambient sounds. Made in the south of France, each chime is tuned to a specific note that creates a unique harmonic blend. I hang them in my garden where the gentle breeze transforms them into nature's own orchestra. The random, unpredictable melodies they create remind me that beauty often emerges from chaos. During meditation sessions, their soft tinkling helps me drift into deeper states of consciousness. They've taught me to appreciate the subtle moments that often go unnoticed in our fast-paced digital world.",
        image: "/img/music/koshi-chimes.png",
        spotifyUrl: "https://open.spotify.com/embed/track/6iLzj40p8OdJ7c6YHTxKoi"
      },
      {
        id: 5,
        name: "Kalimba Thumb Piano",
        description: "I discovered the kalimba during a visit to a world music store in Mumbai. Its small size and intricate metal tines immediately captivated me. The shopkeeper showed me how to pluck the notes with my thumbs, and within minutes I was creating beautiful, percussive melodies. What fascinates me most is how such a simple instrument can produce such complex harmonies. I take it with me wherever I travel - it fits in my carry-on bag and provides instant comfort in unfamiliar environments. The kalimba has become my creative playground, where I compose little musical stories that reflect my daily experiences and emotions.",
        image: "/img/music/kalimba.png",
        spotifyUrl: "https://open.spotify.com/embed/track/3BCp42YSWQhpoTNSEdbJPj"
      },
      {
        id: 6,
        name: "Tibetan Tingsha Cymbals Bells",
        description: "These sacred cymbals were gifted to me during a meditation retreat in the Himalayas. Crafted by Tibetan artisans, they produce a clear, penetrating tone that cuts through mental chatter. My meditation teacher explained that the sharp sound represents the clarity that comes from transcending ordinary consciousness. I use them to mark the beginning and end of my meditation sessions, creating a sacred boundary between my practice and the outside world. The reverberations seem to linger long after the initial strike, much like how moments of insight continue to influence our perspective long after they occur.",
        image: "/img/music/tingsha-cymbals.png",
        spotifyUrl: "https://open.spotify.com/embed/track/68MjgBrVMM9K0UI7DSTl0c"
      },
      {
        id: 7,
        name: "Musical Boxes",
        description: "My collection of musical boxes began with a vintage piece I found in my grandmother's attic. When I wound it up and heard the delicate melody, I was transported back to my childhood. Since then, I've been drawn to these intricate mechanisms that combine precision engineering with artistic expression. Each box holds a different tune - some classical, others folk melodies from around the world. The repetitive, gentle nature of their music has a hypnotic quality that quiets my analytical mind. They remind me that sometimes the most profound experiences come from the simplest sources.",
        image: "/img/music/musical-boxes.png",
        spotifyUrl: "https://open.spotify.com/embed/track/42Jp7EHs2OISSN6Rcq2RBV"
      },
      {
        id: 8,
        name: "Energy Beam Chime",
        description: "This unique instrument came into my life during a period of deep personal transformation. A sound therapist friend introduced me to this extraordinary chime that produces sustained harmonic tones when activated. The vibrations travel through the entire body, creating a sensation of energetic alignment. I've used it during healing sessions and personal meditation practices. The pure tones seem to recalibrate my entire being, releasing stored tension and promoting deep inner peace. It's become an essential tool in my wellness toolkit, helping me maintain balance between my demanding professional life and my need for spiritual connection.",
        image: "/img/music/energybeamchimes.png",
        spotifyUrl: "https://open.spotify.com/embed/track/2eP76TEl98ohCpFHIZNBHj"
      }
    ];

    return (
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

        {/* Musical Instruments Section with Alternating Layouts */}
        <div className={styles.wellnessSection}>
          <h3 className={styles.wellnessSubtitle}>My Musical Instruments for Wellness</h3>
          <p className={styles.wellnessText}>
            Each instrument in my collection serves a unique purpose in my wellness journey. They bring peace, promote healing, and deepen my connection 
            with myself and the present moment. Below are the instruments I regularly use for therapeutic sound experiences.
          </p>
          
          <div className={styles.musicalInstrumentsContainer}>
            {instruments.map((instrument, index) => (
              <div 
                key={instrument.id} 
                className={`${styles.instrumentItem} ${index % 2 === 0 ? styles.evenLayout : styles.oddLayout}`}
              >
                {/* Actual instrument images from the gallery */}
                <div className={styles.instrumentImageContainer}>
                  <img 
                    src={instrument.image} 
                    alt={instrument.name}
                    className={styles.instrumentImage}
                  />
                </div>
                
                <div className={styles.instrumentContent}>
                  <h4 className={styles.highlightTitle}>
                    {instrument.name}
                  </h4>
                  <p className={styles.highlightText}>
                    {instrument.description}
                  </p>
                  {/* Spotify Embed */}
                  <div className={styles.spotifyEmbed}>
                    <iframe 
                      src={instrument.spotifyUrl} 
                      width="60%" 
                      height="80" 
                      frameBorder="0" 
                      allowtransparency="true" 
                      allow="encrypted-media"
                      title={`${instrument.name} - Spotify Player`}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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