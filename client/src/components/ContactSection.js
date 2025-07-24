import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');   // idle | sending | sent | error

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // 👉 replace '/api/contact' with your own endpoint if different
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.card}>
        {/* ─────────── Left column : contact info ─────────── */}
        <aside className={styles.info}>
          <h2>Contact&nbsp;Us</h2>
          <p className={styles.tagline}>
            We’d love to hear from you. Reach us any way you like.
          </p>

          <div className={styles.row}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h4>Visit&nbsp;us</h4>
              <address>XYZ Road, ABCD 192101,<br />India</address>
            </div>
          </div>

          <div className={styles.row}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <h4>Call&nbsp;us</h4>
              <p>General +91 0123456789<br />Emergency +91 1234567890</p>
            </div>
          </div>

          <div className={styles.row}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h4>Email&nbsp;us</h4>
              <p>xyz@gmail.com</p>
            </div>
          </div>
        </aside>

        {/* ─────────── Right column : form ─────────── */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {['name', 'email', 'subject'].map(field => (
            <div className={styles.group} key={field}>
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                placeholder=" "
                value={form[field]}
                onChange={handleChange}
                required={field !== 'subject'}
              />
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          <div className={styles.group}>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
          </div>

          {/* ✔ button sits immediately after the inputs */}
          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? <span className={styles.loader} />
              : <>
                  <span>Send&nbsp;Message</span>
                  <FaPaperPlane className={styles.plane} />
                </>
            }
          </button>

          {status === 'sent'  && <p className={styles.success}>✓ Message sent!</p>}
          {status === 'error' && <p className={styles.error}>✕ Couldn’t send. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
