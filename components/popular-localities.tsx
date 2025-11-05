"use client";
import { MapPin, TrendingUp, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Locality {
  id: string;
  name: string;
  city: string;
  properties: number;
  avgPrice: string;
  growth: string;
}

const localities: Locality[] = [
  {
    id: "1",
    name: "Sector 21",
    city: "Gurgaon",
    properties: 150,
    avgPrice: "₹1.2 Cr",
    growth: "+12%",
  },
  {
    id: "2",
    name: "Bandra West",
    city: "Mumbai",
    properties: 230,
    avgPrice: "₹2.5 Cr",
    growth: "+18%",
  },
  {
    id: "3",
    name: "Koramangala",
    city: "Bangalore",
    properties: 180,
    avgPrice: "₹1.8 Cr",
    growth: "+15%",
  },
  {
    id: "4",
    name: "Connaught Place",
    city: "Delhi",
    properties: 120,
    avgPrice: "₹3.2 Cr",
    growth: "+10%",
  },
  {
    id: "5",
    name: "Sector 47",
    city: "Gurgaon",
    properties: 95,
    avgPrice: "₹1.5 Cr",
    growth: "+14%",
  },
  {
    id: "6",
    name: "Powai",
    city: "Mumbai",
    properties: 160,
    avgPrice: "₹2.2 Cr",
    growth: "+16%",
  },
];

export function PopularLocalities() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Localities
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore trending areas with best property options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localities.map((locality) => (
            <Card
              key={locality.id}
              className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer bg-card border-border group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {locality.growth}
                </div>
              </div>

              <h3 className="text-xl font-bold text-card-foreground mb-1">
                {locality.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {locality.city}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Home className="w-4 h-4" />
                  <span>{locality.properties} Properties</span>
                </div>
                <div className="text-primary font-bold text-lg">
                  {locality.avgPrice}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
