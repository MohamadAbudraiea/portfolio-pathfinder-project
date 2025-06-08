
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "PHP", "RESTful API", "Java", "C++", "C#"],
      icon: "⚙️"
    },
    {
      title: "Frontend Development", 
      skills: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Figma UI/UX"],
      icon: "🎨"
    },
    {
      title: "Database Technologies",
      skills: ["SQL Databases", "NoSQL Databases", "PHPMyAdmin", "MongoDB Atlas"],
      icon: "🗄️"
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git & GitHub", "OOP", "Functional Programming", "Testing & Debugging"],
      icon: "🛠️"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leading", "Communication", "Project Management", "Strategic Thinking"],
      icon: "💡"
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Arabic (Native)"],
      icon: "🌍"
    }
  ];

  return (
    <section id="skills" className="section bg-primary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02.</span> Skills & Technologies
          </h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
