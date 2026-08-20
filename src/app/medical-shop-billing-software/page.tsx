import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import {
  Zap,
  UserCheck,
  Printer,
  ShieldCheck,
  Smartphone,
  CreditCard,
  CheckCircle2,
  Phone,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Shop Billing Software India | Retail Chemist POS - BCOR",
  description:
    "Fast, easy-to-use billing software for medical shops and retail chemists in India. Sub-2-second billing, barcode scanning, doctor registers, and WhatsApp invoices.",
  alternates: {
    canonical: "/medical-shop-billing-software",
  },
};

const chemistFeatures = [
  {
    icon: Zap,
    title: "Sub-2-Second Counter Billing",
    desc: "Speed through morning and evening customer rushes. Instant shortcut key navigation, barcode scans, and lightning-fast item additions.",
  },
  {
    icon: UserCheck,
    title: "Patient Prescription & History",
    desc: "Store patient medical history, chronic prescription refill reminders (diabetes, hypertension), and doctor consultation records.",
  },
  {
    icon: ShieldCheck,
    title: "Schedule H & H1 Inspection Registers",
    desc: "Auto-record doctor name, patient address, and quantity dispensed for scheduled antibiotics and psychotropic drugs for drug inspection compliance.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp & SMS Digital Receipts",
    desc: "Send PDF invoices directly to customer mobile numbers via WhatsApp to save thermal paper costs and provide a modern patient experience.",
  },
  {
    icon: Printer,
    title: "All Printer & Barcode Hardware Supported",
    desc: "Compatible with 2-inch and 3-inch thermal POS receipt printers, standard A4/A5 laser printers, and USB/Bluetooth 1D & 2D barcode scanners.",
  },
  {
    icon: CreditCard,
    title: "Split Payments & Credit Ledger (Udhaar)",
    desc: "Accept cash, UPI, cards, and manage customer credit ledgers with automated payment due alerts and balance tracking.",
  },
];

const faqs = [
  {
    q: "Is BCOR easy for medical shop staff with limited computer experience?",
    a: "Yes! BCOR is designed with an intuitive keyboard-first interface. A new cashier can master fast billing, searching medicines, and printing bills within 15 minutes of training.",
  },
  {
    q: "Can I manage chronic patient refill reminders?",
    a: "Yes. For regular customers with monthly prescriptions, BCOR tracks refill cycles and allows you to view past dosages with a single search.",
  },
  {
    q: "Does BCOR work on older computers?",
    a: "Yes! BCOR is optimized to run smoothly on standard Windows 10 and 11 computers with basic 4GB RAM without slowing down.",
  },
  {
    q: "Is there any limit on how many bills or items I can store?",
    a: "No. BCOR supports unlimited medicine SKUs, unlimited daily customer transactions, and lifetime transaction history without performance drops.",
  },
];

export default function MedicalShopBillingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5" /> Built for Fast-Paced Retail Chemists
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Medical Shop &amp; Chemist{" "}
              <span className="text-teal-600">Billing Software</span> in India
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Speed up counter checkout, eliminate billing queues, and stay 100% compliant with drug inspection rules. BCOR is the trusted desktop POS for Indian retail pharmacies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917994184506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Call for Free Chemist POS Demo
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                View Counter Features
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
              Retail Counter Excellence
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything Your Medical Store Needs Behind the Counter
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Designed around the real-world daily interactions between pharmacists, patients, and doctors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {chemistFeatures.map((item) => (
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

      {/* Counter Efficiency Highlight */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Why Retail Chemists Switch to BCOR ERP
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Traditional generic billing systems are too slow and lack drug-specific intelligence. BCOR makes every transaction effortless.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">⚡ Keyboard-First Speed</h3>
              <p className="text-sm text-slate-600">
                Complete bills with full keyboard shortcuts without touching the mouse once.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🛡️ Full Audit Protection</h3>
              <p className="text-sm text-slate-600">
                Schedule H1 registers auto-populated with zero extra paperwork for staff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">💰 100% Lifetime Ownership</h3>
              <p className="text-sm text-slate-600">
                Never pay monthly rent for the software running your essential retail business.
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
              Medical Store Billing FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Questions and answers for retail pharmacy owners.
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
            Explore Related Software Modules
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gst-pharmacy-software"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              GST Pharmacy Invoicing
            </Link>
            <Link
              href="/pharmacy-inventory-management"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Pharmacy Inventory Management
            </Link>
            <Link
              href="/pharmacy-software-kerala"
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Kerala Pharmacy Software
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
