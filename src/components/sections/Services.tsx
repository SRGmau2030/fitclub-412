import ServiceCard from '../ui/ServiceCard';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Functional Training',
      description:
        'Entrenamiento funcional de alta intensidad que combina gimnasia, levantamiento de pesas y acondicionamiento metabólico para mejorar tu condición física general.',
    },
    {
      title: 'Personal Training',
      description:
        'Sesiones personalizadas uno a uno con nuestros entrenadores expertos, diseñadas específicamente para alcanzar tus objetivos individuales.',
    },
    {
      title: 'Nutrición',
      description:
        'Planes personalizados y suplementacion según tus objetivos y necesidades.',
    },
  ];

  return (
    <section id="services" className="section services">
      <h2 className="section-title">Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
