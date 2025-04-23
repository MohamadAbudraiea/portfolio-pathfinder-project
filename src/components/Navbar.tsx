
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Experience", url: "#experience" },
    { name: "Volunteering", url: "#volunteering" },
    { name: "Contact", url: "#contact" },
  ];

  // Social icons to be shown in mobile menu only
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohamad-abudraiea-81180926b/", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/moabudraiea.tech", icon: "instagram" },
    { name: "Mail", url: "mailto:mohamadbudraiea2003@outlook.com", icon: "mail" },
    { name: "Company LinkedIn", url: "https://www.linkedin.com/company/dotmediajo/", icon: "linkedin" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-portfolio-primary/90 backdrop-blur shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo updated to MA */}
        <a href="#home" className="text-portfolio-highlight font-bold text-2xl">
          MA
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
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className={`fixed right-0 top-0 bottom-0 w-3/4 bg-portfolio-secondary p-8 transition-transform duration-300
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-portfolio-highlight" aria-label="Close menu">
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

              {/* Social Icons in Mobile Menu */}
              <div className="mt-12 flex justify-around">
                {socialLinks.map((social, index) => {
                  const IconComponent = () => {
                    switch (social.icon) {
                      case "linkedin":
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4z"
                            />
                            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={2} />
                          </svg>
                        );
                      case "instagram":
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="4"
                              ry="4"
                              stroke="currentColor"
                              strokeWidth={2}
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
                            />
                          </svg>
                        );
                      case "mail":
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        );
                      default:
                        return null;
                    }
                  };
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-text hover:text-portfolio-highlight hover:-translate-y-1 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>

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
