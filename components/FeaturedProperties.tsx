'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockProperties } from '@/data/mock-properties';

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProperties = mockProperties.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProperties.length]);

  return (
    <section className="py-24 bg-soft-ivory">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-times-new-roman text-deep-ebony mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-charcoal font-georgia max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in prime locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property, index) => (
            <div key={property.id} className="group relative bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.primary_image.replace('.jpg', '.png')}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-deep-ebony text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-times-new-roman text-deep-ebony mb-2">
                  {property.title}
                </h3>
                <p className="text-muted-charcoal font-georgia mb-4">
                  {property.location.city}, {property.location.locality}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-charcoal">
                    {property.bedrooms} beds • {property.bathrooms} baths • {property.area_sqm} sqm
                  </span>
                </div>
                <p className="text-lg font-semibold mt-2 text-warm-gold">${property.price.toLocaleString('en-US')}</p>
                <Link
                  href={`/properties/${property.id}`}
                  className="mt-4 block w-full bg-deep-ebony text-white py-3 rounded-lg text-center hover:bg-warm-gold hover:text-deep-ebony transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
          {featuredProperties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-warm-gold' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;