import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <a href="#about" className={styles.navBrand}>Bert Haro</a>
    <ul className={styles.navList}>
      <li><a className={styles.navLink} href="#about">About</a></li>
      <li><a className={styles.navLink} href="#featured">Featured</a></li>
      <li><a className={styles.navLink} href="#projects">Projects</a></li>
      <li><a className={styles.navLink} href="#ai-memo">AI Memo</a></li>
    </ul>
  </nav>
);

export default Navbar;
