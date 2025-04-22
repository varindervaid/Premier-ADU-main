import React from 'react';
import { Home, Bath, Maximize2, DollarSign } from 'lucide-react';
import { aduModels } from '../data/models';
import { formatPrice } from '../utils/format';

export function Calculator() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {aduModels.map((model) => (
          <div key={model.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
            <div className="relative">
              <img 
                src={model.image} 
                alt={model.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full">
                {formatPrice(model.basePrice)}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{model.name}</h3>
              <p className="text-gray-600 mb-6">{model.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-700">
                  <Home className="h-5 w-5 text-blue-900 mr-2" />
                  <span>{model.bedrooms} Bed</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Bath className="h-5 w-5 text-blue-900 mr-2" />
                  <span>{model.bathrooms} Bath</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Maximize2 className="h-5 w-5 text-blue-900 mr-2" />
                  <span>{model.sqft} sqft</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <DollarSign className="h-5 w-5 text-blue-900 mr-2" />
                  <span>{formatPrice(model.basePrice/model.sqft)}/sqft</span>
                </div>
              </div>
              
              <button 
                className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                onClick={() => window.location.href = '/models'}
              >
                Customize This Model
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}