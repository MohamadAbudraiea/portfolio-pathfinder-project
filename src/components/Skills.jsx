
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "PHP", "C++", "C#"],
      icon: "💻"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "Postman", "Jira"],
      icon: "🛠️"
    },
    {
      title: "Methodologies",
      skills: ["OOP", "Functional Programming", "Agile Development", "RESTful API Design", "MVC Pattern"],
      icon: "⚡"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "PHP Laravel", "ASP.NET", "MERN Stack", "PERN Stack"],
      icon: "⚙️"
    },
    {
      title: "Databases",
      skills: ["SQL DB", "NoSQL DB", "MySQL", "PostgreSQL", "ORM", "ODM"],
      icon: "🗄️"
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
      icon: "🎨"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leading", "Communication", "Project Management", "Strategic Thinking", "Rapid Learning"],
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
