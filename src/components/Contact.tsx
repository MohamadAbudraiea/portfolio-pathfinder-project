
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-32 bg-portfolio-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-portfolio-highlight mb-2">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-heading mb-6">Get In Touch</h2>
        <p className="text-portfolio-text mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <a 
          href="mailto:youremail@example.com" 
          className="inline-block py-4 px-10 border-2 border-portfolio-highlight text-portfolio-highlight 
          font-mono rounded hover:bg-portfolio-highlight/10 transition-all duration-300"
        >
          Say Hello
        </a>
        
        <div className="mt-24 text-portfolio-text font-mono text-sm">
          <p>Built with React + Tailwind CSS</p>
          <p>Designed & Developed by Your Name</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
