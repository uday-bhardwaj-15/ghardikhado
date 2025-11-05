import { Card } from "@/components/ui/card";
import React from "react";

export default function ToolCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-6 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow border border-gray-100 bg-white">
      <div>
        <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
          <div className="text-indigo-600">{icon}</div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      <div className="mt-6">
        <div className="text-sm text-indigo-600 font-medium">Open tool →</div>
      </div>
    </Card>
  );
}
