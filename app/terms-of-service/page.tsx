import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Legal Information
              </span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Terms of Service</h1>
            <p className="text-text/70 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-text/70 mb-6">
                By accessing and using Dumpster's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Service Description</h2>
              <p className="text-text/70 mb-6">
                Dumpster provides dumpster rental services for various purposes including construction, 
                residential cleanup, commercial waste management, and special events. Our services include 
                delivery, pickup, and proper disposal of waste materials.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Rental Terms</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Rental periods are calculated from the time of delivery</li>
                <li>Extensions must be requested at least 24 hours before scheduled pickup</li>
                <li>Additional fees may apply for extended rental periods</li>
                <li>Weight limits must be adhered to as specified in your rental agreement</li>
                <li>Prohibited materials must not be placed in dumpsters</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Customer Responsibilities</h2>
              <p className="text-text/70 mb-4">As a customer, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Provide accurate delivery location information</li>
                <li>Ensure safe and accessible delivery location</li>
                <li>Comply with all local regulations and ordinances</li>
                <li>Properly load materials within the dumpster</li>
                <li>Maintain the dumpster in good condition</li>
                <li>Notify us of any issues or damages</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Prohibited Materials</h2>
              <p className="text-text/70 mb-4">The following materials are strictly prohibited:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Hazardous waste</li>
                <li>Flammable materials</li>
                <li>Medical waste</li>
                <li>Radioactive materials</li>
                <li>Asbestos</li>
                <li>Liquids</li>
                <li>Other materials specified in your rental agreement</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Payment is due upon delivery unless otherwise arranged</li>
                <li>We accept major credit cards and approved payment methods</li>
                <li>Additional charges may apply for overages or damages</li>
                <li>Late payments may result in service suspension</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Cancellation Policy</h2>
              <p className="text-text/70 mb-6">
                Cancellations must be made at least 24 hours before scheduled delivery. 
                Late cancellations may be subject to a cancellation fee.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Liability</h2>
              <p className="text-text/70 mb-6">
                Dumpster is not liable for any damages or injuries resulting from improper use of our services. 
                Customers are responsible for ensuring proper safety measures are in place during dumpster use.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-text/70 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Contact Information</h2>
              <p className="text-text/70 mb-6">
                For questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none pl-6 mb-6 space-y-2 text-text/70">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  legal@dumpster.com
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Dumpster Street, Waste Management City, WM 12345
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 