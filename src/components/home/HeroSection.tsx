import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Sparkles } from 'lucide-react';
import img1 from "../../assets/bhoj1.jpeg"
import img2 from "../../assets/bhoj2.jpeg"
import img3 from "../../assets/bhoj3.jpeg"
import img4 from "../../assets/bhoj4.jpg"
import img5 from "../../assets/bhoj5.jpg"
import img6 from "../../assets/bhoj6.jpg"
import img7 from "../../assets/bhoj7.jpg"
import img8 from "../../assets/bhoj8.jpg"
import img9 from "../../assets/bhoj7.jpeg"
import img10 from "../../assets/bhoj9.jpg"
import img11 from "../../assets/bhoj10.jpg"
import img12 from "../../assets/bhoj11.jpeg"
import img13 from "../../assets/bhoj12.jpeg"
import vc from "../../assets/vc.jpg"


interface Slide {
  id: number;
  image: string;
  alt: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your actual slide images here
  const slides: Slide[] = [
    {
      id: 1,
      image: img1,
      alt: 'Viksit Bharat @2047'
    },
    {
      id: 2,
      image: img2,
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: img3,
      alt: 'Slide 3'
    },
    {
      id: 4,
      image: img4,
      alt: 'Slide 4'
    },
    {
      id: 5,
      image: img5,
      alt: 'Slide 5'
    },
    {
      id: 6,
      image: img6,
      alt: 'Slide 6'
    },
    {
      id: 7,
      image: img7,
      alt: 'Slide 7'
    },
    {
      id: 8,
      image: img8,
      alt: 'Slide 8'
    },
    {
      id: 9,
      image: img9,
      alt: 'Slide 9'
    },
    {
      id: 10,
      image: img10,
      alt: 'Slide 10'
    },
    {
      id: 11,
      image: img11,
      alt: 'Slide 11'
    },
    {
      id: 12,
      image: img12,
      alt: 'Slide 12'
    },
    {
      id: 13,
      image: img13,
      alt: 'Slide 13'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Full Width Image Slider */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden mt-36">
        {/* Slider Container */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/40 to-indigo-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border border-white/30 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border border-white/30 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-10 h-2.5 bg-white shadow-lg shadow-white/50'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* VC's Message Section - Below Slider */}
      <div className="relative bg-white py-12 md:py-16">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* VC Photo Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Glowing Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a8a] via-purple-600 to-[#1e3a8a] rounded-full blur-lg opacity-75 animate-pulse"></div>
                
                {/* Photo Container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                  <img
                    src={vc}
                    alt="Vice Chancellor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Badge */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Sparkle Decoration */}
                <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400 animate-pulse" />
                <Sparkles className="absolute -top-2 right-8 w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 space-y-6">
              {/* Title */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] rounded-full mb-4">
                  <span className="text-white font-bold text-sm uppercase tracking-wide">VC's Message</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Welcome to MPBOU
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {/* Message Text */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय, भोपाल की ओर से आप सभी का
                  हार्दिक अभिनन्दन! कार्यपालिक के रूप में उच्च शिक्षा के प्रति विश्वविद्यालय
                  के दायित्वों एवं इन दायित्वों के निर्वाहन के लिए अपनी प्रतिबद्धता
                  व्यक्त करता हूँ। एक मुक्त विश्वविद्यालय का मुख्य दायित्व ऐसे
                  विद्यार्थियों को उच्च शिक्षा उपलब्ध कराना है जो सामाजिक के आमाम,
                  रोज़गार की व्यस्तता अथवा किन्हीं अपरिहार्य कारणों से वंचित रह जाते
                  हैं। अतः मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय के प्रमुख उद्देश्य
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] hover:bg-[#12265d] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Read Full Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                    About VC
                  </button>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="pl-6 border-l-4 border-blue-600">
                <p className="text-gray-600 italic text-sm md:text-base">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;