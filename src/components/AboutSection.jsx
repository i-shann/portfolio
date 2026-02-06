import { Briefcase, Code, Palette } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span style={{ color: '#483AA0' }}>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Creative Technologist & Visual Designer</h3>

            <p className="text-muted-foreground">
              I specialize in the intersection of data-driven logic and visual storytelling.
              With a background in Computer Science and a passion for Graphic Design,
              I transform complex technical requirements into clean, professional, and
              highly functional user experiences.
            </p>

            <p className="text-muted-foreground">
              Whether I’m training Machine Learning models or designing high-fidelity
              brand assets, my goal is the same: to make technology intuitive and
              visually engaging. I bridge the gap between backend complexity and
              frontend aesthetics.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a
                href="#"
                className="px-6 py-2 rounded-full bg-[#483AA0] text-white transition-colors hover:bg-[#B2A5FF] text-center shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Design Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6A669D]">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Visual Design</h4>
                  <p className="text-muted-foreground">Creating professional brand identities, high-fidelity mockups, and scalable vector assets using Adobe & Affinity suites.</p>
                </div>
              </div>
            </div>

            {/* Programming Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6A669D]">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Development</h4>
                  <p className="text-muted-foreground">Building responsive web apps and dashboards with React, TypeScript, and Python-driven data visualization.</p>
                </div>
              </div>
            </div>

            {/* Solutions Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#6A669D]">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Cycle Solutions</h4>
                  <p className="text-muted-foreground">Handling projects from initial data modeling and machine learning to final UI design and deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};