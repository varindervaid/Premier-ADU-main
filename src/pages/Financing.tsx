import React, { useState } from 'react';
import { Building2, PiggyBank, FileText, ShieldCheck, ArrowRight, DollarSign, Calculator, CheckCircle, Calendar, Clock, ChevronDown, ChevronUp, HelpCircle, AlertCircle } from 'lucide-react';

export function Financing() {
  const [activeTab, setActiveTab] = useState('loans');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Smart Financing Solutions for Your ADU
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in">
              Explore flexible financing options with competitive rates and terms tailored to your needs.
              Our partnerships with leading financial institutions ensure you get the best possible terms.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a 
                href="#options"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center"
              >
                View Options
                <ArrowRight className="ml-2" />
              </a>
              <a 
                href="#calculator"
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Payment Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Financing Available", value: "Up to $500k" },
              { label: "Terms Available", value: "Up to 30 Years" },
              { label: "Down Payment", value: "As Low as 10%" },
              { label: "Approval Time", value: "As Fast as 48hrs" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options Tabs */}
      <section id="options" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of financing solutions designed to meet your specific needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              {[
                { id: 'loans', label: 'Loan Options' },
                { id: 'process', label: 'Application Process' },
                { id: 'requirements', label: 'Requirements' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {/* Loan Options */}
            {activeTab === 'loans' && (
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Building2 className="h-12 w-12 text-blue-900" />,
                    title: "Home Equity Loan",
                    description: "Use your home's equity to finance your ADU project",
                    features: [
                      "Fixed interest rates",
                      "Terms up to 30 years",
                      "Tax-deductible interest",
                      "No prepayment penalties",
                      "Large loan amounts available"
                    ],
                    requirements: [
                      "20%+ home equity",
                      "Good credit score",
                      "Stable income history"
                    ]
                  },
                  {
                    icon: <PiggyBank className="h-12 w-12 text-blue-900" />,
                    title: "Construction Loan",
                    description: "Specialized financing for new ADU construction",
                    features: [
                      "Interest-only during construction",
                      "Converts to permanent financing",
                      "Flexible draw schedule",
                      "Construction management support",
                      "Professional inspections included"
                    ],
                    requirements: [
                      "10%+ down payment",
                      "Good credit score",
                      "Detailed construction plan"
                    ]
                  },
                  {
                    icon: <FileText className="h-12 w-12 text-blue-900" />,
                    title: "Personal Loan",
                    description: "Quick funding with minimal documentation",
                    features: [
                      "No collateral required",
                      "Fixed rates available",
                      "Terms up to 12 years",
                      "Quick approval process",
                      "Flexible use of funds"
                    ],
                    requirements: [
                      "Excellent credit score",
                      "Strong income history",
                      "Low debt-to-income ratio"
                    ]
                  }
                ].map((option, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <div className="mb-6">{option.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-3">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-blue-900 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {option.requirements.map((req, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <AlertCircle className="h-5 w-5 text-blue-900 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Application Process */}
            {activeTab === 'process' && (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Application Steps</h3>
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Initial Consultation",
                          description: "Meet with our financing specialists to discuss your needs and options",
                          duration: "45-60 minutes"
                        },
                        {
                          step: "2",
                          title: "Document Collection",
                          description: "Gather necessary financial documents and property information",
                          duration: "1-2 days"
                        },
                        {
                          step: "3",
                          title: "Application Submission",
                          description: "Complete and submit your financing application",
                          duration: "1 day"
                        },
                        {
                          step: "4",
                          title: "Review & Approval",
                          description: "Application review and underwriting process",
                          duration: "3-5 days"
                        },
                        {
                          step: "5",
                          title: "Closing",
                          description: "Sign final documents and receive funding",
                          duration: "1-2 days"
                        }
                      ].map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            {step.step}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold mb-1">{step.title}</h4>
                            <p className="text-gray-600 mb-2">{step.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {step.duration}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="space-y-4">
                        {[
                          {
                            title: "Personal Information",
                            items: [
                              "Government-issued ID",
                              "Social Security number",
                              "Contact information"
                            ]
                          },
                          {
                            title: "Income Verification",
                            items: [
                              "Last 2 years' tax returns",
                              "Recent pay stubs",
                              "W-2 statements"
                            ]
                          },
                          {
                            title: "Property Information",
                            items: [
                              "Current mortgage statement",
                              "Property tax assessment",
                              "Homeowners insurance"
                            ]
                          },
                          {
                            title: "Project Documentation",
                            items: [
                              "ADU plans and specifications",
                              "Construction budget",
                              "Contractor information"
                            ]
                          }
                        ].map((section, index) => (
                          <div key={index}>
                            <h4 className="font-semibold mb-2">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.items.map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-blue-900 mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements */}
            {activeTab === 'requirements' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Qualification Criteria</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Credit Score",
                        description: "Minimum score requirements vary by loan type:",
                        items: [
                          "Home Equity Loan: 660+",
                          "Construction Loan: 680+",
                          "Personal Loan: 720+"
                        ]
                      },
                      {
                        title: "Income Requirements",
                        description: "Stable income history and documentation:",
                        items: [
                          "2+ years employment history",
                          "Debt-to-income ratio under 43%",
                          "Verifiable income sources"
                        ]
                      },
                      {
                        title: "Property Requirements",
                        description: "Your property must meet these criteria:",
                        items: [
                          "Single-family home",
                          "Primary residence",
                          "Meet local ADU regulations"
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-semibold mb-2">{section.title}</h4>
                        <p className="text-gray-600 mb-4">{section.description}</p>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                              <CheckCircle className="h-5 w-5 text-blue-900 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Additional Considerations</h3>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Property Value",
                          description: "Current home value and equity position affect loan options",
                          icon: <Building2 className="h-6 w-6 text-blue-900" />
                        },
                        {
                          title: "Project Timeline",
                          description: "Construction schedule impacts loan structure and disbursement",
                          icon: <Calendar className="h-6 w-6 text-blue-900" />
                        },
                        {
                          title: "Contractor Requirements",
                          description: "Licensed and insured contractors required for construction loans",
                          icon: <FileText className="h-6 w-6 text-blue-900" />
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1">{item.icon}</div>
                          <div className="ml-4">
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What's the minimum down payment required?",
                a: "Down payment requirements vary by loan type. Home equity loans may require no down payment, while construction loans typically require 10-20% down."
              },
              {
                q: "How long does the approval process take?",
                a: "The typical approval process takes 5-10 business days, depending on the loan type and documentation provided."
              },
              {
                q: "Can I pay off my loan early?",
                a: "Yes, all our loan options allow for early payoff with no prepayment penalties."
              },
              {
                q: "What happens if construction takes longer than expected?",
                a: "Our construction loans include built-in flexibility for timeline adjustments, and we can work with you to modify the draw schedule as needed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-semibold">{faq.q}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-900" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-900" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our financing specialists to explore your options
            and find the perfect solution for your ADU project.
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
              View ADU Models
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}