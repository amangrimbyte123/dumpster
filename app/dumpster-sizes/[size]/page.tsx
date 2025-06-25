'use client';

import React from 'react';
import { dumpsterSizes } from '../config';
import Link from 'next/link';
import Image from 'next/image';

interface DumpsterSizePageProps {
  params: {
    size: string;
  };
}

// Function to get dumpster image based on size
const getDumpsterImage = (size: string) => {
  const sizeMap: Record<string, string> = {
    '10-yard': '/dumpster-10-yard.jpg',
    '20-yard': '/dumpster-20-yard.jpg', 
    '30-yard': '/dumpster-30-yard.jpg',
    '40-yard': '/dumpster-40-yard.jpg'
  };
  return sizeMap[size] || '/dumpster-default.jpg';
};

// Function to get size-specific features
const getSizeFeatures = (size: string) => {
  const features: Record<string, string[]> = {
    '10-yard': ['Perfect for small projects', 'Easy to maneuver', 'Residential friendly', 'Quick delivery'],
    '20-yard': ['Ideal for medium projects', 'Versatile capacity', 'Commercial ready', 'Cost-effective'],
    '30-yard': ['Large project capacity', 'Heavy debris handling', 'Construction ready', 'Extended rental options'],
    '40-yard': ['Maximum capacity', 'Major projects', 'Industrial use', 'Bulk disposal']
  };
  return features[size] || features['20-yard'];
};

// Function to get size-specific use cases
const getUseCases = (size: string) => {
  const useCases: Record<string, { residential: string[], commercial: string[] }> = {
    '10-yard': {
      residential: ['Garage cleanouts', 'Small bathroom remodels', 'Basement cleanouts', 'Small landscaping'],
      commercial: ['Office cleanouts', 'Small store renovations', 'Restaurant updates', 'Small construction']
    },
    '20-yard': {
      residential: ['Kitchen remodels', 'Deck demolition', 'Large garage cleanouts', 'Roofing projects'],
      commercial: ['Store renovations', 'Office relocations', 'Restaurant remodels', 'Medium construction']
    },
    '30-yard': {
      residential: ['Whole house cleanouts', 'Major renovations', 'Large landscaping', 'Multi-room projects'],
      commercial: ['Large renovations', 'Construction projects', 'Warehouse cleanouts', 'Industrial projects']
    },
    '40-yard': {
      residential: ['Major demolition', 'Large property cleanouts', 'Construction debris', 'Bulk waste removal'],
      commercial: ['Major construction', 'Industrial cleanouts', 'Large demolition', 'Bulk commercial waste']
    }
  };
  return useCases[size] || useCases['20-yard'];
};

// Function to handle quote requests
const handleQuoteRequest = (size: string) => {
  console.log(`Quote requested for ${size} dumpster`);
  alert(`Quote request for ${size} dumpster - This would open a quote form in a real application`);
};

// Function to handle phone calls
const handlePhoneCall = () => {
  console.log('Phone call requested');
  alert('This would initiate a phone call in a real application');
};

