"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EligibilityCalculator() {
  const [income, setIncome] = useState(50000);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // typical banks use 60x monthly income approx (customize)
    const eligible = income * 60;
    setResult(`Estimated eligible loan: ₹${eligible.toLocaleString()}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-4"
    >
      <div>
        <Label>Monthly Income (₹)</Label>
        <Input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
      </div>

      <Button type="submit">Calculate Eligibility</Button>

      {result && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">{result}</div>
      )}
    </form>
  );
}
