
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A clean responsive portfolio website built with React to showcase my skills and projects.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 2,
    title: "Med- booking",
    description: "A simple website application where you can register, add, complete and cancel appointments. Built with React useState.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 3,
    title: "Patient project",
    description: "A simple patient registration form page built with react as one of my first web development projects.",
    tech: [ "CSS" , "JavaScript", "React" ,"MySQL"],
    github: "https://github.com",
    live: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item} className="tech-tag">{item}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects