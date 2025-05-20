'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Category } from '@/data/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [imageError, setImageError] = useState(false);
  const defaultImage = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card card-hover overflow-hidden group"
    >
      <Link href={`/category/${category.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src={imageError ? defaultImage : category.imageUrl || defaultImage}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            <p className="text-white/80 text-sm mt-1">{category.businessCount || 0} businesses</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-text dark:text-gray-300 line-clamp-2">{category.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.popularLocations?.slice(0, 3).map((locationId, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 bg-background dark:bg-dark-background text-xs rounded-md"
              >
                Top {index + 1} Location
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-primary font-medium">Explore Category</span>
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

export default CategoryCard; 