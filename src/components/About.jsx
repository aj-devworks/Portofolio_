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
              Hey, I'm Abdinasir — a full-stack developer who genuinely enjoys
              the moment a messy problem turns into a clean, working solution. I
              build web applications end to end, from database design to the
              interface someone actually clicks on.
            </p>
            <p>
              My background is in backend engineering with Flask and RESTful
              APIs, paired with React on the frontend and PostgreSQL under the
              hood. I led a team through a full-stack capstone project at
              Moringa School — architecting the API, running the sprints, and
              shipping a real, working product with a group of developers
              relying on me to keep things on track.
            </p>
            <p>
              Outside of client work, I'm usually deep in a new tool,
              contributing to open-source, or reading up on system design — I
              like understanding not just how to build something, but why it's
              built that way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
