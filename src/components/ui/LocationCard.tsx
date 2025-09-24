import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'
import './LocationCard.css'

interface LocationCardProps {
  icon: IconType
  title: string
  content: ReactNode
}

export default function LocationCard({ icon: Icon, title, content }: LocationCardProps) {
  return (
    <div className="location-card">
      <div className="location-icon">
        <Icon />
      </div>
      <div className="location-details">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
