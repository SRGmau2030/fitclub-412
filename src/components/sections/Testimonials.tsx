import TestimonialCard from '../ui/TestimonialCard'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      text: "FitClub 4.12 cambió mi vida por completo. En 6 meses, logré una transformación increíble. El entrenador es excepcional y el ambiente es inmejorable.",
      author: "Clara Pech"
    },
    {
      text: "El entrenador es excelente y la comunidad es increíble. Me siento más fuerte que nunca y he superado límites que no creía posibles.",
      author: "Josefina May"
    },
    {
      text: "El mejor gimnasio de ejercicios funcionales de Mérida. La atención personalizada y el seguimiento constante hacen la diferencia.",
      author: "Mauricio May"
    }
  ]

  return (
    <section id="testimonials" className="section testimonials">
      <h2 className="section-title">Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  )
}
