import React, { useState, useEffect } from 'react';
import { Phone, Gift, Menu, X, ChevronUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 500);
      
      // Show/hide header based on scroll direction
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`bg-white shadow-sm fixed w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-900">Premier ADU Builders</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="/models" className="text-gray-700 hover:text-blue-900 transition-colors">Models</a>
              <a href="/process" className="text-gray-700 hover:text-blue-900 transition-colors">Process</a>
              <a href="/financing" className="text-gray-700 hover:text-blue-900 transition-colors">Financing</a>
              <a href="/adu-info" className="text-gray-700 hover:text-blue-900 transition-colors">ADU Info</a>
              <a href="/warranty" className="text-gray-700 hover:text-blue-900 transition-colors">Warranty</a>
              <a href="/faq" className="text-gray-700 hover:text-blue-900 transition-colors">FAQ</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="/referral" 
                className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all transform hover:scale-105"
              >
                <Gift className="h-5 w-5 mr-2" />
                <span className="font-semibold">Earn $1,200</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">(123) 456-7890</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-blue-900" />
              ) : (
                <Menu className="h-6 w-6 text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 py-2 space-y-2 bg-gray-50">
            <a href="/" className="block py-2 text-gray-700 hover:text-blue-900">Home</a>
            <a href="/models" className="block py-2 text-gray-700 hover:text-blue-900">Models</a>
            <a href="/process" className="block py-2 text-gray-700 hover:text-blue-900">Process</a>
            <a href="/financing" className="block py-2 text-gray-700 hover:text-blue-900">Financing</a>
            <a href="/adu-info" className="block py-2 text-gray-700 hover:text-blue-900">ADU Info</a>
            <a href="/warranty" className="block py-2 text-gray-700 hover:text-blue-900">Warranty</a>
            <a href="/faq" className="block py-2 text-gray-700 hover:text-blue-900">FAQ</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-900">Contact</a>
            <a 
              href="/referral"
              className="block py-2 text-blue-900 font-semibold hover:text-blue-700"
            >
              Earn $1,200 - Referral Program
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Premier ADU Builders</h3>
              <p className="text-gray-300">
                Building your dream ADU with quality, integrity, and excellence.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  {/* Add social media icons here */}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="/models" className="text-gray-300 hover:text-white transition-colors">Models</a>
                <a href="/process" className="text-gray-300 hover:text-white transition-colors">Process</a>
                <a href="/financing" className="text-gray-300 hover:text-white transition-colors">Financing</a>
                <a href="/adu-info" className="text-gray-300 hover:text-white transition-colors">ADU Info</a>
                <a href="/warranty" className="text-gray-300 hover:text-white transition-colors">Warranty</a>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                <a href="/referral" className="text-gray-300 hover:text-white transition-colors">Referral Program</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  (123) 456-7890
                </p>
                <p>123 Construction Ave</p>
                <p>California, CA 90210</p>
                <p>Email: info@premieradubuilders.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Premier ADU Builders. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-blue-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-800 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}