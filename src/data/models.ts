import { ADUModel } from '../types';

export const aduModels: ADUModel[] = [
  {
    id: 1,
    name: "The Studio Plus",
    basePrice: 175000,
    sqft: 400,
    bedrooms: 0,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
    description: "Perfect starter ADU with modern amenities and efficient design."
  },
  {
    id: 2,
    name: "The Garden Suite",
    basePrice: 225000,
    sqft: 600,
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
    description: "Spacious 1-bedroom unit with full kitchen and private garden entrance."
  },
  {
    id: 3,
    name: "The Family Unit",
    basePrice: 295000,
    sqft: 800,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80",
    description: "Luxurious 2-bedroom ADU perfect for family or rental income."
  }
];