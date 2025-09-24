import type { IconType } from 'react-icons'
import { FaWhatsapp } from 'react-icons/fa'
import './PricingCard.css'

interface PricingCardProps {
  icon: IconType
  title: string
  price: string
  description: string
  features: string[]
  planType: string
  featured: boolean
  onWhatsAppClick: (planType: string, price: string) => void
}

export default function PricingCard({ 
  icon: Icon, 
  title, 
  price, 
  description, 
  features, 
  planType, 
  featured, 
  onWhatsAppClick 
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="pricing-badge">Más Popular</div>}
      <div className="pricing-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <div className="pricing-price">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
      </div>
      <p>{description}</p>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button 
        className="pricing-button"
        onClick={() => onWhatsAppClick(planType, price)}
      >
        <FaWhatsapp /> Consultar
      </button>
    </div>
  )
}
