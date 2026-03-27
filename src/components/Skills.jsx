const skills = [
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Git & GitHub", level: "Beginner" },
  { name:  "Python", level: "Beginner"},
  { name: "MySQL", level: "Intermediate" },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <h3>{skill.name}</h3>
            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills