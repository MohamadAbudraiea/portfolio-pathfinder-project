
import { motion } from "framer-motion";
import { Code, Database, Server, Lightbulb, Sparkles, Zap } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Server, title: "Backend Development", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Database, title: "Distributed Databases", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Code, title: "Scalable Web Applications", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Lightbulb, title: "Software Architecture", color: "text-yellow-400", bg: "bg-yellow-500/10" }
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-32 bg-gradient-to-br from-portfolio-primary via-portfolio-secondary to-portfolio-primary relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-highlight/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-highlight/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <Sparkles className="text-portfolio-highlight mr-4 animate-pulse" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-portfolio-heading via-portfolio-highlight to-portfolio-heading bg-clip-text text-transparent">
              <span className="font-mono text-2xl text-portfolio-highlight mr-4">01.</span>
              About Me
            </h2>
            <Sparkles className="text-portfolio-highlight ml-4 animate-pulse" size={32} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "12rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-portfolio-highlight to-transparent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Floating rings */}
              <div className="absolute -inset-8 border-2 border-portfolio-highlight/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-12 border border-portfolio-highlight/10 rounded-full animate-spin-reverse-slow"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-portfolio-highlight/20 to-portfolio-secondary/50 p-2 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-portfolio-highlight/30">
                  <img
                    src="/lovable-uploads/dc486bc8-37e9-4909-84bb-af952dfa2dd6.png"
                    alt="Mohamad Abudraiea"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-8 w-4 h-4 bg-portfolio-highlight rounded-full animate-bounce"></div>
                <div className="absolute bottom-12 left-4 w-3 h-3 bg-portfolio-highlight/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-2 w-2 h-2 bg-portfolio-highlight/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <motion.div 
                className="relative p-8 bg-gradient-to-br from-portfolio-secondary/80 to-portfolio-primary/50 backdrop-blur-xl rounded-3xl border border-portfolio-highlight/20 shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-portfolio-highlight rounded-full animate-pulse"></div>
                
                <p className="text-portfolio-text text-lg leading-relaxed mb-4">
                  Hey there! 👋 I'm <span className="text-portfolio-highlight font-bold text-xl">Mohamad</span>, 
                  a passionate Computer Information Systems student who lives and breathes code!
                </p>
                
                <p className="text-portfolio-text text-lg leading-relaxed mb-4">
                  My journey spans from <span className="text-portfolio-highlight font-semibold">teaching OOP concepts</span> at Jo Academy 
                  to <span className="text-portfolio-highlight font-semibold">transforming business operations</span> through innovative IT solutions.
                </p>
                
                <p className="text-portfolio-text text-lg leading-relaxed">
                  I'm obsessed with building <span className="text-portfolio-highlight font-semibold">scalable backend systems</span> that 
                  don't just work—they work beautifully and stand the test of time! 🚀
                </p>
              </motion.div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <motion.div
                    key={index}
                    className={`group relative overflow-hidden ${interest.bg} backdrop-blur-sm p-6 rounded-2xl 
                    border border-portfolio-highlight/20 hover:border-portfolio-highlight/60 transition-all duration-300 
                    hover:shadow-lg hover:shadow-portfolio-highlight/25`}
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${interest.bg} border border-portfolio-highlight/30`}>
                        <IconComponent className={`w-8 h-8 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <h3 className={`${interest.color} font-bold text-sm mb-1`}>
                          {interest.title}
                        </h3>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Zap key={star} className={`w-3 h-3 ${interest.color} opacity-60`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-portfolio-highlight to-portfolio-highlight/80 
                text-portfolio-primary font-bold rounded-2xl hover:shadow-2xl hover:shadow-portfolio-highlight/50 
                transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">Let's Build Something Amazing!</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
