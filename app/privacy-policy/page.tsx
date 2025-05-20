import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Introduction</h2>
        <p className="mb-6">
          At Dumpster, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you use our dumpster rental services and website.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Name and contact information</li>
          <li>Billing and payment information</li>
          <li>Service location details</li>
          <li>Project specifications and requirements</li>
          <li>Communication preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Provide and manage dumpster rental services</li>
          <li>Process payments and maintain billing records</li>
          <li>Communicate with you about your service</li>
          <li>Send service updates and notifications</li>
          <li>Improve our services and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information Sharing</h2>
        <p className="mb-6">
          We do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Service providers who assist in our operations</li>
          <li>Payment processors for billing purposes</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information from unauthorized access, 
          alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, 
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to processing of your information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies and Tracking</h2>
        <p className="mb-6">
          We use cookies and similar tracking technologies to improve your browsing experience on our website. 
          You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
          new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-none pl-6 mb-6 space-y-2">
          <li>Email: privacy@dumpster.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Dumpster Street, Waste Management City, WM 12345</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 