import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing capabilities.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "WebSocket", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance with interactive charts and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "TailwindCSS", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Modern social media platform with real-time updates, stories, and direct messaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with team features, deadlines, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Express", "MongoDB", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with detailed forecasts, maps, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "OpenWeather API", "Mapbox", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-inter"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="font-inter text-muted-foreground text-lg">
              Explore my complete portfolio of work and creations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
