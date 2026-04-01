import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  Shield, 
  Monitor, 
  Brain, 
  Layout, 
  Cloud, 
  TestTube, 
  Smartphone, 
  Users 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "C", "Dart"],
    color: "from-primary to-primary/50",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django REST", "FastAPI", "Laravel", "Node.js", "Celery", "RabbitMQ", "Redis", "JWT", "OAuth", "RBAC", "SVG"],
    color: "from-secondary to-secondary/50",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Vite", "Tailwind CSS", "HTMX", "Streamlit", "PWA", "Leaflet", "Glassmorphism"],
    color: "from-accent to-accent/50",
  },
  {
    title: "AI Development",
    icon: Brain,
    skills: ["OpenCV", "OCR", "Google SDK", "YOLO", "COCO", "Ollama", "MCP", "RAG", "Vector DB"],
    color: "from-primary to-secondary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "XAMPP", "pgAdmin"],
    color: "from-secondary to-accent",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Git & GitHub", "Docker", "Nginx", "CI/CD", "Render", "Vercel", "Ngrok", "Agile", "Scrum"],
    color: "from-accent to-primary",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Kotlin", "Flutter"],
    color: "from-primary to-primary/50",
  },
  {
    title: "Security & Research",
    icon: Shield,
    skills: ["Penetration Testing", "OSINT", "Mobile Privacy", "HCI & Usability Research"],
    color: "from-secondary to-secondary/50",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Manual & Automation", "API Testing", "Selenium"],
    color: "from-accent to-accent/50",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VSCode", "Jira", "Figma", "Android Studio", "BurpSuite", "Wireshark", "Postman"],
    color: "from-primary to-secondary",
  },
  {
    title: "OS",
    icon: Monitor,
    skills: ["Windows", "Ubuntu", "Linux"],
    color: "from-secondary to-accent",
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: ["Adaptability", "Communication", "Team Collaboration", "Problem-Solving"],
    color: "from-accent to-primary",
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
              A comprehensive toolkit for building AI-integrated solutions, robust backend systems, and modern multi-platform applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-2xl p-6 group cursor-pointer flex flex-col h-full"
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
                <div className="flex flex-wrap gap-2 mt-auto">
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
