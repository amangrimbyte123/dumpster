import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
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
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Dumpster Solutions</h2>
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
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg font-medium"
          >
            Explore More Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 