"use client";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calculator,
  Home,
  Wallet,
  TrendingUp,
} from "lucide-react";
import ToolCard from "./Research-Tools/ToolCard";
import CalculatorDialog from "./Research-Tools/CalculatorDialog";
import EMI from "./Research-Tools/EMICalculator";
import Eligibility from "./Research-Tools/EligibilityCalculator";
import Affordability from "./Research-Tools/AffordabilityCalculator";
import Area from "./Research-Tools/AreaCalculator";
import Valuation from "./Research-Tools/ValuationCalculator";

const tools = [
  {
    id: "emi",
    title: "EMI Calculator",
    desc: "Monthly EMI, interest & amortization",
    icon: <Calculator className="w-8 h-8" />,
    component: EMI,
  },
  {
    id: "eligibility",
    title: "Eligibility Calculator",
    desc: "Find your home loan limit",
    icon: <Wallet className="w-8 h-8" />,
    component: Eligibility,
  },
  {
    id: "area",
    title: "Area Calculator",
    desc: "Convert sqft ↔︎ meters",
    icon: <Home className="w-8 h-8" />,
    component: Area,
  },
  {
    id: "valuation",
    title: "Valuation Calculator",
    desc: "Estimate property value",
    icon: <TrendingUp className="w-8 h-8" />,
    component: Valuation,
  },
  {
    id: "affordability",
    title: "Affordability Calculator",
    desc: "Budget vs EMI estimate",
    icon: <Wallet className="w-8 h-8" />,
    component: Affordability,
  },
];

export default function PropertyResearchTools() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Property Services
            </h2>
            <p className="text-slate-500 mt-1">
              Explore property related calculators & tools
            </p>
          </div>
          <button className="px-4 py-2 bg-white border rounded-lg shadow-sm text-sm hover:bg-slate-50">
            Explore All Services →
          </button>
        </div>

        <div className="relative">
          <button
            aria-label="left"
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {tools.map((t) => (
              <div key={t.id} className="snap-center flex-shrink-0 w-[360px]">
                <CalculatorDialog
                  title={t.title}
                  description={t.desc}
                  trigger={
                    <ToolCard
                      title={t.title}
                      description={t.desc}
                      icon={t.icon}
                    />
                  }
                >
                  <t.component />
                </CalculatorDialog>
              </div>
            ))}
          </div>

          <button
            aria-label="right"
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
