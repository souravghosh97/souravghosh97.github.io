import skills from '../data/skills.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-eyebrow">03 — Skills</span>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3 className="skills-group__title mono">{group.category}</h3>
              <ul className="skills-group__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
