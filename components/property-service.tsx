"use client";
import {
  CreditCard,
  Shield,
  Building,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "home-loans",
    title: "Home Loans",
    description: "Lowest interest rate offers",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    id: "legal-services",
    title: "Legal Services",
    description: "Property verification & documentation",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    id: "property-insurance",
    title: "Property Insurance",
    description: "Protection against cyber frauds",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description: "Professional home design services",
    icon: <Building className="w-8 h-8" />,
  },
];

export function PropertyServices() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Property Services
            </h2>
            <p className="text-muted-foreground">
              Explore property related services
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border-border group"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="flex gap-2 mx-auto">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
