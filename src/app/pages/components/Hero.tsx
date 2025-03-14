import React from 'react';
import styles from '../landing/styless/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Need Help? We are here for You</h1>
        <p>{"Don't keep secrets, share them anonymously."}</p>

        <div className={styles.ctaButtons}>
          <button type="button" className={styles.btnPrimary}>Get Started</button>
          <button type="button" className={styles.btnSecondary}>Learn More</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8E2DE2' }} />
              <stop offset="100%" style={{ stopColor: '#4A00E0' }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradientColor)"
            d="M38.1,-63.8C50.2,-55.1,61.6,-42.3,70.7,-26.9C79.9,-11.6,86.8,6.2,83.8,22.7C80.7,39.2,67.7,54.3,52.7,62.8C37.7,71.4,20.7,73.4,3.1,71.1C-14.5,68.8,-32.7,62.2,-47.2,51.8C-61.8,41.4,-72.7,27.2,-76.8,10.1C-80.8,-7.1,-78,-26.4,-67.7,-42.3C-57.4,-58.2,-40.6,-70.7,-22.6,-73.4C-4.7,-76.2,14.5,-74.1,38.1,-63.8Z"
            transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;