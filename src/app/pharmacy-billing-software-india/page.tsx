import type { Metadata } from "next";
import Link from "next/link";
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
import {
  Shield,
  Zap,
  Package,
  IndianRupee,
  CheckCircle2,
  Phone,
  HelpCircle,
  Building2,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Billing Software in India | GST Ready ERP - BCOR",
  description:
    "Leading pharmacy billing & ERP software in India. One-time purchase lifetime license, 100% offline desktop billing, GST invoicing, Schedule H1 registers & FEFO expiry tracking.",
  alternates: {
    canonical: "/pharmacy-billing-software-india",
  },
};

const pillarHighlights = [
  {
    icon: IndianRupee,
    title: "Lifetime License, Zero Subscriptions",
    desc: "Pay once and own the software forever. No monthly or annual rental pressure.",
  },
  {
    icon: Zap,
    title: "100% Offline Billing Engine",
    desc: "Lightning-fast desktop performance on Windows 10/11 with zero internet reliance.",
  },
  {
    icon: FileCheck2,
    title: "Complete GST & Drug Compliance",
    desc: "Built-in HSN code database, auto-split CGST/SGST, and inspection-ready Schedule H1 registers.",
  },
  {
    icon: Package,
    title: "FEFO Batch & Expiry Loss Prevention",
    desc: "Enforce First-Expiry-First-Out dispensing with automated 30/60/90-day early warnings.",
  },
];

const pillarFaqs = [
  {
    q: "Why is BCOR a better choice than cloud-based pharmacy SaaS?",
    a: "Cloud-based SaaS platforms require constant internet, charge recurring monthly fees, and store your business data on third-party servers. BCOR is an offline-first Windows desktop ERP with a one-time lifetime license that gives you full data ownership and instant sub-2-second billing speeds.",
  },
  {
    q: "Can BCOR support large pharmacies with multiple billing counters?",
    a: "Yes! BCOR supports multi-terminal local LAN networks. You can run separate billing counters, verification desks, and back-office purchase receiving stations simultaneously.",
  },
  {
    q: "Is BCOR compatible with my thermal receipt printer and barcode scanner?",
    a: "Yes. BCOR is compatible with all standard 2-inch and 3-inch thermal POS receipt printers, standard laser/inkjet printers (A4/A5), and USB/wireless barcode scanners.",
  },
  {
    q: "How does BCOR provide customer support across India?",
    a: "We provide nationwide remote assistance, phone support, and WhatsApp help desks with an average response time under 5 minutes during pharmacy business hours.",
  },
];

export default function PharmacyBillingSoftwareIndiaPage() {
  return (
    <main className="min-h-screen bg-white pb-16 sm:pb-0">
      <Navbar />

      {/* Pillar Hero Banner */}
      <section className="bg-slate-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-xs font-semibold mb-6">
            <Building2 className="w-3.5 h-3.5" /> India&apos;s Preferred Pharmacy ERP Platform
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            The Complete Pharmacy Billing &amp; Inventory Management Software in{" "}
            <span className="text-teal-400">India</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Engineered specifically for Indian retail chemists, medical stores, and hospital pharmacies. Built-in GST invoicing, automated FEFO batch expiry control, and 100% offline desktop reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+917994184506"
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-slate-950" /> Call for Free Nationwide Demo
            </a>
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
            >
              View Lifetime Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Pillar Fast Highlights */}
      <section className="py-12 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarHighlights.map((item) => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Modular Sections */}
      <Features />
      <Compliance />
      <Stats />
      <WhyBCore />
      <Pricing />

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions (India Edition)
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers regarding licensing, hardware, tax filing, and nationwide support.
            </p>
          </div>

          <div className="space-y-4">
            {pillarFaqs.map((faq, i) => (
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

      {/* SEO Internal Topic Clusters Hub */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Specialized Pharmacy Software Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore dedicated features and localized solutions built for specific pharmacy operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/gst-pharmacy-software"
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                GST Pharmacy Software →
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated multi-slab tax invoicing, HSN auto-lookup, and 1-click GSTR-1/3B exports.
              </p>
            </Link>

            <Link
              href="/pharmacy-inventory-management"
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                Pharmacy Inventory &amp; Expiry →
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                FEFO batch tracking, 90-day expiry loss alerts, and automated distributor purchase orders.
              </p>
            </Link>

            <Link
              href="/medical-shop-billing-software"
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                Medical Shop POS Software →
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sub-2-second checkout, patient prescription refills, WhatsApp billing, and thermal printer setup.
              </p>
            </Link>

            <Link
              href="/pharmacy-software-kerala"
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                Pharmacy Software in Kerala →
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kerala Drugs Control inspection compliance, Malayalam invoice options, and local distributor formats.
              </p>
            </Link>

            <Link
              href="/pharmacy-software-calicut"
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                Calicut (Kozhikode) Pharmacy POS →
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Local on-site setup, hospital area rush hour billing, and Malabar distributor bill imports.
              </p>
            </Link>

            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-200 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-teal-950 mb-1">Looking for a Live Demo?</h3>
                <p className="text-sm text-teal-800">
                  Speak with our senior pharmacy software consultant today.
                </p>
              </div>
              <a
                href="tel:+917994184506"
                className="inline-flex items-center gap-2 mt-4 font-bold text-teal-700 hover:text-teal-800 text-sm"
              >
                <Phone className="w-4 h-4" /> Call +91 7994184506
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
