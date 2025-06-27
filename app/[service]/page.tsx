"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useServices } from '../hooks/useServices';
import { useCities } from '../hooks/useCities';
import HeroImage from '../components/HeroImage';
import React from 'react';

const ServiceDetailPage = () => {
  const params = useParams();
  const { services, loading: loadingServices, error: errorServices } = useServices();
  const { cities, loading: loadingCities, error: errorCities } = useCities();

  const service = services.find(s => s.slug === params?.service);
  const serviceCities = cities.filter(city => city.service_id === service?.id);

  if (loadingServices || loadingCities) {
    return <div className="text-center text-lg text-primary my-12">Loading...</div>;
  }
  if (errorServices || errorCities) {
    return <div className="text-center text-lg text-red-500 my-12">{errorServices || errorCities}</div>;
  }
  if (!service) {
    return <div className="text-center text-lg text-red-500 my-12">Service not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section with Image and Overlayed Content */}
      <div className="relative h-[400px] w-full">
        {/* Background Image */}
        {service.image && (
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <Link 
              href="/services" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6 group w-fit"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                  {service.name}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 flex items-center text-white">
                {service.name}
              </h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container mx-auto px-4 py-12">
        {serviceCities.length === 0 ? (
          <div className="text-text/60">No cities available for this service.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCities.map((city) => (
              <Link
                href={`/${service.slug}/${city.slug}`}
                key={city.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                        {city.name}
                      </h2>
                    </div>
                  </div>
                  {city.description && (
                    <p className="text-text/70 mb-6 line-clamp-2">{city.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform">
                      View Details
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <svg 
                        className="w-4 h-4 text-secondary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage; 