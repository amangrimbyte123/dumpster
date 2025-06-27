"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { usePlaceBasic } from '../../hooks/usePlaceBasic';
import { useCities } from '../../hooks/useCities';
import { usePlacesImages } from '../../hooks/usePlacesImages';

function replaceGoogleImageSize(url: string, newSize: string = '=w1280-h780') {
  // Extract the first w/h values from any =w\d+-h\d+ in the URL
  const match = url.match(/=w(\d+)-h(\d+)/);
  // Only replace the last occurrence of the size pattern at the end
  return url.replace(/=w\d+-h\d+(-[a-z-]+)?$/, newSize);
}

const BusinessSection = () => {
  const { places, loading: loadingPlaces, error: errorPlaces } = usePlaceBasic();
  const { cities, loading: loadingCities, error: errorCities } = useCities();
  const { images, loading: loadingImages, error: errorImages } = usePlacesImages();

  // Get first 6 businesses
  const businesses = places.slice(0, 6);

  // Create a map of cityId to city slug for quick lookup
  const citySlugMap: Record<number, string> = cities.reduce((acc, city) => {
    acc[city.id] = city.slug;
    return acc;
  }, {} as Record<number, string>);

  // Create a map of place_id to first image_url
  const businessImageMap: Record<number, string> = images.reduce((acc, img) => {
    if (img.place_id && img.image_url && !acc[img.place_id]) {
      acc[img.place_id] = img.image_url;
    }
    return acc;
  }, {} as Record<number, string>);

  if (loadingPlaces || loadingCities || loadingImages) {
    return <div className="text-center py-16">Loading...</div>;
  }
  if (errorPlaces || errorCities || errorImages) {
    return <div className="text-center py-16 text-red-500">Error loading businesses or locations.</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Businesses</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Discover our trusted partners in waste management and dumpster services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => {
            const imageUrl = business.thumbnail
              ? replaceGoogleImageSize(business.thumbnail)
              : businessImageMap[business.id]
                ? replaceGoogleImageSize(businessImageMap[business.id])
                : '/images/default-location.jpg';
            return (
              <div
                key={business.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10 hover:border-primary/30"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={business.title || 'Business'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90">{business.title}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-accent mr-1" />
                      <span className="font-semibold text-primary">{business.rating ?? '-'}</span>
                    </div>
                  </div>
                  <p className="text-text/70 mb-4">{business.review_text || business.address || ''}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-text/70">
                      <FaPhone className="mr-2 text-secondary" />
                      <span>{business.phone || '-'}</span>
                    </div>
                    <div className="flex items-center text-text/70">
                      <FaEnvelope className="mr-2 text-secondary" />
                      <span>{business.domain || '-'}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(business.types || []).map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/construction-dumpsters/${citySlugMap[business.city_id ?? 0] || 'unknown'}/${business.slug}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection; 