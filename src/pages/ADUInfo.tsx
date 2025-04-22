import React from 'react';
import { Home, DollarSign, Leaf, Users, Building, ArrowRight, CheckCircle, AlertCircle, LineChart, PiggyBank, Key, Zap } from 'lucide-react';

export function ADUInfo() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding ADUs</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A comprehensive guide to Accessory Dwelling Units: what they are, their benefits, 
            and why they're becoming increasingly popular in modern housing.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {[
              { href: "#what-is-adu", label: "What is an ADU?" },
              { href: "#benefits", label: "Benefits" },
              { href: "#types", label: "Types of ADUs" },
              { href: "#roi", label: "Return on Investment" },
              { href: "#regulations", label: "Regulations" },
              { href: "#sustainability", label: "Sustainability" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white rounded-full text-blue-900 hover:bg-blue-50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What is an ADU */}
      <section id="what-is-adu" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is an ADU?</h2>
              <p className="text-lg text-gray-600 mb-6">
                An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. 
                These self-contained living spaces can be attached to or detached from the main house, offering 
                complete independent living facilities including kitchen, bathroom, and sleeping areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Legal Living Space</h3>
                    <p className="text-gray-600">Fully permitted and compliant with local building codes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Independent Unit</h3>
                    <p className="text-gray-600">Complete with kitchen, bathroom, and living areas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Usage</h3>
                    <p className="text-gray-600">Can be used for family, rental income, or work space</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80" 
                alt="Modern ADU Example"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Long-Term Benefits of ADUs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-12 w-12 text-blue-900" />,
                title: "Financial Benefits",
                benefits: [
                  "Increased property value",
                  "Rental income potential",
                  "Tax advantages",
                  "Property appreciation",
                  "Mortgage payment offset"
                ]
              },
              {
                icon: <Users className="h-12 w-12 text-blue-900" />,
                title: "Lifestyle Benefits",
                benefits: [
                  "Multi-generational living",
                  "Aging in place",
                  "Home office space",
                  "Guest accommodation",
                  "Independent living space"
                ]
              },
              {
                icon: <Leaf className="h-12 w-12 text-blue-900" />,
                title: "Community Benefits",
                benefits: [
                  "Housing availability",
                  "Urban density solution",
                  "Reduced carbon footprint",
                  "Community diversity",
                  "Local housing solutions"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-900 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of ADUs */}
      <section id="types" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of ADUs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Detached ADU",
                description: "Standalone structure separate from the main house",
                features: ["Complete privacy", "Flexible design", "Yard optimization"],
                image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80"
              },
              {
                title: "Attached ADU",
                description: "Connected to the main house, sharing at least one wall",
                features: ["Cost-effective", "Utility connection ease", "Space efficient"],
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80"
              },
              {
                title: "Garage Conversion",
                description: "Transform existing garage into living space",
                features: ["Minimal construction", "Existing foundation", "Cost savings"],
                image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80"
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-900 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Return on Investment</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LineChart className="h-6 w-6 mr-2" />
                  Property Value Increase
                </h3>
                <p className="text-blue-100">
                  ADUs typically increase property values by 20-30%, often paying for themselves 
                  through appreciation alone.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <PiggyBank className="h-6 w-6 mr-2" />
                  Rental Income Potential
                </h3>
                <p className="text-blue-100">
                  Monthly rental income can range from $1,500 to $3,500, depending on location 
                  and unit size.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Key className="h-6 w-6 mr-2" />
                  Investment Recovery
                </h3>
                <p className="text-blue-100">
                  Most homeowners recover their investment within 5-7 years through rental income 
                  and property appreciation.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Long-Term Value Factors</h3>
              <div className="space-y-4">
                {[
                  "Increasing housing demand",
                  "Rising rental market rates",
                  "Property value appreciation",
                  "Housing shortage solutions",
                  "Multi-generational living trends",
                  "Work-from-home space demand",
                  "Rental market stability",
                  "Housing market resilience"
                ].map((factor, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section id="regulations" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Understanding ADU Regulations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Common Requirements</h3>
              <div className="space-y-4">
                {[
                  "Minimum lot size requirements",
                  "Maximum ADU size limitations",
                  "Setback requirements",
                  "Height restrictions",
                  "Parking requirements",
                  "Owner occupancy rules",
                  "Design compatibility standards",
                  "Utility connection requirements"
                ].map((req, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">{req}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Compliance Benefits</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Legal Protection",
                    description: "Ensure your investment is protected and legally recognized"
                  },
                  {
                    title: "Insurance Coverage",
                    description: "Qualify for proper insurance coverage and protection"
                  },
                  {
                    title: "Resale Value",
                    description: "Maintain and enhance property value for future sale"
                  },
                  {
                    title: "Rental Rights",
                    description: "Legal ability to rent out the unit for income"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sustainability & Efficiency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-blue-900" />,
                title: "Environmental Impact",
                points: [
                  "Reduced carbon footprint",
                  "Efficient land use",
                  "Sustainable materials",
                  "Native landscaping"
                ]
              },
              {
                icon: <Zap className="h-12 w-12 text-blue-900" />,
                title: "Energy Efficiency",
                points: [
                  "Solar panel integration",
                  "Energy-efficient appliances",
                  "Smart home technology",
                  "Optimal insulation"
                ]
              },
              {
                icon: <Building className="h-12 w-12 text-blue-900" />,
                title: "Smart Design",
                points: [
                  "Natural lighting",
                  "Cross ventilation",
                  "Water conservation",
                  "Space optimization"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-900 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your ADU Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your ADU project and explore how we can help you maximize your property's potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" />
            </a>
            <a 
              href="/models"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              View Our Models
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}