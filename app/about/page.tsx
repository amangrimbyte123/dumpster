import React from 'react';

const AboutPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Welcome to Dumpster, your trusted partner in waste management solutions. We are dedicated to providing efficient, 
          reliable, and environmentally conscious dumpster rental services across your local area.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to simplify waste management for our customers while promoting sustainable practices. 
          We believe in providing top-quality dumpster services that make cleanup projects hassle-free and environmentally responsible.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Extensive range of dumpster sizes for any project</li>
          <li>Fast and reliable delivery and pickup services</li>
          <li>Competitive pricing with no hidden fees</li>
          <li>Environmentally conscious waste disposal practices</li>
          <li>24/7 customer support</li>
          <li>Flexible rental periods</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Services</h2>
        <p className="mb-6">
          We offer a comprehensive range of dumpster services including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Construction and demolition waste removal</li>
          <li>Residential cleanup projects</li>
          <li>Commercial waste management</li>
          <li>Event waste disposal</li>
          <li>Specialty waste handling</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Commitment</h2>
        <p className="mb-6">
          We are committed to providing exceptional service while maintaining the highest standards of environmental responsibility. 
          Our team works diligently to ensure proper waste disposal and recycling practices, contributing to a cleaner and more 
          sustainable future for our community.
        </p>
      </div>
    </div>
  );
};

export default AboutPage; 