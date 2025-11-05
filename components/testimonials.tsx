"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Buyer",
    quote:
      "Working with ghardikhado was a pleasant experience. They helped me find the perfect home within my budget and timeline.",
    image: "/professional-man-portrait.png",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Investor",
    quote:
      "The verification process is thorough and transparent. I felt confident investing in properties listed on their platform.",
    image: "/professional-woman-portrait.png",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Property Owner",
    quote: "Great customer service and excellent guidance throughout the entire buying process. Highly recommended!",
    image: "/professional-man-portrait.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What our clients say about us</h2>
        <p className="text-foreground/70 mb-12">Real experiences from satisfied customers</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/70 italic">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
