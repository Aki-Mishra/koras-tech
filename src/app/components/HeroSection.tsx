"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Slides data
const slides = [
  {
    src: "https://cdn.pixabay.com/photo/2024/07/18/04/41/programmer-8903087_1280.jpg",
    tagline: "where innovation meets reliability",
    description:
      "Your one-stop partner for cloud, cyber security, web, and software solutions",
  },
  {
    src: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg",
    tagline: "delivers tech you can trust",
    description:
      "Secure your future with powerful cloud, cyber security, and development services",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    tagline: "builds solutions that drive success",
    description:
      "From digital security to smart development, we’ve got you covered",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 600); // matches CSS transition
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center h-[85vh]"
 
    >
      {/* Use larger height for larger screens */}
      <div className="hidden lg:block absolute inset-0 h-[85vh]" ></div>

      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
            idx === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={`Slide ${idx + 1}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20">
        <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg uppercase inter-font">
          Koras Technology
        </p>

        <h1
          className={ `inter-font capitalize mt-4 text-3xl md:text-5xl lg:text-[3rem] font-bold text-white drop-shadow-2xl leading-snug transition-all duration-700  inter-font${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          {slides[currentIndex].tagline}
        </h1>

        <p
          className={`capitalize mt-4 text-lg sm:text-xl md:text-2xl lg:text-[1.8rem] text-white/90 drop-shadow-lg max-w-3xl transition-all duration-700 delay-200 inter-font ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {slides[currentIndex].description}
        </p>

        <div className="mt-8">
          <button  className="inter-font px-8 py-3 font-bold text-lg md:text-xl rounded-md bg-gradient-to-r from-[#31D2F2] to-[#00E6FF] text-white shadow-lg hover:from-[#00E6FF] hover:to-[#31D2F2] transition-all duration-500 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 flex justify-center w-full z-30">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full mx-1 transition-all duration-500 cursor-pointer ${
              idx === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(idx);
              setFade(true);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
