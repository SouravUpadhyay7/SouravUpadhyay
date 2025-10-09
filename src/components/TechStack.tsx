import { motion } from "framer-motion";
import pythonLogo from "@/assets/tech-logos/icons8-python.gif";
import tensorflowLogo from "@/assets/tech-logos/icons8-tensorflow.svg";
import pytorchLogo from "@/assets/tech-logos/PyTorch.svg";
import sklearnLogo from "@/assets/tech-logos/scikit-learn.svg";
import pandasLogo from "@/assets/tech-logos/Pandas.svg";
import numpyLogo from "@/assets/tech-logos/icons8-numpy.svg";
import kerasLogo from "@/assets/tech-logos/Keras.svg";
import opencvLogo from "@/assets/tech-logos/OpenCV.svg";
import jupyterLogo from "@/assets/tech-logos/Jupyter.svg";
import fastapiLogo from "@/assets/tech-logos/FastAPI.svg";
import flaskLogo from "@/assets/tech-logos/icons8-flask.svg";
import dockerLogo from "@/assets/tech-logos/Docker.svg";
import gitLogo from "@/assets/tech-logos/icons8-git.svg";
import postgresqlLogo from "@/assets/tech-logos/icons8-postgresql.svg";
import mongodbLogo from "@/assets/tech-logos/MongoDB.svg";
import awsLogo from "@/assets/tech-logos/icons8-aws.svg";
import matlogo from "@/assets/tech-logos/icons8-matplotlib.svg";
import githublogo from "@/assets/tech-logos/icons8-github.svg";
import streamlitlogo from "@/assets/tech-logos/icons8-streamlit.svg";

const technologies = [
  { name: "Python", logo: pythonLogo },
  { name: "TensorFlow", logo: tensorflowLogo },
  { name: "PyTorch", logo: pytorchLogo },
  { name: "Scikit-learn", logo: sklearnLogo },
  { name: "Pandas", logo: pandasLogo },
  { name: "NumPy", logo: numpyLogo },
  { name: "Keras", logo: kerasLogo },
  { name: "OpenCV", logo: opencvLogo },
  { name: "Jupyter", logo: jupyterLogo },
  { name: "FastAPI", logo: fastapiLogo },
  { name: "Flask", logo: flaskLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Git", logo: gitLogo },
  { name: "PostgreSQL", logo: postgresqlLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Matplotlib", logo: matlogo },
  { name: "GitHub", logo: githublogo },
  { name: "Streamlit", logo: streamlitlogo },
];

const TechStack = () => {
  // Calculate the width needed for one complete set of technologies
  // Each card is approximately 216px (200px min-width + 32px gap)
  const cardWidth = 216;
  const totalWidth = technologies.length * cardWidth;
  
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-card/20">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [-totalWidth, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-8"
            >
              {/* Duplicate the array to create seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="group relative flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-glass transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-glow-cyan min-w-[200px]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-glow-cyan group-hover:scale-110">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <span className="font-inter font-semibold text-foreground text-center">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fade gradients on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-inter text-muted-foreground">
            Always exploring and learning new technologies to stay at the cutting edge
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;