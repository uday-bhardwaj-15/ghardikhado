"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AreaCalculator() {
  const [sqft, setSqft] = useState(1000);
  const sqm = (sqft * 0.092903).toFixed(2);

  return (
    <div className="space-y-4">
      <div>
        <Label>Area (sq ft)</Label>
        <Input
          type="number"
          value={sqft}
          onChange={(e) => setSqft(Number(e.target.value))}
        />
      </div>

      <div>
        <div className="text-sm text-slate-500">Equivalent area</div>
        <div className="text-lg font-semibold mt-1">{sqm} m²</div>
      </div>

      <Button onClick={() => navigator.clipboard?.writeText(`${sqm} m²`)}>
        Copy
      </Button>
    </div>
  );
}
