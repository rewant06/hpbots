import React from 'react';
import styles from '../landing/styless/Contact.module.css';

const Contact: React.FC = () => {
    return (
      <section id="contact" className={styles.contact}>
        <h2>Contact Us</h2>
        <form>
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.btnPrimary}>Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;