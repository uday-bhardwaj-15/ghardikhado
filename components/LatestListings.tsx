'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockProperties } from '@/data/mock-properties';

const LatestListings = () => {
  const latestProperties = mockProperties.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-times-new-roman text-deep-ebony mb-4">
            Latest Listings
          </h2>
          <p className="text-lg text-muted-charcoal font-georgia max-w-2xl mx-auto">
            Explore our most recent premium properties added to our collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProperties.map((property) => (
            <div key={property.id} className="group relative bg-soft-ivory rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300">
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
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xl font-bold text-warm-gold">${property.price.toLocaleString('en-US')}</p>
                  <div className="flex items-center">
                    <Image
                      src={property.agent.avatar.replace('.jpg', '.png')}
                      alt={property.agent.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-muted-charcoal">{property.agent.name}</span>
                  </div>
                </div>
                <Link
                  href={`/properties/${property.id}`}
                  className="block w-full bg-deep-ebony text-white py-3 rounded-lg text-center hover:bg-warm-gold hover:text-deep-ebony transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-block px-8 py-3 bg-deep-ebony text-white rounded-full hover:bg-warm-gold hover:text-deep-ebony transition-colors duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestListings;