'use client'

import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="resume-page section">
      <div className="resume-container">
        {/* Download Button - Hidden in PDF */}
        <motion.div
          className="resume-actions no-print"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href="/resume.pdf" download="Bijaya_Budhathoki_Resume.pdf" className="btn-primary download-btn">
            Download PDF
          </a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          className="resume-content"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Header */}
          <motion.header variants={fadeIn} className="resume-header">
            <h1>Bijaya Budhathoki</h1>
            <p className="resume-title">Site Reliability Engineer & Security Engineer</p>
            <div className="resume-contact">
              <span>Plymouth / Remote / Willing to Relocate</span>
              <span className="separator">•</span>
              <span>linkedin.com/in/budhathokibijaya</span>
              <span className="separator">•</span>
              <span>github.com/BBijaya</span>
            </div>
          </motion.header>

          {/* Personal Statement */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Professional Summary</h2>
            <p>
              Site Reliability Engineer with a strong security background, specializing in building
              and securing cloud-native infrastructure. Started as a System Administrator and
              transitioned through security engineering roles, gaining expertise in endpoint protection,
              SIEM platforms, AWS security services, and compliance frameworks (Cyber Essentials, ISO 27001).
              Currently focusing on SRE practices—automating infrastructure with Terraform, implementing
              CI/CD pipelines, and maintaining observability with Prometheus whilst ensuring systems are
              both secure and reliable by default.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Professional Experience</h2>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Site Reliability Engineer</h3>
                  <p className="company">Alcidion, Manchester, UK (Remote)</p>
                </div>
                <p className="date">July 2024 - Present</p>
              </div>
              <ul>
                <li>Maintain reliability and availability of mission-critical healthcare systems serving NHS trusts across the UK</li>
                <li>Provide technical support to healthcare customers, ensuring system stability and rapid incident resolution</li>
                <li>Implement comprehensive monitoring and observability solutions using Prometheus and related tools to increase system visibility</li>
                <li>Manage and maintain cloud infrastructure across multiple environments, ensuring security and compliance in healthcare sector</li>
                <li>Collaborate with development teams to implement SRE best practices and improve system resilience</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Information Security Lead</h3>
                  <p className="company">Genese Solution, Plymouth, UK</p>
                </div>
                <p className="date">September 2023 - July 2024</p>
              </div>
              <ul>
                <li>Led team of 5+ engineers to deploy infrastructure security solutions including CrowdStrike and Bitdefender GravityZone across multiple client environments</li>
                <li>Reviewed and improved organizational data privacy policy, data protection policy, incident response, and business continuity/disaster recovery procedures aligned with ISO 27001, NIST, and GDPR standards</li>
                <li>Coordinated with internal teams and stakeholders for ISO 27001 certification, conducting risk assessments and preparing audit documentation</li>
                <li>Enhanced cloud workload security through implementation of AWS Config and AWS Security Hub for continuous compliance monitoring</li>
                <li>Conducted infrastructure security audits for multiple clients, identifying vulnerabilities and implementing remediation strategies</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Information Security Engineer</h3>
                  <p className="company">Fusemachines, Kathmandu, Nepal</p>
                </div>
                <p className="date">March 2022 - August 2023</p>
              </div>
              <ul>
                <li>Contributed to development and implementation of strategic security initiatives aligned with business objectives</li>
                <li>Collaborated with senior management to define security goals and create dynamic security roadmap</li>
                <li>Maintained comprehensive security program, enforcing policies and standards across the organization</li>
                <li>Integrated security controls into various business processes and conducted regular risk assessments</li>
                <li>Promoted security-conscious culture through employee training and awareness programs</li>
                <li>Oversaw incident response procedures and security monitoring, staying current with emerging security technologies</li>
              </ul>
            </div>
          </motion.section>

          {/* Earlier Experience */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Earlier Experience</h2>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>System Administrator</h3>
                  <p className="company">Fusemachines, Kathmandu, Nepal</p>
                </div>
                <p className="date">November 2019 - April 2022</p>
              </div>
              <p>
                Managed Linux infrastructure and Docker/Kubernetes environments supporting
                machine learning deployments for large development teams.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>System Administrator</h3>
                  <p className="company">Dryice Solutions Pvt. Ltd., Kathmandu, Nepal</p>
                </div>
                <p className="date">November 2018 - October 2019</p>
              </div>
              <p>
                Foundation in Linux system administration, infrastructure support, and
                troubleshooting in production environments.
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Cloud Platforms</h4>
                <p>AWS, Google Cloud Platform, Microsoft Azure</p>
              </div>
              <div className="skill-category">
                <h4>Container & Orchestration</h4>
                <p>Kubernetes, Docker, Helm, EKS, GKE</p>
              </div>
              <div className="skill-category">
                <h4>Infrastructure as Code</h4>
                <p>Terraform, Ansible, CloudFormation</p>
              </div>
              <div className="skill-category">
                <h4>Security Tools</h4>
                <p>CrowdStrike, Bitdefender GravityZone, Wazuh, Wireshark</p>
              </div>
              <div className="skill-category">
                <h4>CI/CD & Automation</h4>
                <p>GitHub Actions, Azure DevOps, Jenkins</p>
              </div>
              <div className="skill-category">
                <h4>Monitoring & Observability</h4>
                <p>Prometheus, Grafana, ELK Stack, CloudWatch</p>
              </div>
              <div className="skill-category">
                <h4>Programming & Scripting</h4>
                <p>Python, Bash</p>
              </div>
              <div className="skill-category">
                <h4>Methodologies</h4>
                <p>DevSecOps, SRE, Agile, Zero-Trust Architecture</p>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Certifications</h2>
            <div className="certifications-list">
              <div className="cert-item">
                <h4>CISSP – Certified Information Systems Security Professional</h4>
                <p>(ISC)²</p>
              </div>
              <div className="cert-item">
                <h4>AWS Certified Security - Specialty</h4>
                <p>Amazon Web Services</p>
              </div>
              <div className="cert-item">
                <h4>AWS Certified Solutions Architect - Associate</h4>
                <p>Amazon Web Services</p>
              </div>
              <div className="cert-item">
                <h4>Google Cloud Associate Cloud Engineer</h4>
                <p>Google Cloud</p>
              </div>
              <div className="cert-item">
                <h4>Certified SOC Analyst (CSA)</h4>
                <p>EC-Council</p>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>Education</h2>

            <div className="education-item">
              <div className="education-header">
                <div>
                  <h3>MSc Cyber Security, Cyber/Computer Forensics and Counterterrorism</h3>
                  <p className="institution">University of Plymouth</p>
                </div>
                <p className="date">September 2023 - October 2024</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-header">
                <div>
                  <h3>Bachelor of Technology - BTech, Computer Science</h3>
                  <p className="institution">Maharshi Dayanand University (MDU), Rohtak</p>
                </div>
                <p className="date">2014 - 2018</p>
              </div>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeIn} className="resume-section">
            <h2>References</h2>
            <p>Available upon request</p>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
