'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="hero-greeting">SRE & Security Engineer</p>

          <h1 className="hero-name">
            Bijaya Budhathoki
          </h1>

          <p className="hero-description">
            Building secure, resilient infrastructure. Specializing in cloud security,
            Kubernetes hardening, and site reliability engineering. Check out my{' '}
            <Link href="/portfolio" className="inline-link">recent work</Link> or{' '}
            <Link href="/blog" className="inline-link">read my blog</Link> to learn more.
          </p>

          <div className="hero-buttons">
            <Link href="/resume" className="btn-primary">
              View Resume
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
