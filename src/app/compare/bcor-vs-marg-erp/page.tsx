import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  CheckCircle2,
  XCircle,
  Phone,
  HelpCircle,
  Scale,
  Zap,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BCOR ERP vs Marg ERP | Modern Pharmacy Software Alternative India",
  description:
    "Comparing BCOR ERP vs Marg ERP for Indian pharmacies. Modern fast UI, sub-2s offline billing, 1-click Schedule H1 registers, zero steep learning curves & lifetime license.",
  alternates: {
    canonical: "/compare/bcor-vs-marg-erp",
  },
};

const comparisonTable = [
  {
    feature: "User Interface & Experience",
    bcor: "Modern, clean, intuitive (staff learns in 15 mins)",
    marg: "Complex legacy interface with steep learning curve",
    bcorWins: true,
  },
  {
    feature: "Counter Billing Speed",
    bcor: "Sub-2 seconds per invoice with keyboard-first shortcuts",
    marg: "Requires multiple popups and keystrokes per item",
    bcorWins: true,
  },
  {
    feature: "Schedule H1 & Narcotics Tracking",
    bcor: "100% automated inspection register creation",
    marg: "Manual entry configuration required",
    bcorWins: true,
  },
  {
    feature: "Offline Desktop Capability",
    bcor: "100% native offline desktop performance",
    marg: "Desktop application with complex local file locking",
    bcorWins: true,
  },
  {
    feature: "Distributor Bill Import",
    bcor: "Direct 1-click digital import from all major distributors",
    marg: "Supported but requires complex column mapping templates",
    bcorWins: true,
  },
  {
    feature: "FEFO & Expiry Alert System",
    bcor: "Automated 30/60/90-day color alerts with RTV debit notes",
    marg: "Standard expiry reporting",
    bcorWins: true,
  },
  {
    feature: "Pricing Model",
    bcor: "True Lifetime License with zero forced recurring rent",
    marg: "Annual license renewals & mandatory AMC fees",
    bcorWins: true,
  },
  {
    feature: "Customer Support Response",
    bcor: "Direct phone, WhatsApp & remote access (<5 min response)",
    marg: "Central ticketing system / third-party local dealers",
    bcorWins: true,
  },
];

const migrationFaqs = [
  {
    q: "Can I migrate my entire medicine database and customer ledgers from Marg ERP to BCOR?",
    a: "Yes! Our technical onboarding team extracts your existing medicine master data, current stock batches, expiry dates, supplier details, and customer credit ledgers from Marg ERP and imports them into BCOR with zero downtime.",
  },
  {
    q: "How long does it take to train our counter staff on BCOR?",
    a: "Unlike Marg ERP which often requires weeks of training for new staff, BCOR is built with modern UX principles. Most cashiers and pharmacy helpers become fully proficient within 15 to 30 minutes.",
  },
  {
    q: "Will our existing barcode scanners and thermal printers work with BCOR?",
    a: "Yes. BCOR is plug-and-play with all standard USB/Bluetooth barcode scanners and 2-inch, 3-inch, or laser printers currently connected to your system.",
  },
  {
    q: "Is there any ongoing software rental fee like Marg's annual renewal?",
    a: "No. BCOR is provided on a perpetual lifetime license. You own your software and your data permanently.",
  },
];

export default function CompareBcorVsMargPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
            <Scale className="w-3.5 h-3.5" /> Software Comparison &amp; Migration Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            BCOR ERP vs. Marg ERP:{" "}
            <span className="text-teal-600">The Modern Pharmacy Upgrade</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Looking for a faster, simpler, and more reliable alternative to Marg ERP? Discover why modern Indian chemists are switching to BCOR for sub-2s billing, automated compliance, and lifetime ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="tel:+917994184506"
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" /> Schedule Free Marg Migration Call
            </a>
            <a
              href="#matrix"
              className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
            >
              View Feature Breakdown
            </a>
          </div>
        </div>
      </header>

      {/* Comparison Matrix */}
      <section id="matrix" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Side-by-Side Comparison
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A clear, honest look at daily operational differences between BCOR ERP and Marg ERP.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5 w-1/3">Feature / Capability</th>
                  <th className="p-4 sm:p-5 text-teal-900 bg-teal-50/80 w-1/3 border-x border-teal-200">
                    BCOR ERP (Modern)
                  </th>
                  <th className="p-4 sm:p-5 text-slate-700 w-1/3">
                    Marg ERP (Legacy)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-teal-900 bg-teal-50/30 border-x border-teal-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{row.bcor}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.marg}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration Workflow */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Zero-Downtime Migration from Marg ERP
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We handle the entire data transfer process so your pharmacy doesn&apos;t miss a single sale.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Export Data Backup</h3>
              <p className="text-sm text-slate-600">
                Our engineer assists you in exporting your item masters, batch records, and customer books from Marg.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Direct BCOR Import</h3>
              <p className="text-sm text-slate-600">
                All medicine SKUs, HSN codes, and opening stock balances are cleaned and mapped into BCOR.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-2">15-Min Staff Training</h3>
              <p className="text-sm text-slate-600">
                Your staff begins high-speed counter billing immediately with zero confusing shortcut memorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Marg ERP Switcher FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Everything you need to know before migrating to BCOR ERP.
            </p>
          </div>

          <div className="space-y-4">
            {migrationFaqs.map((faq, i) => (
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

      {/* Internal Navigation Links */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Explore BCOR Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Lifetime Pricing Details
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
              Pharmacy Inventory Management
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
