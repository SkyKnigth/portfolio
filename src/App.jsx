import React from 'react'
import Header from './components/header.jsx'
import Slider from './components/Slider.jsx'
import Portfolio,  { projects } from './components/portfolio.jsx'
import Apropos from './components/apropos.jsx'
import Contact from "./components/contact.jsx"
import Footer from "./components/footer.jsx"

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
        <Apropos projectsCount={projects.length} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
