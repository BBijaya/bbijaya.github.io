import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/BBijaya', external: true },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/budhathokibijaya', external: true },
    { name: 'Twitter', url: 'https://x.com/monobijaya', external: true },
    { name: 'Resume', url: '/resume', external: false },
    { name: 'Privacy', url: '/privacy', external: false },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {socialLinks.map((social) => (
            social.external ? (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {social.name}
              </a>
            ) : (
              <Link
                key={social.name}
                href={social.url}
                className="footer-link"
              >
                {social.name}
              </Link>
            )
          ))}
        </div>
        <p className="footer-disclaimer">
          All views and opinions expressed are my own and do not represent those of my employer.
        </p>
        <p>&copy; 2026 Bijaya Budhathoki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
