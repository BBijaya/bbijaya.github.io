'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    'Linux System Administration',
    'Kubernetes & Docker',
    'AWS Security Services (GuardDuty, Security Hub, IAM)',
    'Endpoint Security (CrowdStrike, Bitdefender)',
    'SIEM & Monitoring (Wazuh, Prometheus)',
    'Infrastructure as Code (Terraform)',
    'CI/CD (GitHub Actions, Azure DevOps)',
    'Patch Management & Troubleshooting',
  ];

  const certifications = [
    'CISSP – Certified Information Systems Security Professional',
    'AWS Certified Security - Specialty',
    'Google Cloud Associate Cloud Engineer',
  ];

  const careerJourney = [
    {
      role: 'Site Reliability Engineer',
      company: 'Alcidion',
      period: 'July 2024 - Present',
      current: true,
    },
    {
      role: 'InfoSec Lead',
      company: 'Genese',
      period: 'September 2023 - July 2024',
      current: false,
    },
    {
      role: 'InfoSec Engineer',
      company: 'Fusemachines',
      period: 'March 2022 - August 2023',
      current: false,
    },
    {
      role: 'System Administrator',
      company: 'Fusemachines',
      period: 'November 2019 - April 2022',
      current: false,
    },
    {
      role: 'System Administrator',
      company: 'DryIce',
      period: 'November 2018 - October 2019',
      current: false,
    },
  ];

  return (
    <section className="about section">
      <motion.div
        ref={ref}
        className="about-container"
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
          <h2>About</h2>
        </motion.div>

        <div className="about-content">
          <motion.div variants={fadeIn} className="about-text">
            <p>
              I'm a security-focused engineer with expertise in building and securing
              cloud-native infrastructure. Starting as a System Administrator managing Linux
              infrastructure and supporting machine learning deployments, I developed a deep
              understanding of systems reliability. My work centers on implementing defense-in-depth
              strategies while maintaining high availability and performance.
            </p>
            <p>
              Transitioning to security engineering, I led a team of 5+ engineers focusing on
              infrastructure and cloud security. I've worked extensively with CrowdStrike, Bitdefender
              GravityZone, Wazuh, and patch management systems. I designed and implemented security
              solutions for multiple clients, conducted security audits, and supported compliance
              frameworks including Cyber Essentials, Cyber Essentials Plus, ISO 27001, and security
              maturity assessments.
            </p>
            <p>
              My expertise evolved to cloud security, leveraging AWS services (GuardDuty, Security Hub,
              CloudTrail, IAM, Audit Manager) alongside Infrastructure as Code with Terraform. I automate
              security controls through CI/CD pipelines using GitHub Actions and Azure DevOps, and maintain
              observability with Prometheus. Today, I'm focusing on Site Reliability Engineering, ensuring
              systems are both secure and reliable by default.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="certifications">
          <h3>Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div key={cert} className="cert-item">
                <div className="cert-indicator"></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="career-journey">
          <h3>Career Journey</h3>
          <div className="timeline">
            {careerJourney.map((job, index) => (
              <div
                key={`${job.company}-${job.role}`}
                className={`timeline-item ${job.current ? 'current' : ''}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{job.role}</h4>
                  <p className="company">{job.company}</p>
                  <p className="period">{job.period}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="resume-cta">
          <p>Want to know more about my experience?</p>
          <div className="resume-buttons">
            <Link href="/resume" className="btn-primary">
              View Full Resume
            </Link>
            <a href="/resume.pdf" className="btn-secondary" download>
              Download PDF
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
