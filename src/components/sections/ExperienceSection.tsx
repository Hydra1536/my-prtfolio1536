import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users } from "lucide-react";

const experiences = [
    {
    title: "SQA Engineer",
    company: "Hubar Tech Limited",
    period: "Jan 2026 – Present",
    description: [
      "Conducted software quality assurance testing",
      "Identified and documented bugs and issues",
      "Performed API testing using Postman",
      "Ensured quality standards were met before deployment",
    ],
    type: "work",
  },
  {
    title: "Backend Developer (Intern)",
    company: "Hubar Tech Limited",
    period: "Nov 2025 – Jan 2026",
    description: [
      "Developed REST APIs using Django REST Framework",
      "Implemented JWT authentication and authorization",
      "Worked with PostgreSQL database management",
      "Collaborated with frontend team for API integration",
    ],
    type: "work",
  },

  {
    title: "Former Director of Marketing",
    company: "BRAC University Computer and Language Club (BUCLC)",
    period: "2022 – 2025",
    description: [
      "Led the marketing team for club activities",
      "Managed content creation and documentation",
      "Coordinated with other departments for events",
      "Mentored junior members in technical writing",
    ],
    type: "leadership",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full transform -translate-x-1/2 z-10 ring-4 ring-background"
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-card rounded-2xl p-6 hover:glow-primary transition-all">
                    {/* Icon & Period */}
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className={`p-2 rounded-lg ${exp.type === "work" ? "bg-primary/10" : "bg-secondary/10"}`}>
                        {exp.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <Users className="w-4 h-4 text-secondary" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4">{exp.company}</p>

                    {/* Description */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${index % 2 === 0 ? "md:order-2" : ""}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
