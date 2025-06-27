"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useServices } from '../hooks/useServices';
import { useCities } from '../hooks/useCities';
import { usePlaceBasic } from '../hooks/usePlaceBasic';
import React from 'react';
import FAQSection from '../components/home/FAQSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import BookSection from '../components/home/BookSection';

const ServiceDetailPage = () => {
  const params = useParams();
  const { services, loading: loadingServices, error: errorServices } = useServices();
  const { cities, loading: loadingCities, error: errorCities } = useCities();
  const { places, loading: loadingPlaces, error: errorPlaces } = usePlaceBasic();

  const service = services.find(s => s.slug === params?.service);
  const serviceCities = cities.filter(city => city.service_id === service?.id);

  if (loadingServices || loadingCities || loadingPlaces) {
    return <div className="text-center text-lg text-primary my-12">Loading...</div>;
  }
  if (errorServices || errorCities || errorPlaces) {
    return <div className="text-center text-lg text-red-500 my-12">{errorServices || errorCities || errorPlaces}</div>;
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {serviceCities.map((city, index) => {
              const place = places.find((p) => p.city_id === city.id);
              return (
                <div
                  key={city.id}
                  className="group relative flex items-center gap-4 p-4 bg-white rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Location Number */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {index + 1}
                  </div>
                  {/* Location Image */}
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={city.image || '/city_semple_image.jpg'}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Location Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-semibold mb-1 text-primary group-hover:text-primary/80 transition-colors truncate">
                      {city.name}
                    </h3>
                    <div className="flex items-center text-text/70 mb-1 text-sm">
                      <svg className="mr-2 text-secondary flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      <span className="truncate">{place?.address || 'No address available'}</span>
                    </div>
                  </div>
                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/${service.slug}/${city.slug}`}
                      className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors text-sm"
                    >
                      View
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* How It Works Section */}
      <HowItWorksSection />
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      {/* Book/Call to Action Section */}
      <BookSection />
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default ServiceDetailPage; 