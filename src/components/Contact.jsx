import React, { useState } from "react";

const IconEnvelope = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const IconChat = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconClipboard = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
  </svg>
);

const IconCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

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
            Let's Talk About <span>What You're Building.</span>
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
            <div className="hub-icon">
              <IconEnvelope />
            </div>
            <h3>Email Me</h3>
            <p>
              Direct inbox for project inquiries and full-time opportunities.
            </p>
            <div className="hub-actions">
              <a href={`mailto:${email}`} className="btn btn-primary">
                Send Email
                <IconArrow />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-outline"
              >
                {copied ? (
                  <>
                    <IconCheck />
                    Copied!
                  </>
                ) : copyFailed ? (
                  "Couldn't copy — select manually"
                ) : (
                  <>
                    <IconClipboard />
                    Copy Address
                  </>
                )}
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
            <div className="hub-icon">
              <IconChat />
            </div>
            <h3>Quick Chat</h3>
            <p>Fastest response time for quick questions or freelance work.</p>
            <a
              href="https://wa.me/254722242664"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat on WhatsApp
              <IconArrow />
            </a>
          </div>

          {/* Professional Network Card */}
          <div className="contact-hub-card">
            <div className="hub-icon">
              <IconBriefcase />
            </div>
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
              View Profile
              <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
