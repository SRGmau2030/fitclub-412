import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'
import LocationCard from '../ui/LocationCard'
import './Location.css'

export default function Location() {
  const locationInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Dirección",
      content: (
        <>
          Calle <span className="number">4</span>, Av. Alemán #G<span className="number">7</span> entre <span className="number">7</span> y <span className="number">5</span><br />
          col. Felipe Carrillo Puerto
        </>
      )
    },
    {
      icon: FaClock,
      title: "Horarios",
      content: (
        <>
          <strong>Lunes - Viernes:</strong><br />
          <span className="number">7:00</span> AM | <span className="number">8:00</span> AM | <span className="number">6:00</span> PM | <span className="number">7:00</span> PM | <span className="number">8:00</span> PM<br />
          <strong>Sábados:</strong><br />
          <span className="number">7:00</span> AM<br />
          <strong>Domingos:</strong> Cerrado
        </>
      )
    },
    {
      icon: FaPhone,
      title: "Teléfono",
      content: (
        <>
          (<span className="number">52</span>) <span className="number">999-457-2196</span><br />
          WhatsApp: (<span className="number">52</span>) <span className="number">999-457-2196</span>
        </>
      )
    }
  ]

  return (
    <section id="location" className="section location">
      <h2 className="section-title">Ubicación</h2>
      <div className="location-container">
        <div className="location-info">
          {locationInfo.map((info, index) => (
            <LocationCard
              key={index}
              icon={info.icon}
              title={info.title}
              content={info.content}
            />
          ))}
          
          <div className="location-directions">
            <a 
              href="https://maps.app.goo.gl/Xm9B6bPhrsZCRT2U6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-button"
            >
              <FaMapMarkerAlt /> Ver en Google Maps
            </a>
          </div>
        </div>
        
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8939614552446!2d-89.5977534!3d20.996887299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671003efc8fe7%3A0xaee2d4d813322e3f!2sFit%20club%204.12!5e0!3m2!1ses-419!2smx!4v1749271836925!5m2!1ses-419!2smx"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de FitClub 4.12"
          />
        </div>
      </div>
    </section>
  )
}
