import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aj07256768@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">
            Let's Build Something <span>Great Together.</span>
          </h2>
          <p className="contact-subtitle">
            I'm currently open to full-time roles, contract work, and
            full-stack/AI projects.
          </p>
        </div>

        {/* Action Cards Grid (Replaces Form) */}
        <div className="contact-grid-hub">
          {/* Email Action Card */}
          <div className="contact-hub-card">
            <div className="hub-icon">✉</div>
            <h3>Email Me</h3>
            <p>
              Direct inbox for project inquiries and full-time opportunities.
            </p>
            <div className="hub-actions">
              <a href="mailto:aj07256768@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-outline"
              >
                {copied ? "✓ Copied!" : "📋 Copy Address"}
              </button>
            </div>
          </div>

          {/* WhatsApp Action Card */}
          <div className="contact-hub-card">
            <div className="hub-icon">💬</div>
            <h3>Quick Chat</h3>
            <p>
              Fastest response time for casual questions or immediate
              freelancing.
            </p>
            <a
              href="https://wa.me/254722242664"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp <span>→</span>
            </a>
          </div>

          {/* Professional Network Card */}
          <div className="contact-hub-card">
            <div className="hub-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>
              Connect professionally, review background, or message directly.
            </p>
            <a
              href="https://www.linkedin.com/in/abdinasir-osman-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Profile <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
