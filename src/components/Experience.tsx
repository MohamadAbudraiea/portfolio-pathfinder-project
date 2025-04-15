
import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: "Company One",
      position: "Senior Software Engineer",
      period: "January 2023 - Present",
      responsibilities: [
        "Led development of a microservice-based architecture that improved system scalability by 40%",
        "Mentored junior developers through code reviews and pair programming sessions",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Collaborated with product teams to define and implement new features",
      ]
    },
    {
      company: "Company Two",
      position: "Software Engineer",
      period: "May 2020 - December 2022",
      responsibilities: [
        "Developed responsive web applications using React, Redux, and Node.js",
        "Optimized database queries resulting in 30% faster page loads",
        "Worked with cross-functional teams to deliver features on time",
        "Participated in agile development processes including daily standups and sprint planning",
      ]
    },
    {
      company: "Company Three",
      position: "Frontend Developer",
      period: "July 2018 - April 2020",
      responsibilities: [
        "Created responsive and accessible user interfaces using modern HTML, CSS, and JavaScript",
        "Built reusable component libraries that improved development efficiency",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Performed code refactoring to improve maintainability",
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
            href="#" 
            className="inline-block py-3 px-8 border border-portfolio-highlight text-portfolio-highlight 
            font-mono rounded hover:bg-portfolio-highlight/10 transition-all duration-300"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
