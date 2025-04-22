import React, { useState, useEffect } from 'react';
import { Plus, Minus, Search, ArrowRight, MessageSquare, Phone, Mail, Book, Home, DollarSign, FileText, Clock, Calendar, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredCount, setFilteredCount] = useState(0);

  const categories = [
    { id: 'all', name: 'All Questions', icon: Book },
    { id: 'general', name: 'General', icon: Home },
    { id: 'design', name: 'Design & Construction', icon: FileText },
    { id: 'cost', name: 'Cost & Financing', icon: DollarSign },
    { id: 'permits', name: 'Permits & Regulations', icon: CheckCircle },
    { id: 'timeline', name: 'Timeline & Process', icon: Clock }
  ];

  const faqs = [
    {
      category: "general",
      title: "General Questions",
      description: "Basic information about ADUs and our services",
      questions: [
        {
          q: "What is an ADU?",
          a: "An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It can be attached to the main house, converted from an existing space like a garage, or built as a standalone structure.",
          tags: ["basics", "definition"]
        },
        {
          q: "What are the benefits of building an ADU?",
          a: "ADUs offer multiple benefits including: increased property value, rental income potential, multi-generational living solutions, and flexible space for home offices or guests. They're also an eco-friendly housing solution that maximizes existing residential land.",
          tags: ["benefits", "value"]
        },
        {
          q: "Do you handle the entire ADU process?",
          a: "Yes, we provide end-to-end ADU services including design, permitting, construction, and final inspections. Our team coordinates all aspects of the project to ensure a smooth process from start to finish.",
          tags: ["services", "process"]
        },
        {
          q: "What areas do you serve?",
          a: "We currently serve the entire Southern California region, including Los Angeles, Orange County, San Diego, and surrounding areas.",
          tags: ["location", "service area"]
        }
      ]
    },
    {
      category: "design",
      title: "Design & Construction",
      description: "Questions about ADU design options and building process",
      questions: [
        {
          q: "What size ADU can I build?",
          a: "ADU size limits vary by location and lot size, but typically range from 400 to 1,200 square feet. We'll help determine the maximum allowable size for your property during the consultation.",
          tags: ["size", "regulations"]
        },
        {
          q: "Can I customize the design?",
          a: "Yes! While we offer pre-designed models, each can be customized to meet your specific needs and preferences while maintaining compliance with local regulations.",
          tags: ["customization", "design"]
        },
        {
          q: "What types of materials do you use?",
          a: "We use high-quality, durable materials that meet or exceed building codes. Our standard packages include premium finishes, and we offer various upgrade options for enhanced features.",
          tags: ["materials", "quality"]
        },
        {
          q: "Do you offer eco-friendly options?",
          a: "Yes, we offer various eco-friendly and sustainable options including solar panels, energy-efficient appliances, sustainable materials, and water-saving fixtures.",
          tags: ["eco-friendly", "sustainability"]
        }
      ]
    },
    {
      category: "cost",
      title: "Cost & Financing",
      description: "Information about pricing, payments, and financing options",
      questions: [
        {
          q: "How much does an ADU cost?",
          a: "ADU costs typically range from $175,000 to $295,000, depending on size, design, and features. We provide detailed pricing during the consultation and offer various financing options.",
          tags: ["cost", "pricing"]
        },
        {
          q: "Do you offer financing?",
          a: "Yes, we partner with several financial institutions to offer various financing options, including home equity loans, construction loans, and personal loans.",
          tags: ["financing", "loans"]
        },
        {
          q: "Are there additional costs beyond construction?",
          a: "Additional costs may include permits, utility connections, and site preparation. We provide a comprehensive cost breakdown during the planning phase.",
          tags: ["costs", "fees"]
        },
        {
          q: "What payment schedule do you follow?",
          a: "We use a milestone-based payment schedule, with payments tied to specific construction phases. This ensures you only pay for completed work.",
          tags: ["payment", "schedule"]
        }
      ]
    },
    {
      category: "permits",
      title: "Permits & Regulations",
      description: "Understanding legal requirements and approval process",
      questions: [
        {
          q: "What permits are required?",
          a: "ADUs require building permits and may need additional approvals depending on your location. Our team handles all permit applications and coordinates with local authorities.",
          tags: ["permits", "approvals"]
        },
        {
          q: "How long does permitting take?",
          a: "Permit timelines vary by jurisdiction but typically take 4-8 weeks. We manage the entire process and keep you updated on progress.",
          tags: ["timeline", "permits"]
        },
        {
          q: "Do you handle zoning requirements?",
          a: "Yes, we ensure your ADU project complies with all local zoning regulations and setback requirements.",
          tags: ["zoning", "regulations"]
        },
        {
          q: "What about HOA approval?",
          a: "If your property is part of an HOA, we'll help you navigate their approval process and ensure compliance with their requirements.",
          tags: ["HOA", "approval"]
        }
      ]
    },
    {
      category: "timeline",
      title: "Timeline & Process",
      description: "Understanding project timelines and construction process",
      questions: [
        {
          q: "How long does construction take?",
          a: "Construction typically takes 4-6 months from groundbreaking to completion, depending on project complexity and local conditions.",
          tags: ["timeline", "construction"]
        },
        {
          q: "What's the typical timeline from start to finish?",
          a: "The complete process, including design, permitting, and construction, usually takes 6-8 months.",
          tags: ["timeline", "process"]
        },
        {
          q: "Can construction affect my main residence?",
          a: "We minimize disruption to your daily life through careful planning and site management. Most construction activity is contained to the ADU area.",
          tags: ["construction", "impact"]
        },
        {
          q: "How do you handle project delays?",
          a: "We build buffer time into our schedules for unexpected delays. If delays occur, we communicate promptly and adjust the timeline while minimizing impact.",
          tags: ["delays", "timeline"]
        }
      ]
    }
  ];

  const filteredFaqs = faqs.filter(category => 
    selectedCategory === 'all' || category.category === selectedCategory
  ).map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.questions.length > 0);

  useEffect(() => {
    const count = filteredFaqs.reduce((acc, category) => acc + category.questions.length, 0);
    setFilteredCount(count);
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in">
              Find answers to common questions about ADU construction, financing, and more.
              Can't find what you're looking for? Contact us for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/contact" className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <Phone className="h-8 w-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">Speak with an expert</p>
              </div>
            </a>
            <a href="/contact" className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <Mail className="h-8 w-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">Get detailed answers</p>
              </div>
            </a>
            <a href="/contact" className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
              <MessageSquare className="h-8 w-8 text-blue-900 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-gray-600">Chat with our team</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900 text-lg"
                />
              </div>
              {searchTerm && (
                <div className="mt-2 text-gray-600">
                  Found {filteredCount} {filteredCount === 1 ? 'result' : 'results'}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const absoluteIndex = categoryIndex * category.questions.length + index;
                    const isOpen = openIndex === absoluteIndex;
                    
                    return (
                      <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                        <button
                          className="w-full flex items-center justify-between p-6 text-left"
                          onClick={() => setOpenIndex(isOpen ? null : absoluteIndex)}
                        >
                          <div className="flex items-start pr-8">
                            <HelpCircle className={`h-6 w-6 ${isOpen ? 'text-blue-900' : 'text-gray-400'} mr-4 mt-1 flex-shrink-0`} />
                            <span className="font-semibold text-lg">{faq.q}</span>
                          </div>
                          {isOpen ? (
                            <Minus className="h-6 w-6 text-blue-900 flex-shrink-0" />
                          ) : (
                            <Plus className="h-6 w-6 text-blue-900 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="pl-10">
                              <p className="text-gray-600 mb-4">{faq.a}</p>
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span 
                                    key={tagIndex}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our ADU experts</p>
              <a href="tel:+1234567890" className="text-blue-900 font-semibold hover:text-blue-700">
                (123) 456-7890
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
              <a href="mailto:info@premieradubuilders.com" className="text-blue-900 font-semibold hover:text-blue-700">
                Send Email
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="h-8 w-8 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Schedule Consultation</h3>
              <p className="text-gray-600 mb-4">Book a free consultation with our team</p>
              <a href="/contact" className="text-blue-900 font-semibold hover:text-blue-700">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your ADU Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards building your dream ADU. Our team is here to guide you through every step of the process.
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