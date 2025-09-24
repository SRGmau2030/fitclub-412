import { FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

interface ContactProps {
  onContactSubmit: (e: React.FormEvent) => void
  contactForm: {
    name: string
    phone: string
    age: string
    weight: string
    height: string
    intensity: string
    objectives: string
  }
  onContactFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function Contact({ onContactSubmit, contactForm, onContactFormChange }: ContactProps) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">¡Empieza a entrenar hoy!</h2>
      <div className="contact-info">
        <p>¡Completa tus datos y nos pondremos en contacto contigo!</p>
      </div>
      <form className="contact-form" onSubmit={onContactSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Nombre completo" 
            value={contactForm.name}
            onChange={onContactFormChange}
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="tel" 
            name="phone"
            placeholder="Teléfono" 
            value={contactForm.phone}
            onChange={onContactFormChange}
            pattern="[0-9\s\-\(\)]*"
            title="Solo se permiten números, espacios, guiones y paréntesis"
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            name="age"
            placeholder="Edad" 
            value={contactForm.age}
            onChange={onContactFormChange}
            required 
            min="15"
            max="99"
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            name="weight"
            placeholder="Peso (kg)" 
            value={contactForm.weight}
            onChange={onContactFormChange}
            required 
            min="1"
            max="500"
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            name="height"
            placeholder="Altura (cm)" 
            value={contactForm.height}
            onChange={onContactFormChange}
            required 
            min="1"
            max="300"
          />
        </div>
        <div className="form-group">
          <select
            name="intensity"
            value={contactForm.intensity}
            onChange={onContactFormChange}
            required
          >
            <option value="" disabled hidden>Intensidad de entrenamiento preferida</option>
            <option value="Ligero">Ligero - Ejercicios suaves y de bajo impacto</option>
            <option value="Moderado">Moderado - Entrenamiento equilibrado con desafíos graduales</option>
            <option value="Intenso">Intenso - Entrenamientos de alta intensidad y máximo rendimiento</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="objectives"
            value={contactForm.objectives}
            onChange={onContactFormChange}
            required
          >
            <option value="" disabled hidden>Objetivo principal</option>
            <option value="Perder peso">Perder peso</option>
            <option value="Ganar masa muscular">Ganar masa muscular</option>
            <option value="Tonificar">Tonificar</option>
            <option value="Mejorar condición física">Mejorar condición física</option>
            <option value="Competir en CrossFit">Competir en CrossFit</option>
            <option value="Rehabilitación">Rehabilitación</option>
          </select>
        </div>
        <button type="submit" className="whatsapp-button">
          <FaWhatsapp /> Enviar por WhatsApp
        </button>
      </form>
    </section>
  )
}
