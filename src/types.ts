export interface ApartmentUnit {
  id: string;
  name: string;
  badge: string;
  area: number; // m²
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  startingPrice: string;
  description: string;
  image: string;
  floorPlanImage: string;
  highlights: string[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'lazer' | 'bem-estar' | 'praticidade' | 'seguranca';
  description: string;
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fachada' | 'interiores' | 'lazer' | 'decorado';
  image: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NearbyLocation {
  place: string;
  time: string;
  type: 'walk' | 'car';
  category: string;
}
