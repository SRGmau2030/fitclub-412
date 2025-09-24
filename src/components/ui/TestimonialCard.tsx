import './TestimonialCard.css'

interface TestimonialCardProps {
  text: string
  author: string
}

export default function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p>"{text}"</p>
      <h4>{author}</h4>
    </div>
  )
}
