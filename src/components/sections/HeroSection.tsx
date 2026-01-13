import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, ChevronDown } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Hydra1536", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-rezaul-karim-2423a621a/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UComrvL7jIvbpzWBGtDwpp8g", label: "YouTube" },
  { icon: Mail, href: "mailto:reza15361382@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-secondary font-medium tracking-wider uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="text-foreground">Md Rezaul</span>{" "}
            <span className="gradient-text">Karim</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span>Django Developer</span>
            <span className="text-primary">•</span>
            <span>Backend Engineer</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Passionate about building scalable backend systems, RESTful APIs, and full-stack web applications with Django and modern technologies.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 pt-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-foreground hover:glow-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/25 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 glass-card rounded-full font-medium hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
