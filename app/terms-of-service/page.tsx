import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-6">
          By accessing and using Dumpster's services, you agree to be bound by these Terms of Service. 
          If you disagree with any part of these terms, you may not access our services.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Service Description</h2>
        <p className="mb-6">
          Dumpster provides dumpster rental services for various purposes including construction, 
          residential cleanup, commercial waste management, and special events. Our services include 
          delivery, pickup, and proper disposal of waste materials.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Rental Terms</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Rental periods are calculated from the time of delivery</li>
          <li>Extensions must be requested at least 24 hours before scheduled pickup</li>
          <li>Additional fees may apply for extended rental periods</li>
          <li>Weight limits must be adhered to as specified in your rental agreement</li>
          <li>Prohibited materials must not be placed in dumpsters</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Customer Responsibilities</h2>
        <p className="mb-4">As a customer, you agree to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Provide accurate delivery location information</li>
          <li>Ensure safe and accessible delivery location</li>
          <li>Comply with all local regulations and ordinances</li>
          <li>Properly load materials within the dumpster</li>
          <li>Maintain the dumpster in good condition</li>
          <li>Notify us of any issues or damages</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Prohibited Materials</h2>
        <p className="mb-4">The following materials are strictly prohibited:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Hazardous waste</li>
          <li>Flammable materials</li>
          <li>Medical waste</li>
          <li>Radioactive materials</li>
          <li>Asbestos</li>
          <li>Liquids</li>
          <li>Other materials specified in your rental agreement</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Payment Terms</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Payment is due upon delivery unless otherwise arranged</li>
          <li>We accept major credit cards and approved payment methods</li>
          <li>Additional charges may apply for overages or damages</li>
          <li>Late payments may result in service suspension</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Cancellation Policy</h2>
        <p className="mb-6">
          Cancellations must be made at least 24 hours before scheduled delivery. 
          Late cancellations may be subject to a cancellation fee.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Liability</h2>
        <p className="mb-6">
          Dumpster is not liable for any damages or injuries resulting from improper use of our services. 
          Customers are responsible for ensuring proper safety measures are in place during dumpster use.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify these terms at any time. Changes will be effective immediately 
          upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Contact Information</h2>
        <p className="mb-6">
          For questions about these Terms of Service, please contact us at:
        </p>
        <ul className="list-none pl-6 mb-6 space-y-2">
          <li>Email: legal@dumpster.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Dumpster Street, Waste Management City, WM 12345</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 