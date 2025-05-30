import Image from 'next/image';
import Link from 'next/link';
import categoriesData from '../../example_data/Categories.json';

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dumpster Categories</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Find the perfect dumpster solution for your needs
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.categories.map((category) => (
            <Link
              href={`/${category.slug}`}
              key={category.id}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-primary/10">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-text/70">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary font-medium">
                    Learn more
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-text/70 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect dumpster solution for your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
} 