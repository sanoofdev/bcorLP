import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  Package,
  Clock,
  ScanBarcode,
  AlertTriangle,
  FileSpreadsheet,
  Truck,
  CheckCircle2,
  Phone,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Inventory Management Software | bcor.in - Kerala's Leading Pharmacy Tech Solution",
  description:
    "Take control of your pharmacy inventory with bcor.in's intelligent stock management system. Reduce waste, prevent stockouts, and improve profitability. Kerala-based support. Learn more!",
  alternates: {
    canonical: "/pharmacy-inventory-management",
  },
};

const inventoryFeatures = [
  {
    icon: Clock,
    title: "FEFO Automatic Batch Allocation",
    desc: "Enforces First-Expiry-First-Out (FEFO) dispensing logic during POS billing so older medicine batches are sold first, drastically reducing dead stock.",
  },
  {
    icon: AlertTriangle,
    title: "30/60/90-Day Expiry Early Warning",
    desc: "Color-coded advance notifications highlight near-expiry medicines months ahead, giving you ample time to return stock to distributors for credit.",
  },
  {
    icon: ScanBarcode,
    title: "Instant Barcode Stock Inward & Scan",
    desc: "Speed up medicine receiving with 1D/2D barcode scanning. Map 100+ medicine strips in seconds without manual batch code typing.",
  },
  {
    icon: Truck,
    title: "Automated Reorder Levels & POs",
    desc: "Set minimum and maximum safety stock levels per SKU. BCOR auto-generates supplier purchase orders based on your sales velocity.",
  },
  {
    icon: FileSpreadsheet,
    title: "Supplier Expiry & Damage Returns (RTV)",
    desc: "Generate Return-to-Vendor debit notes, track supplier credit adjustments, and keep exact account of pending replacement goods.",
  },
  {
    icon: Package,
    title: "Stock Audit & Discrepancy Reconciliation",
    desc: "Perform quick physical audits by rack or category without shutting down daily billing. Reconcile inventory discrepancies in minutes.",
  },
];

const faqs = [
  {
    q: "How does FEFO batch tracking prevent medicine expiry losses?",
    a: "When a medicine is scanned at checkout, BCOR automatically selects the batch with the nearest expiry date. Cashiers don't need to manually sort through boxes, ensuring older stock is sold before newer inventory.",
  },
  {
    q: "Can BCOR alert me before stock runs out?",
    a: "Yes. You can configure minimum reorder thresholds for fast-moving medicines. The system automatically creates a daily reorder list when stock dips below safe levels.",
  },
  {
    q: "Does BCOR support multi-rack location tracking in large stores?",
    a: "Yes, you can assign rack numbers and shelf bins (e.g., Rack A, Shelf 3) to every medicine in the master inventory for fast retrieval during busy counter hours.",
  },
  {
    q: "Can I manage non-pharma products like cosmetics and surgical items?",
    a: "BCOR supports complete retail inventory management for FMCG, baby products, medical devices, OTC supplements, and ayurvedic medicines alongside pharmaceuticals.",
  },
];

export default function PharmacyInventoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <Package className="w-3.5 h-3.5" /> Zero Expiry Loss Inventory Architecture
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Smart Pharmacy Inventory &amp;{" "}
              <span className="text-teal-600">Expiry Management Software</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Stop losing profits to expired medicines. BCOR automates FEFO batch tracking, advance expiry alerts, barcode stock intake, and supplier purchase orders for medical stores across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917994184506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Schedule Live Inventory Demo
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                Explore Inventory Tools
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
              Precision Stock Control
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Protect Your Profit Margins with Accurate Batch Control
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Complete inventory visibility from distributor purchase inward to patient counter dispensing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {inventoryFeatures.map((item) => (
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

      {/* Expiry Loss Workflow */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              How BCOR Prevents Medicine Wastage
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A proactive, automated process that safeguards every rupee invested in stock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">90-Day Early Scan</h3>
              <p className="text-sm text-slate-600">
                System identifies slow-moving batches nearing expiration and flags them on dashboard alerts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Prioritized Dispensing</h3>
              <p className="text-sm text-slate-600">
                FEFO logic prioritizes these units automatically during daily billing counter transactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1-Click Supplier Return</h3>
              <p className="text-sm text-slate-600">
                Generate Return-to-Vendor debit notes before expiration deadlines to ensure 100% distributor reimbursement.
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
              Inventory Software FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers regarding stock management and supplier operations.
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
            Related Modules &amp; Solutions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gst-pharmacy-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              GST Invoicing &amp; Tax Software
            </Link>
            <Link
              href="/medical-shop-billing-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Medical Store POS
            </Link>
            <Link
              href="/pharmacy-billing-software-india"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Billing India
            </Link>
            <Link
              href="/pharmacy-software-calicut"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Calicut Pharmacy Software
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
