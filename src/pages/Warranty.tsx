import React from 'react';
import { Shield, CheckCircle, AlertCircle, Clock, Phone, Mail, ArrowRight } from 'lucide-react';

export function Warranty() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our One-Year Warranty</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We stand behind our work with a comprehensive one-year warranty, giving you peace of mind 
            and protection for your investment.
          </p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Warranty Coverage</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our one-year warranty provides comprehensive coverage for your ADU, ensuring protection 
                against defects in materials and workmanship. We're committed to your complete satisfaction 
                and the long-term quality of your ADU.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Structural Elements",
                    items: [
                      "Foundation",
                      "Framing",
                      "Roof structure",
                      "Load-bearing walls",
                      "Support beams"
                    ]
                  },
                  {
                    title: "Systems & Mechanics",
                    items: [
                      "Electrical systems",
                      "Plumbing systems",
                      "HVAC systems",
                      "Ventilation",
                      "Waterproofing"
                    ]
                  },
                  {
                    title: "Interior & Exterior",
                    items: [
                      "Windows and doors",
                      "Interior finishes",
                      "Exterior siding",
                      "Trim work",
                      "Paint and sealants"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-blue-900 mr-3" />
                  Warranty Highlights
                </h3>
                <div className="space-y-4">
                  {[
                    "Full coverage for one year from completion",
                    "Quick response to warranty claims",
                    "Professional repair service",
                    "Transferable to new owners",
                    "No hidden fees or charges",
                    "24/7 emergency support"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-900 mr-3" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-blue-900 mr-3" />
                  Response Times
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      type: "Emergency Issues",
                      time: "Within 24 hours",
                      description: "Critical problems affecting safety or habitability"
                    },
                    {
                      type: "Major Issues",
                      time: "Within 48-72 hours",
                      description: "Significant problems affecting functionality"
                    },
                    {
                      type: "Minor Issues",
                      time: "Within 5-7 business days",
                      description: "Non-critical aesthetic or minor functional issues"
                    }
                  ].map((response, index) => (
                    <div key={index} className="border-b border-blue-100 last:border-0 pb-4 last:pb-0">
                      <div className="font-semibold">{response.type}</div>
                      <div className="text-blue-900">{response.time}</div>
                      <div className="text-sm text-gray-600">{response.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Warranty Claim Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Claim",
                description: "Contact our warranty department via phone, email, or online form"
              },
              {
                step: "2",
                title: "Assessment",
                description: "Our team evaluates the issue and determines coverage"
              },
              {
                step: "3",
                title: "Schedule Service",
                description: "We coordinate with you to schedule the repair work"
              },
              {
                step: "4",
                title: "Resolution",
                description: "Repairs are completed and verified for satisfaction"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-900 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Warranty Exclusions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Not Covered</h3>
              <div className="space-y-4">
                {[
                  "Normal wear and tear",
                  "Damage from natural disasters",
                  "Unauthorized modifications",
                  "Improper maintenance",
                  "Cosmetic issues after 60 days",
                  "Third-party equipment failures",
                  "Damage from misuse or abuse",
                  "Issues from lack of maintenance"
                ].map((exclusion, index) => (
                  <div key={index} className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span>{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Maintenance Requirements</h3>
              <div className="space-y-4">
                {[
                  "Regular HVAC maintenance",
                  "Proper ventilation practices",
                  "Timely repair of minor issues",
                  "Regular cleaning and upkeep",
                  "Following care instructions",
                  "Professional servicing when required",
                  "Maintaining proper drainage",
                  "Regular inspection of seals and caulking"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3" />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Warranty Service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our warranty team is ready to assist you. Contact us through any of these methods:
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a 
              href="tel:+1234567890"
              className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-all"
            >
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Call Us</div>
              <div>(123) 456-7890</div>
            </a>
            <a 
              href="mailto:warranty@premieradubuilders.com"
              className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-all"
            >
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Email Us</div>
              <div>warranty@premieradubuilders.com</div>
            </a>
            <a 
              href="/contact"
              className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-all"
            >
              <ArrowRight className="h-8 w-8 mx-auto mb-4" />
              <div className="font-semibold mb-2">Submit Online</div>
              <div>Use our online form</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}