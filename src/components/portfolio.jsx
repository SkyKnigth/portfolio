import React, { useState } from 'react'
import '../styles/portfolio.scss'
import argentbank from '../assets/argentbank.png'
import events from '../assets/724events.png'

const projects = [
  {
    title: "ARGENT BANK",
    category: "Création site internet",
    image: argentbank,
    type: "site"
  },
  {
    title: "724EVENTS",
    category: "Maintenance",
    image: events,
    type: "maintenance"
  }
]

const filters = [
  { label: "Tous les projets", value: "all" },
  { label: "Création site internet", value: "site" },
  { label: "Maintenance", value: "maintenance" }
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

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
          {filteredProjects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="portfolio-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="portfolio-info">
                <h3>{p.title}</h3>
                <p>{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
