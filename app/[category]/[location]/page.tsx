import Link from 'next/link';
import Image from 'next/image';
import { getCategoryBySlug, getLocationBySlug, getBusinessesByLocationSlug } from '../../utils/data';
import { notFound } from 'next/navigation';
import HeroImage from '../../components/HeroImage';

interface LocationPageProps {
  params: {
    category: string;
    location: string;
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const category = getCategoryBySlug(params.category);
  const location = getLocationBySlug(params.location);
  const businesses = getBusinessesByLocationSlug(params.location);

  if (!category || !location) {
    notFound();
  }

  // Get unique services for filter
  const allServices = Array.from(new Set(businesses.flatMap(b => b.services)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <HeroImage
        imageUrl={location.imageUrl}
        name={location.name}
        description={location.description}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb and Stats */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-text/70 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>→</span>
            <Link href={`/${category.slug}`} className="hover:text-primary transition-colors">{category.name}</Link>
            <span>→</span>
            <span className="text-primary">{location.name}</span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 flex items-center justify-between border border-primary/10">
            <div className="flex items-center space-x-6">
              <div>
                <span className="text-sm text-text/70">Available Dumpsters</span>
                <p className="text-2xl font-bold text-primary">{location.availableDumpsters}</p>
              </div>
              <div>
                <span className="text-sm text-text/70">Total Businesses</span>
                <p className="text-2xl font-bold text-primary">{businesses.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-primary/20 rounded-md px-3 py-2 text-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Sort by Rating</option>
                <option>Sort by Name</option>
                <option>Sort by Services</option>
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
              {businesses.map((business) => (
                <Link
                  href={`/${category.slug}/${location.slug}/${business.slug}`}
                  key={business.id}
                  className="block bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Business Image */}
                    <div className="w-full md:w-64 h-48 relative flex-shrink-0">
                      <Image
                        src={business.images[0]}
                        alt={business.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={true}
                      />
                    </div>

                    {/* Business Details */}
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-semibold text-primary">{business.name}</h2>
                        <div className="flex items-center bg-secondary/10 px-2 py-1 rounded">
                          <span className="text-secondary font-medium">{business.rating}</span>
                          <span className="text-secondary ml-1">★</span>
                        </div>
                      </div>
                      
                      <p className="text-text/70 mb-4 line-clamp-2">{business.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {business.services.map((service, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-text/70">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {business.contact.phone}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {business.contact.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 