import experience from '../data/experience.js'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-eyebrow">02 — Experience</span>
        <h2 className="section-title">Where I've worked</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.role}>
              <div className="timeline__date mono">
                {job.start} — {job.end}
              </div>
              <div className="timeline__content">
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__company">{job.company}</p>
                <ul className="timeline__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
