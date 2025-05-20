import Link from 'next/link';
import Image from 'next/image';
import { getCategoryBySlug, getLocationBySlug, getBusinessBySlug, getBusinessesByLocationSlug } from '../../../utils/data';
import { notFound } from 'next/navigation';
import { StarIcon, MapPinIcon, PhoneIcon, GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface BusinessPageProps {
  params: {
    category: string;
    location: string;
    business: string;
  };
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const category = getCategoryBySlug(params.category);
  const location = getLocationBySlug(params.location);
  const business = getBusinessBySlug(params.business);
  const relatedBusinesses = getBusinessesByLocationSlug(params.location)
    .filter(b => b.id !== business?.id)
    .slice(0, 3);

  if (!category || !location || !business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src={business.images[0] || '/placeholder.jpg'}
          alt={business.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-500/30" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <Link href={`/${category.slug}/${location.slug}`} className="inline-flex items-center text-white/90 hover:text-white mb-4">
              <span className="mr-2">←</span> Back to {location.name}
            </Link>
            <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-sm">{business.name}</h1>
            <p className="text-lg text-white/90 drop-shadow-sm">{business.shortDescription}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(business.rating)
                        ? 'text-yellow-400'
                        : 'text-white/50'
                    }`}
                  />
                ))}
                <span className="ml-2 text-white/90">({business.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(business.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({business.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-600">{business.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(business.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium capitalize">{day}</span>
                    <span className="text-gray-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      {business.address.street}<br />
                      {business.address.city}, {business.address.state} {business.address.zipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-blue-600" />
                  <a href={`tel:${business.contact.phone}`} className="ml-3 text-gray-600 hover:text-blue-600">
                    {business.contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                  <a href={`mailto:${business.contact.email}`} className="ml-3 text-gray-600 hover:text-blue-600">
                    {business.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-6 w-6 text-blue-600" />
                  <a href={business.contact.website} target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-600 hover:text-blue-600">
                    {business.contact.website}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              {Object.entries(business.socialMedia).some(([_, value]) => value) && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    {business.socialMedia.facebook && (
                      <a href={business.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                        </svg>
                      </a>
                    )}
                    {business.socialMedia.instagram && (
                      <a href={business.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {business.socialMedia.twitter && (
                      <a href={business.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Businesses */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Related Businesses in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBusinesses.map((relatedBusiness) => (
              <Link
                key={relatedBusiness.id}
                href={`/${category.slug}/${location.slug}/${relatedBusiness.slug}`}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedBusiness.images[0] || '/placeholder.jpg'}
                    alt={relatedBusiness.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{relatedBusiness.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{relatedBusiness.shortDescription}</p>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{relatedBusiness.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{relatedBusiness.reviewCount} reviews</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 