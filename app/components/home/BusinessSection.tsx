import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import businessesData from '../../../example_data/businesses.json';
import locationsData from '../../../example_data/Locations.json';

const BusinessSection = () => {
  // Get first 6 businesses
  const businesses = businessesData.businesses.slice(0, 6);

  // Create a map of locationId to location slug for quick lookup
  const locationSlugMap: Record<number, string> = locationsData.locations.reduce((acc, location) => {
    acc[location.id] = location.slug;
    return acc;
  }, {} as Record<number, string>);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Businesses</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our trusted partners in waste management and dumpster services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={business.imageUrl}
                  alt={business.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{business.name}</h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-semibold">{business.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2" />
                    <span>{business.contact.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2" />
                    <span>{business.contact.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaGlobe className="mr-2" />
                    <Link 
                      href={`https://${business.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {business.contact.website}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/construction-dumpsters/${locationSlugMap[business.locationId]}/${business.slug}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection; 