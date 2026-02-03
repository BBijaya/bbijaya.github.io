'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/BBijaya' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/budhathokibijaya' },
    { name: 'Twitter', url: 'https://x.com/monobijaya' },
  ];

  return (
    <section className="contact section">
      <motion.div
        ref={ref}
        className="contact-container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div variants={fadeIn} className="section-header">
          <div className="accent-line"></div>
          <h2>Contact</h2>
          <p className="section-subtitle">
            Let's connect
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="contact-intro">
          <p>
            I'm always interested in discussing cloud security, infrastructure, and SRE topics.
            Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="contact-details">
          <div className="contact-detail-item">
            <h3>Open to</h3>
            <ul>
              <li>Technical discussions</li>
              <li>Consulting inquiries</li>
            </ul>
          </div>

          <div className="contact-detail-item">
            <h3>Best way to reach me</h3>
            <p>LinkedIn</p>
          </div>

          <div className="contact-detail-item">
            <h3>Location</h3>
            <p>Plymouth, UK (BST/GMT)</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {social.name}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
