import React from 'react';
import styles from '../landing/styless/Footer.module.css';

const Footer: React.FC = () => {
    return (
      <footer className={styles.footer}>
        <p>&copy; 2024 Helping Bots. All rights reserved.</p>
        {/* <div className={styles.adContainer}>
          <p>Partners & Sponsors</p>
        </div> */}
      </footer>
    );
  };
  
  export default Footer;