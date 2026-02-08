import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
      Hi Ashok! I am ${name}.
      Phone: ${phone}
      Email: ${email}
      Project Details:
        ${project}
      `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = '919845095813'; // your number

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Send us your requirements directly on WhatsApp
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div
            className={`transition-all duration-1000 transform ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <Phone className="text-amber-600 w-6 h-6" />
                <span className="text-gray-700">+91 9845095813</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-amber-600 w-6 h-6" />
                <span className="text-gray-700">shivshakti.interiors22@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 w-6 h-6 mt-1" />
                <a
                  href="https://maps.app.goo.gl/9Z5A2aGB3feywctN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Shri Shyam Nivas Puja Garden, <br />6th Cross Rd, NR Layout, Kanaka Nagar, <br />Bengaluru, Karnataka 560033
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 transform ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition"
            />

            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition"
            />

            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition"
            />

            <textarea
              rows={4}
              required
              placeholder="Project Details"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
            >
              Send Message on WhatsApp 💬
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
