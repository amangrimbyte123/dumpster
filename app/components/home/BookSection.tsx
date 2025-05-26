'use client';

import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function BookSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/Book_Section.webp')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white !text-opacity-100">
            Book Your Dumpster Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Find the perfect dumpster for your project. Our extensive network of locations ensures you'll find the right size and type of dumpster near you.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-white/70 group-hover:text-white transition-colors duration-300" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your location or ZIP code"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20"
            >
              <FaSearch className="group-hover:scale-110 transition-transform duration-300" />
              <span>Find Locations</span>
            </button>
          </form>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center text-white group transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Quick Delivery</h3>
            <p className="text-white/90 text-lg">Same-day delivery available in most areas</p>
          </div>

          <div className="text-center text-white group transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Reliable Service</h3>
            <p className="text-white/90 text-lg">Trusted by thousands of customers</p>
          </div>

          <div className="text-center text-white group transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Best Prices</h3>
            <p className="text-white/90 text-lg">Competitive rates with no hidden fees</p>
          </div>
        </div>
      </div>
    </section>
  );
} 