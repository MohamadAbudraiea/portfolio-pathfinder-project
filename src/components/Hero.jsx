
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Mohammad Abudraiea";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="hero bg-primary">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">
              {displayText}
              <span className="cursor">|</span>
            </h1>
            <h2 className="hero-title">I build exceptional web experiences.</h2>
            <p className="hero-description">
              I'm a fourth-year Computer Information Systems student with a strong passion for web development. 
              Aspiring MERN stack developer with expertise in Node.js, currently working on Node.js projects using Express.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="mailto:mohamadabudraiea2003@outlook.com" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/lovable-uploads/9a7b184e-2abf-4898-bdd7-363c118a737e.png" alt="Mohammad Abudraiea" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about">
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
