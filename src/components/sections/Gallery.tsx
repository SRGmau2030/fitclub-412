import './Gallery.css'

export default function Gallery() {
  const images = [
    {
      src: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      alt: "Entrenamiento funcional"
    },
    {
      src: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
      alt: "Levantamiento de pesas"
    },
    {
      src: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
      alt: "Ejercicios de fuerza"
    },
    {
      src: "https://images.pexels.com/photos/4398370/pexels-photo-4398370.jpeg",
      alt: "Entrenamiento en grupo"
    },
    {
      src: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg",
      alt: "Ejercicios de resistencia"
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      alt: "Entrenamiento personal"
    },
    {
      src: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
      alt: "Levantamiento de pesas"
    },
    {
      src: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg",
      alt: "Ejercicios de cardio funcional"
    }
  ]

  return (
    <section id="gallery" className="section gallery">
      <h2 className="section-title">Galería</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            className="gallery-image" 
          />
        ))}
      </div>
    </section>
  )
}
