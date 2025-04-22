export interface ADUModel {
  id: number;
  name: string;
  basePrice: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  description: string;
}

export interface Upgrade {
  id: string;
  name: string;
  price: number;
}