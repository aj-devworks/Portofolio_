import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Abdinasir<span>.</span>
          </a>

          <p>
            Full-Stack Developer specializing in modern web applications and
            AI-powered chatbot solutions.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/abdinasir-osman-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a href="mailto:aj07256768@gmail.com" aria-label="Email">
            Email
          </a>

          <a
            href="https://wa.me/254722242664"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Abdinasir Osman. All rights reserved.</p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
