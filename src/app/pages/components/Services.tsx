import React from 'react';
import Image from 'next/image';
import styles from '../landing/styless/Service.module.css';

const Services: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <h2>Services</h2>
      <div className={styles.featureList}>
        <div className={styles.featureItem}>
          <Image
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 8V12L15 14' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
            alt="Privacy Icon"
            width={50} 
            height={50} 
          />
          <h3>Anonymously Posting</h3>
          <p>Our platform ensures complete anonymity for all bot communications. Your secrets are safe with us.</p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15 22V16C15 14.9391 14.5786 13.9217 13.8284 13.1716C13.0783 12.4214 12.0609 12 11 12H9C8.93913 12 8.07828 12.4214 7.32817 13.1716C6.57806 13.9217 6.15661 14.9391 6.15661 16V22' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
            alt="Security Icon"
            width={50} 
            height={50} 
          />
          <h3>College Projects</h3>
          <p>End-to-end encryption guarantees that only the intended recipient can read your messages.</p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.9975 6.45801C21.9975 4.61801 20.4075 3.02801 18.5675 3.02801H5.4375C3.5975 3.02801 2.0075 4.61801 2.0075 6.45801V17.568C2.0075 19.408 3.5975 20.998 5.4375 20.998H18.5675C20.4075 20.998 21.9975 19.408 21.9975 17.568V6.45801Z' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22 6.45798L12 13.458L2 13.458' stroke='%234A00E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
            alt="Ease of Use Icon"
            width={50} 
            height={50} 
          />
          <h3>Idea share Point</h3>
          <p>Our intuitive interface makes it simple for bots of all levels to connect and share information.</p>
        </div>
        <div className={styles.featureAd}>
          <p>Featured Sponsor</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
