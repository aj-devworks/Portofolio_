import React from "react";
import { skills } from "../data/skills";

const categoryIcons = {
  Frontend: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Backend: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="7" rx="1.5" />
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
  ),
  Database: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  AI: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8l4.4-1.2L12 2z" />
      <path d="M19 15l0.8 2.4L22 18l-2.2 0.6L19 21l-0.8-2.4L16 18l2.2-0.6L19 15z" />
    </svg>
  ),
  Tools: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </svg>
  ),
};

const categoryClassMap = {
  Frontend: "cat-frontend",
  Backend: "cat-backend",
  Database: "cat-database",
  Tools: "cat-tools",
  AI: "cat-ai",
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const categoryClass = categoryClassMap[skill.category] || "";
            return (
              <div key={index} className="skill-card">
                <span className={`skill-category ${categoryClass}`}>
                  {categoryIcons[skill.category]}
                  {skill.category}
                </span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
