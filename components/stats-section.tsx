import { CheckCircle, Users, Home, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    { icon: CheckCircle, label: "100% Verified Listings", value: "100%" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Home, label: "Projects Listed", value: "150+" },
    { icon: TrendingUp, label: "Properties Sold", value: "2,000+" },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-foreground text-sm">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
