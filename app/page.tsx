import fs from 'fs';
import path from 'path';
import HeroSection from './components/home/HeroSection';
import CategorySection from './components/home/CategorySection';
import BusinessSection from './components/home/BusinessSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import TopLocationsSection from './components/home/TopLocationsSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import BookSection from './components/home/BookSection';
import FAQSection from './components/home/FAQSection';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  slug: string;
  imageUrl: string;
}

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
    <main>
      <HeroSection />
      <CategorySection />
      <HowItWorksSection />
      <BookSection />
      <TopLocationsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <BusinessSection />
    </main>
  );
}
