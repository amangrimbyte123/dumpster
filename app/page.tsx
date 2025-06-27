import fs from 'fs';
import path from 'path';
import HeroSection from './components/home/HeroSection';
import BusinessSection from './components/home/BusinessSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import TopLocationsSection from './components/home/TopLocationsSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import BookSection from './components/home/BookSection';
import FAQSection from './components/home/FAQSection';
import ServicesSection from './components/home/ServicesSection';
import DumpsterSizesSection from './components/home/DumpsterSizesSection';

interface Location {
  id: number;
  name: string;
  address: string;
  slug: string;
  categorySlug: string;
  availableDumpsters: number;
  image?: string;
}

// Function to read JSON data from example_data directory
function getDataFromFile(filename: string) {
  const filePath = path.join(process.cwd(), 'example_data', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with gradient overlay */}
      <div className="relative">
        <HeroSection />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Services Section */}
        <div className="bg-gradient-to-b from-background via-secondary/5 to-background">
          <ServicesSection />
        </div>

        {/* How It Works Section with primary color accents */}
        <div className="bg-gradient-to-b from-background via-primary/5 to-background">
          <HowItWorksSection />
        </div>

        {/* Book Section with secondary color theme */}
        <div className="bg-gradient-to-b from-background via-secondary/10 to-background">
          <BookSection />
        </div>

        {/* Dumpster Sizes Section */}
        <div className="bg-gradient-to-b from-background via-accent/10 to-background">
          <DumpsterSizesSection />
        </div>

        {/* Top Locations Section with enhanced color theme */}
        <div className="bg-gradient-to-b from-background via-primary/10 to-background">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-50" />
            <div className="relative z-10">
              <TopLocationsSection />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section with primary color theme */}
        <div className="bg-gradient-to-b from-background via-primary/10 to-background">
          <WhyChooseUsSection />
        </div>

        {/* FAQ Section with accent color theme */}
        <div className="bg-gradient-to-b from-background via-accent/10 to-background">
          <FAQSection />
        </div>

        {/* Business Section with secondary color theme */}
        <div className="bg-gradient-to-b from-background via-secondary/10 to-background">
          <BusinessSection />
        </div>
      </div>
    </main>
  );
}
