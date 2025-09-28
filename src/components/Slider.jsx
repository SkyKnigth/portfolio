import React, { useEffect, useRef, useState } from 'react'
import '../styles/slider.scss'

const DURATION = 5000 

export default function Hero({ slides = [] }) {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef()

  const next = () => setIndex(i => (i + 1) % slides.length)
  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(next, DURATION)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    setAnimKey(k => k + 1)
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(next, DURATION)
  }, [index])

  return (
    <section className="hero" aria-label="Diaporama d'introduction">
      <div className="slides" role="list">
        {slides.map((s, i) => (
          <article
            key={i}
            className={`slide ${i === index ? 'current' : ''}`}
            role="listitem"
            aria-roledescription="slide"
          >
            {/* Image de fond */}
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url(${s.image})` }} 
            />

            <div className="slide-overlay">
              <div className="slide-text">
                {s.eyebrow && <h2 className="eyebrow">{s.eyebrow}</h2>}
                <h1 className="headline">
                  {s.title.split('\\n').map((line, idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}
                </h1>
                {s.subhead && <p className="subhead">{s.subhead}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="arrow left" aria-label="Slide précédente" onClick={prev}>‹</button>
      <button className="arrow right" aria-label="Slide suivante" onClick={next}>›</button>

      <div className="progress">
        {slides.map((_, i) => (
          <div className="bar" data-index={i} key={i} onClick={() => setIndex(i)}>
            {i === index
              ? <span key={animKey} className="fill active" />
              : <span className="fill" />}
          </div>
        ))}
      </div>
    </section>
  )
}
