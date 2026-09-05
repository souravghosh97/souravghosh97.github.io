import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Sourav Ghosh</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
