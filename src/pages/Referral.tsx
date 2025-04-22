import React from 'react';
import { DollarSign, Users, Gift, ArrowRight, CheckCircle } from 'lucide-react';

export function Referral() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Earn $1,200 For Every Referral</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Know someone who's interested in building an ADU? Refer them to us and earn $1,200 when they sign a contract.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-900" />,
                title: "Refer a Friend",
                description: "Share your referral with friends, family, or neighbors interested in building an ADU."
              },
              {
                icon: <Gift className="h-12 w-12 text-blue-900" />,
                title: "They Sign With Us",
                description: "When your referral signs a contract with Premier ADU Builders."
              },
              {
                icon: <DollarSign className="h-12 w-12 text-blue-900" />,
                title: "Get Rewarded",
                description: "Receive your $1,200 referral bonus once the contract is signed."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Refer?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Earn $1,200 for each successful referral",
              "No limit on number of referrals",
              "Quick and easy referral process",
              "Payment issued within 30 days of contract signing",
              "Help friends and family create additional living space",
              "Share the benefits of working with a trusted builder"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-4 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Refer Someone?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fill out our simple referral form and we'll take care of the rest.
          </p>
          <a 
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center"
          >
            Submit a Referral
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}