"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useServices } from '@/app/hooks/useServices';

const ServicesSection = () => {
  const { services, loading, error } = useServices();

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 via-white to-accent/5 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">Perfect For Your Project</h2>
          <p className="text-text/70 max-w-2xl mx-auto">Discover how our services can handle your specific project needs with professional efficiency</p>
        </div>
        {loading && (
          <div className="text-center text-lg text-primary">Loading services...</div>
        )}
        {error && (
          <div className="text-center text-lg text-red-500">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.slice(0, 2).map((service, idx) => (
              <Link key={service.id} href={`/${service.slug}`} className="block group">
                <div
                  className={`bg-gradient-to-br ${idx === 0 ? 'from-white to-primary/5 border-primary/10' : 'from-white to-secondary/5 border-secondary/10'} rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 group-hover:shadow-2xl cursor-pointer`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${idx === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'} rounded-xl flex items-center justify-center mr-4`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414L10 4.414l.707-.707a1 1 0 00-1.414-1.414zM3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 7H12a1 1 0 100 2h4a1 1 0 011-1v4a1 1 0 11-2 0V8.414l-2.293 2.293a1 1 0 01-1.414 0L10 9.414l-.707.707a1 1 0 01-1.414-1.414L8.586 8H7a1 1 0 00-1 1v4a1 1 0 11-2 0V9a1 1 0 011-1h1.586l2.293-2.293z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-text">{service.name}</h3>
                  </div>
                  {/* Service Image */}
                  {service.image && (
                    <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <p className="text-white text-sm font-medium">{service.name}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-text/70 mb-4">{service.description}</p>
                  {service.service_facilities && service.service_facilities.length > 0 && (
                    <ul className="space-y-3">
                      {service.service_facilities.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-text/70 hover:text-text transition-colors">
                          <svg className="w-4 h-4 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg font-medium"
          >
            Explore More Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 