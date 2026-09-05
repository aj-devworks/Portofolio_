import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
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
      </div>
    </section>
  );
};

export default Home;
