import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SearchBar } from "@/components/search-bar";
import { StatsSection } from "@/components/stats-section";
import { FeaturedSection } from "@/components/featured-section";
import { MapDiscovery } from "@/components/map-discovery";
import { PropertiesGrid } from "@/components/properties-grid";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

import { BlogCards } from "@/components/BlogCards";
import { TopHighlightedProperties } from "@/components/TopHighlightedProperties";
import { UniqueFeatures } from "@/components/UniqueFeatures";
import { EventBanner } from "@/components/EventBanner";
import { PropertyServices } from "@/components/property-service";
import { PopularLocalities } from "@/components/popular-localities";
import { OfferBanner } from "@/components/offerBanner";
import PropertyResearchTools from "@/components/property-research-tools";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <StatsSection />
      <OfferBanner />
      <FeaturedSection />
      <MapDiscovery />
      <PropertiesGrid />
      <UniqueFeatures />
      <PropertyResearchTools />
      <PropertyServices />
      <EventBanner />
      <TopHighlightedProperties />
      <PopularLocalities />
      <FAQ />
      <Testimonials />
      <BlogCards />
      <FinalCTA />
      <Footer />
    </div>
  );
}
