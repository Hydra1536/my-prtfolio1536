import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, CreditCard, ShoppingCart, Database, IceCream } from "lucide-react";

const projects = [
  {
    title: "Ecommerce System",
    description: "A robust Django REST API project for an ecommerce platform with user authentication, product management, order processing, and payment integration.",
    icon: ShoppingCart,
    features: [
      "JWT Authentication",
      "Stripe & bKash Payments",
      "Product CRUD",
      "Order Management",
      "Admin Dashboard",
      "Swagger API Docs",
    ],
    techStack: ["Django", "DRF", "PostgreSQL", "Stripe", "bKash", "JWT"],
    github: "https://github.com/Rezaul-2020331029",
    color: "from-primary via-primary/80 to-secondary",
  },
  {
    title: "Product API",
    description: "A complete backend API for managing products using Django, DRF, PostgreSQL with filtering, searching, pagination, rate limiting, and Swagger documentation.",
    icon: Database,
    features: [
      "Full CRUD API",
      "PostgreSQL Database",
      "Filtering & Search",
      "Rate Limiting (30 req/min)",
      "Limit/Offset Pagination",
      "Swagger Documentation",
    ],
    techStack: ["Django", "DRF", "PostgreSQL", "Swagger", "Redis"],
    github: "https://github.com/Rezaul-2020331029",
    color: "from-secondary via-secondary/80 to-accent",
  },
  {
    title: "Ice Cream Shop E-Commerce",
    description: "A full-stack e-commerce application built with Django for an ice cream/sweet shop with complete ordering workflow and admin interface.",
    icon: IceCream,
    features: [
      "Product Catalog",
      "Cart & Checkout",
      "Order Tracking",
      "Global Search",
      "Admin CRUD Panel",
      "User Feedback System",
    ],
    techStack: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Rezaul-2020331029",
    color: "from-accent via-accent/80 to-primary",
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
              Django-powered backend projects showcasing RESTful APIs, authentication systems, and full-stack applications.
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
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
