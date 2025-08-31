import React from 'react'
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import Portfolio from './components/portfolio.jsx'

import Competences from './components/competences.jsx'
import Services from './components/services.jsx'
import logo from './assets/logo.PNG'
import langage from './assets/langage.jpg'
import bureau from './assets/bureau.webp'


export default function App() {
  return (
    <>
      <Header logoSrc={logo} />
      <main id="accueil">
        <Slider
          slides={[
            {
              image: bureau,
              eyebrow: "VINCENT HEMARDINQUER",
              title: "INTÉGRATEUR WEB",
              subhead: ""
            },
            {
              image: langage,
              eyebrow: "",
              title: "CRÉATION DE SITES WEB",
              subhead: "Site vitrine, évènementiel"
            }
          ]}
        />
        <Services />
        <Competences />
        <Portfolio />
        <section id="apropos" className="section">
          <div className="container">
            <h2>À propos</h2>
            <p>Développeur front-end passionné, basé en télétravail.</p>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>Écrivez-moi : email@example.com</p>
          </div>
        </section>
      </main>
    </>
  )
}
