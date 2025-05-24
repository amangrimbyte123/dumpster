'use client';

import { FaTruck, FaClock, FaUsers, FaRecycle, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Get your dumpster delivered within 24 hours of booking",
    stat: "24hr",
    statLabel: "Delivery Time"
  },
  {
    icon: FaClock,
    title: "Flexible Rental",
    description: "Choose rental periods that match your project timeline",
    stat: "14+",
    statLabel: "Days Available"
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    description: "Professional staff ready to assist you 24/7",
    stat: "1000+",
    statLabel: "Happy Customers"
  },
  {
    icon: FaRecycle,
    title: "Eco-Friendly",
    description: "Responsible waste disposal and recycling practices",
    stat: "85%",
    statLabel: "Recycling Rate"
  },
  {
    icon: FaShieldAlt,
    title: "Fully Insured",
    description: "Comprehensive coverage for your peace of mind",
    stat: "100%",
    statLabel: "Coverage"
  },
  {
    icon: FaHandshake,
    title: "Satisfaction Guaranteed",
    description: "Money-back guarantee if you're not satisfied",
    stat: "99%",
    statLabel: "Satisfaction Rate"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            The Best Dumpster Rental Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best dumpster rental experience with unmatched service, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                      {feature.stat}
                    </span>
                    <span className="text-sm text-gray-500">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-white font-medium">
              Ready to get started? <a href="/contact" className="text-white hover:text-blue-100 underline">Contact us</a> for a free quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 