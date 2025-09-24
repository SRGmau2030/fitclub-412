import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navigation.css'

interface NavigationProps {
  onContactClick: () => void
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    if (sectionId === 'contact') {
      onContactClick()
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        <a href="#" className="nav-logo">FitClub <span className="number">4.12</span></a>
        <button className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#services" className="nav-link" onClick={(e) => handleNavClick('services', e)}>Servicios</a></li>
          <li><a href="#pricing" className="nav-link" onClick={(e) => handleNavClick('pricing', e)}>Membresias</a></li>
          <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick('about', e)}>Sobre Nosotros</a></li>
          <li><a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick('testimonials', e)}>Testimonios</a></li>
          <li><a href="#gallery" className="nav-link" onClick={(e) => handleNavClick('gallery', e)}>Galería</a></li>
          <li><a href="#location" className="nav-link" onClick={(e) => handleNavClick('location', e)}>Ubicación</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick('contact', e)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
