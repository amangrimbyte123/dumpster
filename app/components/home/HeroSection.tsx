'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaClock, FaProjectDiagram, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3"
          alt="Hero Background"
          fill
          className="object-cover object-center scale-105 transition-transform duration-7000 ease-in-out hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white mt-20">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <span className="block text-primary">Professional</span>
                Dumpster Rental Services
              </h1>
              <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Fast, reliable, and affordable dumpster rentals for your residential or commercial needs. 
                Serving your area with excellence since 2010.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-primary/90 hover:to-primary/80 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
                >
                  View Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {/* Happy Customers */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <FaUsers className="w-8 h-8 text-primary mb-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                    <div className="text-sm text-gray-300">Happy Customers</div>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <FaClock className="w-8 h-8 text-secondary mb-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>

                {/* Projects Completed */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <FaProjectDiagram className="w-8 h-8 text-accent mb-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">1000+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                </div>

                {/* Customer Rating */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <FaStar className="w-8 h-8 text-primary mb-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">4.9/5</div>
                    <div className="text-sm text-gray-300">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection; 