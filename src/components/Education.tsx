import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2018 - 2022",
    description: "Specialized in Software Engineering and Artificial Intelligence. GPA: 3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "Best Final Year Project Award",
      "President of Computer Science Society",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    location: "City, Country",
    period: "2014 - 2018",
    description: "Focus on Mathematics and Computer Science",
    achievements: [
      "Valedictorian",
      "National Science Olympiad Gold Medal",
      "Perfect GPA",
    ],
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
                {/* Logo placeholder - top right corner */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-secondary/30 flex items-center justify-center overflow-hidden group-hover:border-secondary/50 transition-all duration-300">
                  <span className="text-xs text-muted-foreground font-inter">Logo</span>
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
