import React from 'react';
import { Camera, Star, Calendar } from 'lucide-react';

export function Gallery() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      title: "Modern Studio ADU",
      location: "Los Angeles, CA",
      completionDate: "2023",
      description: "400 sqft studio with high-end finishes"
    },
    {
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80",
      title: "Backyard Suite",
      location: "San Francisco, CA",
      completionDate: "2023",
      description: "600 sqft 1-bedroom garden retreat"
    },
    {
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
      title: "Family ADU",
      location: "San Diego, CA",
      completionDate: "2023",
      description: "800 sqft 2-bedroom unit"
    },
    {
      image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80",
      title: "Contemporary Guesthouse",
      location: "Santa Barbara, CA",
      completionDate: "2023",
      description: "Modern 1-bedroom design"
    },
    {
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80",
      title: "Luxury Pool House",
      location: "Newport Beach, CA",
      completionDate: "2023",
      description: "High-end studio with pool access"
    },
    {
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80",
      title: "Urban Micro Home",
      location: "Oakland, CA",
      completionDate: "2023",
      description: "Efficient 400 sqft design"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore our completed ADU projects and get inspired for your own dream space.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-200">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-blue-900 mr-2" />
                    <span className="text-gray-600">Completed: {project.completionDate}</span>
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                  <button className="mt-4 text-blue-900 font-semibold hover:text-blue-700">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tours Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Tours Available</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Can't visit in person? Take a virtual tour of our completed ADUs from the comfort of your home.
          </p>
          <div className="text-center">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition">
              Schedule a Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}