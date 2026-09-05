import education from '../data/education.js'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-eyebrow">06 — Education</span>
        <h2 className="section-title">Academic background</h2>

        <ul className="education-list">
          {education.map((item) => (
            <li className="education-list__item" key={item.degree}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
              {item.date && <span className="education-list__date mono">{item.date}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
