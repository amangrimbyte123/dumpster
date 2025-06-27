"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaDumpster } from 'react-icons/fa';
import { useCities } from '@/app/hooks/useCities';
import { useServices } from '@/app/hooks/useServices';
import { usePlaceBasic } from '@/app/hooks/usePlaceBasic';

export default function TopLocationsSection() {
  const { cities, loading: citiesLoading } = useCities();
  const { services, loading: servicesLoading } = useServices();
  const { places, loading: placesLoading } = usePlaceBasic();

  if (citiesLoading || servicesLoading || placesLoading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  // Deduplicate cities by name
  const uniqueCitiesMap = new Map();
  cities.forEach(city => {
    if (!uniqueCitiesMap.has(city.name)) {
      uniqueCitiesMap.set(city.name, city);
    }
  });
  const uniqueCities = Array.from(uniqueCitiesMap.values());

  // Get top 10 unique cities
  const topCities = uniqueCities.slice(0, 10);

  // Helper to get service by id
  const getServiceById = (id?: number) => services.find((s) => s.id === id);
  // Helper to get place by city_id
  const getPlaceByCityId = (cityId: number) => places.find((p) => p.city_id === cityId);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Top 10 Locations</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Discover our most popular dumpster rental locations. Each location is carefully selected to serve your needs efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {topCities.map((city, index) => {
            const service = getServiceById(city.service_id);
            const place = getPlaceByCityId(city.id);
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
                    <FaMapMarkerAlt className="mr-2 text-secondary flex-shrink-0" />
                    <span className="truncate">{place?.address || 'No address available'}</span>
                  </div>
                  {/* You can add available dumpsters here if you have that info in place or city */}
                  {/* <div className="flex items-center text-text/70 text-sm">
                    <FaDumpster className="mr-2 text-accent flex-shrink-0" />
                    <span>{place?.availableDumpsters ?? 0} dumpsters available</span>
                  </div> */}
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  {service ? (
                    <Link
                      href={`/${service.slug}/${city.slug}`}
                      className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors text-sm"
                    >
                      View
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-400">No service</span>
                  )}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 