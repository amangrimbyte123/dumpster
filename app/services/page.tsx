"use client";
import React from 'react';
import Link from 'next/link';
import { useServices } from '../hooks/useServices';
import { useCities } from '../hooks/useCities';
import HeroImage from '../components/HeroImage';
import DumpsterSizesSection from '../components/home/DumpsterSizesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FAQSection from '../components/home/FAQSection';

const parseFacilities = (facilities: string | string[] | undefined): string[] => {
  if (!facilities) return [];
  if (Array.isArray(facilities)) return facilities;
  try {
    const parsed = JSON.parse(facilities);
    if (Array.isArray(parsed)) return parsed;
  } catch (e) {}
  // fallback: comma separated string
  return facilities.split(',').map((f: string) => f.trim()).filter(Boolean);
};

const ServicesPage = () => {
  const { services, loading, error } = useServices();
  const { cities, loading: loadingCities, error: errorCities } = useCities();

  // Pick the first service as the hero (or fallback values)
  const heroService = {
    name: 'Our Services',
    description: 'We offer a wide range of dumpster rental services to meet your specific needs, from construction projects to residential cleanups.',
    image: '/dumpster-large-project.jpg',
  };
  const heroImageUrl = typeof heroService.image === 'string' && heroService.image ? heroService.image : '/dumpster-large-project.jpg';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section with Image */}
      <div className="relative w-full">
        <HeroImage
          imageUrl={heroImageUrl}
          name={heroService.name}
          description={heroService.description || ""}
        />
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6 group w-fit bg-black/30 px-4 py-2 rounded-full"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Comprehensive Dumpster Solutions</h1>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              We offer a wide range of dumpster rental services to meet your specific needs, 
              from construction projects to residential cleanups.
            </p>
          </div>

          {/* Loading and Error States */}
          {(loading || loadingCities) && (
            <div className="text-center text-lg text-primary mb-8">Loading services...</div>
          )}
          {(error || errorCities) && (
            <div className="text-center text-lg text-red-500 mb-8">{error || errorCities}</div>
          )}

          {/* Services Grid */}
          {!loading && !loadingCities && !error && !errorCities && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={service.id}
                  className={`bg-gradient-to-br ${idx % 2 === 0 ? 'from-white to-primary/5 border-primary/10' : 'from-white to-secondary/5 border-secondary/10'} rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 flex flex-col`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'} rounded-xl flex items-center justify-center mr-4`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414L10 4.414l.707-.707a1 1 0 00-1.414-1.414zM3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 7H12a1 1 0 100 2h4a1 1 0 011-1v4a1 1 0 11-2 0V8.414l-2.293 2.293a1 1 0 01-1.414 0L10 9.414l-.707.707a1 1 0 01-1.414-1.414L8.586 8H7a1 1 0 00-1 1v4a1 1 0 11-2 0V9a1 1 0 011-1h1.586l2.293-2.293z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-text">{service.name}</h2>
                  </div>
                  {/* Service Image */}
                  {service.image && (
                    <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="rounded-xl object-cover w-full h-full absolute inset-0"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <p className="text-white text-sm font-medium">{service.name}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-text/70 mb-4">{service.description}</p>
                  {service.service_facilities && (
                    <ul className="space-y-3 mb-4">
                      {parseFacilities(service.service_facilities).map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-text/70 hover:text-text transition-colors">
                          <svg className="w-4 h-4 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-base font-medium"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">Need a Custom Solution?</h2>
              <p className="text-text/70 mb-6">
                We understand that every project is unique. Contact us to discuss your specific requirements, 
                and we'll create a customized waste management solution that fits your needs perfectly.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Add Services and Dumpster Sizes sections after main content */}
        <DumpsterSizesSection />
        {/* Add Why Choose Us and FAQ sections near the bottom */}
        <WhyChooseUsSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default ServicesPage; 