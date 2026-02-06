import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { CloudBackground } from "../components/CloudBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDarkMode(html.classList.contains("dark"));
  }, []);



  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Theme Toggle - Moved to Navbar */}

      {/* Background Effects */}
      {isDarkMode ? <StarBackground /> : <CloudBackground />}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
    </div>
  );
};
