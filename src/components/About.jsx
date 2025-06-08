
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01.</span> About Me
          </h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Mohammad, a fourth-year Computer Information Systems student at the University of Jordan 
              with a strong passion for web development, particularly backend development using Node.js and Express.
            </p>
            <p>
              My journey in software development has led me through various technologies and roles, from lecturing 
              OOP concepts at Jo Academy to managing operations at a family-owned school, where I implemented 
              IT-driven business solutions to enhance efficiency.
            </p>
            <p>
              I'm particularly interested in backend development, distributed databases, scalable web applications, 
              and software architecture. I enjoy building robust systems that can handle complex business requirements 
              while maintaining clean code principles.
            </p>
            <div className="about-interests">
              <h3>Areas of Interest:</h3>
              <ul>
                <li>Backend Development</li>
                <li>Distributed Databases</li>
                <li>Scalable Web Applications</li>
                <li>Software Architecture</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>4+</h3>
              <p>Years of Study</p>
            </div>
            <div className="stat-card">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
