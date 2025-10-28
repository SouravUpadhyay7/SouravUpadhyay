import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "primary" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "secondary" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email", color: "accent" },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Connect.py
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-glass space-y-6"
            >
              <div>
                <label className="font-inter text-sm font-medium text-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 font-inter text-foreground focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 font-inter text-foreground focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="font-inter text-sm font-medium text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 font-inter text-foreground focus:outline-none focus:border-primary focus:shadow-glow-cyan transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-cyan) / 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-primary-foreground font-orbitron font-semibold py-3 rounded-lg shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Connect With Me
              </h3>
              <p className="font-inter text-muted-foreground">
                Feel free to reach out through any of these platforms. I'm always open to 
                discussing new projects, opportunities, or just having a chat!
              </p>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-cyan) / 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent text-primary-foreground font-orbitron font-semibold px-6 py-3 rounded-lg shadow-glow-cyan transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                View My Resume
              </motion.a>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="group flex items-center gap-4 bg-card/40 backdrop-blur-xl border border-primary/30 rounded-xl p-4 shadow-glass transition-all duration-300 hover:border-primary/60 hover:shadow-glow-cyan"
                >
                  <div className={`p-3 bg-${social.color}/10 border border-${social.color}/30 rounded-lg group-hover:shadow-glow-cyan transition-all duration-300`}>
                    <social.icon className={`w-6 h-6 text-${social.color}`} />
                  </div>
                  <span className="font-inter text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
