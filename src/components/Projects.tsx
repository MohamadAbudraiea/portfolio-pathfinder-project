
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Zap, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ILM-VERSE",
      subtitle: "Learning Management Ecosystem",
      description: "A comprehensive LMS featuring multi-role dashboards, assessment systems, and analytics. Built to scale with modern architecture patterns.",
      longDescription: "Full-featured Learning Management System with comprehensive dashboards for Admins, Teachers, Students and Parents. Includes assignments, quizzes, attendance tracking, performance analytics, and integrated marketing tools.",
      tags: ["MERN Stack", "PERN Stack", "Supabase", "MongoDB Atlas"],
      image: "/lovable-uploads/01ab5a31-1046-4779-aa13-338100a998e2.png",
      github: "https://github.com/MohamadAbudraiea/ILM-Verse",
      live: "https://ilm-verse-frontend-kcil.vercel.app/",
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "border-blue-500/50 text-blue-400"
    },
    {
      title: "AL-EIDI",
      subtitle: "Corporate Digital Presence",
      description: "Modern corporate website with responsive design, smooth animations, and optimized performance across all devices.",
      longDescription: "A responsive company website built from scratch using React and Tailwind CSS. Features modern animations, custom logo design, and professional portfolio presentation with focus on clean UI/UX and performance optimization.",
      tags: ["React", "Tailwind CSS", "UI/UX Design", "Performance"],
      image: "/lovable-uploads/1e556792-9292-45eb-b8f4-29bd506ad332.png",
      live: "https://al-eidi.com",
      gradient: "from-emerald-500/20 to-teal-500/20",
      accentColor: "border-emerald-500/50 text-emerald-400"
    },
    {
      title: "eDental",
      subtitle: "Clinic Management Platform",
      description: "Comprehensive dental clinic management system with appointment scheduling, patient records, and role-based access control.",
      longDescription: "Web-based dental clinic management system using PHP and PHPMyAdmin. Features real-time appointment scheduling, automated notifications, secure patient data management, and comprehensive role-based access control.",
      tags: ["PHP", "PHPMyAdmin", "Bootstrap", "JavaScript"],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/MohamadAbudraiea/eDental",
      gradient: "from-rose-500/20 to-pink-500/20",
      accentColor: "border-rose-500/50 text-rose-400"
    },
  ];
  
  return (
    <section id="projects" className="py-20 px-8 md:px-32 bg-portfolio-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/5 via-transparent to-portfolio-highlight/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-highlight/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-highlight/5 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-portfolio-heading flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-portfolio-highlight font-mono mr-4 text-2xl">03.</span> 
            <span className="bg-gradient-to-r from-portfolio-heading to-portfolio-highlight bg-clip-text text-transparent">
              Featured Projects
            </span>
            <Sparkles className="ml-4 text-portfolio-highlight animate-pulse" size={32} />
          </motion.h2>
          
          <motion.p 
            className="text-portfolio-text text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my journey through full-stack development, from learning management systems to corporate solutions.
          </motion.p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group-hover:scale-105 transition-transform duration-700">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    
                    <div className="relative bg-portfolio-secondary/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-portfolio-tertiary/30 group-hover:border-portfolio-highlight/50 transition-all duration-500">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/60 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`px-4 py-2 bg-portfolio-primary/80 backdrop-blur-sm rounded-full border ${project.accentColor} text-sm font-medium`}>
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="text-portfolio-highlight" size={24} />
                      <span className="text-portfolio-highlight font-mono text-sm tracking-wider uppercase">Featured Project</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-portfolio-heading group-hover:text-portfolio-highlight transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-portfolio-text text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Detailed description card */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-portfolio-highlight/10 to-transparent rounded-2xl"></div>
                    <div className="relative bg-portfolio-secondary/50 backdrop-blur-sm p-6 rounded-2xl border border-portfolio-tertiary/30">
                      <p className="text-portfolio-text leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        className="px-4 py-2 text-sm font-mono text-portfolio-highlight bg-portfolio-highlight/10 rounded-full border border-portfolio-highlight/20 hover:bg-portfolio-highlight/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-portfolio-secondary border-2 border-portfolio-tertiary text-portfolio-heading hover:border-portfolio-highlight hover:text-portfolio-highlight transition-all duration-300 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-portfolio-highlight/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="font-medium">Source Code</span>
                      </motion.a>
                    )}
                    
                    {project.live && (
                      <motion.a 
                        href={project.live.startsWith('http') ? project.live : `https://${project.live}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-portfolio-highlight text-portfolio-primary hover:bg-portfolio-highlight/90 transition-all duration-300 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-portfolio-highlight/50 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Visit Live Site</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a 
            href="https://github.com/MohamadAbudraiea" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 py-4 px-8 border-2 border-portfolio-highlight text-portfolio-highlight 
            font-mono rounded-xl hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all duration-300 
            hover:scale-105 hover:shadow-lg hover:shadow-portfolio-highlight/50 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-portfolio-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg font-medium">Explore More Projects</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
