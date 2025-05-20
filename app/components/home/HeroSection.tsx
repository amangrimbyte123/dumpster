import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Find Your Perfect Dumpster
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Reliable dumpster rental services for your needs
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 