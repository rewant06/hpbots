import React from 'react';
import ServiceList from './ServiceList';
import styles from '../landing/styless/Features.module.css';

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.features}>
      <h2>Services</h2>
      <ServiceList />
    </section>
  );
};

export default Services;
