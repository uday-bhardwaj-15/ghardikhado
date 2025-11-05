"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const banners = [
  {
    id: 1,
    title: "Year End Sale - Up to 30% Off",
    subtitle: "Limited properties available at unbeatable prices",
    cta: "View Offers",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    id: 2,
    title: "New Year Special - Zero Brokerage",
    subtitle: "Direct deals with property owners",
    cta: "Explore Now",
    gradient: "from-indigo-900 to-indigo-700",
  },
  {
    id: 3,
    title: "Premium Launches - Book Now",
    subtitle: "Exclusive pre-launch offers on luxury properties",
    cta: "Register Interest",
    gradient: "from-slate-900 to-slate-700",
  },
];

export function OfferBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${banners[currentBanner].gradient} p-8 md:p-12 shadow-xl`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                  Special Offer
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {banners[currentBanner].title}
              </h2>
              <p className="text-white/90 text-lg max-w-xl">
                {banners[currentBanner].subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Button size="lg" className="group bg-white/20">
                {banners[currentBanner].cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex gap-2">
                {banners.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentBanner(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentBanner ? "bg-white w-8" : "bg-white/40"
                    }`}
                    aria-label={`View banner ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
