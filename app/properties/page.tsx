"use client";

import React, { useState, useMemo } from "react";
import { mockProperties } from "@/data/mock-properties";
import Image from "next/image";

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property: any) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.city
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        property.location.locality
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesType =
        propertyType === "all" || property.type.toLowerCase() === propertyType;
      const matchesMinPrice =
        minPrice === "" || property.price >= parseInt(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || property.price <= parseInt(maxPrice);
      return matchesSearch && matchesType && matchesMinPrice && matchesMaxPrice;
    });
  }, [searchTerm, propertyType, minPrice, maxPrice]);

  return (
    <div className="container mx-auto py-24 px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-times-new-roman text-deep-ebony mb-4">
          Properties
        </h1>
        <p className="text-lg text-muted-charcoal font-georgia max-w-2xl mx-auto">
          Discover our complete collection of premium properties
        </p>
      </div>

      <div className="mb-12 p-6 bg-soft-ivory rounded-2xl shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <input
            type="text"
            placeholder="Search by location or title"
            className="w-full p-3 border border-champagne-gray rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full p-3 border border-champagne-gray rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            className="w-full p-3 border border-champagne-gray rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-full p-3 border border-champagne-gray rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-warm-gold"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={property.primary_image.replace(".jpg", ".png")}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-deep-ebony text-white px-3 py-1 rounded-full text-sm font-semibold">
                {property.status}
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-charcoal font-georgia mb-2">
                {property.location.city}, {property.location.locality}
              </p>
              <h3 className="text-xl font-bold font-times-new-roman text-deep-ebony mb-4">
                {property.title}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-charcoal">
                  {property.bedrooms} beds • {property.bathrooms} baths •{" "}
                  {property.area_sqm} sqm
                </span>
              </div>
              <p className="text-xl font-bold text-warm-gold mb-4">
                ${property.price.toLocaleString("en-US")}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={property.agent.avatar.replace(".jpg", ".png")}
                    alt={property.agent.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-muted-charcoal">
                    {property.agent.name}
                  </span>
                </div>
                <button className="px-4 py-2 bg-deep-ebony text-white rounded-lg hover:bg-warm-gold hover:text-deep-ebony transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
