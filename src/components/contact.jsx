import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.scss"

export default function Contact() {
  const form = useRef()
  const [errors, setErrors] = useState({})

  // Regex pour validation
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/ // lettres, accents, espaces, tirets
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ // format email standard

  const validateForm = (data) => {
    const newErrors = {}

    if (!nameRegex.test(data.name.trim())) {
      newErrors.name = "Veuillez entrer un nom valide (lettres uniquement)."
    }

    if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Veuillez entrer une adresse email valide."
    }

    if (data.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    }

    if (!validateForm(formData)) {
      return
    }

    emailjs
      .sendForm(
        "service_g5kfoot",
        "template_fh97emc",
        form.current,
        "VRr8-ICqxJc7K2FMM"
      )
      .then(
        () => {
          alert(" Message envoyé avec succès !")
          form.current.reset()
          setErrors({})
        },
        (error) => {
          alert("Erreur lors de l'envoi, veuillez réessayer.")
          console.error(error.text)
        }
      )
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>CONTACTEZ-MOI</h2>
        <p>Vous avez un projet ? Parlons-en !</p>
      </div>

      <div className="contact-box">
        <div className="contact-content">
          {/* Carte */}
          <div className="contact-map">
            <iframe
              title="Localisation Maintenon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.936791!2d1.575!3d48.587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e42e9cf91f56f3%3A0xXXXXXX!2s15%20Av.%20des%20Alouettes%2C%2028130%20Maintenon!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
            <label htmlFor="name">Nom complet</label>
            <input id="name" type="text" name="name" required />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}

            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  )
}
