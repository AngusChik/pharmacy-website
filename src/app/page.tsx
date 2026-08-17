import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <FeatureGrid />
        <EcosystemSection />
        <PricingSection />
        <UseCasesSection />
        <ResourcesSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
