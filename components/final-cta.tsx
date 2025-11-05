import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1920&query=luxury%20modern%20house%20exterior%20sunset)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Make Your Dream Property a Reality?
        </h2>
        <p className="text-lg text-white/90 mb-10">
          Connect with our expert team today and take the first step towards your perfect home
        </p>
        <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-4 rounded-full flex items-center gap-2 mx-auto">
          Contact Our Experts
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
