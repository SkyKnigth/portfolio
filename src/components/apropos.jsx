import React, { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons"
import "../styles/apropos.scss"
import profil from "../assets/profile.jpg"
import cvFile from "../assets/cv.pdf" 

export default function Apropos({ projectsCount }) {
  const [count, setCount] = useState(0)
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          let start = 0
          const end = projectsCount
          let totalMilSecDur = 1500
          let incrementTime = Math.floor(totalMilSecDur / end)

          let timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start === end) {
              clearInterval(timer)
              setHasAnimated(true)
            }
          }, incrementTime)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [projectsCount, hasAnimated])

  return (
    <section id="apropos" className="apropos" ref={sectionRef}>
      <div className="apropos-header">
        <h2>A PROPOS</h2>
        <p>Je suis un apprenti développeur web</p>
      </div>

      {/* Photo centrée entre les 2 cadres */}
      <div className="apropos-photo">
        <img src={profil} alt="Photo de profil" />
      </div>

      <div className="apropos-content">
        <div className="apropos-left">
          <h3>Un développeur web passionné !</h3>
          <p>
            Je suis un apprenti développeur web en formation, motivé à apprendre et à progresser chaque jour.
            J’aime découvrir de nouvelles technologies, comprendre leur fonctionnement et les mettre en pratique à travers des projets concrets.
          </p>
          <p>
            Mon objectif est de renforcer mes compétences pas à pas, tout en développant de bonnes pratiques de code et en gagnant de l’expérience.
          </p>
          <p>
            Curieux et persévérant, je souhaite continuer à évoluer dans ce domaine pour, à terme, devenir un développeur accompli.
          </p>

          {/* compteur */}
          <div className="apropos-bottom">
            <div className="apropos-counter">
              <FontAwesomeIcon icon={faChalkboardUser} className="counter-icon" />
              <span className="count">{count}</span>
              <p>Projets web terminés</p>
            </div>

            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cv"
            >
              Voir mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
