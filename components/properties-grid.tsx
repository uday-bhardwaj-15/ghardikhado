// "use client"

// import { Button } from "@/components/ui/button"
// import { Heart, MapPin, Maximize2 } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"

// interface Property {
//   id: number
//   title: string
//   price: string
//   location: string
//   specs: string
//   image: string
// }

// const properties: Property[] = [
//   {
//     id: 1,
//     title: "3 BHK Villa",
//     price: "₹1.2 Cr",
//     location: "Sector 21, Gurgaon",
//     specs: "3 BHK • 2500 sq ft",
//     image: "/luxury-villa-exterior.jpg",
//   },
//   {
//     id: 2,
//     title: "Modern Apartment",
//     price: "₹85 L",
//     location: "Bandra, Mumbai",
//     specs: "2 BHK • 1200 sq ft",
//     image: "/modern-apartment-building.jpg",
//   },
//   {
//     id: 3,
//     title: "Premium Penthouse",
//     price: "₹2.5 Cr",
//     location: "Sector 47, Gurgaon",
//     specs: "4 BHK • 4000 sq ft",
//     image: "/luxury-penthouse.png",
//   },
//   {
//     id: 4,
//     title: "Cozy Studio",
//     price: "₹45 L",
//     location: "South Delhi",
//     specs: "1 BHK • 600 sq ft",
//     image: "/modern-studio-apartment.jpg",
//   },
//   {
//     id: 5,
//     title: "Family Home",
//     price: "₹1.5 Cr",
//     location: "Noida Extension",
//     specs: "3 BHK • 2200 sq ft",
//     image: "/modern-family-house.jpg",
//   },
//   {
//     id: 6,
//     title: "Luxury Duplex",
//     price: "₹1.8 Cr",
//     location: "Greater Noida",
//     specs: "3 BHK • 3000 sq ft",
//     image: "/luxury-duplex-house.jpg",
//   },
// ]

// export function PropertiesGrid() {
//   const [favorites, setFavorites] = useState<number[]>([])

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
//   }

//   return (
//     <section className="py-16 px-4 bg-background">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Explore Our Premier Houses</h2>
//         <p className="text-foreground/70 mb-12">Handpicked properties that meet premium standards</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {properties.map((property) => (
//             <div
//               key={property.id}
//               className="rounded-xl overflow-hidden bg-white border border-border hover:shadow-lg transition-shadow duration-300 group"
//             >
//               <div className="relative overflow-hidden h-64">
//                 <img
//                   src={property.image || "/placeholder.svg"}
//                   alt={property.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <button
//                   onClick={() => toggleFavorite(property.id)}
//                   className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition"
//                 >
//                   <Heart
//                     className={`w-5 h-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
//                   />
//                 </button>
//               </div>

//               <div className="p-5">
//                 <div className="flex items-start justify-between mb-3">
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground">{property.title}</h3>
//                     <p className="text-2xl font-bold text-primary">{property.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 mb-4 text-foreground/70">
//                   <MapPin className="w-4 h-4" />
//                   <span className="text-sm">{property.location}</span>
//                 </div>

//                 <div className="flex items-center gap-2 mb-4 text-foreground/70">
//                   <Maximize2 className="w-4 h-4" />
//                   <span className="text-sm">{property.specs}</span>
//                 </div>

//                 <Link href={`/property/${property.id}`}>
//                   <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link href="/properties">
//             <Button size="lg" variant="outline">
//               View All Properties
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";

import { Button } from "@/components/ui/button";
import { Heart, MapPin, Maximize2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  specs: string;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "3 BHK Villa",
    price: "₹1.2 Cr",
    location: "Sector 21, Gurgaon",
    specs: "3 BHK • 2500 sq ft",
    image: "/luxury-villa-exterior.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "₹85 L",
    location: "Bandra, Mumbai",
    specs: "2 BHK • 1200 sq ft",
    image: "/modern-apartment-building.jpg",
  },
  {
    id: 3,
    title: "Premium Penthouse",
    price: "₹2.5 Cr",
    location: "Sector 47, Gurgaon",
    specs: "4 BHK • 4000 sq ft",
    image: "/luxury-penthouse.png",
  },
  {
    id: 4,
    title: "Cozy Studio",
    price: "₹45 L",
    location: "South Delhi",
    specs: "1 BHK • 600 sq ft",
    image: "/modern-studio-apartment.jpg",
  },
  {
    id: 5,
    title: "Family Home",
    price: "₹1.5 Cr",
    location: "Noida Extension",
    specs: "3 BHK • 2200 sq ft",
    image: "/modern-family-house.jpg",
  },
  {
    id: 6,
    title: "Luxury Duplex",
    price: "₹1.8 Cr",
    location: "Greater Noida",
    specs: "3 BHK • 3000 sq ft",
    image: "/luxury-duplex-house.jpg",
  },
];

export function PropertiesGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Explore Our Premier Houses
        </h2>
        <p className="text-foreground/70 mb-12">
          Handpicked properties that meet premium standards
        </p>

        {/* 🔥 Changed to horizontal scroll container */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="min-w-[320px] max-w-sm flex-shrink-0 snap-center rounded-xl overflow-hidden bg-white border border-border hover:shadow-lg transition-shadow duration-300 group"
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
                    className={`w-5 h-5 ${
                      favorites.includes(property.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {property.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-foreground/70">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm">{property.specs}</span>
                </div>

                <Link href={`/property/${property.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties">
            <Button size="lg" variant="outline">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
