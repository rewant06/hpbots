import React from 'react';
import FeatureList from './FeatureList';
import styles from '../landing/styless/Features.module.css';

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <h2>Key Features</h2>
      <FeatureList />
    </section>
  );
};

export default Features;
