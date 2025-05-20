'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Business } from '@/data/types';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const [imageError, setImageError] = useState(false);
  const defaultImage = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card card-hover overflow-hidden group"
    >
      <Link href={`/business/${business.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={imageError ? defaultImage : business.images[0] || defaultImage}
              alt={business.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-semibold text-white">{business.name}</h3>
            <p className="text-white/80 text-sm mt-1">{business.address.city}, {business.address.state}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-text dark:text-gray-300 line-clamp-2">{business.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {business.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 bg-background dark:bg-dark-background text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-primary font-medium">View Details</span>
              <div className="ml-2 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-yellow-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                  />
                </svg>
                <span className="ml-1 text-sm text-text dark:text-gray-300">{business.rating.toFixed(1)}</span>
              </div>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BusinessCard; 