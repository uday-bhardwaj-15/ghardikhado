import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Your primary home might begin to feel left out
        </h2>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Discover premium properties that match your lifestyle and investment goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="/modern-luxury-house-interior.jpg"
              alt="Featured property 1"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Luxury Villa - Sector 21</h3>
              <p className="text-sm opacity-90">3 BHK • 2500 sq ft • Premium Location</p>
            </div>
            <Button className="absolute top-4 right-4 bg-white text-primary hover:bg-white/90">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h4 className="font-bold text-foreground mb-2">5 Reasons to invest now</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Property prices increasing at 8% annually</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Government incentives for homebuyers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Rising rental yields in premium areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Best time before interest rates change</span>
                </li>
              </ul>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
