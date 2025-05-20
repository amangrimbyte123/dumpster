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
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
            <p className="text-text dark:text-gray-300 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-text dark:text-gray-300">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 dark:bg-primary/10 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Need a Custom Solution?</h2>
        <p className="text-text dark:text-gray-300 mb-6">
          We understand that every project is unique. Contact us to discuss your specific requirements, 
          and we'll create a customized waste management solution that fits your needs perfectly.
        </p>
        <Link 
          href="/contact" 
          className="btn-primary inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage; 