'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What sizes of dumpsters do you offer?",
    answer: "We offer a variety of dumpster sizes ranging from 10 to 40 cubic yards. Our most popular sizes are 20-yard and 30-yard dumpsters, which are perfect for most residential and commercial projects. Contact us to discuss your specific needs and we'll recommend the best size for your project."
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "Our standard rental period is 7-14 days, but we offer flexible rental terms to accommodate your project timeline. Extended rental periods are available upon request. Additional fees may apply for rentals exceeding the standard period."
  },
  {
    question: "What can I put in the dumpster?",
    answer: "You can dispose of most construction and demolition materials, household junk, yard waste, and general debris. However, hazardous materials, chemicals, tires, batteries, and certain electronics are not permitted. Contact us for a complete list of accepted materials."
  },
  {
    question: "Do I need a permit for the dumpster?",
    answer: "Permit requirements vary by location. If the dumpster will be placed on public property (street, sidewalk), you'll likely need a permit. We can help you determine if a permit is required and assist with the application process. No permit is needed if the dumpster is placed on private property."
  },
  {
    question: "How much does it cost to rent a dumpster?",
    answer: "Dumpster rental costs vary based on size, location, rental duration, and type of materials. Our prices are competitive and include delivery, pickup, and disposal fees. Contact us for a free quote tailored to your specific needs."
  },
  {
    question: "What happens if I need the dumpster longer than planned?",
    answer: "We understand that project timelines can change. We offer flexible rental extensions, though additional fees may apply. Simply contact us before your scheduled pickup date to arrange an extension. We'll work with you to accommodate your needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Find answers to common questions about our dumpster rental services. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <FaChevronDown
                  className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 py-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-text/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-text/70 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 