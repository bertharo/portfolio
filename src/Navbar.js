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
        <li><a className={styles.navLink} href="#news"><strong>NEWS</strong></a></li>
        <li><a className={styles.navLink} href="#projects"><strong>PROJECTS</strong></a></li>
        <li><a className={styles.navLink} href="#about"><strong>ABOUT ME</strong></a></li>
        <li><a className={styles.navLink} href="#blog"><strong>BLOG</strong></a></li>
        <li><a className={styles.navLink} href="#contact"><strong>CONTACT ME</strong></a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 