
import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import './SocialBar.css';

const SocialBar = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:mohamadabudraiea2003@outlook.com',
      icon: Mail
    },
    {
      name: 'LinkedIn',
      url: 'https://jo.linkedin.com/in/mohamad-abudraiea-81180926b',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/moabudraiea.tech',
      icon: Instagram
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mohamadabudraiea',
      icon: Github
    }
  ];

  return (
    <div className="social-bar">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-bar-item"
            style={{ animationDelay: `${index * 0.1}s` }}
            title={link.name}
          >
            <IconComponent className="social-icon" size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialBar;
