"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { useServices } from '../../../hooks/useServices';
import { useCities } from '../../../hooks/useCities';
import { usePlaceBasic } from '../../../hooks/usePlaceBasic';
import { usePlaceExtensions } from '../../../hooks/usePlaceExtensions';
import { usePlacesImages } from '../../../hooks/usePlacesImages';
import { StarIcon, MapPinIcon, PhoneIcon, GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function replaceGoogleImageSize(url: string, newSize: string = '=w1280-h780') {
  // Extract the first w/h values from any =w\d+-h\d+ in the URL
  const match = url.match(/=w(\d+)-h(\d+)/);
  // Only replace the last occurrence of the size pattern at the end
  return url.replace(/=w\d+-h\d+(-[a-z-]+)?$/, newSize);
}

export default function BusinessDetailPage() {
  const params = useParams();
  const { services, loading: loadingServices, error: errorServices } = useServices();
  const { cities, loading: loadingCities, error: errorCities } = useCities();
  const { places, loading: loadingPlaces, error: errorPlaces } = usePlaceBasic();
  const { extensions, loading: loadingExtensions, error: errorExtensions } = usePlaceExtensions();
  const { images, loading: loadingImages, error: errorImages } = usePlacesImages();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Find service, city, and business by slug
  const service = services.find(s => s.slug === params?.service);
  const city = cities.find(c => c.slug === params?.location && c.service_id === service?.id);
  const business = places.find(p => p.slug === params?.business && p.city_id === city?.id);

  // Business images and extensions
  const businessImages = images.filter(img => img.place_id === business?.id);
  const businessExtensions = extensions.filter(ext => ext.place_id === business?.id);

  // Related businesses in the same city (excluding current)
  const relatedBusinesses = places
    .filter(p => p.city_id === city?.id && p.id !== business?.id)
    .slice(0, 3);

  if (
    loadingServices ||
    loadingCities ||
    loadingPlaces ||
    loadingExtensions ||
    loadingImages
  ) {
    return <div className="text-center text-lg text-primary my-12">Loading...</div>;
  }
  if (
    errorServices ||
    errorCities ||
    errorPlaces ||
    errorExtensions ||
    errorImages
  ) {
    const errorMsg = String(errorServices) || String(errorCities) || String(errorPlaces) || String(errorExtensions) || String(errorImages);
    return <div className="text-center text-lg text-red-500 my-12">{errorMsg}</div>;
  }
  if (!service || !city || !business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src={replaceGoogleImageSize(
            business.thumbnail || businessImages[0]?.image_url || '/images/default-location.jpg'
          )}
          alt={business.title || ''}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <Link href={`/${service.slug}/${city.slug}`} className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <span className="mr-2">←</span> Back to {city.name}
            </Link>
            <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-sm">{business.title}</h1>
            <p className="text-lg text-white/90 drop-shadow-sm">{business.address}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(business.rating || 0) ? 'text-secondary' : 'text-white/50'}`}
                  />
                ))}
                <span className="ml-2 text-white/90">({business.reviews || 0} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery Section */}
            {businessImages.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Gallery</h2>
                <div className="h-56 overflow-x-auto flex flex-row gap-4 pb-2 scrollbar-thin scrollbar-thumb-secondary/40 scrollbar-track-transparent">
                  {businessImages.map((img, idx) => (
                    <button
                      key={idx}
                      className="relative group focus:outline-none flex-shrink-0"
                      onClick={() => setSelectedImage(img.image_url || '/images/default-location.jpg')}
                      aria-label="View image"
                      style={{ minWidth: '320px', width: '320px', maxWidth: '90vw' }}
                    >
                      <Image
                        src={img.image_url || '/images/default-location.jpg'}
                        alt={business.title || ''}
                        width={600}
                        height={400}
                        className="object-cover rounded-xl w-full h-56 group-hover:scale-105 transition-transform duration-300 shadow"
                      />
                      <span className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
                {/* Modal/Lightbox */}
                <AnimatePresence>
                  {selectedImage && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedImage(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                        onClick={e => e.stopPropagation()}
                      >
                        <img
                          src={selectedImage}
                          alt="Gallery large view"
                          className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
                        />
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow"
                          aria-label="Close"
                        >
                          ×
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(business.rating || 0) ? 'text-secondary' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-text/70">({business.reviews || 0} reviews)</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4 text-primary">About</h2>
                <p className="text-text/70">{business.review_text || ''}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {(business.types || []).map((type, index) => (
                    <span
                      key={index}
                      className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours (if available) */}
            {business.open_hours && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Business Hours</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(business.open_hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium capitalize text-text/80">{day}</span>
                      <span className="text-text/70">{typeof hours === 'string' ? hours : String(hours)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 sticky top-8 border border-primary/10">
              <h2 className="text-xl font-semibold mb-4 text-primary">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-3">
                    <p className="font-medium text-text/80">Address</p>
                    <p className="text-text/70">{business.address}</p>
                  </div>
                </div>
                {business.phone && (
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-secondary" />
                    <a href={`tel:${business.phone}`} className="ml-3 text-text/70 hover:text-primary transition-colors">
                      {business.phone}
                    </a>
                  </div>
                )}
                {business.website && (
                  <div className="flex items-center">
                    <GlobeAltIcon className="h-6 w-6 text-secondary" />
                    <a href={business.website} target="_blank" rel="noopener noreferrer" className="ml-3 text-text/70 hover:text-primary transition-colors">
                      {business.website}
                    </a>
                  </div>
                )}
                {business.domain && (
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 text-secondary" />
                    <span className="ml-3 text-text/70">{business.domain}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Businesses */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Related Businesses in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBusinesses.map((relatedBusiness) => (
              <Link
                key={relatedBusiness.id}
                href={`/${service.slug}/${city.slug}/${relatedBusiness.slug}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary/10"
              >
                <div className="relative h-48">
                  <Image
                    src={replaceGoogleImageSize(relatedBusiness.thumbnail || '/images/default-location.jpg')}
                    alt={relatedBusiness.title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-primary">{relatedBusiness.title}</h3>
                  <p className="text-text/70 text-sm mb-3">{relatedBusiness.address}</p>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-secondary" />
                    <span className="ml-1 text-sm text-text/70">{relatedBusiness.rating}</span>
                    <span className="mx-2 text-text/30">•</span>
                    <span className="text-sm text-text/70">{relatedBusiness.reviews || 0} reviews</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 