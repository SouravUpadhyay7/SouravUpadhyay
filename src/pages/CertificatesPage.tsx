import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allCertificates = [
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
  {
    title: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-204-45678",
    link: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2022",
    credentialId: "DCA-11223",
    link: "#",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2023",
    credentialId: "TF-98765",
    link: "#",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
  },
  {
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2022",
    credentialId: "CEH-55667",
    link: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  },
];

const CertificatesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
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
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                All Certifications
              </span>
            </h1>
            <p className="font-inter text-muted-foreground text-lg">
              My professional credentials and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
