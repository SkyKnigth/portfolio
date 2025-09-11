import React, { useEffect } from "react"
import "../styles/modal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faCalendar, faTags } from "@fortawesome/free-solid-svg-icons"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Modal({ project, onClose }) {
  if (!project) return null

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
        {/* Header */}
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

        {/* Slider d’images */}
        <div className="modal-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${project.title} - ${index + 1}`}
                  className="modal-slide-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Texte */}
        <div className="modal-body">
          <div className="modal-left">
            <h3>Description du projet</h3>
            <p>{project.description}</p>

            {project.features && (
              <ul>
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            )}

            {project.conclusion && <p>{project.conclusion}</p>}
          </div>

          <div className="modal-right">
            <h3>INFOS PROJET WEB</h3>
            <p>
              <FontAwesomeIcon icon={faCalendar} />{" "}
              <strong>Année :</strong> {project.year}
            </p>
            <p>
              <FontAwesomeIcon icon={faTags} />{" "}
              <strong>Catégorie :</strong> {project.category}
            </p>
            <div className="tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <a
              href={project.url}
              className="visit-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visiter le code du site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
