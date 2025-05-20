import { Category } from './types';

// Default image URL that will be used for all categories
const defaultImageUrl = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";

export const categories: Category[] = [
  {
    id: '1',
    name: 'Restaurants',
    description: 'Find the best places to eat around your area.',
    slug: 'restaurants',
    imageUrl: defaultImageUrl,
    businessCount: 124,
    popularLocations: ['1', '2', '3'] // NYC, LA, Chicago
  },
  {
    id: '2',
    name: 'Shopping',
    description: 'Discover shopping centers and retail stores.',
    slug: 'shopping',
    imageUrl: defaultImageUrl,
    businessCount: 98,
    popularLocations: ['1', '2', '4'] // NYC, LA, Houston
  },
  {
    id: '3',
    name: 'Health & Wellness',
    description: 'Explore health services and wellness centers.',
    slug: 'health-wellness',
    imageUrl: defaultImageUrl,
    businessCount: 76,
    popularLocations: ['2', '5', '6'] // LA, Miami, Seattle
  },
  {
    id: '4',
    name: 'Entertainment',
    description: 'Find fun activities and entertainment venues.',
    slug: 'entertainment',
    imageUrl: defaultImageUrl,
    businessCount: 82,
    popularLocations: ['1', '2', '5'] // NYC, LA, Miami
  },
  {
    id: '5',
    name: 'Services',
    description: 'Discover professional services for all your needs.',
    slug: 'services',
    imageUrl: defaultImageUrl,
    businessCount: 115,
    popularLocations: ['1', '3', '4'] // NYC, Chicago, Houston
  },
  {
    id: '6',
    name: 'Automotive',
    description: 'Find automotive services and dealerships.',
    slug: 'automotive',
    imageUrl: defaultImageUrl,
    businessCount: 67,
    popularLocations: ['2', '4', '6'] // LA, Houston, Seattle
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
}; 