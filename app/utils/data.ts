import categoriesData from '../../example_data/Categories.json';
import locationsData from '../../example_data/Locations.json';
import businessesData from '../../example_data/businesses.json';

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  businessCount: number;
  popularLocations: string[];
  icon: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  description: string;
  imageUrl: string;
  businessCount: number;
  popularCategories: string[];
  categoryId: string;
  availableDumpsters: number;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryIds: string[];
  locationId: string;
  services: string[];
  rating: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  images: string[];
  reviewCount: number;
  features: string[];
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Helper function to generate slugs
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Default image URL
const defaultImageUrl = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";

// Add slugs and required fields to the data
const categoriesWithSlugs = categoriesData.categories.map(category => ({
  id: String(category.id),
  name: category.name,
  description: category.description,
  slug: generateSlug(category.name),
  imageUrl: category.imageUrl || defaultImageUrl,
  businessCount: Math.floor(Math.random() * 100) + 50,
  popularLocations: ['1', '2', '3'],
  icon: category.icon || '🏢'
}));

const locationsWithSlugs = locationsData.locations.map(location => ({
  id: String(location.id),
  name: location.name,
  slug: generateSlug(location.name),
  state: location.address.split(',')[1]?.trim() || 'NY',
  description: `Explore businesses in ${location.name}`,
  imageUrl: defaultImageUrl,
  businessCount: Math.floor(Math.random() * 50) + 20,
  popularCategories: ['1', '2', '3'],
  categoryId: String(location.categoryId),
  availableDumpsters: Math.floor(Math.random() * 5) + 1
}));

const businessesWithSlugs = businessesData.businesses.map(business => ({
  id: String(business.id),
  name: business.name,
  slug: generateSlug(business.name),
  description: business.description,
  shortDescription: business.description.substring(0, 100) + '...',
  categoryIds: ['1', '2', '3'],
  locationId: String(business.locationId),
  services: business.services,
  rating: business.rating,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  },
  contact: {
    phone: business.contact.phone,
    email: business.contact.email,
    website: business.contact.website
  },
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  images: [business.imageUrl],
  reviewCount: Math.floor(Math.random() * 100) + 1,
  features: business.services,
  hours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}));

export const getCategories = (): Category[] => {
  return categoriesWithSlugs;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categoriesWithSlugs.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categoriesWithSlugs.find(category => category.slug === slug);
};

export const getLocationsByCategorySlug = (categorySlug: string): Location[] => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return locationsWithSlugs.filter(location => location.categoryId === category.id);
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locationsWithSlugs.find(location => location.slug === slug);
};

export const getBusinesses = (): Business[] => {
  return businessesWithSlugs;
};

export const getBusinessesByLocationSlug = (locationSlug: string): Business[] => {
  const location = getLocationBySlug(locationSlug);
  if (!location) return [];
  return businessesWithSlugs.filter(business => business.locationId === location.id);
};

export const getBusinessBySlug = (slug: string): Business | undefined => {
  return businessesWithSlugs.find(business => business.slug === slug);
}; 