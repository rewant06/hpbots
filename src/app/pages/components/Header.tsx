import React from 'react';
import Image from 'next/image';
import styles from '../landing/styless/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Helping Bots Logo" className={styles.logo} width={50} height={50} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#features" className={styles.navLink}>Features</a></li>
          <li className={styles.navItem}><a href="#security" className={styles.navLink}>Security</a></li>
          <li className={styles.navItem}><a href="#pricing" className={styles.navLink}>Pricing</a></li>
          <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;