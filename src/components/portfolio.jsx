/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'
import '../styles/portfolio.scss'
import argentbank from '../assets/argentbank.png'
import argentbankLogin from '../assets/argentbank-login.png'
import argentbankDashboard from '../assets/argentbank-dashboard.png'
import argentbankEdit from '../assets/argentbank-edit.png'

import events from '../assets/724events.png'
import eventsContact from "../assets/724events-contact.png"
import eventsTeam from "../assets/724events-team.png"
import eventsRealisation from "../assets/724events-realisation.png"
import Modal from '../components/modal.jsx'

export const projects = [
  {
    id: 1,
    title: "ARGENT BANK",
    category: "Création site internet",
    images: [argentbank, argentbankLogin, argentbankDashboard, argentbankEdit],
    type: "site",
    year: 2024,
    tech: ["React", "Redux", "API REST", "Sass", "Swagger", "Node.js", "SEO"],
    url: "https://github.com/SkyKnigth/ArgentBank-Frontend-main",
    description: `Argent Bank est un projet éducatif réalisé dans le cadre de ma formation. 
    L’objectif était de concevoir une application bancaire front-end moderne en utilisant React et Redux, 
    connectée à un back-end via des API REST. Les principales fonctionnalités développées sont :`,
    features: [
      "Authentification sécurisée des utilisateurs (connexion, déconnexion, gestion des erreurs)",
      "Accès au profil utilisateur avec modification du pseudo",
      "Tableau de bord responsive affichant les comptes bancaires et leurs soldes",
      "Mise en place de bonnes pratiques de Green Code (optimisation des images, composants réutilisables)"
    ],
    conclusion: `Une spécification Swagger a également été rédigée afin de préparer la phase suivante : 
    la gestion des transactions (consultation, modification et mise à jour via API REST).`,
  },

  {
    id: 2,
    title: "724EVENTS",
    category: "Maintenance",
    images: [events, eventsRealisation, eventsTeam, eventsContact ],
    type: "maintenance",
    description: "Refonte et maintenance d’un site vitrine pour agence évènementielle.",
    year: 2024,
    tech: ["React", "Node.js", "MongoDB", "SEO"],
    url: "https://github.com/SkyKnigth/Debuggez-une-application-React.JS-main",
    // eslint-disable-next-line no-dupe-keys
    description: `724Events est un projet éducatif réalisé dans le cadre de ma formation. 
    L’objectif était de déboguer et finaliser le développement d’un site vitrine one-page existant, construit avec React. 
    Le projet simulait une mission freelance avec un client fictif, où il fallait reprendre le code laissé par un précédent développeur 
    et assurer la mise en production d’un site fonctionnel. Les principales missions réalisées sont :`,
    features: [
      "Correction des bugs identifiés (carrousel, filtres de la section Nos réalisations, formulaire de contact)",
      "Ajout et correction de tests unitaires et d’intégration avec Jest",
      "Finalisation et enrichissement d’un cahier de recette pour valider toutes les fonctionnalités",
      "Utilisation de React Developer Tools et Chrome DevTools pour analyser le state/context et suivre la propagation des données",
      "Respect des bonnes pratiques de gestion de projet avec Yarn, Node.js et GitHub"
    ], 

  }
]

const filters = [
  { label: "Tous les projets", value: "all" },
  { label: "Création site internet", value: "site" },
  { label: "Maintenance", value: "maintenance" }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeProject, setActiveProject] = useState(null)

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        
        {/* En-tête */}
        <div className="portfolio-header">
          <h2>MES PROJETS</h2>
          <p>Une partie des projets sur lesquels j'ai travaillé.</p>
        </div>

        {/* Filtres */}
        <div className="portfolio-filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={activeFilter === f.value ? "active" : ""}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="portfolio-grid">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="portfolio-card"
              onClick={() => setActiveProject(p)} 
            >
            <div className="portfolio-image">
                <img src={p.images[0]} alt={p.title} />
            </div>
              <div className="portfolio-info">
                <h3>{p.title}</h3>
                <p>{p.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
          <Modal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </div>
    </section>
  )
}
