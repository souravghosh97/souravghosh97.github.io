import projects from '../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-eyebrow">04 — Projects</span>
        <h2 className="section-title">Selected work</h2>
        <p className="projects__note">
          Placeholder entries — swap these for real projects in <code>src/data/projects.js</code>.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="mono">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="project-card__links">
                <a href={project.codeUrl}>View Code →</a>
                <a href={project.demoUrl}>Live Demo →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
