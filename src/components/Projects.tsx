import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Import project images
import snifternImage from "@/assets/projects/Gemini_Generated_Image_r9zal0r9zal0r9za.png";
import ParkIn from "@/assets/projects/Gemini_Generated_Image_mfwd3mmfwd3mmfwd.png";
import Collab_Sphere from "@/assets/projects/Gemini_Generated_Image_1yedhd1yedhd1yed.png";

const projects = [
  {
    title: "SnifTern.ai",
    description: "SnifTern.ai is an AI-powered platform that detects fake internship postings and verifies company legitimacy using advanced machine learning. It offers real-time fraud analysis, multi-platform integration (LinkedIn, Indeed, Glassdoor), PDF reports, and multi-language support to protect students from scams.",
    image: snifternImage,
    tags: ["Python", "NLP", "Machine Learning", "Flask"],
    github: "https://github.com/SouravUpadhyay7/SnifTern.ai",
    demo: "https://sniftern-ai.onrender.com/",
  },
  {
    title: "ParkIn",
    description: "ParkIn is a smart, cross-platform parking app that lets users find, book, and manage parking spaces in real time while enabling property owners to earn from vacant spots. It features AI-driven recommendations, an eco-friendly UI, and planned integration with IoT sensors and ANPR systems.",
    image: ParkIn,
    tags: ["Flask", "Flutter", "AI & ML", "SupaBase"],
    github: "https://github.com/SouravUpadhyay7/ParkIn",
    demo: "https://parking-app-lilac.vercel.app",
  },
  {
    title: "Collab_Sphere",
    description: "A full-stack college community platform featuring real-time chat, smart notifications, and role-based access. Built with Django, deployed on Render, and designed with a sleek dark-themed UI.",
    image: Collab_Sphere,
    tags: ["Django", "PostgreSQL", "TailwindCSS", "FullStack"],
    github: "https://github.com/SouravUpadhyay7/Collab_Sphere",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects.ipynb
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Some of my recent work and creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border lines */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.9) 50%, transparent 100%)',
                    backgroundSize: '40% 100%',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 bottom-0 w-1"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.9) 50%, transparent 100%)',
                    backgroundSize: '100% 40%',
                    boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '0% 200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.625,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(270deg, transparent 0%, rgba(16, 185, 129, 0.9) 50%, transparent 100%)',
                    backgroundSize: '40% 100%',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1.25,
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 bottom-0 w-1"
                  style={{
                    background: 'linear-gradient(0deg, transparent 0%, rgba(245, 158, 11, 0.9) 50%, transparent 100%)',
                    backgroundSize: '100% 40%',
                    boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)',
                  }}
                  animate={{
                    backgroundPosition: ['0% 200%', '0% 0%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1.875,
                  }}
                />
              </div>
              
              <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl overflow-hidden shadow-glass transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-glow-cyan">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-inter text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-inter text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-cyan) / 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-orbitron font-semibold px-8 py-3 rounded-lg shadow-glow-cyan transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Explore More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;