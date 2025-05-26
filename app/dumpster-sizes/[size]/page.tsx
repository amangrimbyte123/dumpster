import React from 'react';
import { Metadata } from 'next';
import { dumpsterSizes } from '../config';
import Link from 'next/link';

interface DumpsterSizePageProps {
  params: {
    size: string;
  };
}

export async function generateMetadata({ params }: DumpsterSizePageProps): Promise<Metadata> {
  const size = params.size.replace(/-/g, ' ');
  return {
    title: `${size} Rental in Your Location | Dumpster Rental Services`,
    description: `Rent a ${size} for your project. Learn about dimensions, capacity, pricing, and what you can dispose of. Get a free quote today!`,
  };
}

const DumpsterSizePage = ({ params }: DumpsterSizePageProps) => {
  const size = params.size.replace(/-/g, ' ');
  const config = dumpsterSizes[params.size];
  
  if (!config) {
    return <div>Dumpster size not found</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Size Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(dumpsterSizes).map((sizeKey) => (
            <Link
              key={sizeKey}
              href={`/dumpster-sizes/${sizeKey}`}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                params.size === sizeKey
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white/80 text-primary hover:bg-primary/10'
              }`}
            >
              {sizeKey.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {size} Rental in Your Location
          </h1>
          <p className="text-lg text-text/70 max-w-3xl mx-auto">
            Looking for a reliable {size} rental service? We provide efficient waste management solutions for your project needs.
          </p>
        </div>

        {/* What Is Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">What Is a {size}?</h2>
          <p className="text-lg text-text/70 mb-8">
            A {size} is a versatile waste management solution perfect for small to medium-sized projects. 
            Its compact size makes it ideal for residential areas while still providing ample space for your debris.
          </p>
        </section>

        {/* Dimensions Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Common Dimensions</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <ul className="space-y-2 text-lg">
              <li>Length: {config.dimensions.length}</li>
              <li>Width: {config.dimensions.width}</li>
              <li>Height: {config.dimensions.height}</li>
            </ul>
          </div>
        </section>

        {/* Capacity Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-4">How Much It Holds</h3>
          <p className="text-lg text-text/70">
            The {size} can hold approximately {config.capacity} of debris, making it perfect for small renovation projects and cleanouts.
            Weight limit: {config.weightLimit}
          </p>
        </section>

        {/* Ideal Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Ideal Projects for a {size}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Residential Projects</h4>
              <ul className="list-disc list-inside space-y-2 text-text/70">
                <li>Garage cleanouts</li>
                <li>Small bathroom remodels</li>
                <li>Basement cleanouts</li>
                <li>Small landscaping projects</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Commercial Projects</h4>
              <ul className="list-disc list-inside space-y-2 text-text/70">
                <li>Office cleanouts</li>
                <li>Small store renovations</li>
                <li>Restaurant updates</li>
                <li>Small construction debris</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Allowed Items Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">What Can Go in a {size}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-green-600">Allowed Items</h4>
              <ul className="list-disc list-inside space-y-2 text-text/70">
                <li>Construction debris</li>
                <li>Household junk</li>
                <li>Furniture</li>
                <li>Yard waste</li>
                <li>General waste</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-red-600">Restricted Items</h4>
              <ul className="list-disc list-inside space-y-2 text-text/70">
                <li>Hazardous materials</li>
                <li>Electronics</li>
                <li>Appliances with Freon</li>
                <li>Tires</li>
                <li>Paint and chemicals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Pricing & Rental Duration</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <p className="text-lg text-text/70 mb-4">
              Our {size} rental includes delivery, pickup, and disposal fees. Typical rental duration is {config.typicalDuration}, with options to extend if needed.
              Price range: {config.priceRange}
            </p>
            <h3 className="text-2xl font-bold text-primary mb-4">Additional Fees</h3>
            <ul className="list-disc list-inside space-y-2 text-text/70">
              <li>Overweight charges (over {config.weightLimit})</li>
              <li>Extended rental fees</li>
              <li>Special item disposal fees</li>
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Step 1: Book Online</h3>
              <p className="text-text/70">Fill out our simple online form or call us to schedule your delivery.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Step 2: Delivery</h3>
              <p className="text-text/70">We'll deliver your dumpster to your specified location at the scheduled time.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Step 3: Pickup</h3>
              <p className="text-text/70">When you're done, we'll pick up the dumpster and handle proper disposal.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Book Your {size} Today</h2>
          <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
            Ready to start your project? Get a free quote and book your {size} rental today. 
            Our team is ready to help you with all your waste management needs.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Get a Free Quote
          </button>
        </section>
      </div>
    </main>
  );
};

export default DumpsterSizePage; 