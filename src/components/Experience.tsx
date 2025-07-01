
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: "DOTMEDIA",
      position: "Backend Engineer",
      period: "Current",
      location: "Remote",
      responsibilities: [
        "Developing and maintaining backend services using modern technologies",
        "Implementing scalable web applications with clean architecture patterns",
        "Working with distributed systems and cloud infrastructure",
        "Collaborating with cross-functional teams to deliver high-quality solutions"
      ],
      current: true
    },
    {
      company: "Jo Academy",
      position: "Lecturer",
      period: "February 2023 - Present",
      location: "Amman, Jordan",
      responsibilities: [
        "Teach OOP in Java, C++, and relational databases to university students",
        "Develop comprehensive course materials for programming concepts",
        "Guide students through programming concepts and practical applications",
        "Provide one-on-one mentoring for students struggling with complex topics"
      ],
      current: true
    },
    {
      company: "Thinking Flares School",
      position: "Operational Manager",
      period: "February 2021 - October 2024",
      location: "As Salt, Jordan",
      responsibilities: [
        "Implemented IT-driven business solutions to enhance operational efficiency",
        "Streamlined operations through technological integration and process optimization",
        "Oversaw business strategy planning and execution in hybrid work environment",
        "Improved overall school experience through modern management techniques"
      ],
      current: false
    },
    {
      company: "Hope International Academy",
      position: "UI/UX Designer Intern",
      period: "September 2023 - November 2023",
      location: "Amman, Jordan",
      responsibilities: [
        "Gained professional expertise in Figma for interface design",
        "Created user-friendly interfaces for various applications",
        "Improved UI/UX workflows and design processes",
        "Collaborated with development teams to implement designs"
      ],
      current: false
    },
  ];

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
    <section id="experience" className="py-32 px-8 md:px-32 bg-gradient-to-br from-portfolio-secondary via-portfolio-primary to-portfolio-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-highlight/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-portfolio-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center mb-8 md:mb-0"
          >
            <Building className="text-portfolio-highlight mr-4" size={40} />
            <div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-portfolio-heading to-portfolio-highlight bg-clip-text text-transparent">
                <span className="font-mono text-2xl text-portfolio-highlight mr-4">04.</span>
                Experience
              </h2>
              <div className="h-1 bg-gradient-to-r from-portfolio-highlight to-transparent w-32 mt-2 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-portfolio-highlight/40 shadow-2xl shadow-portfolio-highlight/20 hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/dc486bc8-37e9-4909-84bb-af952dfa2dd6.png" 
                alt="Mohamad Abudraiea" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-portfolio-highlight rounded-full animate-pulse"></div>
          </motion.div>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Tabs */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-1 pb-4 lg:pb-0">
              {jobs.map((job, index) => (
                <motion.button
                  key={index}
                  className={`relative px-6 py-4 text-left rounded-xl lg:rounded-l-xl lg:rounded-r-none transition-all duration-300 whitespace-nowrap lg:whitespace-normal border-l-4 lg:border-l-4 lg:border-b-0 
                  ${activeTab === index 
                    ? 'text-portfolio-highlight border-portfolio-highlight bg-portfolio-highlight/10 shadow-lg' 
                    : 'text-portfolio-text border-portfolio-tertiary hover:bg-portfolio-tertiary/20 hover:text-portfolio-highlight hover:border-portfolio-highlight/50'}`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 lg:block">
                    <span className="font-mono text-sm font-bold">
                      {job.company}
                    </span>
                    {job.current && (
                      <span className="px-2 py-1 text-xs bg-portfolio-highlight text-portfolio-primary rounded-full font-bold lg:mt-1 lg:inline-block">
                        CURRENT
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Job Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className={`${activeTab === index ? 'block' : 'hidden'} space-y-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeTab === index ? 1 : 0, y: activeTab === index ? 0 : 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Job Header */}
                <div className="bg-gradient-to-br from-portfolio-secondary/60 to-portfolio-primary/40 backdrop-blur-xl p-8 rounded-3xl border border-portfolio-highlight/20 shadow-xl">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-portfolio-heading mb-2 lg:mb-0">
                      {job.position} 
                      <span className="text-portfolio-highlight"> @ {job.company}</span>
                    </h3>
                    {job.current && (
                      <span className="px-4 py-2 bg-portfolio-highlight text-portfolio-primary rounded-full text-sm font-bold animate-pulse">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-4 text-portfolio-text font-mono text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-portfolio-highlight" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-portfolio-highlight" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-4">
                    {job.responsibilities.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-portfolio-text text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <span className="text-portfolio-highlight mr-4 text-xl mt-1">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Volunteering Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="flex items-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-heading to-portfolio-highlight bg-clip-text text-transparent">
              <span className="font-mono text-xl text-portfolio-highlight mr-4">05.</span>
              Volunteering
            </h3>
            <div className="h-1 bg-gradient-to-r from-portfolio-highlight to-transparent flex-grow ml-8 rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {volunteeringExperiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-8 bg-gradient-to-br from-portfolio-primary/80 to-portfolio-secondary/60 backdrop-blur-xl rounded-3xl border border-portfolio-highlight/30 shadow-2xl hover:shadow-portfolio-highlight/20 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-portfolio-highlight rounded-full animate-pulse"></div>
                
                <h4 className="text-2xl font-bold text-portfolio-heading mb-2">
                  {exp.position}
                </h4>
                <h5 className="text-lg text-portfolio-highlight font-semibold mb-4">
                  @ {exp.organization}
                </h5>
                <p className="font-mono text-sm text-portfolio-text mb-6 flex items-center gap-2">
                  <Calendar size={16} className="text-portfolio-highlight" />
                  {exp.period}
                </p>
                <p className="text-portfolio-text text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                {exp.linkedInPost && (
                  <motion.a 
                    href={exp.linkedInPost}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-portfolio-highlight hover:text-portfolio-heading font-mono text-sm hover:underline transition-colors duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>👀 View LinkedIn Post by Dr. Reem Alfayez</span>
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-4 py-4 px-10 border-2 border-portfolio-highlight text-portfolio-highlight 
            font-mono text-lg rounded-2xl hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:shadow-portfolio-highlight/50"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Connect!</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
