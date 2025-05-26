import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-text/80 max-w-2xl mx-auto">
            Have questions about our dumpster services? We're here to help! Fill out the form and we'll get back to you as soon as possible.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text/70 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="construction">Construction Dumpsters</option>
                  <option value="residential">Residential Dumpsters</option>
                  <option value="commercial">Commercial Dumpsters</option>
                  <option value="roll-off">Roll-Off Dumpsters</option>
                  <option value="specialty">Specialty Dumpsters</option>
                  <option value="event">Event Dumpsters</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Address</h3>
                  <p className="mt-1 text-text/70">
                    123 Dumpster Street<br />
                    Waste Management City, WM 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Phone</h3>
                  <p className="mt-1 text-text/70">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Email</h3>
                  <p className="mt-1 text-text/70">
                    info@dumpster.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Business Hours</h3>
                  <p className="mt-1 text-text/70">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-primary mb-4">Service Area</h3>
              <p className="text-text/70">
                We provide dumpster services throughout the entire metropolitan area and surrounding regions. 
                Contact us to confirm service availability in your specific location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 