"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Maximize2 } from "lucide-react"
import { useState, useMemo } from "react"
import Link from "next/link"

interface Property {
  id: number
  title: string
  price: string
  priceNum: number
  location: string
  specs: string
  category: string
  image: string
}

const allProperties: Property[] = [
  {
    id: 1,
    title: "3 BHK Villa",
    price: "₹1.2 Cr",
    priceNum: 12000000,
    location: "Sector 21, Gurgaon",
    specs: "3 BHK • 2500 sq ft",
    category: "villa",
    image: "/luxury-villa.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "₹85 L",
    priceNum: 8500000,
    location: "Bandra, Mumbai",
    specs: "2 BHK • 1200 sq ft",
    category: "flat",
    image: "/modern-apartment.jpg",
  },
  {
    id: 3,
    title: "Premium Penthouse",
    price: "₹2.5 Cr",
    priceNum: 25000000,
    location: "Sector 47, Gurgaon",
    specs: "4 BHK • 4000 sq ft",
    category: "penthouse",
    image: "/luxury-penthouse.png",
  },
  {
    id: 4,
    title: "Cozy Studio",
    price: "₹45 L",
    priceNum: 4500000,
    location: "South Delhi",
    specs: "1 BHK • 600 sq ft",
    category: "pg",
    image: "/studio-apartment.jpg",
  },
  {
    id: 5,
    title: "Family Home",
    price: "₹1.5 Cr",
    priceNum: 15000000,
    location: "Noida Extension",
    specs: "3 BHK • 2200 sq ft",
    category: "house",
    image: "/family-house.jpg",
  },
  {
    id: 6,
    title: "Luxury Duplex",
    price: "₹1.8 Cr",
    priceNum: 18000000,
    location: "Greater Noida",
    specs: "3 BHK • 3000 sq ft",
    category: "villa",
    image: "/duplex-house.jpg",
  },
  {
    id: 7,
    title: "2 BHK Flat",
    price: "₹65 L",
    priceNum: 6500000,
    location: "Dwarka, Delhi",
    specs: "2 BHK • 1000 sq ft",
    category: "flat",
    image: "/2bhk-apartment.jpg",
  },
  {
    id: 8,
    title: "Premium PG",
    price: "₹25 L",
    priceNum: 2500000,
    location: "Connaught Place, Delhi",
    specs: "1 BHK • 400 sq ft",
    category: "pg",
    image: "/premium-pg.jpg",
  },
  {
    id: 9,
    title: "Spacious House",
    price: "₹2 Cr",
    priceNum: 20000000,
    location: "Golf Course Road, Gurgaon",
    specs: "4 BHK • 3500 sq ft",
    category: "house",
    image: "/spacious-house.jpg",
  },
]

const locations = ["Gurgaon", "Mumbai", "Delhi", "Noida", "Bangalore"]
const categories = [
  { value: "flat", label: "Flats" },
  { value: "house", label: "Houses" },
  { value: "villa", label: "Villas" },
  { value: "pg", label: "PG" },
  { value: "penthouse", label: "Penthouse" },
]

export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000000])
  const [selectedLocation, setSelectedLocation] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const filteredProperties = useMemo(() => {
    return allProperties.filter((prop) => {
      const priceMatch = prop.priceNum >= priceRange[0] && prop.priceNum <= priceRange[1]
      const locationMatch = !selectedLocation || prop.location.includes(selectedLocation)
      const categoryMatch = !selectedCategory || prop.category === selectedCategory

      return priceMatch && locationMatch && categoryMatch
    })
  }, [priceRange, selectedLocation, selectedCategory])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Properties</h1>
          <p className="text-foreground/70 mb-8">Find your perfect property from our extensive collection</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border p-6 space-y-6 sticky top-24">
                <div>
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span>Filters</span>
                  </h3>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Price Range</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={Math.floor(priceRange[0] / 100000)}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value) * 100000, priceRange[1]])}
                        placeholder="Min (in L)"
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                      />
                      <span>—</span>
                      <input
                        type="number"
                        value={Math.floor(priceRange[1] / 100000)}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) * 100000])}
                        placeholder="Max (in L)"
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                      />
                    </div>
                    <p className="text-xs text-foreground/60">
                      ₹{Math.floor(priceRange[0] / 100000)}L - ₹{Math.floor(priceRange[1] / 100000)}L
                    </p>
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  >
                    <option value="">All Locations</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Category</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value=""
                        checked={selectedCategory === ""}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      />
                      <span className="text-sm">All Categories</span>
                    </label>
                    {categories.map((cat) => (
                      <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={cat.value}
                          checked={selectedCategory === cat.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                        <span className="text-sm">{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setPriceRange([0, 30000000])
                    setSelectedLocation("")
                    setSelectedCategory("")
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map((property) => (
                    <div
                      key={property.id}
                      className="rounded-xl overflow-hidden bg-white border border-border hover:shadow-lg transition-shadow duration-300 group"
                    >
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <button
                          onClick={() => toggleFavorite(property.id)}
                          className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition"
                        >
                          <Heart
                            className={`w-5 h-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                          />
                        </button>
                      </div>

                      <div className="p-5">
                        <h3 className="text-xl font-bold text-foreground mb-1">{property.title}</h3>
                        <p className="text-2xl font-bold text-primary mb-3">{property.price}</p>

                        <div className="flex items-center gap-2 mb-3 text-foreground/70">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{property.location}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-foreground/70">
                          <Maximize2 className="w-4 h-4" />
                          <span className="text-sm">{property.specs}</span>
                        </div>

                        <Link href={`/property/${property.id}`}>
                          <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-foreground/70">No properties found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
