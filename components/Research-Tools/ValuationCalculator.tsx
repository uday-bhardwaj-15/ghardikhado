"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ValuationCalculator() {
  const [area, setArea] = useState(1500);
  const [rate, setRate] = useState(5000);

  const value = area * rate;

  return (
    <div className="space-y-4">
      <div>
        <Label>Area (sq ft)</Label>
        <Input
          type="number"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
        />
      </div>

      <div>
        <Label>Rate / sq ft (₹)</Label>
        <Input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>

      <div>
        <div className="text-sm text-slate-500">Estimated value</div>
        <div className="text-lg font-semibold mt-1">
          ₹{value.toLocaleString()}
        </div>
      </div>

      <Button
        onClick={() =>
          navigator.clipboard?.writeText(
            `Estimated value: ₹${value.toLocaleString()}`
          )
        }
      >
        Copy Value
      </Button>
    </div>
  );
}
