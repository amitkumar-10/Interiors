import { useEffect, useState } from "react";

const heroImages = [
  "/images/Office2.jpg",
  "/images/Liv1.jpg",
  "/images/Bed4.jpg",
  "/images/Kit1.jpg",
  "/images/Liv2.jpg",
  "/images/Kit3.jpg",

];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">

      {/* Background Images */}
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
  <div className="text-white max-w-2xl text-center sm:text-left">

    {/* Heading */}
    <h3
      className={`text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      Let’s Build Amazing with Shiv Shakti Interiors
    </h3>

    {/* Tagline */}
    <p
      className={`text-xs sm:text-base text-white/90 mb-4 sm:mb-6 transition-all duration-1000 delay-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      Where Wood Meets Legacy — delivering beautifully crafted, functional spaces from concept to completion.
    </p>

    {/* Buttons */}
    <div
      className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-start transition-all duration-1000 delay-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <a
        href="#portfolio"
        className="px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-slate-900 text-white text-center text-sm sm:text-base hover:scale-105 transition"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-3 py-2 sm:px-4 sm:py-2 rounded-md border border-white/60 text-white text-center text-sm sm:text-base hover:bg-white hover:text-black transition"
      >
        Get Quote
      </a>
    </div>

  </div>
</div>

    </section>
  );
}
