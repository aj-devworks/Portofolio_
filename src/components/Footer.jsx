import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-cta">
            <span className="footer-cta-title">
              Full-stack developer. Designing, building, and shipping products
              end to end.
            </span>

            <ul className="footer-nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary footer-cta-btn">
              Get in touch
            </a>
          </div>

          <div className="footer-brand">
            <a
              href="#home"
              className="footer-monogram"
              aria-label="Back to top"
            >
              AO
            </a>

            <span className="footer-status">
              <span className="pulsing-dot"></span>
              Open to new opportunities
            </span>

            <div className="footer-socials">
              <a
                href="https://github.com/aj-devworks"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                Gh
              </a>

              <a
                href="https://www.linkedin.com/in/abdinasir-osman-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                In
              </a>

              <a
                href="https://x.com/4jworks"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="footer-social-link"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Abdinasir Osman. Built with React.</span>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
