import { FaTruck, FaClock, FaDollarSign, FaShieldAlt, FaRecycle, FaHeadset } from 'react-icons/fa';

const businessFeatures = [
  {
    id: 1,
    icon: <FaTruck className="w-12 h-12 text-blue-600" />,
    title: 'Fast Delivery',
    description: 'Quick and reliable dumpster delivery to your location'
  },
  {
    id: 2,
    icon: <FaClock className="w-12 h-12 text-blue-600" />,
    title: 'Flexible Scheduling',
    description: 'Choose delivery and pickup times that work for you'
  },
  {
    id: 3,
    icon: <FaDollarSign className="w-12 h-12 text-blue-600" />,
    title: 'Competitive Pricing',
    description: 'Affordable rates with no hidden fees'
  },
  {
    id: 4,
    icon: <FaShieldAlt className="w-12 h-12 text-blue-600" />,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind'
  },
  {
    id: 5,
    icon: <FaRecycle className="w-12 h-12 text-blue-600" />,
    title: 'Eco-Friendly',
    description: 'Environmentally responsible waste disposal'
  },
  {
    id: 6,
    icon: <FaHeadset className="w-12 h-12 text-blue-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer service'
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide top-quality dumpster rental services with a focus on customer satisfaction
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessFeatures.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 