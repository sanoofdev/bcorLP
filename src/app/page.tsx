import {
  Navbar,
  Hero,
  Features,
  Compliance,
  Stats,
  WhyBCore,
  Pricing,
  CTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen pb-16 sm:pb-0">
      <Navbar />
      <Hero />
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
