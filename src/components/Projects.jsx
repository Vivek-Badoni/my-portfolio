// import React from "react";

// const Projects = () => (
//   <section className="section bg-light" id="projects">
//     <h2>Projects</h2>
//     <ul>
//       {["Smart Resume Builder (React + Django)", "Doctor Appointment System", 
//       "Expense Tracker", 
//       "speech recognition in Python",
//       "Food Finder Using (HTML + CSS + JS + PHP)",].map(p => (
//         <li key={p}>{p}</li>
//       ))}
//     </ul>
//   </section>
// );

// export default Projects;
// src/components/Projects.jsx
// import React from "react";

// const Projects = ({ darkMode }) => (
//   <section
//     className={`section ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
//     id="projects"
//   >
//     <h2>Projects</h2>
//     <ul>
//       {"Smart Resume Builder (React + Django),Doctor Appointment System,Expense Tracker"
//         .split(",")
//         .map(p => (
//           <li key={p}>{p}</li>
//         ))}
//     </ul>
//   </section>
// );

// export default Projects;
// src/components/Projects.jsx
import React from "react";

// const projectData = [
 
//   {
//     title: "Food Finder",
//     description: "Search food items using HTML, CSS, JS, PHP, and database — supports quick access.",
//     image: "https://via.placeholder.com/300x150?text=Food+Finder",
//     tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
//     demoLink: "#",
//     codeLink: "#"
//   },
//   {
//     title: "Speech Recognition Assistant",
//     description: "Voice-controlled assistant using Python's speech recognition — gives command-based output.",
//     image: "https://via.placeholder.com/300x150?text=Voice+Assistant",
//     tech: ["Python", "SpeechRecognition", "PyAudio"],
//     demoLink: "#",
//     codeLink: "#"
//   },
 
// ];
const projectData = [

  {
    title: "Food Finder",
    description: "Find your favorite meals nearby using smart filtering and give best locations.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60", // Food theme
    tech: ["HTML", "CSS", "JS", "PHP"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Voice Assistant with Speech Recognition",
    description: "Control tasks with Python voice commands using speech recognition AI.",
    image: "https://i.ytimg.com/vi/DiVMruyDm-U/maxresdefault.jpg",
    // image: "https://images.unsplash.com/photo-1581093588401-265d3ce5a4f0?auto=format&fit=crop&w=800&q=60", // AI theme
    tech: ["Python", "SpeechRecognition", "Web API"],
    demoLink: "#",
    codeLink: "#"
  }
];


const Projects = () => (
  <section  className="bg-light dark:bg-gray-900 text-dark dark:text-white py-10"id="projects">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="container">
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-success me-1 mb-1">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a href={project.demoLink} className="btn btn-sm btn-outline-primary me-2" target="_blank" rel="noreferrer">Live</a>
                  <a href={project.codeLink} className="btn btn-sm btn-outline-dark" target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

