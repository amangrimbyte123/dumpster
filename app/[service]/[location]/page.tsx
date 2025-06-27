"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { useServices } from '../../hooks/useServices';
import { useCities } from '../../hooks/useCities';
import { usePlaceBasic } from '../../hooks/usePlaceBasic';
import HeroImage from '../../components/HeroImage';
import React, { useMemo, useState } from 'react';

function replaceGoogleImageSize(url: string, newSize: string = '=w1280-h780') {
  // Extract the first w/h values from any =w\d+-h\d+ in the URL
  const match = url.match(/=w(\d+)-h(\d+)/);
  // Only replace the last occurrence of the size pattern at the end
  return url.replace(/=w\d+-h\d+(-[a-z-]+)?$/, newSize);
}

export default function ServiceLocationPage() {
  const params = useParams();
  const { services, loading: loadingServices, error: errorServices } = useServices();
  const { cities, loading: loadingCities, error: errorCities } = useCities();
  const { places, loading: loadingPlaces, error: errorPlaces } = usePlaceBasic();

  // Find service and city by slug
  const service = services.find(s => s.slug === params?.service);
  const city = cities.find(c => c.slug === params?.location && c.service_id === service?.id);

  // Filter places by city_id
  const cityPlaces = useMemo(() => city ? places.filter(place => place.city_id === city.id) : [], [places, city]);

  // Get unique services for filter (from all places in this city)
  const allServices = useMemo(() => Array.from(new Set(cityPlaces.flatMap(p => p.types || []))), [cityPlaces]);

  // Filter state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string>('rating');

  // Filtering logic
  const filteredPlaces = useMemo(() => {
    let filtered = cityPlaces;
    if (selectedServices.length > 0) {
      filtered = filtered.filter(place => (place.types || []).some(type => selectedServices.includes(type)));
    }
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(place => selectedRatings.some(rating => (place.rating || 0) >= rating));
    }
    // Sorting
    if (sortOption === 'rating') {
      filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortOption === 'name') {
      filtered = [...filtered].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    }
    return filtered;
  }, [cityPlaces, selectedServices, selectedRatings, sortOption]);

  if (loadingServices || loadingCities || loadingPlaces) {
    return <div className="text-center text-lg text-primary my-12">Loading...</div>;
  }
  if (errorServices || errorCities || errorPlaces) {
    return <div className="text-center text-lg text-red-500 my-12">{errorServices || errorCities || errorPlaces}</div>;
  }
  if (!service || !city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <HeroImage
        imageUrl={replaceGoogleImageSize(city.image || '')}
        name={city.name}
        description={city.description || ''}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb and Stats */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-text/70 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>→</span>
            <Link href={`/${service.slug}`} className="hover:text-primary transition-colors">{service.name}</Link>
            <span>→</span>
            <span className="text-primary">{city.name}</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 flex items-center justify-between border border-primary/10">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-sm text-text/70">Available Dumpsters</span>
                <p className="text-2xl font-bold text-primary">-</p>
              </div>
              <div>
                <span className="text-sm text-text/70">Total Businesses</span>
                <p className="text-2xl font-bold text-primary">{filteredPlaces.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="border border-primary/20 rounded-md px-3 py-2 text-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Filter Panel */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 sticky top-4 border border-primary/10">
              <h3 className="font-semibold text-lg mb-6 pb-2 border-b border-primary/10 text-primary">Filters</h3>
              {/* Services Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-primary">Services</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allServices.map((service) => (
                    <label key={service} className="flex items-center hover:bg-secondary/5 p-2 rounded-md cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary rounded border-primary/20 focus:ring-primary/50"
                        name="services"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={e => {
                          if (e.target.checked) {
                            setSelectedServices(prev => [...prev, service]);
                          } else {
                            setSelectedServices(prev => prev.filter(s => s !== service));
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-text/70">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-primary">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center hover:bg-secondary/5 p-2 rounded-md cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary rounded border-primary/20 focus:ring-primary/50"
                        name="rating"
                        value={rating}
                        checked={selectedRatings.includes(rating)}
                        onChange={e => {
                          if (e.target.checked) {
                            setSelectedRatings(prev => [...prev, rating]);
                          } else {
                            setSelectedRatings(prev => prev.filter(r => r !== rating));
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-text/70">
                        {rating}+ Stars
                        <span className="text-secondary ml-1">★</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Business Listings */}
          <div className="flex-1">
            <div className="grid gap-6">
              {filteredPlaces.length === 0 ? (
                <div className="text-text/60">No businesses found in this city for this service.</div>
              ) : (
                filteredPlaces.map((place) => (
                  <Link
                    href={`/${service.slug}/${city.slug}/${place.slug}`}
                    key={place.id}
                    className="block bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Business Image */}
                      <div className="w-full md:w-64 h-48 relative flex-shrink-0">
                        <Image
                          src={replaceGoogleImageSize(place.thumbnail || '')}
                          alt={place.title || ''}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={true}
                        />
                      </div>
                      {/* Business Details */}
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-xl font-semibold text-primary">{place.title}</h2>
                          {place.rating && (
                            <div className="flex items-center bg-secondary/10 px-2 py-1 rounded">
                              <span className="text-secondary font-medium">{place.rating}</span>
                              <span className="text-secondary ml-1">★</span>
                            </div>
                          )}
                        </div>
                        {place.address && <p className="text-text/70 mb-4 line-clamp-2">{place.address}</p>}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(place.types || []).map((type, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                        {/* Contact Information */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-text/70">
                          {place.phone && (
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {place.phone}
                            </div>
                          )}
                          {place.website && (
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <a href={place.website} target="_blank" rel="noopener noreferrer" className="underline">{place.website}</a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 