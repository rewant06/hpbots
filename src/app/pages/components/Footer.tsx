import React from 'react';
import styles from '../landing/styless/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Helping Bots. All rights reserved.</p>
      {/* <div className={styles.adContainer}>
        <p>Partners & Sponsors</p>
      </div> */}
    </footer>
  );
};

export default Footer;