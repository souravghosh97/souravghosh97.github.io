import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-eyebrow">07 — Contact</span>
        <h2 className="section-title">Let's talk</h2>
        <p className="contact__text">
          Open to conversations about system design, distributed systems, and building reliable
          software at scale. Reach out below.
        </p>

        <div className="contact__links">
          <a className="btn btn--primary" href="mailto:souravghosh2197@gmail.com">
            souravghosh2197@gmail.com
          </a>
          <a
            className="btn btn--secondary"
            href="https://linkedin.com/in/sourav-ghosh-ab0b94183"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="contact__location mono">Hyderabad, India</p>
      </div>
    </section>
  )
}

export default Contact
