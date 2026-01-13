import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    { icon: MapPin, text: "Dhaka, Bangladesh" },
    { icon: Phone, text: "+880 1533 858640" },
    { icon: Mail, text: "reza15361382@gmail.com" },
    { icon: Work, text: "Hubar Tech LTD" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image / Avatar */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card p-2 glow-primary"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
<img src="https://raw.githubusercontent.com/Hydra1536/soft-sphere-folio/main/public/WhatsApp%20Image%202024-03-21%20at%2019.02.51_d4fdc381.jpg" 
    alt="Profile" 
    className="w-full h-full object-cover"  />
                  </div>
                </motion.div>
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" style={{ transform: "scale(1.1)" }} />
                <div className="absolute inset-0 rounded-full border border-secondary/10" style={{ transform: "scale(1.2)" }} />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking a challenging position in a reputable organization to expand my learnings, knowledge, and skills. I am a dedicated and self-motivated developer with strong skills in <span className="text-secondary">Django REST Framework</span>, <span className="text-primary">PostgreSQL</span>, and backend development. Passionate about building efficient, scalable web applications and APIs.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.text}
                    variants={itemVariants}
                    className="glass-card rounded-xl p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
