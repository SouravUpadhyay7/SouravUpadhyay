import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/30 bg-card/20 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-inter text-muted-foreground"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-glow-pulse" />
            <span>by</span>
            <span className="font-orbitron font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-inter text-muted-foreground text-sm"
          >
            © {currentYear} All rights reserved
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300 font-inter text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 font-inter text-sm"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
