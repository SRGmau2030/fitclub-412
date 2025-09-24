import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { useContactForm } from './hooks/useContactForm'
import { openWhatsApp, FITCLUB_WHATSAPP_NUMBER } from './utils/whatsapp'
import './styles/globals.css'

function App() {
  const { contactForm, handleContactFormChange, resetContactForm } = useContactForm()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFreeClassWhatsApp = () => {
    const message = `¡Hola! Me interesa la PRIMERA CLASE GRATIS en FitClub 4.12 💪

¿Podrían darme información sobre:
✅ Horarios disponibles
✅ Qué necesito llevar
✅ Cómo reservar mi clase gratuita

¡Estoy emocionado/a por comenzar! 🏋️‍♂️`

    openWhatsApp(FITCLUB_WHATSAPP_NUMBER, message)
  }

  const handleFooterWhatsApp = () => {
    const message = `¡Hola! Me interesa conocer más sobre FitClub 4.12 💪

¿Podrían darme información sobre:
✅ Planes y precios
✅ Horarios de clases
✅ Primera clase gratis

¡Gracias! 🏋️‍♂️`

    openWhatsApp(FITCLUB_WHATSAPP_NUMBER, message)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `¡Hola! Me interesa FitClub 4.12 💪

*Mis datos personales:*
👤 Nombre: ${contactForm.name}
📱 Teléfono: ${contactForm.phone}
🎂 Edad: ${contactForm.age} años
⚖️ Peso: ${contactForm.weight} kg
📏 Altura: ${contactForm.height} cm
🔥 Intensidad preferida: ${contactForm.intensity}
🎯 Objetivos: ${contactForm.objectives}

¡Espero su respuesta para comenzar mi transformación! 🏋️‍♂️`

    openWhatsApp(FITCLUB_WHATSAPP_NUMBER, message)
    resetContactForm()
  }

  const handlePricingWhatsApp = (planType: string, price: string) => {
    const message = `¡Hola! Me interesa el plan ${planType} de $${price} en FitClub 4.12 💪

¿Podrían darme más información sobre este plan?

¡Gracias! 🏋️‍♂️`

    openWhatsApp(FITCLUB_WHATSAPP_NUMBER, message)
  }

  return (
    <>
      <Navigation onContactClick={scrollToContact} />
      <Hero 
        onJoinNowClick={scrollToContact}
        onFreeClassClick={handleFreeClassWhatsApp}
      />
      <Services />
      <Pricing onPricingWhatsApp={handlePricingWhatsApp} />
      <About />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact
        onContactSubmit={handleContactSubmit}
        contactForm={contactForm}
        onContactFormChange={handleContactFormChange}
      />
      <Footer onWhatsAppClick={handleFooterWhatsApp} />
    </>
  )
}

export default App
