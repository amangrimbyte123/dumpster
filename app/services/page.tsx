import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Construction Dumpsters",
      description: "Perfect for construction and demolition projects. Available in various sizes to accommodate your project needs.",
      features: [
        "Heavy-duty construction waste handling",
        "Multiple size options",
        "Flexible rental periods",
        "Quick delivery and pickup"
      ]
    },
    {
      title: "Residential Dumpsters",
      description: "Ideal for home renovation, cleanup, and remodeling projects. Make your home projects easier with our residential dumpster solutions.",
      features: [
        "Home renovation waste removal",
        "Yard cleanup solutions",
        "Easy scheduling",
        "Competitive pricing"
      ]
    },
    {
      title: "Commercial Dumpsters",
      description: "Comprehensive waste management solutions for businesses of all sizes. Keep your commercial property clean and compliant.",
      features: [
        "Regular pickup schedules",
        "Business waste management",
        "Compliance with regulations",
        "Customized solutions"
      ]
    },
    {
      title: "Roll-Off Dumpsters",
      description: "Versatile dumpster solutions for various projects. Easy to load and efficient for waste removal.",
      features: [
        "Easy loading access",
        "Multiple size options",
        "Quick delivery service",
        "Flexible rental terms"
      ]
    },
    {
      title: "Specialty Dumpsters",
      description: "Specialized solutions for unique waste management needs. We handle various types of waste with proper disposal methods.",
      features: [
        "Hazardous waste handling",
        "Specialized waste disposal",
        "Compliance with regulations",
        "Expert handling"
      ]
    },
    {
      title: "Event Dumpsters",
      description: "Perfect for festivals, concerts, and large gatherings. Keep your event clean and organized.",
      features: [
        "Event waste management",
        "Temporary solutions",
        "Quick setup and removal",
        "Multiple size options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Comprehensive Dumpster Solutions</h1>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
              We offer a wide range of dumpster rental services to meet your specific needs, 
              from construction projects to residential cleanups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
                <p className="text-text/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text/70">
                      <svg className="h-5 w-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">Need a Custom Solution?</h2>
              <p className="text-text/70 mb-6">
                We understand that every project is unique. Contact us to discuss your specific requirements, 
                and we'll create a customized waste management solution that fits your needs perfectly.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 