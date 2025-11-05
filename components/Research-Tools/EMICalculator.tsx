"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Doughnut from "./Doughnut";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [tenureYears, setTenureYears] = useState(5);

  const monthlyRate = annualRate / 12 / 100;
  const months = tenureYears * 12;

  const emi = useMemo(() => {
    if (monthlyRate === 0) return principal / months;
    const r = monthlyRate;
    const n = months;
    const num = principal * r * Math.pow(1 + r, n);
    const den = Math.pow(1 + r, n) - 1;
    const val = num / den;
    return isFinite(val) ? val : 0;
  }, [principal, monthlyRate, months]);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;
  const interestPercent = Math.round((totalInterest / totalPayment) * 100);

  const amortization = useMemo(() => {
    let balance = principal;
    const rows: {
      month: number;
      emi: number;
      principalPaid: number;
      interestPaid: number;
      balance: number;
    }[] = [];
    for (let m = 1; m <= Math.min(12, months); m++) {
      const interestPaid = balance * monthlyRate;
      const principalPaid = emi - interestPaid;
      balance = Math.max(0, balance - principalPaid);
      rows.push({
        month: m,
        emi,
        principalPaid,
        interestPaid,
        balance,
      });
    }
    return rows;
  }, [principal, monthlyRate, emi, months]);

  return (
    <div className="w-full">
      {/* Grid: stack on small screens, two columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
        {/* Left: inputs */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border min-w-0">
          <div className="flex flex-col gap-4">
            <div className="min-w-0">
              <Label className="block">Loan Amount (₹)</Label>
              <div className="mt-2 flex items-center gap-3 min-w-0">
                {/* number input - w-full + min-w-0 prevents overflow */}
                <Input
                  className="w-full min-w-0"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value || 0))}
                  type="number"
                />
                <div className="w-28 hidden sm:block">
                  <input
                    type="range"
                    min={100000}
                    max={50000000}
                    step={50000}
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <Label>Rate of Interest (p.a.)</Label>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <input
                    type="range"
                    min={0.5}
                    max={20}
                    step={0.1}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="w-20 text-right font-medium">
                  {annualRate.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <Label>Loan Tenure</Label>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="w-20 text-right font-medium">
                  {tenureYears} Yr
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="bg-slate-50 p-3 rounded-lg text-center">
                <div className="text-xs text-slate-500">Monthly EMI</div>
                <div className="text-lg font-semibold">{formatINR(emi)}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg text-center">
                <div className="text-xs text-slate-500">Total Interest</div>
                <div className="text-lg font-semibold">
                  {formatINR(totalInterest)}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button className="w-full">Save Calculation</Button>
            </div>
          </div>
        </div>

        {/* Right: donut & amortization */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col min-w-0">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <div className="flex-shrink-0">
              <Doughnut percent={interestPercent} size={160} stroke={20} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-500">Principal Amount</div>
              <div className="text-lg font-semibold mb-2">
                {formatINR(principal)}
              </div>

              <div className="text-sm text-slate-500">Total Interest</div>
              <div className="text-lg font-semibold mb-2">
                {formatINR(totalInterest)}
              </div>

              <div className="text-sm text-slate-500">Total Amount</div>
              <div className="text-lg font-semibold">
                {formatINR(totalPayment)}
              </div>
            </div>
          </div>

          {/* amortization list with independent scrolling */}
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">
              Amortization (first 12 months)
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="grid grid-cols-3 text-xs text-slate-500 mb-2">
                <div>Month</div>
                <div className="text-right">Principal</div>
                <div className="text-right">Interest</div>
              </div>

              <div className="space-y-2 max-h-64 overflow-auto pr-2">
                {amortization.map((a) => (
                  <div key={a.month} className="grid grid-cols-3 text-sm">
                    <div>#{a.month}</div>
                    <div className="text-right">
                      {formatINR(a.principalPaid)}
                    </div>
                    <div className="text-right">
                      {formatINR(a.interestPaid)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-xs text-slate-500 text-center">
                Full amortization table available on detailed view
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
