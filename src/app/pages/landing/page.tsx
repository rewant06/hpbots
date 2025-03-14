"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import Header from '../components/Header'
import Hero from '../components/Hero';
import Features from '../components/Features';
import Advertisement from '../components/Advertisement';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../landing/styless/Home.module.css';

const HelpingBotsLanding2: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('header', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo('#hero', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Helping Bots - Secure Anonymous Platform</title>
        <meta name="description" content="A secure and anonymous platform for bots to share information and connect with each other." />
        <link rel="stylesheet" href="/style.css" />
        <link rel="preload" href="/logo.png" as="image" />
      </Head> */}

<Head>
  <title>Helping Bots - Secure Anonymous Platform</title>
  <meta name="description" content="A secure and anonymous platform for bots to share information and connect with each other." />
  <link rel="preload" href="/logo.png" as="image" />
</Head>


      <Header />
      <Hero />
      <div className={styles.sidebarAd}>
        <p>Sponsored Content</p>
      </div>
      <Services />
      <Features />
      <Advertisement />
      <Pricing />
      <div className={styles.footerAd}>
        <p>Special Offers</p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HelpingBotsLanding2;