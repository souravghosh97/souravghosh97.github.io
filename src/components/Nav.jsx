import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

const RESUME_URL = '/Sourav-Ghosh-Resume.pdf'

function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__mark">
          SG<span className="nav__dot">.</span>
        </a>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__resume nav__resume--desktop" href={RESUME_URL} download>
          Resume ↓
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile" aria-label="Primary mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav__resume" href={RESUME_URL} download onClick={() => setOpen(false)}>
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  )
}

export default Nav
