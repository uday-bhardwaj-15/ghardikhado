"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Maximize2, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface PropertyDetail {
  id: number
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  bathrooms: number
  category: string
  description: string
  image: string
  images: string[]
  amenities: string[]
  about: string
  ownerName: string
  ownerPhone: string
  ownerEmail: string
}

const propertyDetails: Record<number, PropertyDetail> = {
  1: {
    id: 1,
    title: "3 BHK Luxury Villa",
    price: "₹1.2 Cr",
    location: "Sector 21, Gurgaon",
    area: "2500 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    category: "Villa",
    description: "Experience luxury living in this stunning villa with modern amenities and premium finishes.",
    image: "/luxury-villa-interior.jpg",
    images: [
      "/luxury-villa-interior.jpg",
      "/villa-living-room.jpg",
      "/villa-kitchen.jpg",
      "/villa-bedroom.jpg",
    ],
    amenities: ["Swimming Pool", "Home Gym", "Parking", "Wifi", "Security", "Garden", "Kitchen", "Elevator"],
    about:
      "This luxurious villa is located in the heart of Gurgaon, offering breathtaking views and premium living. Built with the finest materials and architectural design, it features spacious rooms, high ceilings, and modern amenities. Perfect for families seeking a sophisticated lifestyle.",
    ownerName: "Rajesh Kumar",
    ownerPhone: "+91 98765 43210",
    ownerEmail: "rajesh@example.com",
  },
  2: {
    id: 2,
    title: "Modern 2 BHK Apartment",
    price: "₹85 L",
    location: "Bandra, Mumbai",
    area: "1200 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    category: "Flat",
    description: "Stylish apartment with panoramic city views in one of Mumbai's most desirable neighborhoods.",
    image: "/modern-apartment-exterior.jpg",
    images: [
      "/modern-apartment-exterior.jpg",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
    ],
    amenities: ["Wifi", "Parking", "Gym", "Security", "Balcony", "Power Backup", "Water Storage"],
    about:
      "Elegantly designed apartment in the heart of Mumbai's trendiest neighborhood. The open floor plan maximizes natural light and offers stunning city views. Modern kitchen with premium appliances and spacious bedrooms with walk-in closets.",
    ownerName: "Priya Sharma",
    ownerPhone: "+91 98765 43211",
    ownerEmail: "priya@example.com",
  },
  3: {
    id: 3,
    title: "Premium 4 BHK Penthouse",
    price: "₹2.5 Cr",
    location: "Sector 47, Gurgaon",
    area: "4000 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    category: "Penthouse",
    description: "Ultimate luxury penthouse with exclusive amenities and stunning architectural design.",
    image: "/placeholder.svg?height=500&width=800",
    images: [
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
      "/placeholder.svg?height=500&width=800",
    ],
    amenities: ["Private Pool", "Gym", "Spa", "Cinema Hall", "Parking", "Security", "Garden", "Wine Cellar", "Library"],
    about:
      "This exclusive penthouse offers unparalleled luxury and sophistication. Features include a private infinity pool, home theatre, spa, and wine cellar. The terrace provides panoramic views of the city skyline. Ideal for those seeking the ultimate in luxury living.",
    ownerName: "Vikram Singh",
    ownerPhone: "+91 98765 43212",
    ownerEmail: "vikram@example.com",
  },
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = propertyDetails[Number.parseInt(params.id)] || propertyDetails[1]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <Link href="/properties" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Images & Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />

                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`rounded-lg overflow-hidden border-2 transition ${
                      currentImageIndex === idx ? "border-primary" : "border-border"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-lg border border-border p-6 mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
                <p className="text-3xl font-bold text-primary mb-4">{property.price}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-foreground/60" />
                    <span className="text-foreground/70">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-5 h-5 text-foreground/60" />
                    <span className="text-foreground/70">{property.area}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">{property.bedrooms}</p>
                    <p className="text-sm text-foreground/60">Bedrooms</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">{property.bathrooms}</p>
                    <p className="text-sm text-foreground/60">Bathrooms</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{property.area}</p>
                    <p className="text-sm text-foreground/60">Built Area</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{property.category}</p>
                    <p className="text-sm text-foreground/60">Category</p>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
                  <p className="text-foreground/70 leading-relaxed">{property.about}</p>
                </div>

                {/* Amenities Section */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Owner Details & Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
                {/* Favorite Button */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground py-3 rounded-lg mb-4 transition"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  {isFavorite ? "Added to Favorites" : "Add to Favorites"}
                </button>

                {/* Owner Details */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Property Owner</h3>
                  <p className="text-foreground mb-4">{property.ownerName}</p>

                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition">
                      <Phone className="w-5 h-5" />
                      {property.ownerPhone}
                    </button>

                    <button className="w-full flex items-center gap-3 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition">
                      <Mail className="w-5 h-5" />
                      Email
                    </button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-base">Schedule Site Visit</Button>
                  <Button variant="outline" className="w-full py-6 text-base bg-transparent">
                    Request More Info
                  </Button>
                </div>

                {/* Property Facts */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-bold text-foreground mb-3">Quick Facts</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>• Posted: Just Now</p>
                    <p>• ID: PROP{property.id}</p>
                    <p>• Verification: Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
