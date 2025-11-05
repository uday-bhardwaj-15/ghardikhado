"use client";
import { Shield, Users, Home, ArrowRight } from "lucide-react";

export function UniqueFeatures() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Ghardikhado?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Direct connection with property owners - No middlemen, No extra
            costs
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {/* Customer */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/20">
              <Users className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold">You</h3>
            <p className="text-primary-foreground/80 text-center mt-2">
              The Customer
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex flex-col items-center md:flex-row md:mx-4">
            <ArrowRight className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
            <div className="text-center md:text-left mt-2 md:mt-0 md:ml-2">
              <p className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                Direct Connect
              </p>
            </div>
          </div>

          {/* Platform */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/20">
              <Shield className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold">Ghardikhado</h3>
            <p className="text-primary-foreground/80 text-center mt-2">
              Secure Platform
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex flex-col items-center md:flex-row md:mx-4">
            <ArrowRight className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
            <div className="text-center md:text-left mt-2 md:mt-0 md:ml-2">
              <p className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                Zero Brokerage
              </p>
            </div>
          </div>

          {/* Property Owner */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border-2 border-white/20">
              <Home className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold">Owner</h3>
            <p className="text-primary-foreground/80 text-center mt-2">
              Property Owner
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-primary-foreground/80">Verified Listings</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-primary-foreground/80">Happy Clients</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold mb-2">₹0</div>
            <p className="text-primary-foreground/80">Brokerage Fees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
