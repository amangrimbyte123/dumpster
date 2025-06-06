import { FaTruck, FaCalendarAlt, FaTrash, FaCheckCircle } from 'react-icons/fa';

const steps = [
  {
    icon: FaTruck,
    title: 'Choose Your Dumpster',
    description: 'Select the perfect dumpster size for your project from our wide range of options.'
  },
  {
    icon: FaCalendarAlt,
    title: 'Schedule Delivery',
    description: 'Pick your preferred delivery date and time that works best for your schedule.'
  },
  {
    icon: FaTrash,
    title: 'Fill Your Dumpster',
    description: 'Take your time to fill the dumpster with your waste materials.'
  },
  {
    icon: FaCheckCircle,
    title: 'We Handle the Rest',
    description: 'We\'ll pick up the dumpster and properly dispose of all materials.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">How It Works</h2>
        <p className="text-text/80 text-center mb-12 max-w-2xl mx-auto">
          Getting started with our dumpster rental service is simple and straightforward. Follow these easy steps to get your project rolling.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/90 transition-colors">{step.title}</h3>
              <p className="text-text/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 