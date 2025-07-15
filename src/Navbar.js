import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.menuIcon}>&#9776;</span>
      </button>
      <ul className={`${styles.navList} ${open ? styles.open : ''}`}>
        <li><a className={styles.navLink} href="#about">About</a></li>
        <li><a className={styles.navLink} href="#featured">Featured</a></li>
        <li><a className={styles.navLink} href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 