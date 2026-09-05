import './Hero.css'

const STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '$26M+', label: 'Business Impact' },
  { value: '50%', label: 'Infra Cost Cut' },
  { value: '60%', label: 'Faster Resolution' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className="section-eyebrow">
          <span className="hero__status-dot" aria-hidden="true" />
          Available for new opportunities
        </span>

        <h1 className="hero__title">
          Sourav Ghosh — <span className="hero__accent">Software Development Engineer</span>
        </h1>

        <p className="hero__tagline">
          I design, build, and operate large-scale systems and microservices — owning architecture
          end-to-end, driving reliability at scale, and turning production risk into measurable
          business impact.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#experience">
            View Experience
          </a>
          <a className="btn btn--secondary" href="#contact">
            Get in Touch
          </a>
        </div>

        <dl className="hero__stats">
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-value mono">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
