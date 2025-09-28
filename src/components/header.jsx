import React, { useState, useEffect } from "react"
import "../styles/header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Header({ logoSrc }) {
  const [active, setActive] = useState("accueil")
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  const handleNavClick = (id) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", id)
      setActive(id.replace("#", ""))
      setSidebarOpen(false)
    }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="brand">
          <img src={logoSrc} alt="Logo" />
        </div>

        {/* Menu desktop */}
        <nav className="main-nav">
          <ul>
            <li className={active === "accueil" ? "active" : ""}>
              <a onClick={() => handleNavClick("#accueil")}>Accueil</a>
            </li>
            <li className={active === "services" ? "active" : ""}>
              <a onClick={() => handleNavClick("#services")}>Services</a>
            </li>
            <li className={active === "competences" ? "active" : ""}>
              <a onClick={() => handleNavClick("#competences")}>Compétences</a>
            </li>
            <li className={active === "portfolio" ? "active" : ""}>
              <a onClick={() => handleNavClick("#portfolio")}>Portfolio</a>
            </li>
            <li className={active === "apropos" ? "active" : ""}>
              <a onClick={() => handleNavClick("#apropos")}>À propos</a>
            </li>
            <li className={active === "contact" ? "active" : ""}>
              <a onClick={() => handleNavClick("#contact")}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Burger menu (mobile) */}
        <button
          className="menu-btn"
          aria-label="Ouvrir le menu"
          onClick={() => setSidebarOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Sidebar mobile */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <button
            className="close-btn"
            aria-label="Fermer le menu"
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h3 className="sidebar-title">Navigation</h3>
          <hr />
          <ul>
            <li><a onClick={() => handleNavClick("#accueil")}>Accueil</a></li>
            <li><a onClick={() => handleNavClick("#services")}>Services</a></li>
            <li><a onClick={() => handleNavClick("#competences")}>Compétences</a></li>
            <li><a onClick={() => handleNavClick("#portfolio")}>Portfolio</a></li>
            <li><a onClick={() => handleNavClick("#apropos")}>À propos</a></li>
            <li><a onClick={() => handleNavClick("#contact")}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
