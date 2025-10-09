import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Internships from "@/components/Internships";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Certifications />
        <Education />
        <Internships />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
