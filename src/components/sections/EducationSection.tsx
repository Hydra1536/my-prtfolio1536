import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BRAC University",
    period: "2021 – 2025",
    grade: "CGPA: 3.52 / 4.00",
    highlights: ["Major: Computer Science and Engineering", "Focus: Backend Development & APIs"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka City College",
    period: "2019 – 2020",
    grade: "GPA: 5.00 / 5.00",
    highlights: ["Group: Science", "Board: Dhaka"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Motijheel Govt. Boys' High School",
    period: "2017 – 2018",
    grade: "GPA: 5.00 / 5.00",
    highlights: ["Group: Science", "Board: Dhaka"],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-2xl p-6 md:p-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-secondary font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>

                    {/* Grade Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-accent font-semibold">{edu.grade}</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
