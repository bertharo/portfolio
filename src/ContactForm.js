import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    alert('Thank you for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Contact Me</h2>
      {error && <div className={styles.error}>{error}</div>}
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Message
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">Send</button>
    </form>
  );
};

export default ContactForm; 