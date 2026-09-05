import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src="/Abdinasir.png"
                alt="Abdinasir Profile"
                className="about-image"
              />
            </div>
          </div>

          <div className="about-text">
            <p>
              Hello! I'm Abdinasir, a passionate web developer focused on
              creating clean, responsive, and user-friendly web applications. I
              enjoy turning complex problems into simple, elegant, and efficient
              digital experiences.
            </p>
            <p>
              My journey in web development started with a curiosity for how
              websites function behind the scenes. Today, I build full-stack
              applications and AI chatbot solutions, continuously learning
              modern tools to refine my craft.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning about system
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
