
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/MohamadAbudraiea" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/mohamad-abudraiea-81180926b/" },
    { icon: Instagram, url: "https://www.instagram.com/moabudraiea.tech" },
    { icon: Mail, url: "mailto:mohamadbudraiea2003@outlook.com" },
  ];

  return (
    <motion.div 
      className="fixed bottom-0 left-8 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.5 }}
    >
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-portfolio-text">
        {socialLinks.map((social, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
          >
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-text hover:text-portfolio-highlight hover:-translate-y-1 transition-all duration-200"
            >
              <social.icon size={20} />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialSidebar;
