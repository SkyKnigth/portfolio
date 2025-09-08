import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/logo.PNG"
import "../styles/footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      {/* Gauche */}
      <div className="footer-left">
        <p>Tél : 0642064061</p>
        <p>Email : <a href="mailto:hvincent0109@gmail.com">hvincent0109@gmail.com</a></p>
      </div>

      {/* Centre */}
      <div className="footer-center">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>2025 Vincent Hemardinquer. All rights reserved.</p>
      </div>

      {/* Droite */}
      <div className="footer-right">
        <a
          href="https://github.com/SkyKnigth" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/vincent-hemardinquer-7490a7210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  )
}
