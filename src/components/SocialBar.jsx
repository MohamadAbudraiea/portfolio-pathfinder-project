
import React from 'react';
import './SocialBar.css';

const SocialBar = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:mohamadabudraiea2003@outlook.com',
      icon: '✉️'
    },
    {
      name: 'LinkedIn',
      url: 'https://jo.linkedin.com/in/mohamad-abudraiea-81180926b',
      icon: '💼'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/moabudraiea.tech',
      icon: '📸'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mohamadabudraiea',
      icon: '🐙'
    }
  ];

  return (
    <div className="social-bar">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-bar-item"
          style={{ animationDelay: `${index * 0.1}s` }}
          title={link.name}
        >
          <span className="social-icon">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
