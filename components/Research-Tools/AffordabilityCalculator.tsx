"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AffordabilityCalculator() {
  const [budget, setBudget] = useState(5000000);
  // Let's give a simple EMI estimate based on 6.5% over 20 years as a suggestion
  const suggest = (budget: number) => {
    // assume 20% down-payment and 20-year loan
    const loan = budget * 0.8;
    const monthlyRate = 6.5 / 12 / 100;
    const n = 20 * 12;
    const r = monthlyRate;
    const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Total Budget (₹)</Label>
        <Input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>

      <div>
        <div className="text-sm text-slate-500">
          Suggested EMI (assuming 20% down, 20 yr @6.5%)
        </div>
        <div className="text-lg font-semibold mt-2">
          ₹{suggest(budget).toLocaleString()}
        </div>
      </div>

      <Button
        onClick={() =>
          navigator.clipboard?.writeText(`Suggested EMI: ₹${suggest(budget)}`)
        }
      >
        Copy Suggestion
      </Button>
    </div>
  );
}
