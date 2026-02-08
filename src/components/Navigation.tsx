import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  // Function to handle smooth scroll to top
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Updated logo link to scroll to top */}
          <a
            href="#"
            onClick={scrollToTop}
            className="transition-all duration-300 hover:opacity-80"
          >
            <Logo scrolled={isScrolled} size="md" variant="full" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                // Conditionally add scroll-to-top for Home link
                onClick={link.href === '#home' ? scrollToTop : undefined}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 mr-4 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />} 
          </button>
        </div>
      </div>

      {/* Backdrop to close menu on outside click */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white shadow-lg z-50 relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Conditionally scroll to top for Home in mobile menu
                  if (link.href === '#home') {
                    scrollToTop(e);
                  }
                  setIsOpen(false); // Close menu after click
                }}
                className="block text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}