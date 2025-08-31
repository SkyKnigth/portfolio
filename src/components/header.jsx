import React, { useState, useEffect } from 'react'
import '../styles/header.scss'

export default function Header({ logoSrc }) {
  // section active au chargement (hash ou accueil par défaut)
  const [active, setActive] = useState(window.location.hash.replace('#', '') || "accueil")

  useEffect(() => {
    const onHashChange = () => {
      setActive(window.location.hash.replace('#', '') || "accueil")
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo NON cliquable */}
        <div className="brand">
          <img src={logoSrc} alt="Logo" />
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          <ul>
            {/* Accueil - scrollTop forcé */}
            <li className={active === "accueil" ? "active" : ""}>
              <a 
                href="#accueil" 
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  window.history.replaceState(null, "", "#accueil")
                  setActive("accueil")
                }}
              >
                Accueil
              </a>
            </li>

            {/* autres liens */}
            <li className={active === "services" ? "active" : ""}>
              <a href="#services">Services</a>
            </li>
            <li className={active === "competences" ? "active" : ""}>
              <a href="#competences">Compétences</a>
            </li>
            <li className={active === "portfolio" ? "active" : ""}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className={active === "apropos" ? "active" : ""}>
              <a href="#apropos">À propos</a>
            </li>
            <li className={active === "contact" ? "active" : ""}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
