import { Github } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Machine Learning using Streamlit",
    description:
      "Developed a web application using Streamlit to visualize and interact with machine learning models, showcasing data analysis and model performance.",
    image: "/projects/streamlit.png",
    tags: ["Python", "Streamlit", "Machine Learning"],
    githubUrl: "https://github.com/rchrdwllm/predictive_healthcare_model.git",
  },
  {
    id: 2,
    title: "Rain Class Dashboard",
    description:
      "A centralized web interface designed for synchronized weather monitoring and live CCTV integration from multiple remote sources.",
    image: "/projects/rain_class.png",
  },
  {
    id: 3,
    title: "SmartBin - IoT Trash Monitor",
    description:
      "An IoT-based smart trash bin monitoring system using Flutter and ESP32, connected via Bluetooth to track and report trash levels in real time.",
    image: "/projects/smartbin.png",
    tags: ["Flutter", "Bluetooth", "ESP32"],
    githubUrl: "https://github.com/tip-jean/smartbin_monitor_app.git",
  },
];


export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span style={{ color: "#483AA0" }}>Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I have worked on, showcasing my skills
          in various technologies and frameworks. Each project reflects my
          passion for coding and problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group gradient-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"

            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
