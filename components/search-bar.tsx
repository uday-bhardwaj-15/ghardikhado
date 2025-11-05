"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative -mt-24 mb-16 max-w-5xl mx-auto px-4 z-10">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Type</label>
            <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Buy</option>
              <option>Rent</option>
              <option>New Project</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Location</label>
            <input
              type="text"
              placeholder="Enter city or area"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
            <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Budget</label>
            <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Any Price</option>
              <option>₹0 - ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr+</option>
            </select>
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3 rounded-lg flex items-center justify-center gap-2">
          <Search className="w-5 h-5" />
          Search Properties
        </Button>
      </div>
    </div>
  )
}
