
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PHP", "RESTful API", "Java", "C++", "C#"]
    },
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML/CSS", "Figma UI/UX"]
    },
    {
      title: "Databases",
      skills: ["SQL", "NoSQL", "PHPMyAdmin", "Distributed Databases"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "GitHub", "OOP", "Functional Programming", "Testing & Debugging", "Project Management"]
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="skills" className="py-20 px-8 md:px-32 bg-portfolio-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-portfolio-heading flex items-center mb-12">
          <span className="text-portfolio-highlight font-mono mr-2">02.</span> Skills
          <div className="h-px bg-portfolio-tertiary flex-grow ml-6"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-portfolio-primary p-6 rounded-lg border border-portfolio-tertiary"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-portfolio-heading font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-3 py-1 bg-portfolio-tertiary text-portfolio-highlight rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
