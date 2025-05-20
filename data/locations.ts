import { Location } from './types';

// Default image URL that will be used for all locations
const defaultImageUrl = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";

export const locations: Location[] = [
  {
    id: '1',
    name: 'New York City',
    slug: 'new-york-city',
    state: 'NY',
    description: 'The Big Apple, known for its diverse culture and iconic skyline.',
    imageUrl: defaultImageUrl,
    businessCount: 245,
    popularCategories: ['1', '4', '2']
  },
  {
    id: '2',
    name: 'Los Angeles',
    slug: 'los-angeles',
    state: 'CA',
    description: 'The entertainment capital of the world with beautiful beaches and perfect weather.',
    imageUrl: defaultImageUrl,
    businessCount: 198,
    popularCategories: ['4', '3', '1']
  },
  {
    id: '3',
    name: 'Chicago',
    slug: 'chicago',
    state: 'IL',
    description: 'The Windy City known for its architecture, food, and cultural scene.',
    imageUrl: defaultImageUrl,
    businessCount: 156,
    popularCategories: ['1', '5', '6']
  },
  {
    id: '4',
    name: 'Houston',
    slug: 'houston',
    state: 'TX',
    description: 'The largest city in Texas with a strong economy and diverse population.',
    imageUrl: defaultImageUrl,
    businessCount: 132,
    popularCategories: ['5', '6', '2']
  },
  {
    id: '5',
    name: 'Miami',
    slug: 'miami',
    state: 'FL',
    description: 'Vibrant coastal city known for its beaches, nightlife, and Latin influence.',
    imageUrl: defaultImageUrl,
    businessCount: 167,
    popularCategories: ['3', '1', '4']
  },
  {
    id: '6',
    name: 'Seattle',
    slug: 'seattle',
    state: 'WA',
    description: 'Tech hub surrounded by natural beauty, known for coffee and innovation.',
    imageUrl: defaultImageUrl,
    businessCount: 143,
    popularCategories: ['2', '5', '3']
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
}; 