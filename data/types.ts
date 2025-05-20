export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  businessCount: number;
  popularLocations: string[]; // IDs of locations
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  state: string;
  description: string;
  imageUrl: string;
  businessCount: number;
  popularCategories: string[]; // IDs of categories
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryIds: string[];
  locationId: string;
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
  rating: number;
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

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
} 