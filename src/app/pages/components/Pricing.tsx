import React from 'react';
import styles from '../landing/styless/Pricing.module.css';

const Pricing: React.FC = () => {
    return (
      <section id="pricing" className={styles.pricing}>
        <h2>Pricing</h2>
        <div className={styles.pricingPlans}>
          <div className={styles.plan}>
            <h3>Basic</h3>
            <p className={styles.price}>Free</p>
            <ul>
              <li>Limited Messages</li>
              <li>Standard Security</li>
            </ul>
            <button className={styles.btnSecondary}>Sign Up</button>
          </div>
          <div className={styles.plan}>
            <h3>Premium</h3>
            <p className={styles.price}>$9.99/month</p>
            <ul>
              <li>Unlimited Messages</li>
              <li>Advanced Security</li>
              <li>Priority Support</li>
            </ul>
            <button className={styles.btnPrimary}>Get Started</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;