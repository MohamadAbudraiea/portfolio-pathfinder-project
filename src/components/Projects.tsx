
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ILM-VERSE",
      description: "Full Learning Management System with comprehensive dashboards for Admins, Teachers, Students and Parents. Features include assignments and quizzes system, absence reports, performance reports, and marketing features.",
      tags: ["MERN Stack", "PERN Stack", "Supabase", "MongoDB Atlas"],
      image: "/lovable-uploads/01ab5a31-1046-4779-aa13-338100a998e2.png",
      github: "https://github.com/MohamadAbudraiea/ILM-Verse",
      external: "https://ilm-verse-frontend-kcil.vercel.app/"
    },
    {
      title: "al-eidi.com",
      description: "A responsive company website built from scratch using React and Tailwind CSS. Implemented modern animations for enhanced user experience, designed a new company logo, and built a professional portfolio based on client requirements. Focused on clean UI/UX and performance optimization across all devices.",
      tags: ["React", "Tailwind CSS", "UI/UX Design", "Responsive Design"],
      image: "/lovable-uploads/1e556792-9292-45eb-b8f4-29bd506ad332.png",
      github: null,
      external: "https://www.al-eidi.com"
    },
    {
      title: "eDental",
      description: "A web-based dental clinic management system using PHP for backend logic and PHPMyAdmin for database management. Features include appointment scheduling with real-time availability updates, automated notifications, and role-based access control for patients, dentists, and administrators.",
      tags: ["PHP", "PHPMyAdmin", "Bootstrap", "JavaScript", "Database Design"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/MohamadAbudraiea/eDental",
      external: "https://github.com/MohamadAbudraiea/eDental"
    },
  ];
  
  return (
    <section id="projects" className="py-20 px-8 md:px-32 bg-portfolio-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading flex items-center mb-16">
          <span className="text-portfolio-highlight font-mono mr-3">03.</span> 
          <span className="bg-gradient-to-r from-portfolio-heading to-portfolio-highlight bg-clip-text text-transparent">
            My Projects
          </span>
          <div className="h-px bg-gradient-to-r from-portfolio-tertiary to-transparent flex-grow ml-8"></div>
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className={`md:grid md:grid-cols-12 gap-8 items-center ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                {/* Image */}
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden h-72 md:h-[400px] group-hover:scale-[1.02] transition-all duration-500 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/30 to-portfolio-highlight/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:col-span-6 ${
                  index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8 md:col-start-1'
                } z-20 mt-8 md:mt-0`}>
                  <div className="space-y-6">
                    <div>
                      <p className="font-mono text-portfolio-highlight mb-2 text-sm tracking-wide">Featured Project</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-portfolio-heading mb-4 group-hover:text-portfolio-highlight transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-secondary via-portfolio-secondary to-portfolio-secondary/80 rounded-xl blur-sm opacity-90"></div>
                      <div className="relative p-6 bg-portfolio-secondary/95 backdrop-blur-sm rounded-xl shadow-xl border border-portfolio-tertiary/20">
                        <p className="text-portfolio-text leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-mono text-portfolio-highlight bg-portfolio-highlight/10 rounded-full border border-portfolio-highlight/20 hover:bg-portfolio-highlight/20 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex gap-6 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label="GitHub Repository" 
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-secondary border border-portfolio-tertiary text-portfolio-heading hover:text-portfolio-highlight hover:border-portfolio-highlight hover:bg-portfolio-highlight/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-portfolio-highlight/25"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      <a 
                        href={project.external} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Live Demo" 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-portfolio-highlight/10 border border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-portfolio-highlight/25"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="https://github.com/MohamadAbudraiea" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 py-4 px-8 border-2 border-portfolio-highlight text-portfolio-highlight 
            font-mono rounded-lg hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all duration-300 
            hover:scale-105 hover:shadow-lg hover:shadow-portfolio-highlight/25 overflow-hidden"
          >
            <span className="absolute inset-0 bg-portfolio-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative flex items-center gap-3">
              <Github size={20} />
              View All Projects
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
