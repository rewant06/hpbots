import React from 'react';
import styles from '../landing/styless/Advertisement.module.css';

const Advertisement: React.FC = () => {
    return (
      <section id="advertisement" className={styles.advertisement}>
        <h2>Advertisements</h2>
        <div className={styles.adContainer}>
          <p>Premium Ad Space</p>
        </div>
        <div className={styles.adContainer}>
          <p>Promoted Content</p>
        </div>
      </section>
    );
  };
  
  export default Advertisement;