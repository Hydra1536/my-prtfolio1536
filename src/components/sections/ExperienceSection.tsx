import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Github } from "lucide-react";

const projects = [
  {
    title: "GitBrain Repo Intelligence RAG",
    techStack: "Django • FastAPI • pgvector • Docker",
    link: "https://github.com/Hydra1536/GitBrain-AI-Repository-Agent",
    description: [
      "Built a full‑stack repo intelligence platform that ingests GitHub repositories and delivers chat, summaries, and file explanations.",
      "Engineered a production‑style backend with Django/DRF, FastAPI AI services, HTMX streaming, SSE responses, and Celery.",
      "Implemented a RAG stack utilizing pgvector embeddings, Redis caching, Ollama streaming, and automated GitHub webhook synchronization.",
      "Packaged a multi-service container architecture using Docker Compose for Postgres+pgvector, Redis, RabbitMQ, and Nginx."
    ],
  },
  {
    title: "Video-Intel Video Analytics",
    techStack: "FastAPI • Python • Google Gemini • OpenCV",
    link: "https://github.com/Hydra1536/LLM-Fast-API-Project-Video-Intell",
    description: [
      "Built a full-stack Python web app that analyzes short videos to return technical metrics, thumbnails, and AI-generated captions.",
      "Engineered a production-style backend using FastAPI, Streamlit, REST APIs, async processing, and container-ready architecture.",
      "Implemented computer vision tasks including FPS extraction, cut detection, optical flow motion analysis, and OCR with Tesseract.",
      "Integrated Google Gemini multimodal for structured caption generation and designed platform-aware prompt engineering workflows."
    ],
  },
  {
    title: "TripELD Trip Planner",
    techStack: "Django REST • React • Tailwind • Leaflet",
    link: "https://github.com/Hydra1536/TripELD",
    description: [
      "Developed a production-style trip planning ELD system revolutionizing route optimization and compliance for commercial drivers.",
      "Implemented algorithms for Haversine distance calculations, route optimization, and FMCSA-compliant Hours of Service (HOS) computation.",
      "Built interactive maps using Leaflet with animated route polylines, custom markers, and SVG-based ELD log visualizations.",
      "Designed clean API architecture, service-layer business logic, and structured frontend–backend integration."
    ],
  },
  {
    title: "Ecommerce System API",
    techStack: "Django REST • PostgreSQL • Stripe • Docker",
    link: "https://github.com/Hydra1536/ecommerce_system",
    description: [
      "Designed a modular ecommerce REST API with clean app separation for accounts, products, orders, and scalable architecture.",
      "Implemented JWT-based authentication, role-based access control, and secure Stripe and bKash payment gateway integration.",
      "Containerized the backend with Docker Compose and managed production-ready environment variables.",
      "Integrated Swagger for API documentation, implemented unit testing, and developed robust database seeding workflows."
    ],
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
    <section id="projects" className="py-24 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {projects.map((project, index) => (
              <motion.div
                key={project.title}
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
                    {/* Icon & Link */}
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    </div>

                    {/* Title & Tech Stack */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4">{project.techStack}</p>

                    {/* Description */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {project.description.map((item, i) => (
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

export default ProjectsSection;
