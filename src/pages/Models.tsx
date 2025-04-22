import React, { useState } from 'react';
import { ModelCard } from '../components/ModelCard';
import { aduModels } from '../data/models';
import { upgrades } from '../data/upgrades';
import { formatPrice } from '../utils/format';
import { Home, Bath, Maximize2, DollarSign, CheckCircle, ArrowRight, Camera, Calendar } from 'lucide-react';
import type { ADUModel } from '../types';

export function Models() {
  const [selectedModel, setSelectedModel] = useState<ADUModel | null>(null);
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery' | 'financing'>('overview');

  const calculateTotal = () => {
    if (!selectedModel) return 0;
    const upgradeTotal = selectedUpgrades.reduce((total, upgradeId) => {
      const upgrade = upgrades.find(u => u.id === upgradeId);
      return total + (upgrade?.price || 0);
    }, 0);
    return selectedModel.basePrice + upgradeTotal;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom ADU Models</h1>
          <p className="text-xl text-blue-100">Design your perfect space with our customizable ADU models</p>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {aduModels.map(model => (
              <ModelCard
                key={model.id}
                model={model}
                selected={selectedModel?.id === model.id}
                onSelect={setSelectedModel}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Model Details */}
      {selectedModel && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'features', label: 'Features & Upgrades' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'financing', label: 'Financing' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'text-blue-900 border-b-2 border-blue-900'
                        : 'text-gray-500 hover:text-blue-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">{selectedModel.name}</h2>
                      <p className="text-gray-600 mb-8">{selectedModel.description}</p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center">
                          <Maximize2 className="h-6 w-6 text-blue-900 mr-3" />
                          <div>
                            <div className="font-semibold">{selectedModel.sqft}</div>
                            <div className="text-sm text-gray-500">Square Feet</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Home className="h-6 w-6 text-blue-900 mr-3" />
                          <div>
                            <div className="font-semibold">{selectedModel.bedrooms}</div>
                            <div className="text-sm text-gray-500">Bedrooms</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-6 w-6 text-blue-900 mr-3" />
                          <div>
                            <div className="font-semibold">{selectedModel.bathrooms}</div>
                            <div className="text-sm text-gray-500">Bathrooms</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-6 w-6 text-blue-900 mr-3" />
                          <div>
                            <div className="font-semibold">{formatPrice(selectedModel.basePrice/selectedModel.sqft)}</div>
                            <div className="text-sm text-gray-500">Per Sq Ft</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Standard Features</h3>
                        <ul className="grid grid-cols-2 gap-3">
                          {[
                            "Energy-efficient windows",
                            "Premium insulation",
                            "Modern fixtures",
                            "Luxury vinyl flooring",
                            "Stainless appliances",
                            "LED lighting",
                            "Smart thermostat",
                            "Designer finishes"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-blue-900 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <img
                        src={selectedModel.image}
                        alt={selectedModel.name}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <Calendar className="h-5 w-5 text-blue-900 mr-3" />
                            <span>4-6 months build time</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-900 mr-3" />
                            <span>Fully customizable design</span>
                          </li>
                          <li className="flex items-center">
                            <DollarSign className="h-5 w-5 text-blue-900 mr-3" />
                            <span>Financing available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features & Upgrades Tab */}
                {activeTab === 'features' && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-6">Available Upgrades</h3>
                      <div className="space-y-4">
                        {upgrades.map(upgrade => (
                          <label 
                            key={upgrade.id}
                            className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                          >
                            <input
                              type="checkbox"
                              className="h-5 w-5 text-blue-900 rounded"
                              checked={selectedUpgrades.includes(upgrade.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedUpgrades([...selectedUpgrades, upgrade.id]);
                                } else {
                                  setSelectedUpgrades(selectedUpgrades.filter(id => id !== upgrade.id));
                                }
                              }}
                            />
                            <span className="ml-3 flex-1">{upgrade.name}</span>
                            <span className="text-blue-900 font-semibold">{formatPrice(upgrade.price)}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                        <h3 className="text-xl font-bold mb-6">Your Configuration</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-3 border-b">
                            <span className="text-gray-600">Base Model ({selectedModel.name})</span>
                            <span className="font-semibold">{formatPrice(selectedModel.basePrice)}</span>
                          </div>
                          {selectedUpgrades.map(upgradeId => {
                            const upgrade = upgrades.find(u => u.id === upgradeId)!;
                            return (
                              <div key={upgrade.id} className="flex justify-between items-center py-3 border-b">
                                <span className="text-gray-600">{upgrade.name}</span>
                                <span className="font-semibold">{formatPrice(upgrade.price)}</span>
                              </div>
                            );
                          })}
                          <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4">
                            <span className="text-lg font-semibold">Total Investment</span>
                            <span className="text-2xl font-bold text-blue-900">{formatPrice(calculateTotal())}</span>
                          </div>
                          <button 
                            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                            onClick={() => window.location.href = '/contact'}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <Camera className="text-white opacity-0 group-hover:opacity-100 transition-all" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Financing Tab */}
                {activeTab === 'financing' && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-6">Financing Options</h3>
                      <div className="space-y-6">
                        {[
                          {
                            title: "Construction Loan",
                            description: "Finance your entire project with competitive rates",
                            terms: ["As low as 4.99% APR", "Up to 30-year terms", "Low down payment options"]
                          },
                          {
                            title: "Home Equity Loan",
                            description: "Use your home's equity to fund your ADU",
                            terms: ["Fixed rates", "Tax-deductible interest", "Quick approval process"]
                          },
                          {
                            title: "Cash-Out Refinance",
                            description: "Refinance your home and take cash out for your ADU",
                            terms: ["Competitive rates", "Single monthly payment", "Potential tax benefits"]
                          }
                        ].map((option, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                            <ul className="space-y-2">
                              {option.terms.map((term, i) => (
                                <li key={i} className="flex items-center text-sm">
                                  <CheckCircle className="h-4 w-4 text-blue-900 mr-2" />
                                  <span>{term}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-6">Estimated Monthly Payment</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-3 border-b border-blue-200">
                            <span>Project Cost</span>
                            <span className="font-semibold">{formatPrice(calculateTotal())}</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-blue-200">
                            <span>Down Payment (20%)</span>
                            <span className="font-semibold">{formatPrice(calculateTotal() * 0.2)}</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-blue-200">
                            <span>Loan Amount</span>
                            <span className="font-semibold">{formatPrice(calculateTotal() * 0.8)}</span>
                          </div>
                          <div className="flex justify-between items-center py-4 bg-white rounded-lg px-4">
                            <span className="text-lg font-semibold">Est. Monthly Payment</span>
                            <span className="text-2xl font-bold text-blue-900">
                              {formatPrice((calculateTotal() * 0.8) * 0.006)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            *Estimated payment based on 30-year term at 5.99% APR. Actual rates may vary.
                          </p>
                          <button 
                            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                            onClick={() => window.location.href = '/financing'}
                          >
                            Explore Financing Options
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream ADU?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your project and get a detailed quote.
          </p>
          <a 
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center"
          >
            Schedule Consultation
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}