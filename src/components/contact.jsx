import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.scss"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_g5kfoot",   
        "template_fh97emc", 
        form.current,
        "VRr8-ICqxJc7K2FMM"  
      )
      .then(
        () => {
          alert("Message envoyé avec succès")
          form.current.reset()
        },
        (error) => {
          alert("Erreur lors de l'envoi")
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
          {/* Carte*/}
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
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Nom complet</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" required></textarea>

            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  )
}
