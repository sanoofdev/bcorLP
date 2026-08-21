import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  MapPin,
  ShieldCheck,
  Zap,
  FileSpreadsheet,
  Building2,
  Users,
  CheckCircle2,
  Phone,
  HelpCircle,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Software in Cochin (Kochi) | bcor.in - Medical Billing & ERP for Kerala",
  description:
    "BCOR pharmacy billing software for Cochin (Kochi) pharmacies. Offline billing, GST compliance, Pharmacy Inventory management & Schedule H1 support. Malayalam support available. Get your free demo!",
  alternates: {
    canonical: "/pharmacy-software-cochin",
  },
};

const cochinFeatures = [
  {
    icon: ShieldCheck,
    title: "Kochi Drug License Compliance",
    desc: "Automatically generates reports for Kerala State Drug Controller, including daily sales, stock movements, and expiry tracking for Kochi pharmacies.",
  },
  {
    icon: Zap,
    title: "Offline Billing for Marine Drive",
    desc: "100% offline functionality perfect for busy areas like Marine Drive, Fort Kochi, and other high-traffic zones in Kochi. No internet required.",
  },
  {
    icon: FileSpreadsheet,
    title: "Lulu Mall & City Center Integration",
    desc: "Direct import of distributor bills from suppliers serving Kochi's major retail hubs including Lulu Mall, City Center, and Bayaru.",
  },
  {
    icon: Building2,
    title: "Kochi-based Support Team",
    desc: "Local technical support team based in Kochi with Malayalam-speaking engineers for quick resolution of any issues.",
  },
  {
    icon: Users,
    title: "Multi-Counter Network Ready",
    desc: "Connect billing counters at multiple locations in Kochi - from small neighborhood shops to large pharmacy chains.",
  },
  {
    icon: MapPin,
    title: "One-Time Lifetime License",
    desc: "Pay once and own your software forever. No monthly fees, suitable for Kochi's budget-conscious pharmacy owners.",
  },
];

const kochiTestimonials = [
  {
    name: "Dr. Arjun Menon",
    business: "MediCare Pharmacy, Kottayam",
    quote: "BCOR transformed our billing process. The offline capability is a game-changer for areas with unreliable internet.",
  },
  {
    name: "Sister Mary John",
    business: "St. Mary's Pharmacy, Ernakulam",
    quote: "Finally a software that understands Kerala's pharmacy regulations. Schedule H reports are now automatic.",
  },
];

const faqs = [
  {
    q: "Why choose BCOR for Kochi pharmacies?",
    a: "Our offline-first architecture and local support make BCOR ideal for Kochi's diverse pharmacy landscape, from small shops to multi-store chains.",
  },
  {
    q: "Is Malayalam support included?",
    a: "Yes! Our team at BCOR provides full support in Malayalam for all Kochi-based customers.",
  },
  {
    q: "Can I get GST reports for Kerala?",
    a: "Yes, BCOR generates GST-compliant invoices and reports ready for filing with the Kerala authorities.",
  },
];

export default function PharmacySoftwareCochinPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-teal-50 to-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <Star className="w-3.5 h-3.5" /> Trusted by Kochi Pharmacies
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Pharmacy Software in Cochin (Kochi) &amp;{" "}
              <span className="text-teal-600">Kerala</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Specialized billing and inventory software for Cochin pharmacies. Offline billing, GST compliance, Malayalam support, and lifetime license.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917****4506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Call for Kochi Demo
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                View Kochi Features
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
              Built for Cochin Pharmacies
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Pharmacy Management Solutions for Kochi
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We've designed BCOR specifically for the unique needs of pharmacies in Kochi and the wider Kerala region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cochinFeatures.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage - Kochi Focus */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Serving Pharmacies Across Kochi Metro & Kerala
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            From Ernakulam to Fort Kochi, from Kottayam to Kozhikode, BCOR serves medical stores throughout Kerala with local support.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto text-xs sm:text-sm font-medium text-slate-700">
            {[
              "Ernakulam (Kochi)",
              "Fort Kochi",
              "Kottayam",
              "Kozhikode (Calicut)",
              "Thrissur",
              "Trivandrum",
              "Malappuram",
              "Kannur",
              "Palakkad",
            ].map((district) => (
              <span
                key={district}
                className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full shadow-2xs"
              >
                📍 {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Kochi Pharmacy Software FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Answers to common questions about BCOR for pharmacies in Kochi.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Related Pharmacy Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pharmacy-software-kerala"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Kerala Pharmacy Software
            </Link>
            <Link
              href="/pharmacy-software-cochin"
              className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg border border-teal-600 transition"
            >
              Cochin Pharmacy Software
            </Link>
            <Link
              href="/pharmacy-software-trivandrum"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Trivandrum Pharmacy Software
            </Link>
            <Link
              href="/gst-pharmacy-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              GST Pharmacy Billing
            </Link>
            <Link
              href="/pharmacy-inventory-management"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Inventory &amp; Expiry Control
            </Link>
            <Link
              href="/pharmacy-billing-software-india"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Billing India
            </Link>
            <Link
              href="/brand-clarity"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Brand Clarity
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}