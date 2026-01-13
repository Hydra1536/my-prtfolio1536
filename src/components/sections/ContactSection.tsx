import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "reza15361382@gmail.com", href: "mailto:reza15361382@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1533 858640", href: "tel:+8801533858640" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "http://google.com/maps?sca_esv=72ed8926a77c5d66&rlz=1C1GCEB_enBD958BD958&output=search&q=hubar+tech+limited+location&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3izczKHhF2wgz0AoHZ2f_yJ4zQ_V75tA8EUhOa7p9-hLJ1fbGrZX7zKyRMfBzXQB6xzYD8cB70sW-FPW9RfB4xF9LOZxyWDcBC50FCOyn_m5aptCnBpDsLGFOP9zd7g6wsj9wCvfgc72rzd8D5TKwzJP-InKftRaHSSrryw8uAeet9FQwA&entry=mc&ved=1t:200715&ictx=111" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Hydra1536", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-rezaul-karim-2423a621a/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UComrvL7jIvbpzWBGtDwpp8g", label: "YouTube" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // using FormSubmit.co free API to send email
      const response = await fetch("https://formsubmit.co/ajax/reza15361382@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later or email me directly.",
          variant: "destructive", // Assuming your toast supports variants
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Network Error",
        description: "Something went wrong. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-card rounded-xl hover:glow-primary transition-all"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-24 text-center text-muted-foreground"
      >
        <p className="text-sm">
          © {new Date().getFullYear()}Md Rezaul Karim. I aim to build secure, scalable systems that power real-world applications.🏄‍♂️
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
