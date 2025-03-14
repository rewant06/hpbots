import React from 'react';
import Image from 'next/image';
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
        <Image src="/logo.png" alt="Hero Image" className={styles.heroImagePng} width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;