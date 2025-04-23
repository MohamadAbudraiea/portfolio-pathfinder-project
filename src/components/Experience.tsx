
import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: "DOTMEDIA",
      position: "Backend Engineer",
      period: "Current",
      responsibilities: [
        "Developing and maintaining backend services",
        "Implementing scalable web applications",
        "Working with modern backend technologies",
        "Collaborating with cross-functional teams"
      ]
    },
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

  // Add volunteering experiences
  const volunteeringExperiences = [
    {
      organization: "University of Jordan Innovation and Entrepreneurship Center (UJIEC)",
      position: "Team Lead, Volunteering Team",
      period: "November 2024",
      description: "Led the volunteering team for University of Jordan Innovation Hackathon (UJIH), managing participant communication and sponsor relations. Developed a GitHub-based solution for submitting and monitoring hackathon projects across Game Development, App Development, and Gen AI categories. Supervised by Dr. Reem Alfayez.",
      linkedInPost: "https://www.linkedin.com/posts/reem-alfayez-43378852_university-of-jordan-innovation-hackathon-activity-7261257153632501760-jiO2"
    }
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold text-portfolio-heading flex items-center">
            <span className="text-portfolio-highlight font-mono mr-2">04.</span> Experience
            <div className="h-px bg-portfolio-tertiary w-24 ml-6 md:block hidden"></div>
          </h2>
          
          {/* Profile image with professional styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <div className="relative rounded-full overflow-hidden border-4 border-portfolio-highlight/30 shadow-xl shadow-portfolio-highlight/10 w-32 h-32">
              <img 
                src="/lovable-uploads/dc486bc8-37e9-4909-84bb-af952dfa2dd6.png" 
                alt="Mohamad Abudraiea" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
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
        
        {/* Volunteering Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-portfolio-heading flex items-center mb-8">
            <span className="text-portfolio-highlight font-mono mr-2">05.</span> Volunteering
            <div className="h-px bg-portfolio-tertiary flex-grow ml-6"></div>
          </h3>
          
          <div className="space-y-8">
            {volunteeringExperiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-portfolio-primary rounded-lg shadow-lg"
              >
                <h4 className="text-xl text-portfolio-heading mb-1">
                  {exp.position} <span className="text-portfolio-highlight">@ {exp.organization}</span>
                </h4>
                <p className="font-mono text-sm text-portfolio-text mb-4">{exp.period}</p>
                <p className="text-portfolio-text mb-4">{exp.description}</p>
                
                {exp.linkedInPost && (
                  <a 
                    href={exp.linkedInPost}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-mono text-portfolio-highlight hover:underline gap-1"
                  >
                    <span>View LinkedIn Post by Dr. Reem Alfayez</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
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
