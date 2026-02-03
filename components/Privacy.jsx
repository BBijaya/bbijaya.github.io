'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Privacy.css';

const Privacy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="privacy section">
      <motion.div
        ref={ref}
        className="privacy-container"
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: February 2026</p>
        </motion.div>

        <motion.div variants={fadeIn} className="privacy-content">
          <section className="privacy-section">
            <h2>Overview</h2>
            <p>
              This privacy policy outlines how this website collects, uses, and protects
              any information you provide when using this site.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information Collection</h2>
            <p>Currently, this website may collect the following information:</p>
            <ul>
              <li>
                <strong>Contact Form Data:</strong> When you submit the contact form, your name,
                email address, and message content may be collected.
              </li>
              <li>
                <strong>Analytics Data:</strong> If analytics tools are implemented in the future,
                basic usage statistics (pages visited, time on site, etc.) may be collected. This
                information is aggregated and anonymous.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How Information is Used</h2>
            <p>Information collected is used solely for:</p>
            <ul>
              <li>Responding to your inquiries via the contact form</li>
              <li>Understanding site usage patterns to improve content and user experience</li>
              <li>No personal information is sold, shared, or used for marketing purposes</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Storage and Security</h2>
            <p>
              Contact form submissions are processed securely. Any data collected is stored
              with appropriate security measures and is only retained for as long as necessary
              to fulfill the stated purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Services</h2>
            <p>
              This website is hosted on GitHub Pages. GitHub may collect technical information
              as described in their{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy statement
              </a>
              .
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights (GDPR)</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact me via the methods provided on
              the contact page.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cookies</h2>
            <p>
              This website currently does not use cookies for tracking purposes. If this changes
              in the future, this policy will be updated accordingly.
            </p>
          </section>

          <section className="privacy-section">
            <h2>External Links</h2>
            <p>
              This website contains links to external sites (GitHub, LinkedIn, Twitter, etc.).
              I am not responsible for the privacy practices of these external sites. Please
              review their respective privacy policies.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              This privacy policy may be updated from time to time. Any changes will be posted
              on this page with an updated revision date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact</h2>
            <p>
              If you have any questions about this privacy policy or how your data is handled,
              please contact me through the contact page.
            </p>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Privacy;
