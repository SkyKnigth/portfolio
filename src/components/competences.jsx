import React from 'react'
import '../styles/competences.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const competencesList = [
  { title: "Communication", text: "Echange clairet constructifs avec l'équipe et les clients" },
  { title: "JavaScript & React", text: "Mise en place de composants réutilisables avec React, gestion des états avec Redux et intégration d’APIs." },
  { title: "Sass & organisation du code", text: "Structuration des styles avec Sass pour un code clair, modulable et maintenable." },
  { title: "Autonomie", text: "Capacité à travailler seul tout en respectant les objectifs" },
  { title: "Gestion de projet", text: "Organisation du travail avec Git/GitHub et suivi des versions." },
  { title: "Maintenance", text: "Intégration des dernières mises à jour de sécurité et veille technologique hebdomadaire." },
  { title: "Optimisation SEO", text: "Amélioration du référencement naturel : optimisation des balises, performance et structure du contenu." },
  { title: "Créativité", text: "Proposer des solutions innovantes aux problèmes rencontrés" },
  { title: "Conception", text: "Conception sur mesure que ce soit pour une refonte de site ou un tout nouveau projet." },
]

function CompetenceItem({ title, text }) {
  return (
    <div className="competence-card">
      <div className="competence-icon">
        <FontAwesomeIcon icon={faThumbsUp} aria-hidden="true" />
      </div>
      <div className="competence-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default function Competences() {
  return (
    <section id="competences" className="section competences">
      <div className="container">
        <div className="competences-header">
          <h2>MES COMPÉTENCES</h2>
          <p>Des compétences à votre service.</p>
        </div>

        <div className="competences-grid">
          {competencesList.map((c, i) => (
            <CompetenceItem key={i} title={c.title} text={c.text} />
          ))}
        </div>
      </div>
    </section>
  )
}