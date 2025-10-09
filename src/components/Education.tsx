import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

// ✅ Importing your logo images
import bitLogo from "../assets/logos/bit.jpeg"; // College logo
import davLogo from "../assets/logos/dav.png";  // School logo

const education = [
  {
    degree: "B.Tech in CSE with Specilization in AI & ML",
    institution: "Bengal Institute of Technology",
    location: "Kolkata , W.B , INDIA",
    period: "Sept 2023 - Sept 2027",
    description:
      "Specialized in Artificial Intelligence and Machine Learning.",
    achievements: [
  "Won Envision 1st Prize | BITS2Bytes College Tech Fest",
  "Won Gen Fusion 1st Prize | BITS2Bytes College Tech Fest",
  "Won Electronovation 2nd Prize | BITS2Bytes College Tech Fest",
  "Tech Lead of AI & ML Club",
],

    logo: bitLogo, // 🎓 College logo
  },
  {
    degree: "Higher secondary ",
    institution: "D.A.V Public School",
    location: "Pakur , J.H , INDIA",
    period: "Jan 2013 - Mar 2023",
    description: "Focus on Physics, Chemistry & Maths",
    achievements: [
      "National Science Olympiad Gold Medal",
      
    ],
    logo: davLogo, // 🏫 School logo
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-glass transition-all duration-300 group-hover:border-secondary/60 group-hover:shadow-glow-blue">
                {/* 🎯 Actual logos for college & school */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center overflow-hidden group-hover:border-secondary/50 transition-all duration-300">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center justify-center group-hover:shadow-glow-blue transition-all duration-300">
                      <GraduationCap className="w-8 h-8 text-secondary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 pr-16 md:pr-0">
                    <div>
                      <h3 className="font-orbitron text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="font-inter text-lg text-primary mt-1">
                        {edu.institution}
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-inter text-sm">{edu.period}</span>
                    </div>

                    <p className="font-inter text-muted-foreground">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-orbitron text-sm font-semibold text-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="font-inter text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
