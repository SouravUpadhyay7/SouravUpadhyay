import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-12345",
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-67890",
    link: "#",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-54321",
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-98765",
    link: "#",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Professional credentials and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--glow-cyan) / 0.4)" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-xl overflow-hidden shadow-glass transition-all duration-300 group-hover:border-accent/60">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg group-hover:shadow-glow-cyan transition-all duration-300">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="font-orbitron text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="font-inter text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-inter">{cert.date}</span>
                        <span className="font-inter">ID: {cert.credentialId}</span>
                      </div>
                    </div>

                    <motion.a
                      href={cert.link}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
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
            href="/certificates"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--glow-cyan) / 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-secondary text-primary-foreground font-orbitron font-semibold px-8 py-3 rounded-lg shadow-glow-cyan transition-all duration-300"
          >
            <Award className="w-5 h-5" />
            View More Certificates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
