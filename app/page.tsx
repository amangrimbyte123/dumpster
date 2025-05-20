import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import categoriesData from '../example_data/Categories.json';
import HeroSection from './components/home/HeroSection';
import CategorySection from './components/home/CategorySection';
import BusinessSection from './components/home/BusinessSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';

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
      <WhyChooseUsSection />
      <BusinessSection />
    </main>
  );
}
