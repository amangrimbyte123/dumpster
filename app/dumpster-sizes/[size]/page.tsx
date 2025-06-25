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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDY0MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Size Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(dumpsterSizes).map((sizeKey) => (
              <Link
                key={sizeKey}
                href={`/dumpster-sizes/${sizeKey}`}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  params.size === sizeKey
                    ? 'bg-primary text-white shadow-xl scale-105 ring-4 ring-primary/20'
                    : 'bg-white/90 text-text hover:bg-primary/10 hover:text-primary shadow-lg backdrop-blur-sm'
                }`}
              >
                {sizeKey.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Available Now
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
                {size} Dumpster
                <span className="block text-primary">Rental</span>
              </h1>
              <p className="text-xl text-text/70 mb-8 leading-relaxed">
                Perfect for {size.toLowerCase()} projects. Get reliable waste management with our professional dumpster rental service.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{config.capacity}</div>
                  <div className="text-sm text-text/60">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{config.priceRange}</div>
                  <div className="text-sm text-text/60">Starting Price</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleQuoteRequest(size)}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                </button>
                <button 
                  onClick={handlePhoneCall}
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Size-Specific Content Section */}
        <section className="mb-20 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-12">
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
              <h2 className="text-3xl font-bold text-text mb-6">Perfect for Your {size} Project</h2>
              {params.size === '10-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-text/70 leading-relaxed">
                    Our 10-yard dumpster is the ideal choice for small-scale projects that need efficient waste management. 
                    Perfect for garage cleanouts, small renovations, or decluttering projects.
                  </p>
                  <p className="text-text/70 leading-relaxed">
                    With a compact size that fits easily in most driveways, this dumpster offers convenience without 
                    taking up too much space. It's perfect for residential projects where space is limited.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-primary font-medium">💡 Perfect for: Small home projects, garage cleanouts, and minor renovations</p>
                  </div>
                </div>
              )}
              
              {params.size === '20-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-text/70 leading-relaxed">
                    The 20-yard dumpster strikes the perfect balance between capacity and convenience. 
                    Ideal for medium-sized projects that require more space than a small dumpster but don't need industrial capacity.
                  </p>
                  <p className="text-text/70 leading-relaxed">
                    This versatile size handles everything from kitchen remodels to deck demolitions with ease. 
                    It's our most popular choice for residential renovations.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-secondary font-medium">💡 Perfect for: Kitchen remodels, deck demolition, and medium renovations</p>
                  </div>
                </div>
              )}
              
              {params.size === '30-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-text/70 leading-relaxed">
                    For larger projects that demand substantial waste management, our 30-yard dumpster provides 
                    the capacity you need. Perfect for whole house cleanouts and major construction projects.
                  </p>
                  <p className="text-text/70 leading-relaxed">
                    This size handles heavy debris and construction materials with ease, making it ideal for 
                    contractors and homeowners tackling significant renovation projects.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-accent font-medium">💡 Perfect for: Whole house cleanouts, major renovations, and construction projects</p>
                  </div>
                </div>
              )}
              
              {params.size === '40-yard' && (
                <div className="space-y-4">
                  <p className="text-lg text-text/70 leading-relaxed">
                    Our largest dumpster size is designed for major projects and industrial applications. 
                    With maximum capacity, it handles the most demanding waste management needs.
                  </p>
                  <p className="text-text/70 leading-relaxed">
                    Perfect for large demolition projects, commercial cleanouts, and industrial waste disposal. 
                    This size ensures you have all the space you need for even the biggest projects.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-primary font-medium">💡 Perfect for: Major demolition, commercial projects, and industrial waste</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-text text-center mb-12">Why Choose Our {size} Dumpster?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              // Get description for each feature
              const getFeatureDescription = (feature: string) => {
                const descriptions: Record<string, string> = {
                  'Perfect for small projects': 'Ideal capacity for garage cleanouts, small renovations, and decluttering projects without overwhelming your space.',
                  'Easy to maneuver': 'Compact design fits easily in tight spaces, driveways, and residential areas with minimal disruption.',
                  'Residential friendly': 'Perfect size for homes, apartments, and residential properties with convenient delivery and pickup.',
                  'Quick delivery': 'Same-day or next-day delivery available to get your project started immediately.',
                  'Ideal for medium projects': 'Balanced capacity handles kitchen remodels, deck demolition, and medium-scale renovations efficiently.',
                  'Versatile capacity': 'Adaptable size that works for both residential and small commercial projects with flexible rental periods.',
                  'Commercial ready': 'Built to handle commercial waste with reinforced construction and professional service.',
                  'Cost-effective': 'Optimal price point for medium projects, providing excellent value without overpaying for excess capacity.',
                  'Large project capacity': 'Substantial space for whole house cleanouts, major renovations, and construction debris.',
                  'Heavy debris handling': 'Reinforced construction designed to handle heavy materials, concrete, and construction waste.',
                  'Construction ready': 'Professional-grade dumpster built for construction sites and contractor use.',
                  'Extended rental options': 'Flexible rental periods to accommodate longer project timelines and construction schedules.',
                  'Maximum capacity': 'Largest available size for major demolition projects and industrial applications.',
                  'Major projects': 'Designed for large-scale projects requiring maximum waste management capacity.',
                  'Industrial use': 'Heavy-duty construction suitable for industrial sites, factories, and large commercial facilities.',
                  'Bulk disposal': 'Efficient handling of large volumes of waste for major cleanout and demolition projects.'
                };
                return descriptions[feature] || 'Professional waste management solution for your project needs.';
              };

              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-primary/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text mb-3">{feature}</h3>
                  <p className="text-text/60 text-sm leading-relaxed">{getFeatureDescription(feature)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dimensions & Capacity Section */}
        <section className="mb-20 bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Specifications & Pricing</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Detailed specifications and transparent pricing for your {size} dumpster rental</p>
          </div>

          {/* Specifications - Visual Layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 text-center">Dimensions & Specifications</h3>
            
            {/* Visual Dumpster Representation */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Dumpster Visual */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border-2 border-dashed border-primary/30">
                  <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-80"></div>
                  
                  {/* Dimension Labels */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16">
                    <div className="flex items-center">
                      <div className="w-12 h-0.5 bg-primary"></div>
                      <div className="ml-2 text-sm font-semibold text-primary">{config.dimensions.height}</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-12 bg-secondary"></div>
                      <div className="mt-2 text-sm font-semibold text-secondary">{config.dimensions.length}</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16">
                    <div className="flex items-center">
                      <div className="text-sm font-semibold text-accent mr-2">{config.dimensions.width}</div>
                      <div className="w-12 h-0.5 bg-accent"></div>
                    </div>
                  </div>
                </div>
                
                {/* Capacity Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-primary">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{config.capacity}</div>
                    <div className="text-xs text-text/60">Capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                  <h4 className="text-white text-xl font-semibold">Technical Specifications</h4>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{config.dimensions.length}</div>
                      <div className="text-text/60 text-sm">Length</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-secondary mb-1">{config.dimensions.width}</div>
                      <div className="text-text/60 text-sm">Width</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-accent mb-1">{config.dimensions.height}</div>
                      <div className="text-text/60 text-sm">Height</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing - Timeline/Progress Style */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-8 text-center">Pricing & Value</h3>
            
            <div className="max-w-4xl mx-auto">
              {/* Pricing Timeline */}
              <div className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                
                <div className="space-y-8">
                  {/* Base Price */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="text-3xl font-bold text-primary mb-2">{config.priceRange}</div>
                        <div className="text-text/70">Starting Price</div>
                        <div className="text-sm text-text/60 mt-2">Includes delivery & pickup</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* What's Included */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h4 className="font-semibold text-text mb-3">What's Included</h4>
                        <ul className="space-y-2 text-sm text-text/70">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Professional delivery
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Scheduled pickup
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Proper disposal
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Value Proposition */}
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h4 className="font-semibold text-text mb-3">Why Choose Us</h4>
                        <div className="text-sm text-text/70 space-y-2">
                          <div className="flex items-center justify-end">
                            <span>No hidden fees</span>
                            <svg className="w-4 h-4 text-accent ml-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div className="flex items-center justify-end">
                            <span>Competitive pricing</span>
                            <svg className="w-4 h-4 text-accent ml-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div className="flex items-center justify-end">
                            <span>Flexible rental periods</span>
                            <svg className="w-4 h-4 text-accent ml-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Comparison */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-text mb-2">Transparent Pricing</h4>
                  <p className="text-text/70">No surprises, no hidden fees - just honest pricing for quality service</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-2xl font-bold text-primary mb-2">{config.priceRange}</div>
                    <div className="text-sm text-text/60 mb-4">Base Price</div>
                    <div className="text-xs text-text/50">7-day rental period</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-lg font-semibold text-secondary mb-2">+$25/day</div>
                    <div className="text-sm text-text/60 mb-4">Extended Rental</div>
                    <div className="text-xs text-text/50">Additional days</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-lg font-semibold text-accent mb-2">Free</div>
                    <div className="text-sm text-text/60 mb-4">Delivery & Pickup</div>
                    <div className="text-xs text-text/50">Standard service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Use Cases Section */}
        <section className="mb-20 bg-gradient-to-br from-secondary/5 via-white to-accent/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Perfect For Your Project</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Discover how our {size} dumpster can handle your specific project needs with professional efficiency</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-primary/5 rounded-2xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414L10 4.414l.707-.707a1 1 0 00-1.414-1.414zM3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0L10 5.586l2.293-2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 7H12a1 1 0 100 2h4a1 1 0 011-1v4a1 1 0 11-2 0V8.414l-2.293 2.293a1 1 0 01-1.414 0L10 9.414l-.707.707a1 1 0 01-1.414-1.414L8.586 8H7a1 1 0 00-1 1v4a1 1 0 11-2 0V9a1 1 0 011-1h1.586l2.293-2.293z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-text">Residential Projects</h3>
              </div>
              
              {/* Residential Project Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={params.size === '10-yard' ? '/Residential-Projects-10-yard.jpg' : 
                       params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                       params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                  alt="Residential dumpster project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">Residential Use</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {useCases.residential.map((item, index) => (
                  <li key={index} className="flex items-center text-text/70 hover:text-text transition-colors">
                    <svg className="w-4 h-4 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-secondary/5 rounded-2xl p-8 shadow-xl border border-secondary/10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-text">Commercial Projects</h3>
              </div>
              
              {/* Commercial Project Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={params.size === '10-yard' ? '/commercial-Projects-10-yard.jpg' : 
                       params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                       params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                  alt="Commercial dumpster project"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">Commercial Use</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {useCases.commercial.map((item, index) => (
                  <li key={index} className="flex items-center text-text/70 hover:text-text transition-colors">
                    <svg className="w-4 h-4 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Enhanced Allowed Items Section */}
        <section className="mb-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">What Can Go in Your {size}?</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Understanding what materials are accepted helps ensure smooth waste disposal and compliance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-secondary/10 rounded-2xl p-8 shadow-xl border-l-4 border-secondary hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-text mb-6 flex items-center">
                <svg className="w-6 h-6 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Allowed Items
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Construction debris', 'Household junk', 'Furniture', 'Yard waste', 'General waste', 'Wood materials'].map((item, index) => (
                  <div key={index} className="flex items-center text-text/70 hover:text-text transition-colors">
                    <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-xl">
                <p className="text-secondary text-sm font-medium">✅ These items are safely disposed of and recycled when possible</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-xl border-l-4 border-red-500 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-text mb-6 flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Restricted Items
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Hazardous materials', 'Electronics', 'Appliances with Freon', 'Tires', 'Paint and chemicals', 'Medical waste'].map((item, index) => (
                  <div key={index} className="flex items-center text-text/70 hover:text-text transition-colors">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-xl">
                <p className="text-red-600 text-sm font-medium">⚠️ These items require special disposal methods and cannot be accepted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="mb-20 bg-gradient-to-br from-accent/5 via-white to-primary/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">How It Works</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Our streamlined process makes dumpster rental simple and hassle-free</p>
          </div>
          
          {/* Background Image Section */}
          <div className="relative mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={params.size === '10-yard' ? '/dumpster-small-project.jpg' : 
                     params.size === '20-yard' ? '/dumpster-medium-project.jpg' :
                     params.size === '30-yard' ? '/dumpster-large-project.jpg' : '/dumpster-major-project.jpg'}
                alt="Dumpster rental process"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
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
                icon: '📋',
                details: 'Quick booking process with instant confirmation'
              },
              {
                step: '02', 
                title: 'Delivery',
                description: 'We\'ll deliver your dumpster to your specified location at the scheduled time.',
                icon: '🚚',
                details: 'Professional delivery with placement assistance'
              },
              {
                step: '03',
                title: 'Pickup',
                description: 'When you\'re done, we\'ll pick up the dumpster and handle proper disposal.',
                icon: '♻️',
                details: 'Eco-friendly disposal and recycling services'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-primary/5 rounded-2xl p-8 shadow-xl text-center relative border border-primary/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-4">{item.title}</h3>
                <p className="text-text/70 mb-4">{item.description}</p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-primary text-sm font-medium">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New FAQ Section */}
        <section className="mb-20 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Frequently Asked Questions</h2>
            <p className="text-text/70 max-w-2xl mx-auto">Get answers to common questions about {size} dumpster rentals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-text mb-6 flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
                Common Questions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">How long can I keep the dumpster?</h4>
                  <p className="text-text/70 text-sm">Standard rental periods are 7-14 days, with flexible extensions available for longer projects.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">Do you deliver on weekends?</h4>
                  <p className="text-text/70 text-sm">Yes, we offer weekend delivery and pickup services for your convenience.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">What if I need a different size?</h4>
                  <p className="text-text/70 text-sm">We can exchange your dumpster for a different size if needed, with minimal additional charges.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-text mb-6 flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
                Service Details
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">Is delivery included in the price?</h4>
                  <p className="text-text/70 text-sm">Yes, delivery and pickup are included in our standard pricing with no hidden fees.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">Can you place it on my driveway?</h4>
                  <p className="text-text/70 text-sm">We can place the dumpster on driveways, parking lots, or other approved locations.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-text mb-2">What about weather protection?</h4>
                  <p className="text-text/70 text-sm">Our dumpsters are designed to handle various weather conditions and keep contents secure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free quote for your {size} dumpster rental today. Our team is ready to help you with all your waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest(size)}
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button 
              onClick={handlePhoneCall}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
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