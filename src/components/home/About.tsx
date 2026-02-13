import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/logo_main.jpg"
import img2 from "../../assets/header-img.jpg"

const About: React.FC = ( ) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with accent line */}
        <div className="mb-12 flex flex-col justify-center items-center">
          <div className="w-24 h-1 bg-[#B8860B] mb-6"></div>
          <h2 className="text-5xl font-bold text-[#1e3a8a] mb-4">
            Welcome to Madhya Pradesh Bhoj (Open) University
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed text-center">
            Established on October 1, 1992, MPBOU stands as a beacon of inclusive education and transformative learning.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image 1 - Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#B8860B] opacity-10 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
            <img
              src={img1}
              alt="MPBOU Logo"
              className="w-full h-[350px] object-contain bg-white rounded-lg shadow-2xl p-8"
            />
          </div>

          {/* Image 2 - Header Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#B8860B] opacity-10 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
            <img
              src={img2}
              alt="University Campus"
              className="w-full h-[350px] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#1e3a8a]">11</p>
                  <p className="text-sm text-gray-600">Regional Centers</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#B8860B]">612</p>
                  <p className="text-sm text-gray-600">Study Centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-l-4 border-[#1e3a8a] shadow-lg mb-6">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Our Foundation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Madhya Pradesh Bhoj (Open) University (MPBOU) was inaugurated by President Dr. Shankar Dayal Sharma on October 19, 1992, under the Madhya Pradesh University Act 1991.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The university's emblem draws inspiration from a verse in Raja Bhoj's <span className="font-semibold italic">"Saraswati Kanthabharan"</span> — a testament to our rich cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#1e3a8a] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold mb-2">30+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="bg-[#B8860B] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold mb-2">UGC</p>
              <p className="text-sm">Recognized</p>
            </div>
            <div className="bg-[#1e3a8a] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold mb-2">11</p>
              <p className="text-sm">Regional Centers</p>
            </div>
            <div className="bg-[#B8860B] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold mb-2">612</p>
              <p className="text-sm">Study Centers</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg mb-2">Promotion of Learning</h4>
                <p className="text-gray-200">Utilizing diverse resources, including technology, for effective knowledge dissemination.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg mb-2">Inclusive Higher Education</h4>
                <p className="text-gray-200">Enhancing educational standards by offering opportunities to various segments of society.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 bg-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#9a7209] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discover More About MPBOU
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;