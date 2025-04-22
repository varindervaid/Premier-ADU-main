import React from 'react';
import { Maximize2, BedDouble, Bath, DollarSign } from 'lucide-react';
import { ADUModel } from '../types';

interface ModelCardProps {
  model: ADUModel;
  selected: boolean;
  onSelect: (model: ADUModel) => void;
  formatPrice: (price: number) => string;
}

export function ModelCard({ model, selected, onSelect, formatPrice }: ModelCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 ${
        selected ? 'ring-2 ring-blue-900' : ''
      }`}
      onClick={() => onSelect(model)}
    >
      <img 
        src={model.image} 
        alt={model.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{model.name}</h3>
        <p className="text-gray-600 mb-4">{model.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Maximize2 className="h-5 w-5 text-blue-900 mr-2" />
            <span>{model.sqft} sqft</span>
          </div>
          <div className="flex items-center">
            <BedDouble className="h-5 w-5 text-blue-900 mr-2" />
            <span>{model.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-5 w-5 text-blue-900 mr-2" />
            <span>{model.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-blue-900 mr-2" />
            <span>From {formatPrice(model.basePrice)}</span>
          </div>
        </div>
        <button 
          className={`w-full py-2 rounded font-semibold ${
            selected
              ? 'bg-blue-900 text-white'
              : 'bg-gray-100 text-blue-900 hover:bg-blue-900 hover:text-white'
          }`}
        >
          {selected ? 'Selected' : 'Select Model'}
        </button>
      </div>
    </div>
  );
}