import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

// Import company logos
import innobytelogo from "@/assets/company-logos/innobyte.jpeg";
import MCKinsey from "@/assets/company-logos/mckinsey.png";
import AIWallah from "@/assets/company-logos/ai wallah.jpeg";

const internships = [
  {
    
  role: "Forward Program Fellow",
  company: "McKinsey.Org",
  location: "Remote",
  period: "Oct 2025 - Present", 
  description: "Completing McKinsey's 10-week intensive program focused on future-ready workplace skills including structured problem-solving, digital fluency, and impactful communication",
  achievements: [
    "Mastered structured problem-solving frameworks and creative thinking methodologies",
    "Developed advanced communication skills for clear and inspiring stakeholder engagement",
    "Built digital toolkit expertise for navigating modern workplace challenges",
  ],
  tags: ["Problem Solving", "Communication", "Digital Fluency", "Leadership"],
  

  logo: MCKinsey,
  },


  {
    role: "Generative AI Developer Intern",
    company: "AI Wallah",
    location: "Kolkata, INDIA -- Remote",
    period: "Jul 2025 - Oct 2025 ",
   description: "Worked on Generative AI and LLM projects, developing and deploying AI models for real-world applications",
achievements: [
  "Gained hands-on experience in developing and deploying generative AI models",
  "Built real-world AI projects focusing on LLM integration and prompt engineering",
  "Developed skills in Generative AI development through practical implementation",
],
tags: ["Python", "Generative AI", "LLM", "Machine Learning"],
    logo: AIWallah,
  },


  {
    role: "Python Developer Intern",
    company: "Innobyte Services",
    location: "Delhi, INDIA -- Remote",
    period: "June 2025 - July 2025",
    description: "Worked on Python-based finance tracker with user authentication, transactions, budgets, reports, and data export. Modular architecture for scalability.",
    achievements: [
      "Built secure multi-user authentication system with SQLite database integration",
      "Developed comprehensive financial tracking with transactions, budgets, and automated reports",
      "Designed modular CLI architecture with backup/export functionality for scalability",
    ],
    tags: ["Python", "SQLite", "CLI", "Financial Management"],
    logo: innobytelogo,
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
                      
                      {/* Logo image - top right corner */}
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center overflow-hidden group-hover:border-accent/50 transition-all duration-300 group-hover:scale-110">
                        <img
                          src={internship.logo}
                          alt={`${internship.company} Logo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if logo is missing
                            e.currentTarget.onerror = null;
                            const firstLetter = internship.company.charAt(0);
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23667eea'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-xl flex items-center justify-center group-hover:shadow-glow-purple transition-all duration-300">
                            <Briefcase className="w-7 h-7 text-accent" />
                          </div>
                        </div>

                        <div className="flex-1 space-y-4 pr-20 md:pr-24">
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