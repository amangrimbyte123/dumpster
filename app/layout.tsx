import './globals.css';
import './force-styles.css'; // Force CSS refresh
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter } from 'next/font/google';
import { StyleProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ListingHive - Modern Business Directory',
  description: 'Discover amazing businesses in your area with ListingHive, the modern way to find and connect with local services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <StyleProvider>
          <Header />
          <main className="flex-grow bg-background dark:bg-dark-background">
            {children}
          </main>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
}
