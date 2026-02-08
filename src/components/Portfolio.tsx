import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const categories = ['all', 'residential', 'commercial'];

  const projects = [
    {
      id: 1,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv1.jpg',
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'commercial',
      image: '/images/office1.jpg',
    },
    {
      id: 3,
      title: 'Minimalist Bedroom',
      category: 'residential',
      image: '/images/Bed4.jpg',
    },
    {
      id: 4,
      title: 'Luxury Dining Space',
      category: 'residential',
      image: '/images/Kit1.jpg',
    },
    {
      id: 5,
      title: 'Open Plan Kitchen',
      category: 'residential',
      image: '/images/Kit3.jpg',
    },
    {
      id: 6,
      title: 'Executive Workspace',
      category: 'commercial',
      image: '/images/Office2.jpg',
    },
    {
      id: 7,
      title: 'Minimalist BedRoom',
      category: 'residential',
      image: '/images/Bed1.jpg',
    },
    {
      id: 8,
      title: 'Minimalist Bedroom',
      category: 'residential',
      image: '/images/Bed2.jpg',
    },
    {
      id: 9,
      title: 'Dining Space',
      category: 'residential',
      image: '/images/Kit2.jpg',
    },
    {
      id: 10,
      title: 'Kitchen',
      category: 'residential',
      image: '/images/Kit4.jpg',
    },
    {
      id: 11,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv2.jpg',
    },
    {
      id: 12,
      title: 'Minimalist Bedroom',
      category: 'residential',
      image: '/images/Bed3.jpg',
    },
    {
      id: 13,
      title: 'Luxury Dining Space',
      category: 'residential',
      image: '/images/Kit5.jpg',
    },
    {
      id: 14,
      title: 'Kitchen',
      category: 'residential',
      image: '/images/Kit5.jpg',
    },
    {
      id: 15,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv3.jpg',
    },
    {
      id: 16,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv5.jpg',
    },
    {
      id: 17,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv4.jpg',
    },
    {
      id: 18,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv6.jpg',
    },
    {
      id: 19,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv7.jpg',
    },
    {
      id: 20,
      title: 'Living Room',
      category: 'residential',
      image: '/images/Liv8.jpg',
    },
    {
      id: 21,
      title: 'Wardrobe',
      category: 'residential',
      image: '/images/Ward1.jpg',
    },
    {
      id: 22,
      title: 'Wardrobe',
      category: 'residential',
      image: '/images/Ward2.jpg',
    },
    {
      id: 23,
      title: 'Wardrobe',
      category: 'residential',
      image: '/images/Ward3.jpg',
    },
    {
      id: 24,
      title: 'Corporate Office',
      category: 'commercial',
      image: '/images/Office3.jpg',
    },
    {
      id: 25,
      title: 'Executive Workspace',
      category: 'commercial',
      image: '/images/Office4.jpg',
    },

    {
      id: 26,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 27,
      title: 'Executive Workspace',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 28,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 29,
      title: 'Executive Workspace',
      category: 'commercial',
      image: "https://images.unsplash.com/photo-1646215993316-c98f642303ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 30,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
     {
      id: 31,
      title: 'Minimalist Bedroom',
      category: 'residential',
      image: '/images/Bed5.jpg',
    },
    {
      id: 32,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1661963781048-9780e4ecae5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },{
      id: 33,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://images.unsplash.com/photo-1666718623430-da207b018ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },{
      id: 34,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 35,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 36,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 37,
      title: 'Corporate Office',
      category: 'commercial',
      image: "https://images.unsplash.com/photo-1716703373229-b0e43de7dd5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our latest interior design projects
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90 capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="flex justify-end mt-12">
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-2 px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                More Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b">
              <h2 className="text-3xl font-bold text-gray-900">All Projects</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (  // Removed 'index' since it's unused
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm opacity-90 capitalize">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

