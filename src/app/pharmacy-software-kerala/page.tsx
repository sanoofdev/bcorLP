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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Software in Kerala | Medical Store Billing & ERP - BCOR",
  description:
    "Leading pharmacy billing and ERP software in Kerala. Drugs Control Department compliance, Malayalam/English invoice formats, offline desktop billing & lifetime license.",
  alternates: {
    canonical: "/pharmacy-software-kerala",
  },
};

const keralaFeatures = [
  {
    icon: ShieldCheck,
    title: "Kerala Drugs Control Compliance",
    desc: "Strict adherence to statutory requirements laid down by the Kerala State Drugs Control Department, including Schedule H1, narcotic drug registers, and doctor records.",
  },
  {
    icon: Zap,
    title: "Monsoon & Offline Resilience",
    desc: "100% offline desktop architecture. Uninterrupted counter billing even during power fluctuations or localized broadband internet outages across Kerala.",
  },
  {
    icon: FileSpreadsheet,
    title: "Kerala Pharma Distributor Bill Import",
    desc: "Direct digital import compatibility with purchase invoices from leading pharmaceutical distributors across Ernakulam, Kozhikode, Thrissur, and Trivandrum.",
  },
  {
    icon: Building2,
    title: "Statewide Implementation & Support",
    desc: "Dedicated Malayalam-speaking technical support and on-site setup services available across all 14 districts in Kerala.",
  },
  {
    icon: Users,
    title: "Multi-Counter & Network Ready",
    desc: "Connect multiple billing terminals, prescription verification counters, and back-office stock receiving PCs on your local LAN with zero lag.",
  },
  {
    icon: MapPin,
    title: "One-Time Lifetime License",
    desc: "Pay once and own your software forever. No monthly rental fees, no annual renewals, and no unexpected software shutdowns.",
  },
];

const faqs = [
  {
    q: "Does BCOR support inspection registers required in Kerala?",
    a: "Yes! BCOR automatically compiles Schedule H, Schedule H1, and Narcotic drug sales registers complete with prescribing doctor information, patient details, and batch numbers ready for Drug Inspector audits.",
  },
  {
    q: "Is technical support available in Malayalam?",
    a: "Yes, our customer success and technical engineering teams are based in Kerala and provide immediate phone, WhatsApp, and remote support in Malayalam and English.",
  },
  {
    q: "Can I install BCOR in multiple branches across Kerala?",
    a: "Yes! You can run BCOR across multiple standalone pharmacy stores or interconnected branch outlets with centralized reporting.",
  },
  {
    q: "How does data migration work from our current Kerala pharmacy software?",
    a: "Our migration team takes your current database export and migrates all medicine SKUs, batch details, pricing, customer balances, and supplier ledgers smoothly with zero downtime.",
  },
];

export default function PharmacySoftwareKeralaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5" /> Trusted by 100+ Pharmacies Across Kerala
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Pharmacy &amp; Medical Store{" "}
              <span className="text-teal-600">Software in Kerala</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Designed specifically for Kerala chemists. Fast GST billing, 100% offline desktop performance, Drugs Control inspection compliance, and dedicated local Malayalam support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917994184506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Call for Kerala Demo &amp; Setup
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                View Kerala Features
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
              Built for Kerala Pharmacies
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              State-Specific Pharmacy Management Built for Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Address state regulatory demands, distributor workflows, and customer expectations effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keralaFeatures.map((item) => (
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

      {/* Regional Districts Covered */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Serving Medical Stores Across All Kerala Districts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            From single-counter retail shops to multi-branch medical complexes across the state.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto text-xs sm:text-sm font-medium text-slate-700">
            {[
              "Kozhikode (Calicut)",
              "Ernakulam (Cochin)",
              "Thiruvananthapuram",
              "Thrissur",
              "Malappuram",
              "Kannur",
              "Palakkad",
              "Kollam",
              "Alappuzha",
              "Kottayam",
              "Kasaragod",
              "Wayanad",
              "Pathanamthitta",
              "Idukki",
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
              Kerala Pharmacy Software FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Frequently asked questions from Kerala chemists and pharmacists.
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
              href="/pharmacy-software-calicut"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Calicut Pharmacy Software
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
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
