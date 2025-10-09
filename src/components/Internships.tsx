import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const internships = [
  {
    role: "Full Stack Developer Intern",
    company: "Tech Company A",
    location: "City, Country",
    period: "Jun 2023 - Aug 2023",
    description: "Developed and maintained web applications using React and Node.js",
    achievements: [
      "Built a customer dashboard that increased user engagement by 40%",
      "Optimized database queries reducing load time by 60%",
      "Collaborated with a team of 8 developers using Agile methodology",
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Company B",
    location: "Remote",
    period: "Jan 2023 - May 2023",
    description: "Created responsive user interfaces and improved user experience",
    achievements: [
      "Redesigned landing page increasing conversion rate by 25%",
      "Implemented accessibility features meeting WCAG standards",
      "Reduced bundle size by 40% through code optimization",
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "Figma"],
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Company C",
    location: "City, Country",
    period: "Jun 2022 - Aug 2022",
    description: "Worked on backend services and API development",
    achievements: [
      "Developed RESTful APIs serving 10k+ daily requests",
      "Implemented automated testing increasing code coverage to 85%",
      "Documented technical specifications for the development team",
    ],
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Professional internships and contributions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow-cyan"
                  />

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-glass transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-glow-purple">
                      {/* Logo placeholder - top right corner */}
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center overflow-hidden group-hover:border-accent/50 transition-all duration-300">
                        <span className="text-xs text-muted-foreground font-inter">Logo</span>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-xl flex items-center justify-center group-hover:shadow-glow-purple transition-all duration-300">
                            <Briefcase className="w-7 h-7 text-accent" />
                          </div>
                        </div>

                        <div className="flex-1 space-y-4 pr-16 md:pr-0">
                          <div>
                            <h3 className="font-orbitron text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {internship.role}
                            </h3>
                            <p className="font-inter text-lg text-primary mt-1">
                              {internship.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span className="font-inter">{internship.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-inter">{internship.period}</span>
                            </div>
                          </div>

                          <p className="font-inter text-muted-foreground">
                            {internship.description}
                          </p>

                          <div className="space-y-2">
                            <h4 className="font-orbitron text-sm font-semibold text-foreground">
                              Key Contributions:
                            </h4>
                            <ul className="space-y-2">
                              {internship.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="font-inter text-sm text-muted-foreground flex items-start gap-3"
                                >
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {internship.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-inter"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
