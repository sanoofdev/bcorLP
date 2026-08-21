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
  Phone,
  HelpCircle,
  Star,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmacy Software in Thiruvananthapuram | BCOR - Kerala's Southern Pharmacy Management",
  description:
    "BCOR pharmacy billing software for Thiruvananthapuram (Trivandrum) pharmacies. Offline billing, GST compliance, inventory management & regulatory compliance for Kerala's southern districts.",
  alternates: {
    canonical: "/pharmacy-software-trivandrum",
  },
};

const trivandrumFeatures = [
  {
    icon: ShieldCheck,
    title: "Kerala Drug Inspector Ready",
    desc: "Pre-built templates for Drug Inspector visits. Schedule H, H1, and narcotic registers automatically generated with proper batch tracking.",
  },
  {
    icon: Zap,
    title: "Offline Resilience for South Kerala",
    desc: "100% offline operation ensures uninterrupted billing even during monsoon network outages common in coastal areas.",
  },
  {
    icon: FileSpreadsheet,
    title: "Auto Import from South Suppliers",
    desc: "Direct import from major distributors serving Thiruvananthapuram - Maveli, Nilambur, Kollam district suppliers.",
  },
  {
    icon: Building2,
    title: "Regional Support from Kozhikode",
    desc: "Call support from our Kerala team based in Kozhikode - same time zone support for Trivandrum pharmacies.",
  },
  {
    icon: Users,
    title: "Multi-branch Central Management",
    desc: "Manage multiple pharmacies from Trivandrum to Kasaragod with centralized reports and inventory sync.",
  },
  {
    icon: Globe,
    title: "English & Malayalam Interface",
    desc: "Full support for both languages - English for business operations, Malayalam for local staff.",
  },
];

const faqs = [
  {
    q: "Is BCOR suitable for multi-branch pharmacies in Thiruvananthapuram?",
    a: "Yes! BCOR supports centralized management of multiple pharmacy locations across Kerala, including Trivandrum multi-store operations.",
  },
  {
    q: "How does BCOR handle Kerala's regulatory requirements?",
    a: "We have built-in templates for all Kerala State Drug Controller forms, including Schedule H1 registers, expiry tracking, and batch management.",
  },
  {
    q: "What about support for dental pharmacies in the region?",
    a: "BCOR supports dental pharmacy operations with specialized billing for dental products, orthodontic supplies, and related accessories.",
  },
];

export default function PharmacySoftwareTrivandrumPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-50 to-slate-100 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <Star className="w-3.5 h-3.5" /> Trusted by Kerala Pharmacies
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Pharmacy Software in Trivandrum &amp;{" "}
              <span className="text-teal-600">South Kerala</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              BCOR's pharmacy billing and inventory management solution trusted by pharmacies across Kerala, especially in the southern districts. Offline-capable, GST-ready, and compliant with local regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+917****4506"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Request Demo in Trivandrum
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                View Features
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
              Built for Southern Kerala
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Pharmacy Solutions for Thiruvananthapuram
            </h2>
            <p className="text-sm sm:text:base text-slate-600">
              Designed to meet the specific needs of pharmacies serving Kerala's southern district markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trivandrumFeatures.map((item) => (
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
                <p className="text-sm sm:text:base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage - South Kerala Focus */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Serving Pharmacies Across South Kerala
          </h2>
          <p className="text-slate-600 text-sm sm:text:base mb-8 max-w-2xl mx-auto">
            From Thiruvananthapuram to Kasaragod, BCOR supports medical stores throughout Kerala's southern region and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto text-xs sm:text-sm font-medium text-slate-700">
            {[
              "Thiruvananthapuram",
              "Kollam",
              "Ernakulam",
              "Kozhikode (Calicut)",
              "Thrissur",
              "Palakkad",
              "Malappuram",
              "Kannur",
              "Kasaragod",
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
              Thiruvananthapuram Pharmacy FAQs
            </h2>
            <p className="text-sm sm:text:base text-slate-600">
              Answers to questions specific to pharmacy operations in Thiruvananthapuram.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm sm:text:base text-slate-600 pl-7 leading-relaxed">
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
              className="px-4 py-2 bg-white hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition"
            >
              Cochin Pharmacy Software
            </Link>
            <Link
              href="/pharmacy-software-trivandrum"
              className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg border border-teal-600 transition"
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