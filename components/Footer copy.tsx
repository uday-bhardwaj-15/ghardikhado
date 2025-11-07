import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-deep-ebony text-soft-ivory py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-times-new-roman mb-4">LUXURY</h3>
            <p className="text-muted-charcoal font-georgia">
              Your trusted partner in finding premium real estate properties.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-times-new-roman">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="block hover:text-warm-gold transition-colors duration-300">Properties</Link></li>
              <li><Link href="/about" className="block hover:text-warm-gold transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="block hover:text-warm-gold transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="block hover:text-warm-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-times-new-roman">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="block hover:text-warm-gold transition-colors duration-300">Property Sales</a></li>
              <li><a href="#" className="block hover:text-warm-gold transition-colors duration-300">Property Rentals</a></li>
              <li><a href="#" className="block hover:text-warm-gold transition-colors duration-300">Property Management</a></li>
              <li><a href="#" className="block hover:text-warm-gold transition-colors duration-300">Investment Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-times-new-roman">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-charcoal hover:text-warm-gold transition-colors duration-300">Facebook</a>
              <a href="#" className="text-muted-charcoal hover:text-warm-gold transition-colors duration-300">Twitter</a>
              <a href="#" className="text-muted-charcoal hover:text-warm-gold transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-charcoal text-center">
          <p className="text-muted-charcoal font-georgia">
            © 2024 Luxury Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;