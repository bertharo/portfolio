import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li><a className={styles.navLink} href="#projects">Projects</a></li>
      <li><a className={styles.navLink} href="#about">About Me</a></li>
      <li><a className={styles.navLink} href="#contact">Contact Me</a></li>
    </ul>
  </nav>
);

export default Navbar; 