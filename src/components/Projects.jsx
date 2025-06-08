
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "ILM-VERSE",
      subtitle: "Graduation Project",
      description: "Full Learning Management System with comprehensive dashboards for Admins, Teachers, Students and Parents. Features include assignments and quizzes system, absence reports, performance reports, and marketing features.",
      technologies: ["MERN Stack", "PERN Stack", "Supabase", "MongoDB Atlas"],
      image: "/lovable-uploads/01ab5a31-1046-4779-aa13-338100a998e2.png",
      features: ["Admin Dashboard", "Student Portal", "Assessment System", "Reporting", "Marketing Tools"]
    },
    {
      title: "al-eidi.com",
      subtitle: "Freelance Project",
      description: "Developed a responsive company website from scratch using React and Tailwind CSS. Implemented smooth, modern animations and designed a new company logo. Built a professional portfolio focused on clean UI/UX and performance optimization.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: "/lovable-uploads/1e556792-9292-45eb-b8f4-29bd506ad332.png",
      features: ["Responsive Design", "Modern Animations", "Logo Design", "Performance Optimized"]
    },
    {
      title: "eDental",
      subtitle: "Clinic Management System",
      description: "Developed a comprehensive web-based dental clinic management system using PHP for backend logic and PHPMyAdmin for database management. Features appointment scheduling, role-based access control, and optimized performance.",
      technologies: ["PHP", "PHPMyAdmin", "Bootstrap", "JavaScript"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Appointment System", "Role-based Access", "Real-time Updates", "Secure Data Management"]
    }
  ];

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span> Featured Projects
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.subtitle}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
