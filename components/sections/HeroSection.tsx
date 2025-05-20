'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover the Best Local Businesses
            </h1>
            <p className="text-white/90 text-xl mb-8 max-w-lg">
              Find top-rated businesses in your area. Browse by category or location and connect with services you need.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl mb-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-grow">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search businesses..."
                    className="w-full px-5 py-3 rounded-lg bg-white text-text focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="flex-grow">
                  <select
                    className="w-full px-5 py-3 rounded-lg bg-white text-text focus:outline-none focus:ring-2 focus:ring-secondary appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="restaurants">Restaurants</option>
                    <option value="shopping">Shopping</option>
                    <option value="health-wellness">Health & Wellness</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="services">Services</option>
                    <option value="automotive">Automotive</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-secondary"
                >
                  Search
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/category" className="btn-secondary">
                Browse Categories
              </Link>
              <Link href="/location" className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all">
                Explore Locations
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>
              
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                <div className="rounded-xl overflow-hidden bg-white shadow-inner">
                  <div className="p-4 bg-gradient-to-b from-primary/5 to-transparent">
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-32 h-6 bg-gray-200 rounded-md"></div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="h-32 bg-gray-100 rounded-lg"></div>
                      <div className="h-32 bg-gray-100 rounded-lg"></div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="w-full h-6 bg-gray-200 rounded-md"></div>
                      <div className="w-3/4 h-6 bg-gray-200 rounded-md"></div>
                      <div className="w-5/6 h-6 bg-gray-200 rounded-md"></div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <div className="w-24 h-8 bg-primary rounded-md"></div>
                      <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-x-8"
          >
            <div className="text-center mb-4 md:mb-0">
              <p className="text-white font-semibold text-3xl">1000+</p>
              <p className="text-white/80">Businesses</p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <p className="text-white font-semibold text-3xl">6</p>
              <p className="text-white/80">Categories</p>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <p className="text-white font-semibold text-3xl">6</p>
              <p className="text-white/80">Locations</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-3xl">24/7</p>
              <p className="text-white/80">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 