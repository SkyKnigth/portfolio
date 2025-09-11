import React, { useState, useEffect } from "react"
import "../styles/header.scss"

export default function Header({ logoSrc }) {
  const [active, setActive] = useState("accueil")

  useEffect(() => {
    const sections = document.querySelectorAll("section, main") 
    const handleScroll = () => {
      let current = "accueil"
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id
        }
      })
      setActive(current || "accueil")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        

        <div className="brand">
          <img src={logoSrc} alt="Logo" />
        </div>


        <nav className="main-nav" aria-label="Navigation principale">
          <ul>
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
