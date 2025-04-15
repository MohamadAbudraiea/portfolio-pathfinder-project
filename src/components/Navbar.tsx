
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Experience", url: "#experience" },
    { name: "Contact", url: "#contact" },
  ];
  
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-portfolio-primary/90 backdrop-blur shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-portfolio-highlight font-bold text-2xl">
          YN
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.url} 
                  className="text-portfolio-text hover:text-portfolio-highlight transition-colors"
                >
                  <span className="text-portfolio-highlight font-mono text-xs mr-1">0{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#" 
                className="px-4 py-2 border border-portfolio-highlight text-portfolio-highlight 
                rounded font-mono text-sm hover:bg-portfolio-highlight/10 transition-all"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-highlight"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className={`fixed right-0 top-0 bottom-0 w-3/4 bg-portfolio-secondary p-8 transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-portfolio-highlight"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="mt-8">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <a 
                      href={item.url} 
                      className="text-portfolio-heading hover:text-portfolio-highlight transition-colors text-lg flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-portfolio-highlight font-mono text-sm mr-2">0{index + 1}.</span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="block w-full text-center px-4 py-3 border border-portfolio-highlight text-portfolio-highlight 
                  rounded font-mono text-sm hover:bg-portfolio-highlight/10 transition-all"
                  download
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
