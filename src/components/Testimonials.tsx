import { useInView } from '../hooks/useInView';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
 
}

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials: Testimonial[] = [
    {
      name: 'Mr. Kirshna Gowda',
      role: 'Homeowner',
      content:
        'The team transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations.',
      
    },
    {
      name: 'Mr. Arvind Reddy',
      role: 'Business Owner',
      content:
        'Our new office space has completely changed how our team works. The design is both beautiful and incredibly functional.',
    },
    {
      name: 'Mr. Gopalaswami',
      role: 'Restaurant Owner',
      content:
        'The ambiance they created for our restaurant is perfect. Our customers constantly compliment the interior design.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="w-10 h-10 text-amber-600 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
