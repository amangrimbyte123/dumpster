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
    priceRange: '$300-$400'
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
    priceRange: '$400-$500'
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
    priceRange: '$500-$600'
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
    priceRange: '$600-$700'
  }
}; 