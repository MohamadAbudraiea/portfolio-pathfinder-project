
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-32 bg-portfolio-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-portfolio-heading flex items-center mb-12">
          <span className="text-portfolio-highlight font-mono mr-2">01.</span> About Me
          <div className="h-px bg-portfolio-tertiary flex-grow ml-6"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-portfolio-text">
            <p className="mb-4">
              Hello! I'm a passionate software engineer with expertise in building exceptional digital products. 
              My journey in software development started when I decided to try creating custom websites — that 
              curiosity quickly turned into a passion for coding.
            </p>
            
            <p className="mb-4">
              Fast-forward to today, I've had the privilege of working at various organizations where I've honed
              my skills in software architecture, full-stack development, and leading technical teams.
            </p>
            
            <p className="mb-4">
              My main focus these days is building accessible, inclusive products and digital experiences for
              a variety of clients. I'm particularly interested in the intersection of technology and user experience.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-portfolio-highlight rounded-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
