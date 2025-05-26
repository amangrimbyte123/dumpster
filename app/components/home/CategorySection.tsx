import Image from 'next/image';
import Link from 'next/link';
import categoriesData from '@/example_data/Categories.json';

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Dumpster Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.categories.slice(0, 3).map((category) => (
            <Link href={`/${category.slug}`} key={category.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border border-primary/10 hover:border-primary/20">
                <div className="relative h-48">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{category.name}</h3>
                  <p className="text-text/80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Explore All Categories Button */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg font-medium hover:from-primary/90 hover:to-primary/80 transition-all shadow-lg hover:shadow-xl group"
          >
            Explore All Categories
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 