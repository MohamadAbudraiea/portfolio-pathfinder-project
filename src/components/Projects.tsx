
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Zap, Globe, Star } from "lucide-react";

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
      accentColor: "border-blue-500/50 text-blue-400",
      featured: true
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
      accentColor: "border-emerald-500/50 text-emerald-400",
      featured: true
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
      accentColor: "border-rose-500/50 text-rose-400",
      featured: false
    },
  ];
  
  return (
    <section id="projects" className="py-32 px-8 md:px-32 bg-portfolio-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/5 via-transparent to-portfolio-highlight/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-highlight/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-highlight/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center mb-8"
          >
            <Star className="text-portfolio-highlight mr-4 animate-spin-slow" size={36} />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-portfolio-heading via-portfolio-highlight to-portfolio-heading bg-clip-text text-transparent">
              <span className="font-mono text-2xl text-portfolio-highlight mr-4">03.</span>
              Featured Projects
            </h2>
            <Star className="text-portfolio-highlight ml-4 animate-spin-slow" size={36} />
          </motion.div>
          
          <motion.p 
            className="text-portfolio-text text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A showcase of my journey through full-stack development—from learning management systems to corporate solutions that make a real impact! 🚀
          </motion.p>
        </div>
        
        {/* Project Cards */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute -top-4 left-8 z-20 flex items-center space-x-2 px-4 py-2 bg-portfolio-highlight text-portfolio-primary rounded-full font-bold text-sm shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <Sparkles size={16} />
                  <span>FEATURED</span>
                </motion.div>
              )}

              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative group-hover:scale-105 transition-transform duration-700">
                    <div className={`absolute -inset-6 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative bg-portfolio-secondary/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-portfolio-highlight/20 group-hover:border-portfolio-highlight/60 transition-all duration-500 shadow-2xl">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/80 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Tech Stack Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 text-xs font-mono text-portfolio-highlight bg-portfolio-primary/80 backdrop-blur-sm rounded-full border border-portfolio-highlight/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Project Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <Zap className="text-portfolio-highlight animate-pulse" size={28} />
                      <span className="text-portfolio-highlight font-mono text-sm tracking-wider uppercase font-bold">
                        {project.subtitle}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-portfolio-heading group-hover:text-portfolio-highlight transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-portfolio-text text-xl leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                  
                  {/* Detailed Description */}
                  <motion.div 
                    className="relative p-8 bg-gradient-to-br from-portfolio-secondary/70 to-portfolio-primary/50 backdrop-blur-xl rounded-3xl border border-portfolio-highlight/20 shadow-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-portfolio-highlight rounded-full animate-pulse"></div>
                    <p className="text-portfolio-text leading-relaxed text-lg">
                      {project.longDescription}
                    </p>
                  </motion.div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        className="px-5 py-3 text-sm font-mono text-portfolio-highlight bg-portfolio-highlight/10 rounded-2xl border-2 border-portfolio-highlight/30 hover:bg-portfolio-highlight/20 hover:border-portfolio-highlight/60 transition-all duration-300 hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 + tagIndex * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-4 px-8 py-4 bg-portfolio-secondary/80 backdrop-blur-sm border-2 border-portfolio-highlight/30 text-portfolio-heading hover:border-portfolio-highlight hover:text-portfolio-highlight transition-all duration-300 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-portfolio-highlight/30"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="font-bold text-lg">Source Code</span>
                      </motion.a>
                    )}
                    
                    {project.live && (
                      <motion.a 
                        href={project.live.startsWith('http') ? project.live : `https://${project.live}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-portfolio-highlight to-portfolio-highlight/90 text-portfolio-primary hover:from-portfolio-highlight/90 hover:to-portfolio-highlight transition-all duration-300 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-portfolio-highlight/50 font-bold text-lg"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Visit Live Site</span>
                        <ExternalLink size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition{{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a 
            href="https://github.com/MohamadAbudraiea" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 py-6 px-12 border-3 border-portfolio-highlight text-portfolio-highlight 
            font-mono text-xl rounded-2xl hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all duration-500 
            hover:scale-105 hover:shadow-2xl hover:shadow-portfolio-highlight/50 relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-portfolio-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10"></div>
            <Github size={32} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold">Explore More Projects</span>
            <ExternalLink size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
