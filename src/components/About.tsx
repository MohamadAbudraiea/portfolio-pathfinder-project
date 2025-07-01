
import { motion } from "framer-motion";
import { Code, Database, Server, Lightbulb } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Server, title: "Backend Development", color: "text-blue-400" },
    { icon: Database, title: "Distributed Databases", color: "text-green-400" },
    { icon: Code, title: "Scalable Web Applications", color: "text-purple-400" },
    { icon: Lightbulb, title: "Software Architecture", color: "text-yellow-400" }
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-32 bg-gradient-to-br from-portfolio-primary via-portfolio-secondary to-portfolio-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-heading flex items-center mb-16">
          <span className="text-portfolio-highlight font-mono mr-4 text-2xl">01.</span> 
          <span className="bg-gradient-to-r from-portfolio-heading to-portfolio-highlight bg-clip-text text-transparent">
            About Me
          </span>
          <div className="h-px bg-gradient-to-r from-portfolio-tertiary to-transparent flex-grow ml-8"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-highlight/20 to-transparent rounded-2xl blur-lg"></div>
              <div className="relative bg-portfolio-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-portfolio-tertiary/30">
                <p className="text-portfolio-text text-lg leading-relaxed mb-6">
                  Hello! I'm <span className="text-portfolio-highlight font-semibold">Mohamad</span>, a passionate Computer Information Systems student 
                  at the University of Jordan with a deep love for crafting robust backend solutions.
                </p>
                
                <p className="text-portfolio-text text-lg leading-relaxed mb-6">
                  My journey spans from teaching OOP concepts at Jo Academy to managing IT-driven solutions 
                  at a family school, where I discovered the power of technology in transforming business operations.
                </p>
                
                <p className="text-portfolio-text text-lg leading-relaxed">
                  I thrive on building scalable systems that solve real-world problems while maintaining 
                  clean, maintainable code that stands the test of time.
                </p>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden bg-portfolio-secondary/30 backdrop-blur-sm p-4 rounded-xl border border-portfolio-tertiary/20 hover:border-portfolio-highlight/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <IconComponent className={`w-6 h-6 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-portfolio-text font-medium text-sm group-hover:text-portfolio-highlight transition-colors duration-300">
                        {interest.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-portfolio-highlight/30 via-portfolio-highlight/10 to-portfolio-highlight/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-full max-w-sm mx-auto aspect-square bg-portfolio-secondary rounded-3xl overflow-hidden border-2 border-portfolio-tertiary/30 group-hover:border-portfolio-highlight/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/20 to-transparent"></div>
                <img
                  src="/lovable-uploads/dc486bc8-37e9-4909-84bb-af952dfa2dd6.png"
                  alt="Mohamad Abudraiea"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-portfolio-highlight rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-4 w-2 h-2 bg-portfolio-highlight/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
