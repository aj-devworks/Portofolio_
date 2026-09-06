import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <span className="greeting">Hi there, I'm</span>
        <h1 className="name">Abdinasir Osman</h1>
        <h2 className="title">Full-Stack Developer & AI Chatbot Specialist</h2>
        <p className="description">
          I build modern, high-performance web applications and intelligent AI
          chatbot solutions. Focused on crafting clean code, smart integrations,
          and exceptional user experiences.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            Gh
          </a>
          <a
            href="https://www.linkedin.com/in/abdinasir-osman-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            In
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
          >
            X
          </a>
        </div>
      </div>

      <div className="home-image-wrapper">
        <div className="home-image-frame">
          <img src="/homie.jpeg" alt="Abdinasir Osman" />
        </div>
      </div>
    </section>
  );
};

export default Home;
