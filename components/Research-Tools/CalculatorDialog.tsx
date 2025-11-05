"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

export default function CalculatorDialog({
  title,
  description,
  trigger,
  children,
}: {
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{trigger}</div>
      </DialogTrigger>

      {/* DialogContent: limit height and let inner content scroll */}
      <DialogContent className="w-full max-w-4xl md:max-w-5xl p-0 overflow-hidden">
        <div className="h-[92vh] md:h-auto md:max-h-[80vh] w-full flex flex-col md:rounded-lg">
          <div className="p-6 border-b">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-2xl font-bold">
                {title}
              </DialogTitle>
              {description && (
                <DialogDescription className="text-sm text-slate-500">
                  {description}
                </DialogDescription>
              )}
            </DialogHeader>
          </div>

          {/* Scrollable content area */}
          <div className="overflow-y-auto p-6">
            {/* Provide grid container so children (calculators) can create columns */}
            <div className="w-full">{children}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
