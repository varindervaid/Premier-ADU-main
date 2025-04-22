import React from 'react';
import { ArrowRight, Shield, Clock, Zap, Leaf, DollarSign, Award, Star } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-down">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Transform Your Property
                  <span className="block text-blue-400">Add Value & Space</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  Custom ADU solutions that blend seamlessly with your home. 
                  Increase your property value and create the perfect space for family or rental income.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/models" 
                    className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center group transition-all"
                  >
                    View Our Models
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">30%</div>
                      <div className="text-sm">Average Property Value Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">$2.5k</div>
                      <div className="text-sm">Monthly Rental Income Potential</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">4-6</div>
                      <div className="text-sm">Months Average Build Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">100%</div>
                      <div className="text-sm">Satisfaction Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Premier ADU</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional ADU solutions with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-900" />,
                title: "Quality Guaranteed",
                description: "Premium materials and expert craftsmanship backed by our satisfaction guarantee",
                features: ["10-year warranty", "Premium materials", "Expert installation"]
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-900" />,
                title: "Fast Construction",
                description: "Efficient build process with minimal disruption to your daily life",
                features: ["4-6 month completion", "Organized timeline", "Regular updates"]
              },
              {
                icon: <DollarSign className="h-12 w-12 text-blue-900" />,
                title: "Smart Investment",
                description: "Increase your property value and create rental income opportunities",
                features: ["Property value increase", "Rental potential", "Tax benefits"]
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-900 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make building your ADU easy and stress-free
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Design", description: "Choose and customize your perfect ADU design" },
              { number: "02", title: "Permits", description: "We handle all permits and approvals" },
              { number: "03", title: "Build", description: "Expert construction with regular updates" },
              { number: "04", title: "Move In", description: "Final inspection and ready for occupancy" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-900 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join hundreds of satisfied homeowners who trusted us with their ADU projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The entire process was smooth and professional. Our ADU has added significant value to our property.",
                author: "Michael R.",
                location: "San Francisco"
              },
              {
                quote: "Exceptional quality and attention to detail. The team was responsive and kept us informed throughout.",
                author: "Sarah L.",
                location: "Los Angeles"
              },
              {
                quote: "We're generating great rental income from our ADU. Best investment we've made in our property.",
                author: "David M.",
                location: "San Diego"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-8 rounded-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-blue-200">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your ADU project and get a custom quote
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Schedule Consultation
            </a>
            <a 
              href="/models" 
              className="bg-gray-100 hover:bg-gray-200 text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View Models
            </a>
          </div>
        </div>
      </section>
    </>
  );
}