'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LocationCard from '@/components/ui/LocationCard';
import { locations } from '@/data/locations';

const FeaturedLocations = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Popular <span className="text-primary">Locations</span>
            </h2>
            <p className="text-text/70 dark:text-gray-400 max-w-xl mx-auto">
              Discover businesses in these popular cities and regions.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.slice(0, 6).map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <LocationCard location={location} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/location" 
            className="btn-primary inline-flex items-center"
          >
            View All Locations
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;