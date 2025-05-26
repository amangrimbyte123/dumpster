import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              About Us
            </span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-text/80 max-w-2xl mx-auto">
            Welcome to Dumpster, your trusted partner in waste management solutions. We are dedicated to providing efficient, 
            reliable, and environmentally conscious dumpster rental services across your local area.
          </p>
        </div>
      
        <div className="prose dark:prose-invert max-w-none bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10">
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Mission</h2>
          <p className="text-text/70 mb-6">
            Our mission is to simplify waste management for our customers while promoting sustainable practices. 
            We believe in providing top-quality dumpster services that make cleanup projects hassle-free and environmentally responsible.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
            <li>Extensive range of dumpster sizes for any project</li>
            <li>Fast and reliable delivery and pickup services</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>Environmentally conscious waste disposal practices</li>
            <li>24/7 customer support</li>
            <li>Flexible rental periods</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Services</h2>
          <p className="text-text/70 mb-6">
            We offer a comprehensive range of dumpster services including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
            <li>Construction and demolition waste removal</li>
            <li>Residential cleanup projects</li>
            <li>Commercial waste management</li>
            <li>Event waste disposal</li>
            <li>Specialty waste handling</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Commitment</h2>
          <p className="text-text/70 mb-6">
            We are committed to providing exceptional service while maintaining the highest standards of environmental responsibility. 
            Our team works diligently to ensure proper waste disposal and recycling practices, contributing to a cleaner and more 
            sustainable future for our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 