const DumpsterSizePage = ({ params }: DumpsterSizePageProps) => {
  const size = params.size.replace(/-/g, ' ');
  const config = dumpsterSizes[params.size];
  const features = getSizeFeatures(params.size);
  const useCases = getUseCases(params.size);
  
  if (!config) {
    return <div>Dumpster size not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Size Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(dumpsterSizes).map((sizeKey) => (
              <Link
                key={sizeKey}
                href={`/dumpster-sizes/${sizeKey}`}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  params.size === sizeKey
                    ? 'bg-blue-600 text-white shadow-xl scale-105 ring-4 ring-blue-200'
                    : 'bg-white/90 text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg backdrop-blur-sm'
                }`}
              >
                {sizeKey.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Available Now
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {size} Dumpster
                <span className="block text-blue-600">Rental</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Perfect for {size.toLowerCase()} projects. Get reliable waste management with our professional dumpster rental service.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{config.capacity}</div>
                  <div className="text-sm text-gray-600">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{config.weightLimit}</div>
                  <div className="text-sm text-gray-600">Weight Limit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{config.priceRange}</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleQuoteRequest(size)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                </button>
                <button 
                  onClick={handlePhoneCall}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Call Now
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative group">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={config.image}
                  alt={config.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                  priority
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <p className="text-white text-lg font-semibold drop-shadow-lg">{size} Dumpster</p>
                  <p className="text-white text-sm opacity-80 drop-shadow-lg">Professional Waste Management</p>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Size-Specific Content Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={params.size === '10-yard' ? '/dumpster-small-project.jpg' : 
                       params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                       params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                  alt={`${size} dumpster in use`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for Your {size} Project</h2>
              {params.size === '10-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our 10-yard dumpster is the ideal choice for small-scale projects that need efficient waste management. 
                    Perfect for garage cleanouts, small renovations, or decluttering projects.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With a compact size that fits easily in most driveways, this dumpster offers convenience without 
                    taking up too much space. It's perfect for residential projects where space is limited.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">💡 Perfect for: Small home projects, garage cleanouts, and minor renovations</p>
                  </div>
                </div>
              )}
              
              {params.size === '20-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The 20-yard dumpster strikes the perfect balance between capacity and convenience. 
                    Ideal for medium-sized projects that require more space than a small dumpster but don't need industrial capacity.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This versatile size handles everything from kitchen remodels to deck demolitions with ease. 
                    It's our most popular choice for residential renovations.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 font-medium">💡 Perfect for: Kitchen remodels, deck demolition, and medium renovations</p>
                  </div>
                </div>
              )}
              
              {params.size === '30-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    For larger projects that demand substantial waste management, our 30-yard dumpster provides 
                    the capacity you need. Perfect for whole house cleanouts and major construction projects.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This size handles heavy debris and construction materials with ease, making it ideal for 
                    contractors and homeowners tackling significant renovation projects.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 font-medium">💡 Perfect for: Whole house cleanouts, major renovations, and construction projects</p>
                  </div>
                </div>
              )}
              
              {params.size === '40-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our largest dumpster size is designed for major projects and industrial applications. 
                    With maximum capacity, it handles the most demanding waste management needs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Perfect for large demolition projects, commercial cleanouts, and industrial waste disposal. 
                    This size ensures you have all the space you need for even the biggest projects.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 font-medium">💡 Perfect for: Major demolition, commercial projects, and industrial waste</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our {size} Dumpster?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Dimensions & Capacity Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Dimensions</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Length</span>
                    <span className="font-semibold text-gray-900">{config.dimensions.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Width</span>
                    <span className="font-semibold text-gray-900">{config.dimensions.width}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Height</span>
                    <span className="font-semibold text-gray-900">{config.dimensions.height}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Capacity & Pricing</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{config.capacity}</div>
                    <div className="text-gray-600">Total Capacity</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">{config.weightLimit}</div>
                    <div className="text-gray-600">Weight Limit</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{config.priceRange}</div>
                    <div className="text-gray-600">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For Your Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414L10 4.414l.707-.707a1 1 0 00-1.414-1.414zM3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 7H12a1 1 0 100 2h4a1 1 0 011-1v4a1 1 0 11-2 0V8.414l-2.293 2.293a1 1 0 01-1.414 0L10 9.414l-.707.707a1 1 0 01-1.414-1.414L8.586 8H7a1 1 0 00-1 1v4a1 1 0 11-2 0V9a1 1 0 011-1h1.586l2.293-2.293z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Residential Projects</h3>
              </div>
              
              {/* Residential Project Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={params.size === '10-yard' ? '/Residential-Projects-10-yard.jpg' : 
                       params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                       params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                  alt="Residential dumpster project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">Residential Use</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {useCases.residential.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Commercial Projects</h3>
              </div>
              
              {/* Commercial Project Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={params.size === '10-yard' ? '/commercial-Projects-10-yard.jpg' : 
                       params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                       params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                  alt="Commercial dumpster project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">Commercial Use</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {useCases.commercial.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Allowed Items Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Can Go in Your {size}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Allowed Items
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Construction debris', 'Household junk', 'Furniture', 'Yard waste', 'General waste', 'Wood materials'].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Restricted Items
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Hazardous materials', 'Electronics', 'Appliances with Freon', 'Tires', 'Paint and chemicals', 'Medical waste'].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          
          {/* Background Image Section */}
          <div className="relative mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={params.size === '10-yard' ? '/dumpster-small-project.jpg' : 
                     params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                     params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                alt="Dumpster rental process"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-600/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Simple 3-Step Process</h3>
                  <p className="text-lg opacity-90">Get your {size} dumpster delivered and picked up hassle-free</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Book Online',
                description: 'Fill out our simple online form or call us to schedule your delivery.',
                icon: '📋'
              },
              {
                step: '02', 
                title: 'Delivery',
                description: 'We\'ll deliver your dumpster to your specified location at the scheduled time.',
                icon: '🚚'
              },
              {
                step: '03',
                title: 'Pickup',
                description: 'When you\'re done, we\'ll pick up the dumpster and handle proper disposal.',
                icon: '♻️'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free quote for your {size} dumpster rental today. Our team is ready to help you with all your waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest(size)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button 
              onClick={handlePhoneCall}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call (555) 123-4567
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DumpsterSizePage; 