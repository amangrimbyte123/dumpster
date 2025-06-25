export interface DumpsterSizeConfig {
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  capacity: string;
  weightLimit: string;
  typicalDuration: string;
  priceRange: string;
  image: string;
  imageAlt: string;
}

export const dumpsterSizes: Record<string, DumpsterSizeConfig> = {
  '10-yard': {
    dimensions: {
      length: '12 feet',
      width: '8 feet',
      height: '4 feet'
    },
    capacity: '3-4 pickup truck loads',
    weightLimit: '2 tons',
    typicalDuration: '7-14 days',
    priceRange: '$300-$400',
    image: '/dumpster-10-yard.jpg',
    imageAlt: 'A small 10-yard dumpster used for home cleanout projects.'
  },
  '20-yard': {
    dimensions: {
      length: '22 feet',
      width: '8 feet',
      height: '4 feet'
    },
    capacity: '6-8 pickup truck loads',
    weightLimit: '4 tons',
    typicalDuration: '7-14 days',
    priceRange: '$400-$500',
    image: '/dumpster-yard.jpg',
    imageAlt: 'A 20-yard dumpster placed in a residential yard for renovation debris.'
  },
  '30-yard': {
    dimensions: {
      length: '22 feet',
      width: '8 feet',
      height: '6 feet'
    },
    capacity: '9-12 pickup truck loads',
    weightLimit: '6 tons',
    typicalDuration: '7-14 days',
    priceRange: '$500-$600',
    image: '/dumpster-construction.jpg',
    imageAlt: 'A large 30-yard dumpster at a construction site.'
  },
  '40-yard': {
    dimensions: {
      length: '22 feet',
      width: '8 feet',
      height: '8 feet'
    },
    capacity: '12-16 pickup truck loads',
    weightLimit: '8 tons',
    typicalDuration: '7-14 days',
    priceRange: '$600-$700',
    image: '/dumpster-industrial.jpg',
    imageAlt: 'A 40-yard industrial dumpster for major cleanouts and commercial use.'
  }
}; 