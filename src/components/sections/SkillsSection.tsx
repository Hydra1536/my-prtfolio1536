import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Server, Wrench, Shield } from "lucide-react";
import { Monitor } from "lucide-react"; 

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C", "Assembly"],
    color: "from-primary to-primary/50",
  },
  {
    title: "Web Development",
    icon: Server,
    skills: ["Django", "Django REST Framework", "Laravel", "React.js", "Node.js", "Express.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
    color: "from-secondary to-secondary/50",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
    color: "from-accent to-accent/50",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git & GitHub", "Docker", "Postman", "Swagger", "Linux", "VS Code"],
    color: "from-primary to-secondary",
  },
  {
    title: "Security & Testing",
    icon: Shield,
    skills: ["Penetration Testing", "SQA Testing", "API Testing", "JWT Authentication", "OAuth"],
    color: "from-secondary to-accent",
  },
  
  {
    title: "OS",
    icon: Monitor,
    skills: ["Windows", "Ubuntu", "Linux"],
    color: "from-secondary to-accent",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building robust, scalable backend systems and modern web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-2xl p-6 group cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
