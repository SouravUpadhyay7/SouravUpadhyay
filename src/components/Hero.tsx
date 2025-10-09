import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile/proffessonalpic-removebg-preview (1).png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50 animate-glow-pulse" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow-cyan backdrop-blur-sm bg-card/30"
              >
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="font-orbitron text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Hey, I'm
              </span>
              <br />
              <span className="text-foreground">Sourav Upadhyay</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="space-y-4"
            >
              <h2 className="font-orbitron text-2xl md:text-3xl text-primary">
                AI & ML Dev | Python Dev
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
                I specialize in building intelligent systems, developing ML models, and creating data-driven solutions 
                using Python and cutting-edge AI frameworks. Turning data into insights, algorithms into impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-cyan) / 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground font-orbitron font-semibold rounded-lg shadow-glow-cyan transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-purple) / 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-card/40 backdrop-blur-sm border-2 border-accent/50 text-accent font-orbitron font-semibold rounded-lg shadow-glow-purple transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
