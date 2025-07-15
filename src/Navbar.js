import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a className={styles.navLink} href="#about">About</a></li>
        <li><a className={styles.navLink} href="#featured">Featured</a></li>
        <li><a className={styles.navLink} href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 