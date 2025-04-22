import React from 'react';
import { ClipboardCheck, PencilRuler, HardHat, Key, Calendar, Clock, CheckCircle, AlertCircle, Phone } from 'lucide-react';

export function Process() {
  const [activeStep, setActiveStep] = React.useState(1);

  const timelineSteps = [
    {
      step: 1,
      title: "Planning & Design",
      duration: "2-3 weeks",
      icon: ClipboardCheck,
      description: "Comprehensive planning and custom design development",
      details: [
        "Initial site evaluation and consultation",
        "Custom design development with 3D renderings",
        "Material and finish selection",
        "Budget planning and timeline development",
        "Virtual walkthrough presentation"
      ],
      milestones: [
        "Design concept approval",
        "Material selections finalized",
        "Budget sign-off",
        "Timeline confirmation"
      ]
    },
    {
      step: 2,
      title: "Permits & Approvals",
      duration: "4-6 weeks",
      icon: PencilRuler,
      description: "Complete permit acquisition and regulatory compliance",
      details: [
        "Comprehensive permit package preparation",
        "Structural engineering review",
        "Title 24 energy calculations",
        "Zoning compliance verification",
        "HOA approval coordination (if applicable)"
      ],
      milestones: [
        "Permit application submission",
        "Plan check corrections",
        "Final permit approval",
        "Construction schedule confirmation"
      ]
    },
    {
      step: 3,
      title: "Construction",
      duration: "12-16 weeks",
      icon: HardHat,
      description: "Professional construction with regular quality checks",
      details: [
        "Site preparation and foundation work",
        "Framing and structural elements",
        "Electrical and plumbing installation",
        "Interior and exterior finishing",
        "Landscaping and hardscape integration"
      ],
      milestones: [
        "Foundation inspection",
        "Rough-in inspections",
        "Drywall completion",
        "Final finishes installation"
      ]
    },
    {
      step: 4,
      title: "Final Delivery",
      duration: "1-2 weeks",
      icon: Key,
      description: "Thorough completion and handover process",
      details: [
        "Final inspections and certifications",
        "Deep cleaning and preparation",
        "Systems testing and documentation",
        "Owner orientation and training",
        "Warranty documentation delivery"
      ],
      milestones: [
        "Final inspection approval",
        "Certificate of occupancy",
        "Owner walkthrough",
        "Key handover"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Building Process</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A streamlined, transparent approach to building your ADU. From initial design to final handover,
            we ensure a smooth and efficient process.
          </p>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-12">
            {timelineSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`flex items-center p-4 rounded-lg transition-all ${
                  activeStep === step.step
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                <step.icon className={`h-6 w-6 ${
                  activeStep === step.step ? 'text-white' : 'text-blue-900'
                } mr-3`} />
                <div className="text-left">
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-sm opacity-75">{step.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Step Details */}
      {timelineSteps.map((step) => (
        activeStep === step.step && (
          <section key={step.step} className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <step.icon className="h-12 w-12 text-blue-900 mr-4" />
                    <div>
                      <h2 className="text-3xl font-bold">{step.title}</h2>
                      <div className="flex items-center text-gray-600 mt-2">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8">{step.description}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
                      <ul className="space-y-3">
                        {step.milestones.map((milestone, index) => (
                          <li key={index} className="flex items-start">
                            <Calendar className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  {/* Quality Assurance Box */}
                  <div className="bg-gray-50 p-8 rounded-xl mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-blue-900 mr-3" />
                      Quality Assurance
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Regular quality inspections throughout the process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Detailed documentation and progress reports</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Professional oversight and verification</span>
                      </li>
                    </ul>
                  </div>

                  {/* Important Notes Box */}
                  <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <AlertCircle className="h-6 w-6 text-blue-900 mr-3" />
                      Important Notes
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Timeline may vary based on local regulations and weather conditions</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Regular communication and updates provided throughout the process</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-900 mr-3 mt-1" />
                        <span>Flexibility to accommodate changes within project scope</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      ))}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does the entire process take?",
                a: "The typical timeline from initial design to completion is 4-6 months, depending on project complexity and local permitting requirements."
              },
              {
                q: "What happens if there are delays?",
                a: "We maintain transparent communication and will notify you immediately of any potential delays, working proactively to minimize their impact."
              },
              {
                q: "Can I make changes during construction?",
                a: "While we accommodate changes when possible, they may impact timeline and costs. We recommend finalizing decisions during the design phase."
              },
              {
                q: "How do you handle permits?",
                a: "Our team manages the entire permitting process, including application preparation, submission, and coordination with local authorities."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your ADU Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your project and get a detailed timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Consultation
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