
import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: "Jo Academy",
      position: "Lecturer",
      period: "February 2023 - Present",
      responsibilities: [
        "Teach OOP in Java, C++, and relational databases to university students",
        "Develop comprehensive course materials for programming concepts",
        "Guide students through programming concepts and practical applications",
        "Provide one-on-one mentoring for students struggling with complex topics"
      ]
    },
    {
      company: "Thinking Flares School",
      position: "Operational Manager",
      period: "February 2021 - October 2024",
      responsibilities: [
        "Implemented IT-driven business solutions to enhance efficiency",
        "Streamlined operations through technological integration",
        "Oversaw business strategy planning and execution in a hybrid work environment",
        "Improved overall school experience through modern management techniques"
      ]
    },
    {
      company: "Tumed Applications",
      position: ".NET Web Developer Intern",
      period: "May 2023 - August 2023",
      responsibilities: [
        "Learned MVC architecture and building RESTful APIs using .NET",
        "Enhanced backend development skills through practical application",
        "Collaborated with senior developers on real-world projects",
        "Participated in code reviews and improved coding practices"
      ]
    },
    {
      company: "Hope International Academy",
      position: "UI/UX Designer Intern",
      period: "September 2023 - November 2023",
      responsibilities: [
        "Gained professional expertise in Figma for interface design",
        "Created user-friendly interfaces for various applications",
        "Improved UI/UX workflows and design processes",
        "Collaborated with development teams to implement designs"
      ]
    },
  ];
  
  return (
    <section id="experience" className="py-20 px-8 md:px-32 bg-portfolio-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-portfolio-heading flex items-center mb-12">
          <span className="text-portfolio-highlight font-mono mr-2">04.</span> Experience
          <div className="h-px bg-portfolio-tertiary flex-grow ml-6"></div>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:border-l-0 md:border-l-portfolio-tertiary">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 text-sm font-mono whitespace-nowrap transition-all
                ${activeTab === index 
                  ? 'text-portfolio-highlight border-portfolio-highlight bg-portfolio-tertiary/30' 
                  : 'text-portfolio-text border-portfolio-tertiary hover:bg-portfolio-tertiary/10 hover:text-portfolio-highlight'}`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className={activeTab === index ? 'block' : 'hidden'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl text-portfolio-heading mb-1">
                  {job.position} <span className="text-portfolio-highlight">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-portfolio-text mb-6">{job.period}</p>
                
                <ul className="space-y-4">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex text-portfolio-text">
                      <span className="text-portfolio-highlight mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 border border-portfolio-highlight text-portfolio-highlight 
            font-mono rounded hover:bg-portfolio-highlight/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
