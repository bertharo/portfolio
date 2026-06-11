import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid #e5e5e5',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#bbb',
    background: '#fafafa',
    letterSpacing: '0.04em',
  }}>
    © {new Date().getFullYear()} Bert Haro
  </footer>
);

export default Footer;
