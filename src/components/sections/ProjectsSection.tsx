import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ShoppingCart, Brain, Video, Map } from "lucide-react";

const projects = [
  {
    title: "GitBrain Repo Intelligence",
    description: "A full‑stack platform utilizing a RAG pipeline to ingest GitHub repositories, index code, and deliver AI chat and summaries via a Django UI.",
    icon: Brain,
    features: [
      "RAG Pipeline Architecture",
      "HTMX & SSE Streaming",
      "Celery Async Indexing",
      "Docker Compose Orchestration",
      "GitHub Webhook Sync",
    ],
    techStack: ["Django", "FastAPI", "pgvector", "Redis", "Ollama"],
    github: "https://github.com/Hydra1536/GitBrain-AI-Repository-Agent",
    color: "from-primary via-primary/80 to-secondary",
  },
  {
    title: "Video-Intel Analytics",
    description: "A Python web app that analyzes videos to extract technical metrics, generate platform-aware thumbnails, and create AI-powered captions.",
    icon: Video,
    features: [
      "Computer Vision Analytics",
      "Google Gemini Integration",
      "Optical Flow & Sharpness Scoring",
      "Async Video Processing",
      "Platform-Aware Prompting",
    ],
    techStack: ["FastAPI", "Streamlit", "OpenCV", "Google Gemini"],
    github: "https://github.com/Hydra1536/LLM-Fast-API-Project-Video-Intell",
    color: "from-secondary via-secondary/80 to-accent",
  },
  {
    title: "TripELD Trip Planner",
    description: "An Electronic Logging Device (ELD) trip planning app offering route optimization and FMCSA-compliant log generation for commercial drivers.",
    icon: Map,
    features: [
      "Interactive Leaflet Maps",
      "HOS Computation Logic",
      "Haversine Route Optimization",
      "SVG Log Visualization",
      "Lazy Loading UI",
    ],
    techStack: ["Django DRF", "React", "Tailwind", "Vite"],
    github: "https://github.com/Hydra1536/TripELD",
    color: "from-accent via-accent/80 to-primary",
  },
  {
    title: "Ecommerce System",
    description: "Production-ready ecommerce REST API with JWT authentication, role-based access control, order processing, and payment gateway integration.",
    icon: ShoppingCart,
    features: [
      "Stripe & bKash Integration",
      "JWT Authentication",
      "Modular App Architecture",
      "Swagger API Docs",
      "Docker Containerized",
    ],
    techStack: ["Django", "DRF", "PostgreSQL", "Stripe", "Docker"],
    github: "https://github.com/Hydra1536/ecommerce_system",
    color: "from-primary via-accent/80 to-secondary",
  },
];

const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Full-stack, AI, and backend projects showcasing RESTful APIs, modern web frameworks, and intelligent system integrations.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                  <project.icon className="w-12 h-12 text-white/90" />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 2.1 }}
                      whileTap={{ scale: 1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Key Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded-md bg-muted/30 text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
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

export default ProjectsSection;
