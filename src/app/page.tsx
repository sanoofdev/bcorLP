import {
  Navbar,
  Features,
  Compliance,
  Stats,
  WhyBCore,
  Pricing,
  CTA,
  Footer,
} from "@/components/landing";
import { PharmacyHero } from "@/components/landing/PharmacyHero";
import { KeralaCoverage } from "@/components/landing/KeralaCoverage";

export default function Home() {
  return (
    <main className="min-h-screen pb-24 lg:pb-0">
      <Navbar />
      <PharmacyHero />
      <KeralaCoverage />
      <Features />
      <Compliance />
      <Stats />
      <WhyBCore />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
