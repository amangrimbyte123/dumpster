import { Metadata } from 'next';

interface DumpsterSizeLayoutProps {
  children: React.ReactNode;
  params: {
    size: string;
  };
}

export async function generateMetadata({ params }: DumpsterSizeLayoutProps): Promise<Metadata> {
  const size = params.size.replace(/-/g, ' ');
  return {
    title: `${size} Rental in Your Location | Dumpster Rental Services`,
    description: `Rent a ${size} for your project. Learn about dimensions, capacity, pricing, and what you can dispose of. Get a free quote today!`,
  };
}

export default function DumpsterSizeLayout({ children }: DumpsterSizeLayoutProps) {
  return children;
} 