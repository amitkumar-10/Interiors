import { useInView } from '../hooks/useInView';
import { Home, Building2, Ruler, Sofa } from 'lucide-react';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary with our expert residential design services.',
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Create impressive office and retail spaces that enhance productivity and brand identity.',
    },
    
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space layout for maximum efficiency and aesthetic appeal.',
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that perfectly balance style, comfort, and durability.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
