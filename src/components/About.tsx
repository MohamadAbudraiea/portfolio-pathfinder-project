
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
              Hello! I'm Mohamad, a fourth-year Computer Information Systems student at the University of Jordan with a 
              strong passion for web development, particularly backend development using Node.js and Express.
            </p>
            
            <p className="mb-4">
              My journey in software development has led me through various technologies and roles, from lecturing OOP concepts 
              at Jo Academy to managing operations at a family-owned school, where I implemented IT-driven business solutions 
              to enhance efficiency.
            </p>
            
            <p className="mb-4">
              I'm particularly interested in backend development, distributed databases, scalable web applications, and 
              software architecture. I enjoy building robust systems that can handle complex business requirements while 
              maintaining clean code principles.
            </p>

            <p className="mb-4">
              When I'm not coding, I'm expanding my knowledge through courses and contributing to the tech community by 
              volunteering at events like the University of Jordan Innovation Hackathon, where I led the volunteering team.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-portfolio-highlight rounded-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/dc486bc8-37e9-4909-84bb-af952dfa2dd6.png"
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
