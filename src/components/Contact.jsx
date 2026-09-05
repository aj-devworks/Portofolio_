import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const email = "aj07256768@gmail.com";

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for browsers/contexts without the async Clipboard API
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (!ok) throw new Error("execCommand copy failed");
      }
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 2500);
    }
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
              <a href={`mailto:${email}`} className="btn btn-primary">
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-outline"
              >
                {copied
                  ? "✓ Copied!"
                  : copyFailed
                    ? "Couldn't copy — select manually"
                    : "📋 Copy Address"}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
                {copyFailed
                  ? "Copy failed, please copy the address manually"
                  : ""}
              </span>
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
