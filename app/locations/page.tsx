'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiSearch, FiMapPin, FiTruck } from 'react-icons/fi';
import BookSection from '../components/home/BookSection';
import ServicesSection from '../components/home/ServicesSection';
import DumpsterSizesSection from '../components/home/DumpsterSizesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FAQSection from '../components/home/FAQSection';
import { useCities } from '../hooks/useCities';

export default function LocationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading locations...</p>
        </div>
      </div>
    }>
      {/* Book CTA Section */}
      <BookSection />
      <LocationsContent />
      {/* How It Works and Dumpster Sizes after main content */}
      <ServicesSection />
      <DumpsterSizesSection />
      {/* Why Choose Us and FAQ at the bottom */}
      <WhyChooseUsSection />
      <FAQSection />
    </Suspense>
  );
}

function LocationsContent() {
  const { cities, loading, error, findCities } = useCities();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const itemsPerPage = 12;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filtered cities based on search
  const filteredCities = searchTerm ? findCities(searchTerm) : cities;

  // Remove duplicates by name and zip code
  const uniqueCities = filteredCities.filter((city, index, self) =>
    index === self.findIndex(
      c => c.name.toLowerCase() === city.name.toLowerCase() && (c.zipe_code || '').toLowerCase() === (city.zipe_code || '').toLowerCase()
    )
  );

  useEffect(() => {
    const page = searchParams.get('page');
    const search = searchParams.get('search');
    if (page) setCurrentPage(parseInt(page));
    if (search) setSearchTerm(search);
  }, [searchParams]);

  useEffect(() => {
    const totalItems = uniqueCities.length;
    const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPagesCount);
  }, [uniqueCities, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCities = uniqueCities.slice(startIndex, endIndex);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', searchTerm);
    params.set('page', '1');
    router.push(`/locations?${params.toString()}`);
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsSearching(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/locations?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading locations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Find Locations
            </span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Find Dumpster Locations</h1>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Discover available dumpster locations near you. Search by name or zip code to find the perfect spot for your needs.
          </p>
        </div>
        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
          <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-primary/10">
            <div className="flex-1 flex items-center gap-2 px-4">
              <FiSearch className="text-secondary text-xl" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search locations by name or zip code..."
                className="flex-1 p-2 outline-none text-text/70 bg-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 shadow-lg hover:shadow-xl"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Searching...
                </>
              ) : (
                <>
                  <FiSearch />
                  Search
                </>
              )}
            </button>
          </div>
        </form>
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-text/70">
            Showing {currentCities.length} of {uniqueCities.length} locations
          </p>
        </div>
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCities.map((city) => (
            <div key={city.id} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10">
                <div className="relative h-48">
                  <Image
                    src={city.image || '/city_semple_image.jpg'}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-primary group-hover:text-secondary transition-colors duration-200">
                    {city.name}
                  </h2>
                  <div className="space-y-2">
                    {city.description && (
                      <p className="text-text/70 flex items-center gap-2">
                        <FiTruck className="text-secondary" />
                        {city.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'bg-white/80 text-text/70 hover:bg-secondary/10 border border-primary/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
        {/* No Results Message */}
        {currentCities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-secondary text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-primary mb-2">No locations found</h3>
            <p className="text-text/70">Try adjusting your search terms or browse all locations</p>
          </div>
        )}
      </div>
    </div>
  );
} 