import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this to your Flask backend, EmailJS, or Formspree.
    console.log("Form submitted:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
            Have a project, opportunity, or idea in mind? I'd love to hear about
            it. Feel free to reach out and let's start a conversation.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              I'm currently open to freelance projects, development
              opportunities, collaborations, and interesting ideas.
            </p>

            <div className="contact-details">
              <a href="mailto:aj07256768@gmail.com" className="contact-item">
                <span className="contact-icon">✉</span>
                <div>
                  <small>Email</small>
                  <span>aj07256768@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/254722242664"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">☏</span>
                <div>
                  <small>WhatsApp</small>
                  <span>+254 722 242 664</span>
                </div>
              </a>

              <div className="contact-item">
                <span className="contact-icon">⌖</span>
                <div>
                  <small>Location</small>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/abdinasir-osman-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">in</span>
                <div>
                  <small>LinkedIn</small>
                  <span>Abdinasir Osman</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
