import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  Calculator,
  Receipt,
  FileCheck2,
  FileSpreadsheet,
  ShieldAlert,
  Percent,
  CheckCircle2,
  Phone,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Pharmacy Software India | Medical Store GST Billing & Filing - BCOR",
  description:
    "Automate pharmacy GST billing with BCOR. Instant CGST/SGST/IGST tax calculation, HSN code auto-lookup, GSTR-1 & 3B data export, and 100% compliant medical invoices.",
  alternates: {
    canonical: "/gst-pharmacy-software",
  },
};

const gstFeatures = [
  {
    icon: Calculator,
    title: "Automated Multi-Tier GST Calculation",
    desc: "Seamlessly splits CGST, SGST, and IGST rates (0%, 5%, 12%, 18%, 28%) on every medicine line item automatically with zero manual calculation errors.",
  },
  {
    icon: Receipt,
    title: "HSN Code Master Database",
    desc: "Pre-configured HSN directory for pharmaceuticals, surgical goods, ayurvedic formulations, and wellness products with auto-fill during product entry.",
  },
  {
    icon: FileSpreadsheet,
    title: "1-Click GSTR-1 & GSTR-3B Exports",
    desc: "Generate monthly and quarterly GST filing summaries ready for your CA or direct upload to the GST portal (JSON & Excel formats).",
  },
  {
    icon: FileCheck2,
    title: "Input Tax Credit (ITC) Reconciliation",
    desc: "Track purchase GST paid to distributors against output GST collected from retail customers to ensure maximum legitimate tax credits.",
  },
  {
    icon: ShieldAlert,
    title: "Audit-Proof Invoicing & E-Way Bills",
    desc: "Generate compliant B2B tax invoices with customer GSTIN, QR codes, vehicle details, and auto-generate e-way bill details for inter-state transfers.",
  },
  {
    icon: Percent,
    title: "Dual Pricing & Tax-Inclusive Billing",
    desc: "Support for MRP-inclusive billing as well as base price + tax calculations, ensuring transparent printouts for both retail and wholesale customers.",
  },
];

const faqs = [
  {
    q: "How does BCOR handle different GST tax slabs for medicines?",
    a: "Every medicine in the master inventory is mapped to its specific GST percentage (e.g., life-saving drugs at 5%, standard pharma at 12%, supplements at 18%). When billing, BCOR applies the exact rate automatically.",
  },
  {
    q: "Can my Chartered Accountant easily extract reports from BCOR?",
    a: "Yes! BCOR provides dedicated GSTR-1, GSTR-2 purchase registers, GSTR-3B summary, and HSN-wise sales reports in standard Microsoft Excel and CSV formats.",
  },
  {
    q: "Does BCOR support Composition Scheme pharmacies?",
    a: "Yes, BCOR supports both Regular GST registered pharmacies (with tax invoice generation) and Composition Scheme dealers (with Bill of Supply formats).",
  },
  {
    q: "What happens when GST rates or rules are updated by the government?",
    a: "BCOR provides free software updates and flexible tax rate configuration so you can update rates in seconds without requiring technical support.",
  },
];

export default function GstPharmacySoftwarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <Percent className="w-3.5 h-3.5" /> 100% Indian GST Compliance Standard
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              GST Pharmacy Billing &amp; Tax Software for{" "}
              <span className="text-teal-600">Indian Medical Stores</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Eliminate tax calculation errors and speed up month-end GST filing. BCOR ERP auto-manages HSN codes, multi-slab tax invoices, purchase ITC tracking, and 1-click GSTR exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917994184506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Get Free GST Software Demo
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                Explore GST Modules
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
              Automated Tax Workflows
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive GST Compliance Without the Complexity
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Designed from the ground up to satisfy Indian Goods and Services Tax (GST) pharmaceutical guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gstFeatures.map((item) => (
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

      {/* Tax Workflow Breakdown */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              How BCOR Simplifies Pharmacy GST Filing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 3-step automated cycle from purchase invoice entry to GSTR filing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Tax Invoicing</h3>
              <p className="text-sm text-slate-600">
                Point-of-sale bills auto-calculate CGST/SGST per item and print GSTIN-compliant thermal or A4 receipts instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Purchase & ITC Ledger</h3>
              <p className="text-sm text-slate-600">
                Import distributor bills to capture input tax credits automatically and match against supplier statements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1-Click GSTR Export</h3>
              <p className="text-sm text-slate-600">
                Export GSTR-1, GSTR-3B, and HSN summary spreadsheets ready for CA review or direct portal upload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              GST Invoicing Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Common questions about GST rules, tax slabs, and returns.
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

      {/* Internal Navigation Links */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Explore More BCOR Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pharmacy-billing-software-india"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Billing Software India
            </Link>
            <Link
              href="/pharmacy-inventory-management"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Inventory Management
            </Link>
            <Link
              href="/medical-shop-billing-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Medical Shop POS Software
            </Link>
            <Link
              href="/pharmacy-software-kerala"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Kerala Pharmacy Software
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
