
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-32 bg-portfolio-primary">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-portfolio-highlight font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-heading mb-4">
          Mohamad Abudraiea.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6">
          I build exceptional web experiences.
        </h2>
        <p className="max-w-xl text-portfolio-text text-lg mb-12">
          I'm a software engineer specializing in backend development with Node.js and Express. 
          Currently a fourth-year Computer Information Systems student with a passion for building 
          scalable web applications and robust backend systems.
        </p>
        <a 
          href="#projects" 
          className="inline-block py-4 px-10 border-2 border-portfolio-highlight text-portfolio-highlight 
          font-mono rounded hover:bg-portfolio-highlight/10 transition-all duration-300"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
