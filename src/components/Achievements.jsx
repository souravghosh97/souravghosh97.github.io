import achievements from '../data/achievements.js'
import './Achievements.css'

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <span className="section-eyebrow">05 — Achievements</span>
        <h2 className="section-title">Recognition</h2>

        <ul className="achievements-list">
          {achievements.map((item) => (
            <li className="achievements-list__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
