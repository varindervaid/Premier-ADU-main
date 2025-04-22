import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, User, Building, ArrowRight, DollarSign } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Your Dream ADU</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Get in touch with our team to discuss your project, schedule a consultation, or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get Started Today</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      >
                        <option value="">Select type</option>
                        <option value="studio">Studio ADU</option>
                        <option value="one-bedroom">1 Bedroom ADU</option>
                        <option value="two-bedroom">2 Bedroom ADU</option>
                        <option value="custom">Custom Design</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      >
                        <option value="">Select budget</option>
                        <option value="150-200k">$150,000 - $200,000</option>
                        <option value="200-250k">$200,000 - $250,000</option>
                        <option value="250-300k">$250,000 - $300,000</option>
                        <option value="300k+">$300,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Timeline</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Ready to start immediately</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@premieradubuilders.com</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600">
                        123 Construction Ave<br />
                        California, CA 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How long does the consultation take?",
                      a: "Initial consultations typically last 45-60 minutes, covering your needs, budget, and timeline."
                    },
                    {
                      q: "Is the consultation free?",
                      a: "Yes, we offer complimentary initial consultations to discuss your project and provide basic guidance."
                    },
                    {
                      q: "What should I prepare?",
                      a: "Having a basic idea of your needs, budget range, and timeline is helpful. We'll guide you through the rest."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="/faq"
                    className="text-blue-900 font-semibold hover:text-blue-700 inline-flex items-center"
                  >
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* Add your map integration here */}
              <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}