import Link from 'next/link';
import Image from 'next/image';
import { getCategoryBySlug, getLocationsByCategorySlug } from '../utils/data';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);
  const locations = getLocationsByCategorySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6 group w-fit"
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
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                {category.name}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 flex items-center text-white">
              <span className="text-4xl mr-3">{category.icon}</span>
              {category.name}
            </h1>
            <p className="text-xl text-white/90">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              href={`/${category.slug}/${location.slug}`}
              key={location.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                      {location.name}
                    </h2>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {location.availableDumpsters} Available
                      </span>
                      <span className="text-sm text-text/70">
                        • {category.name}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-text/70 mb-6 line-clamp-2">{location.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform">
                    View Details
                    <svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <svg 
                      className="w-4 h-4 text-secondary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 