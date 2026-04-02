import { useState, useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS credentials provided by user
    const SERVICE_ID = "service_bkpnwca";
    const TEMPLATE_ID = "template_6vdavdh";
    const PUBLIC_KEY = "Nf8vAIkWRjF6ySFDm";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        alert("Message sent successfully 🚀");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        alert("Failed to send message ❌");
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-bg-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="title"
          >
            Contact Me
          </motion.h2>
        </div>

        <div className="contact-content">
          {/* Left Side - Form */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3>Send Me a Message</h3>
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'sending' && <p className="status-msg">Sending message...</p>}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Information */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-desc">
              Feel free to reach out to me for any questions or opportunities! I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Location</h4>
                  <p>Martur, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>patanmastan455@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9347820465</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a href="https://www.linkedin.com/in/patan-mastan" target="_blank" whileHover={{ scale: 1.1, translateY: -5 }} className="social-icon">
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="https://github.com/Mastanvali9347" target="_blank" whileHover={{ scale: 1.1, translateY: -5 }} className="social-icon">
                <FaGithub />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1, translateY: -5 }} className="social-icon">
                <FaInstagram />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1, translateY: -5 }} className="social-icon">
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
