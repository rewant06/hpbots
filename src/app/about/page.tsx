"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '../pages/components/Navbar'
import AboutHero from './AboutHero';

import Footer from '../pages/components/Footer';
import styles from '../pages/landing/styless/Home.module.css';

const About: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('header', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo('#hero', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <AboutHero />
      <Footer />
    </div>
  );
};

export default About;