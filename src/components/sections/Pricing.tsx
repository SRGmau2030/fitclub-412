import { FaDollarSign, FaUserFriends, FaEye } from 'react-icons/fa';
import PricingCard from '../ui/PricingCard';
import './Pricing.css';

interface PricingProps {
  onPricingWhatsApp: (planType: string, price: string) => void;
}

export default function Pricing({ onPricingWhatsApp }: PricingProps) {
  const plans = [
    {
      icon: FaEye,
      title: 'Visita',
      price: '70',
      description:
        'Prueba nuestras instalaciones y experimenta una clase completa de ejercicios funcionales',
      features: [
        '✓ Acceso por 1 día',
        '✓ Clase grupal incluida',
        '✓ Asesoría básica',
        '✓ Tour por las instalaciones',
      ],
      planType: 'Visita',
      featured: false,
    },
    {
      icon: FaDollarSign,
      title: 'Mensualidad',
      price: '700',
      description:
        'Acceso completo a todas nuestras clases y servicios durante un mes',
      features: [
        '✓ Acceso ilimitado',
        '✓ Todas las clases incluidas',
        '✓ Valoración corporal',
        '✓ 3 visitas de cortesía',
        '✓ Comunidad FitClub',
        '✓ Descuento en talleres y clases especiales',
      ],
      planType: 'Mensualidad Individual',
      featured: true,
    },
    {
      icon: FaUserFriends,
      title: 'Pareja',
      price: '1100',
      description:
        'Plan especial para parejas que quieren entrenar juntas y alcanzar sus metas',
      features: [
        '✓ Acceso para 2 personas',
        '✓ Todas las clases incluidas',
        '✓ Asesoría nutricional para ambos',
        '✓ Seguimiento personalizado',
        '✓ Descuento especial',
        '✓ 5 visitas  de cortesía',
      ],
      planType: 'Plan Pareja',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section pricing">
      <h2 className="section-title">Membresias</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            icon={plan.icon}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            planType={plan.planType}
            featured={plan.featured}
            onWhatsAppClick={onPricingWhatsApp}
          />
        ))}
      </div>
    </section>
  );
}
