import React from 'react';

const PrivacyPolicyPage = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-text/70 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Introduction</h2>
              <p className="text-text/70 mb-6">
                At Dumpster, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our dumpster rental services and website.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
              <p className="text-text/70 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Name and contact information</li>
                <li>Billing and payment information</li>
                <li>Service location details</li>
                <li>Project specifications and requirements</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-text/70 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Provide and manage dumpster rental services</li>
                <li>Process payments and maintain billing records</li>
                <li>Communicate with you about your service</li>
                <li>Send service updates and notifications</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information Sharing</h2>
              <p className="text-text/70 mb-6">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors for billing purposes</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Data Security</h2>
              <p className="text-text/70 mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Your Rights</h2>
              <p className="text-text/70 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text/70">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies and Tracking</h2>
              <p className="text-text/70 mb-6">
                We use cookies and similar tracking technologies to improve your browsing experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-text/70 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
              <p className="text-text/70 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none pl-6 mb-6 space-y-2 text-text/70">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  privacy@dumpster.com
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

export default PrivacyPolicyPage; 