
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A feature-rich web application that allows users to manage their tasks efficiently. Built with React and Node.js, featuring real-time updates and advanced filtering capabilities.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      github: "#",
      external: "#"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with a sleek UI and robust backend. Features include user authentication, product filtering, cart functionality, and secure payment processing.",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      github: "#",
      external: "#"
    },
    {
      title: "Project Three",
      description: "A modern portfolio site built with performance and accessibility in mind. Features smooth animations, responsive design, and static site generation for optimal loading speed.",
      tags: ["React", "Gatsby", "GraphQL", "Styled Components"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      github: "#",
      external: "#"
    },
  ];
  
  return (
    <section id="projects" className="py-20 px-8 md:px-32 bg-portfolio-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-portfolio-heading flex items-center mb-12">
          <span className="text-portfolio-highlight font-mono mr-2">03.</span> Projects
          <div className="h-px bg-portfolio-tertiary flex-grow ml-6"></div>
        </h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`md:grid md:grid-cols-12 gap-4 items-center ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                {/* Image */}
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-96 group">
                    <div className="absolute inset-0 bg-portfolio-highlight/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter brightness-50 group-hover:brightness-75 transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:col-span-6 md:col-start-7 ${
                  index % 2 === 0 ? 'md:order-2 md:pl-4' : 'md:order-1 md:pr-4 md:col-start-1'
                } z-10`}>
                  <p className="font-mono text-portfolio-highlight mb-1">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-portfolio-heading mb-4">{project.title}</h3>
                  
                  <div className="p-6 bg-portfolio-secondary rounded-lg shadow-xl mb-4">
                    <p className="text-portfolio-text">{project.description}</p>
                  </div>
                  
                  <ul className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-xs font-mono text-portfolio-text">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <a href={project.github} aria-label="GitHub Repository" className="text-portfolio-heading hover:text-portfolio-highlight transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.external} aria-label="Live Demo" className="text-portfolio-heading hover:text-portfolio-highlight transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="#" 
            className="inline-block py-3 px-8 border border-portfolio-highlight text-portfolio-highlight 
            font-mono rounded hover:bg-portfolio-highlight/10 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
