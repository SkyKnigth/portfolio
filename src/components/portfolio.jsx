import React, { useState } from 'react'
import '../styles/portfolio.scss'
import argentbank from '../assets/argentbank.png'
import argentbankLogin from '../assets/argentbank-login.png'
import argentbankDashboard from '../assets/argentbank-dashboard.png'
import argentbankEdit from '../assets/argentbank-edit.png'
import events from '../assets/724events.png'
import Modal from '../components/modal.jsx'

const projects = [
  {
    id: 1,
    title: "ARGENT BANK",
    category: "Création site internet",
    images: [argentbank, argentbankLogin, argentbankDashboard, argentbankEdit],
    type: "site",
    description: "Application bancaire avec authentification, tableau de bord et gestion des transactions.",
    year: 2024,
    tech: ["React", "Redux", "API REST", "Sass"],
    url: "https://skyknigth.github.io/ArgentBank"
  },
  {
    id: 2,
    title: "724EVENTS",
    category: "Maintenance",
    images: [events, events, events],
    type: "maintenance",
    description: "Refonte et maintenance d’un site vitrine pour agence évènementielle.",
    year: 2024,
    tech: ["React", "Node.js", "MongoDB", "SEO"],
    url: "https://skyknigth.github.io/724events"
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
              onClick={() => setActiveProject(p)} // 👉 clic ouvre modal
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
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </section>
  )
}
