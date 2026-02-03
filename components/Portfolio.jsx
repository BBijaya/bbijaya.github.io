'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'DevUtils.sh',
      category: 'Developer Tools',
      description: 'A collection of free, privacy-first developer tools designed for developers, SREs, and security professionals. Every tool runs 100% client-side in your browser using JavaScript - your data never touches our servers.',
      url: 'https://devutils.sh',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="portfolio section">
      <motion.div
        ref={ref}
        className="portfolio-container"
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
          <h2>Work</h2>
          <p className="section-subtitle">
            Personal projects and tools I've built
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={fadeIn}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-url"
                >
                  {project.url}
                </a>
              )}
              <p>{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Site →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
