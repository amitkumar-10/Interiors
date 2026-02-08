import { useInView } from '../hooks/useInView';
import { Award, Users, Briefcase, Home } from 'lucide-react';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Users, value: '340+', label: 'Clients' },
    { icon: Home, value: '1200+', label: 'Residential Projects' },
    { icon: Briefcase, value: '65+', label: 'Commercial Projects' },
    { icon: Award, value: '28+', label: 'Years of Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-sm uppercase font-bold tracking-wide text-gray-700">
              Welcome to <span className="border-b-2 border-black w-10 inline-block align-middle"></span>
            </p>
            <h5 className="text-4xl font-serif font-bold mt-2 leading-tight">
              Shiv Shakti Interiors
            </h5>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              <strong>Shiv Shakti Interiors</strong>, established in 2015, is a <strong>Bangalore-based interior design</strong> and execution firm specializing in <strong>residential and commercial projects.</strong>
              <br /><br />
              We focus on creating functional, elegant, and durable spaces through smart design, quality craftsmanship, and attention to detail. From homes to offices and commercial spaces, we deliver solutions tailored to each client’s needs.
            </p>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              At Shiv Shakti Interiors, we are committed to <strong>transparent processes, premium materials, and timely project delivery</strong>, creating spaces that enhance everyday living.
            </p>
            <p className="mt-4"><strong>Residential | Commercial | Modular Interiors</strong></p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Office2.jpg"
                alt="Interior design studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gray-50 rounded-xl transition-all duration-1000 transform hover:scale-105 hover:shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


