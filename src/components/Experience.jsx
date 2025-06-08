
import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: "Lecturer",
      company: "Jo Academy",
      location: "Amman",
      period: "February 2023 - Present",
      responsibilities: [
        "Teaches OOP in Java, C++, and relational databases to university students",
        "Developing course materials and guiding students through programming concepts",
        "Providing one-on-one mentoring for students struggling with complex topics",
        "Creating practical programming exercises and assessments"
      ]
    },
    {
      title: "Operational Manager",
      company: "Thinking Flares School",
      location: "As Salt",
      period: "February 2021 – October 2024",
      responsibilities: [
        "Implemented IT-driven business solutions to enhance efficiency",
        "Streamlined operations and improved the overall school experience",
        "Oversaw business strategy planning and execution in hybrid work environment",
        "Managed family-owned business operations and technology integration"
      ]
    },
    {
      title: ".NET Web Developer Intern",
      company: "Tumed Applications",
      location: "Amman",
      period: "May 2023 - August 2023",
      responsibilities: [
        "Learned MVC architecture and building RESTful APIs using .NET",
        "Enhanced backend development skills through practical application",
        "Collaborated with senior developers on real-world projects",
        "Participated in code reviews and improved coding practices"
      ]
    },
    {
      title: "UI/UX Designer Intern",
      company: "Hope International Academy",
      location: "Amman", 
      period: "September 2023 - November 2023",
      responsibilities: [
        "Gained professional expertise in Figma, designing user-friendly interfaces",
        "Improved UI/UX workflows and design processes",
        "Collaborated with development teams to implement designs",
        "Created wireframes and prototypes for various applications"
      ]
    }
  ];

  const volunteering = {
    title: "Team Lead, Volunteering Team",
    company: "University of Jordan Innovation and Entrepreneurship Center (UJIEC)",
    period: "November 2024",
    description: "Led the volunteering team for University of Jordan Innovation Hackathon (UJIH), managing participant communication and sponsor relations. Developed a GitHub-based solution for submitting and monitoring hackathon projects across Game Development, App Development, and Gen AI categories. Supervised by Dr. Reem Alfayez."
  };

  return (
    <section id="experience" className="section bg-primary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">04.</span> Professional Experience
          </h2>
        </div>
        
        <div className="experience-container">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="experience-content">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-panel ${activeTab === index ? 'active' : ''}`}
              >
                <h3>
                  {exp.title} <span className="company-highlight">@ {exp.company}</span>
                </h3>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-location">{exp.location}</p>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="volunteering-section">
          <h3 className="volunteering-title">
            <span className="section-number">05.</span> Volunteering Experience
          </h3>
          <div className="volunteering-card">
            <h4>{volunteering.title}</h4>
            <p className="volunteering-company">{volunteering.company}</p>
            <p className="volunteering-period">{volunteering.period}</p>
            <p className="volunteering-description">{volunteering.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
