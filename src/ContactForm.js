import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_kvbefrp';
const TEMPLATE_ID = 'template_og52uqc';
const PUBLIC_KEY = 'wHYeE_K-pDAIJqlPz';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }, PUBLIC_KEY)
      .then(() => {
        setSuccess('Thank you for your message!');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch(() => {
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
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
      <button className={styles.button} type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
    </form>
  );
};

export default ContactForm; 