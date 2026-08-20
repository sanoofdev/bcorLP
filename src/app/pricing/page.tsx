import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Pricing, CTA, Footer } from "@/components/landing";
import {
  IndianRupee,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  HelpCircle,
  Clock,
  Ban,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Software Pricing in India | Lifetime License - BCOR ERP",
  description:
    "Transparent pharmacy software pricing in India. One-time purchase with lifetime license, zero recurring monthly subscriptions, 1-year free support & unlimited counters.",
  alternates: {
    canonical: "/pricing",
  },
};

const comparisonItems = [
  {
    feature: "Payment Structure",
    bcor: "One-Time Software Purchase",
    saas: "Monthly or Annual Recurring Rent",
  },
  {
    feature: "Software Expiration / Lockout",
    bcor: "Never Expires (Lifetime Ownership)",
    saas: "Locked immediately if payment lapses",
  },
  {
    feature: "Internet Dependency",
    bcor: "100% Offline (Local Desktop DB)",
    saas: "Mandatory Cloud Internet",
  },
  {
    feature: "Data Ownership",
    bcor: "100% Stored on Your Machine",
    saas: "Stored on Third-Party Cloud",
  },
  {
    feature: "User & Terminal Limits",
    bcor: "Unlimited Counters on Local Network",
    saas: "Extra charges per user / terminal",
  },
  {
    feature: "1-Year Support Included",
    bcor: "Included Free (Phone & Remote)",
    saas: "Included in high recurring fee",
  },
];

const pricingFaqs = [
  {
    q: "Are there any hidden monthly or yearly charges with BCOR?",
    a: "No. BCOR is a true one-time software purchase. You own the software license permanently for your pharmacy store with no mandatory recurring monthly subscription.",
  },
  {
    q: "What happens after the 1-year free support period?",
    a: "Your software will continue running forever without paying anything further. If you want continued phone support, remote troubleshooting, and on-demand updates, you can opt for an affordable annual AMC. The AMC is completely optional and never forced.",
  },
  {
    q: "Can I use BCOR on multiple billing counters at no extra cost?",
    a: "Yes! BCOR supports multi-terminal local LAN networking within your store premises, allowing you to connect multiple counters without per-terminal license fees.",
  },
  {
    q: "Do you offer a money-back guarantee or trial?",
    a: "We provide a completely free, live interactive demonstration either remotely or on-site where you can test your billing speed, import dummy stock, and test compliance registers before making any purchase decision.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <header className="relative bg-slate-50 pt-32 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
            <IndianRupee className="w-3.5 h-3.5" /> 100% Transparent Lifetime Ownership
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Pharmacy ERP Software Pricing:{" "}
            <span className="text-teal-600">Buy Once, Own Forever</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Eliminate recurring monthly SaaS rental bills. BCOR offers a complete lifetime license designed to keep your operational costs low and predictable.
          </p>
        </div>
      </header>

      {/* Core Pricing Card Section */}
      <Pricing />

      {/* Value & ROI Comparison Table */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Lifetime License vs. Cloud Subscription (SaaS)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See why hundreds of medical stores prefer true software ownership over monthly rental traps.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Comparison Metric</th>
                  <th className="p-4 sm:p-5 text-teal-700 bg-teal-50/70">BCOR ERP (Lifetime)</th>
                  <th className="p-4 sm:p-5 text-slate-600">Generic Cloud SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">{item.feature}</td>
                    <td className="p-4 sm:p-5 font-medium text-teal-800 bg-teal-50/40">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        {item.bcor}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{item.saas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Licensing &amp; Pricing FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers to help you make an informed business investment.
            </p>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
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
            Explore Pharmacy Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pharmacy-billing-software-india"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Billing India
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
              Inventory Management
            </Link>
            <Link
              href="/medical-shop-billing-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Medical Shop POS
            </Link>
            <Link
              href="/compare/bcor-vs-marg-erp"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              BCOR vs Marg ERP
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
