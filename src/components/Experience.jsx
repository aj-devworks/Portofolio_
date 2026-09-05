import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Company Name / Freelance",
      period: "2023 - Present",
      description:
        "Developed and maintained responsive user interfaces using React and modern CSS frameworks.",
    },
    {
      role: "Web Development Intern",
      company: "Tech Startup",
      period: "2022 - 2023",
      description:
        "Assisted in building client websites, optimized website performance, and resolved cross-browser bugs.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="period">{exp.period}</span>
                <h3 className="role">{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
