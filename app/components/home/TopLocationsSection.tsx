import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { FaMapMarkerAlt, FaDumpster } from 'react-icons/fa';

interface Location {
  id: number;
  name: string;
  address: string;
  slug: string;
  availableDumpsters: number;
  imageUrl: string;
}

function getLocations() {
  const filePath = path.join(process.cwd(), 'example_data', 'Locations.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.locations.slice(0, 10); // Get top 10 locations
}

export default function TopLocationsSection() {
  const locations = getLocations();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top 10 Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular dumpster rental locations. Each location is carefully selected to serve your needs efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {locations.map((location: Location, index: number) => (
            <div 
              key={location.id}
              className="group relative flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
            >
              {/* Location Number */}
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                {index + 1}
              </div>

              {/* Location Image */}
              <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Location Info */}
              <div className="flex-grow min-w-0">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors truncate">
                  {location.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-1 text-sm">
                  <FaMapMarkerAlt className="mr-2 text-red-500 flex-shrink-0" />
                  <span className="truncate">{location.address}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaDumpster className="mr-2 text-green-500 flex-shrink-0" />
                  <span>{location.availableDumpsters} dumpsters available</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                <Link
                  href={`/locations/${location.slug}`}
                  className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors text-sm"
                >
                  View
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/locations"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View All Locations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 