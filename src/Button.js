import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button' }) => (
  <button className={styles.customButton} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button; 