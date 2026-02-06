import { cn } from "@/lib/utils";
import React, { useState } from "react";

const skills = [
  // DESIGN (Updated to lead with your strengths)
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Affinity Designer", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },

  // DEVELOPMENT
  { name: "React / Next.js", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "HTML5 / CSS3", category: "Development" },
  { name: "Tailwind CSS", category: "Development" },
  { name: "Ionic / Flutter", category: "Development" },

  // DATA & AI
  { name: "Python (ML/Data)", category: "Data & AI" },
  { name: "PowerBI", category: "Data & AI" },
  { name: "Matplotlib / Seaborn", category: "Data & AI" },
  { name: "SQL (MySQL/Oracle)", category: "Data & AI" },
  { name: "Firebase", category: "Data & AI" },

  // TOOLS & OTHER
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "WordPress / Wix", category: "Tools" },
  { name: "IoT (Arduino/ESP32)", category: "Tools" },
];

const categories = ["All", "Design", "Development", "Data & AI", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span style={{ color: "#483AA0" }}>Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A blend of creative design tools and modern programming frameworks.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium",
                activeCategory === category
                  ? "bg-[#483AA0] border-[#483AA0] text-white shadow-lg"
                  : "bg-transparent border-muted-foreground/30 text-muted-foreground hover:border-[#483AA0] hover:text-[#483AA0]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Simple Skill Tags Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-xl bg-secondary/20 border border-white/5 backdrop-blur-sm flex items-center justify-center min-w-[140px] transition-all hover:bg-[#483AA0]/10 hover:border-[#483AA0]/50 group"
            >
              <span className="font-medium text-muted-foreground group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};