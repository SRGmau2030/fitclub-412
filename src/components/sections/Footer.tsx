import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

interface FooterProps {
  onWhatsAppClick: () => void
}

export default function Footer({ onWhatsAppClick }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.facebook.com/share/1CnuQfAyxZ/?mibextid=wwXIfr" className="social-icon" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/fitclub4.12?igsh=MWI4MXV5dTFtZmVrMw==" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" onClick={onWhatsAppClick} className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
        <p>&copy; <span className="number">2025</span> FitClub <span className="number">4.12</span>. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
