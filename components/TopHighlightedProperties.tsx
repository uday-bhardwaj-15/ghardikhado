"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  specs: string;
  image: string;
  featured: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa - Sector 21",
    price: "₹1.2 Cr",
    location: "Sector 21, Gurgaon",
    specs: "3 BHK • 2500 sq ft",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Cozy Studio",
    price: "₹45 L",
    location: "South Delhi",
    specs: "1 BHK • 600 sq ft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Family Home",
    price: "₹1.5 Cr",
    location: "Noida Extension",
    specs: "3 BHK • 2200 sq ft",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Premium Penthouse",
    price: "₹2.5 Cr",
    location: "Sector 47, Gurgaon",
    specs: "4 BHK • 4000 sq ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 5,
    title: "Modern Apartment",
    price: "₹85 L",
    location: "Bandra, Mumbai",
    specs: "2 BHK • 1200 sq ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 6,
    title: "Luxury Duplex",
    price: "₹1.8 Cr",
    location: "Greater Noida",
    specs: "3 BHK • 3000 sq ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    featured: true,
  },
];

export function TopHighlightedProperties() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Top Highlighted Properties
            </h2>
            <p className="text-muted-foreground">
              Handpicked premium properties just for you
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            View All
          </Button>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {properties.map((property) => (
              <Card
                key={property.id}
                className="min-w-[340px] max-w-[340px] flex-shrink-0 snap-center overflow-hidden hover:shadow-xl transition-all duration-300 border-border group/card"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(property.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {property.price}
                  </p>

                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm">{property.specs}</span>
                  </div>

                  <Button className="w-full">View Details</Button>
                </div>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">View All Properties</Button>
        </div>
      </div>
    </section>
  );
}
