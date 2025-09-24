import './Hero.css'

interface HeroProps {
  onJoinNowClick: () => void
  onFreeClassClick: () => void
}

export default function Hero({ onJoinNowClick, onFreeClassClick }: HeroProps) {
  return (
    <header className="hero">
      <h1>FitClub <span className="number">4.12</span></h1>
      <p>El mejor lugar para hacer ejercicios al aire libre</p>
      <div className="cta-buttons">
        <button onClick={onJoinNowClick}>¡Únete ahora!</button>
        <button onClick={onFreeClassClick}>Primera clase gratis</button>
      </div>
    </header>
  )
}
