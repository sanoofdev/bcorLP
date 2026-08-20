import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Package,
  Zap,
  FileSpreadsheet,
  Building2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Software in Calicut (Kozhikode) | Medical Shop ERP - BCOR",
  description:
    "Best pharmacy billing software in Calicut (Kozhikode). Fast GST billing, Malayalam invoice support, batch expiry alerts & local on-site setup for medical shops.",
  alternates: {
    canonical: "/pharmacy-software-calicut",
  },
};

const calicutFeatures = [
  {
    icon: Clock,
    title: "Hospital Rush Hour Billing",
    desc: "Sub-2-second billing speeds designed to handle peak customer footfall around Calicut Medical College, Aster MIMS, and Baby Memorial Hospital areas without system freezes.",
  },
  {
    icon: FileSpreadsheet,
    title: "Kerala Distributor Bill Import",
    desc: "Direct digital import for purchase bills from major pharma distributors across Kozhikode and Malabar, cutting manual stock entry time by 90%.",
  },
  {
    icon: ShieldCheck,
    title: "Drugs Control Kerala Compliance",
    desc: "Automatic Schedule H, H1, and narcotic drug registers tailored to the inspection standards of the Kerala State Drugs Control Department.",
  },
  {
    icon: Zap,
    title: "100% Offline Desktop Reliability",
    desc: "Runs locally on Windows desktop. Your store continues billing without interruptions during local power cuts or internet outages.",
  },
  {
    icon: Package,
    title: "FEFO Batch & Expiry Management",
    desc: "First-Expiry-First-Out dispensing logic with automatic 30/60/90-day expiry loss prevention alerts to maximize return-to-distributor credits.",
  },
  {
    icon: Building2,
    title: "On-Site Installation & Training",
    desc: "Our local Kozhikode implementation engineers provide hands-on staff training, hardware setup, and legacy software data migration.",
  },
];

const faqs = [
  {
    q: "Do you offer on-site demo and installation in Calicut?",
    a: "Yes! Our technical team is based locally in Kozhikode and provides on-site demonstrations, thermal printer setup, barcode scanner configuration, and staff training.",
  },
  {
    q: "Can I migrate my old medicine stock data to BCOR?",
    a: "Yes, we migrate your complete existing medicine master list, customer ledgers, and supplier records from your older billing software seamlessly.",
  },
  {
    q: "Does BCOR support Malayalam bill printing?",
    a: "BCOR supports English invoices as well as customizable receipt formats with regional language directions and dosage instructions.",
  },
  {
    q: "Is BCOR a monthly subscription software?",
    a: "No. BCOR is offered as a one-time purchase lifetime license with zero recurring monthly or yearly subscription fees.",
  },
];

export default function CalicutPharmacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5" /> Calicut & Malabar Region Specialized Edition
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Pharmacy & Medical Shop Billing Software in{" "}
              <span className="text-teal-600">Calicut (Kozhikode)</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Empower your retail chemist or hospital pharmacy with BCOR ERP. Fast GST billing, FEFO expiry control, Schedule H1 drug registers, and local on-site support across Kozhikode.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917994184506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Call for Calicut On-Site Demo
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                Explore Features
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
              Tailored for Malabar Chemists
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything Your Calicut Medical Store Needs to Succeed
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Built specifically to address the daily inventory, billing, and inspection challenges faced by Kerala pharmacies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {calicutFeatures.map((item) => (
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

      {/* Local Support Banner */}
      <section className="py-12 bg-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Need on-site setup in Kozhikode or nearby districts?
            </h3>
            <p className="text-teal-100 text-sm sm:text-base">
              Call our Malabar region implementation desk for quick scheduling and free legacy data migration.
            </p>
          </div>
          <a
            href="tel:+917994184506"
            className="px-6 py-3 bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-xl whitespace-nowrap transition flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> +91 7994184506
          </a>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions in Calicut
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers regarding licensing, hardware compatibility, and local support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200">
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

      {/* Internal Navigation Links */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Related Pharmacy Software Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pharmacy-software-kerala"
              className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
            >
              Pharmacy Software in Kerala
            </Link>
            <Link
              href="/gst-pharmacy-software"
              className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
            >
              GST Pharmacy Billing
            </Link>
            <Link
              href="/pharmacy-inventory-management"
              className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
            >
              Pharmacy Inventory & Expiry
            </Link>
            <Link
              href="/medical-shop-billing-software"
              className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
            >
              Medical Shop POS Software
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
