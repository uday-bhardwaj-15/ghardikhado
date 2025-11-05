import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function MapDiscovery() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/property-map.png" alt="Property map" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Discover Properties with the Best Value
              </h2>
            </div>
            <p className="text-foreground/70 mb-8">
              Explore nearby properties and find the perfect location for your lifestyle. Our interactive map shows all
              verified listings with detailed information.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">Explore Nearby</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
