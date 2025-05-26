import React from 'react';
import Link from 'next/link';

const DumpsterSizesSection = () => {
  const dumpsterSizes = [
    {
      size: "10-Yard Dumpster",
      description: "Perfect for small renovation projects, garage cleanouts, and small construction jobs. Holds approximately 3-4 pickup truck loads of debris.",
      icon: "🏠",
      link: "/dumpster-sizes/10-yard"
    },
    {
      size: "20-Yard Dumpster",
      description: "Ideal for medium-sized projects like kitchen remodels, basement cleanouts, and small demolition jobs. Holds approximately 6-8 pickup truck loads.",
      icon: "🏗️",
      link: "/dumpster-sizes/20-yard"
    },
    {
      size: "30-Yard Dumpster",
      description: "Great for large renovation projects, major cleanouts, and medium-sized construction jobs. Holds approximately 9-12 pickup truck loads of debris.",
      icon: "🏢",
      link: "/dumpster-sizes/30-yard"
    },
    {
      size: "40-Yard Dumpster",
      description: "Our largest option, perfect for major construction projects, large-scale demolition, and commercial jobs. Holds approximately 12-16 pickup truck loads.",
      icon: "🏭",
      link: "/dumpster-sizes/40-yard"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Dumpster Sizes
            </span>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Sizes of Dumpsters</h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Choose the perfect dumpster size for your project. We offer a range of options to accommodate any job, big or small.
          </p>
        </div>

        {/* Size Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dumpsterSizes.map((dumpster) => (
            <Link
              key={dumpster.size}
              href={dumpster.link}
              className="px-6 py-3 rounded-full text-lg font-semibold bg-white/80 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {dumpster.size}
            </Link>
          ))}
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {dumpsterSizes.map((dumpster, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl transition-all duration-300 ${
                index % 2 === 0 
                  ? 'bg-primary/5 hover:bg-primary/10' 
                  : 'bg-secondary/5 hover:bg-secondary/10'
              }`}
            >
              <div className="text-6xl md:text-7xl transform hover:scale-110 transition-transform duration-300">
                {dumpster.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-primary mb-4">{dumpster.size}</h3>
                <p className="text-text/70 text-lg leading-relaxed mb-6">{dumpster.description}</p>
                <Link 
                  href={dumpster.link}
                  className="inline-block px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DumpsterSizesSection; 