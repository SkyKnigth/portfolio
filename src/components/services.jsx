import React from 'react'
import '../styles/services.scss'
import centerImg from '../assets/conseils_site_web.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'

// Création d’un objet pour correspondre à la syntaxe demandée
const byPrefixAndName = {
  far: {
    house: faHouse,
  },
}

const itemsLeft = [
  {
    title: "GESTION DE PROJETS WEB",
    text: "Site vitrine, événementiel, e-commerce, intranet.",
  },
  {
    title: "INTÉGRATION WEB",
    text: "Des intégrations HTML / CSS respectueuses des standards du Web.",
  },
  {
    title: "RÉFÉRENCEMENT NATUREL",
    text: "Affichage sémantique des informations, des pages propres pour un référencement optimal.",
  },
]

const itemsRight = [
  {
    title: "DYNAMISME DES PAGES",
    text: "Des animations de contenu non intrusives pour embellir votre projet.",
  },
  {
    title: "INTERFACE D'ADMINISTRATION",
    text: "Outils spécifiques au bon fonctionnement de votre entreprise.",
  },
  {
    title: "RESPONSIVE DESIGN",
    text: "Compatible tous supports, tablette & application mobile.",
  },
]

function ServiceItem({ title, text }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={byPrefixAndName.far['house']} aria-hidden="true" />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-title">
          <h2>MES SERVICES</h2>
          <p>Des prestation selon vos besoin</p>
        </div>

        <div className="services-grid">
          <div className="services-col">
            {itemsLeft.map((it, i) => (
              <ServiceItem key={i} title={it.title} text={it.text} />
            ))}
          </div>

          <div className="services-center">
            <img src={centerImg} alt="Illustration des services web" />
          </div>

          <div className="services-col">
            {itemsRight.map((it, i) => (
              <ServiceItem key={i} title={it.title} text={it.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
