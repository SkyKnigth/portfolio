import React, { useEffect } from "react"
import "../styles/modal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faCalendar, faTags } from "@fortawesome/free-solid-svg-icons"

export default function Modal({ project, onClose }) {
  if (!project) return null

  // Bloquer le scroll du site quand la modal est ouverte
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {/* Header modal avec croix + titre */}
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2 className="modal-title">
            {project.type === "site"
              ? `CRÉATION SITE INTERNET - ${project.title}`
              : `MAINTENANCE - ${project.title}`}
          </h2>
        </div>

        {/* Images en haut */}
        <div className="modal-images">
          <img src={project.image} alt={project.title} />
          <img src={project.imageLogin} alt={`${project.title} login`} />
          <img src={project.imageDashboard} alt={`${project.title} dashboard`} />
        </div>

        {/* Texte description */}
        <div className="modal-body">
          <div className="modal-left">
            <h3>CRÉATION SITE WEB</h3>
            <p>
              Création du site internet <strong>{project.title}</strong>, un
              projet complet intégrant une interface responsive, une charte
              graphique moderne et des outils de gestion personnalisés.
            </p>
            <p>
              Le site met en avant les services proposés, intègre un tableau de
              bord clair, et utilise des technologies modernes pour assurer la
              performance et la sécurité.
            </p>
          </div>

          <div className="modal-right">
            <h3>INFOS PROJET WEB</h3>
            <p>
              <FontAwesomeIcon icon={faCalendar} /> <strong>Année :</strong> 2024
            </p>
            <p>
              <FontAwesomeIcon icon={faTags} /> <strong>Catégorie :</strong>{" "}
              {project.category}
            </p>
            <div className="tags">
              <span>React</span>
              <span>Redux</span>
              <span>API REST</span>
              <span>Sass</span>
            </div>
            <a
              href="#"
              className="visit-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visiter le site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
