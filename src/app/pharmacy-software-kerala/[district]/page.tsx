import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar, CTA, Footer } from "@/components/landing";
import { keralaDistricts, getKeralaDistrict } from "@/lib/kerala-districts";
import {
  Building2,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    district: string;
  }>;
};

export function generateStaticParams() {
  return keralaDistricts.map((district) => ({
    district: district.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { district: districtSlug } = await params;
  const district = getKeralaDistrict(districtSlug);

  if (!district) {
    return {};
  }

  return {
    title: { absolute: `BCOR Pharmacy Software in ${district.name}` },
    description: `BCOR pharmacy software for ${district.displayName}, Kerala. GST billing, Schedule H1 registers, batch expiry alerts, offline billing, and Malayalam support for medical shops.`,
    alternates: {
      canonical: `/pharmacy-software-kerala/${district.slug}`,
    },
    openGraph: {
      title: `Pharmacy Software in ${district.displayName} | BCOR ERP`,
      description: `Local pharmacy billing software for ${district.displayName} medical shops with GST invoices, stock control, expiry tracking, and Kerala support.`,
      url: `/pharmacy-software-kerala/${district.slug}`,
      images: ["/erp.png"],
      type: "website",
      locale: "en_IN",
      siteName: "BCOR ERP",
    },
    twitter: {
      card: "summary_large_image",
      title: `BCOR Pharmacy Software in ${district.name}`,
      description: `Explore billing, inventory and expiry tracking for medical shops in ${district.displayName}. Call +91 9847434096 for a demo.`,
      images: ["/erp.png"],
    },
  };
}

const districtBenefits = [
  {
    icon: Zap,
    title: "Fast Counter Billing",
    desc: "Create GST bills quickly during rush hours with barcode support, shortcut keys, and offline desktop performance.",
  },
  {
    icon: Package,
    title: "Batch & Expiry Control",
    desc: "Track stock by batch, expiry date, supplier, MRP, purchase rate, and return window to reduce medicine wastage.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection-Ready Registers",
    desc: "Maintain Schedule H1, narcotic, doctor, patient, and controlled-drug records required for pharmacy audits.",
  },
  {
    icon: FileSpreadsheet,
    title: "Purchase Bill Import",
    desc: "Import distributor purchase bills faster and keep stock, margin, and GST records clean from day one.",
  },
  {
    icon: Building2,
    title: "Single & Multi-Branch Ready",
    desc: "Use BCOR for one retail medical shop or expand to multiple counters and branches as your business grows.",
  },
  {
    icon: Phone,
    title: "Kerala Support Team",
    desc: "Get phone, WhatsApp, remote, and scheduled on-site support from a team familiar with Kerala pharmacy workflows.",
  },
];

const districtFaqs = [
  {
    q: "Is BCOR suitable for a small medical shop?",
    a: "Yes. BCOR works for single-counter medical shops and can later scale to extra billing counters, back-office stock entry, and additional branches.",
  },
  {
    q: "Can BCOR run without internet?",
    a: "Yes. BCOR is offline-first desktop pharmacy software, so billing and stock work can continue even when internet connectivity is unstable.",
  },
  {
    q: "Does BCOR support GST and Schedule H1 records?",
    a: "Yes. BCOR creates GST invoices and keeps medicine batch, expiry, doctor, patient, Schedule H1, and controlled-drug records organized.",
  },
  {
    q: "Can my old pharmacy software data be moved to BCOR?",
    a: "Yes. The implementation team can help migrate medicine masters, stock, suppliers, customers, and opening balances from your existing system.",
  },
];

export default async function KeralaDistrictPharmacyPage({ params }: PageProps) {
  const { district: districtSlug } = await params;
  const district = getKeralaDistrict(districtSlug);

  if (!district) {
    notFound();
  }

  const nearbyDistricts = district.nearby
    .map((name) => keralaDistricts.find((item) => item.name === name))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `BCOR Pharmacy Software in ${district.displayName}`,
    serviceType: "Pharmacy billing and inventory software",
    provider: {
      "@type": "Organization",
      name: "BCOR ERP",
      url: "https://bcor.in",
      telephone: "+91-9847434096",
      email: "bcor.sales@gmail.com",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${district.displayName}, Kerala`,
    },
    description: `Offline GST pharmacy billing software for ${district.displayName} medical shops with expiry control, Schedule H1 registers, and Kerala support.`,
  };

  return (
    <main className="min-h-screen bg-white pb-24 lg:pb-0">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {district.region} Pharmacy Software
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              BCOR Pharmacy Software in{" "}
              <span className="text-teal-600">{district.displayName}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              BCOR helps {district.focus} run faster billing, cleaner inventory,
              GST invoices, expiry alerts, and Kerala-ready compliance records
              from one reliable desktop system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919847434096"
                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 shrink-0" /> Call for a Demo
              </a>
              <a
                href={`https://wa.me/919847434096?text=${encodeURIComponent(`Hello BCOR, I would like a pharmacy software demo for my medical shop in ${district.displayName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 font-semibold rounded-xl transition flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 shrink-0 mr-2" aria-hidden="true" /> WhatsApp Sales
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="district-features" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
              Built for {district.name} Medical Shops
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              A Local Pharmacy ERP for Billing, Stock, and Compliance
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              See how BCOR handles your daily workflow, from entering supplier
              purchases to billing customers and checking stock nearing expiry.
              Bring a sample purchase bill to your demo and discuss your current
              software, counters, and printer setup with the sales team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {districtBenefits.map((item) => (
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

      <section className="py-14 bg-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Want BCOR installed in {district.displayName}?
              </h2>
              <p className="text-teal-50 text-sm sm:text-base leading-relaxed">
                Get demo guidance, printer setup, barcode scanner support,
                medicine master migration, and staff training for your pharmacy.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              {[
                "One-time lifetime license",
                "Malayalam and English support",
                "Windows desktop reliability",
                "GST and inspection reports",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {district.name} Pharmacy Software FAQs
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Common questions from Kerala chemists before moving to BCOR.
            </p>
          </div>

          <div className="space-y-4">
            {districtFaqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-white rounded-xl border border-slate-200">
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

      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Nearby Kerala District Pages
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pharmacy-software-kerala"
              className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
            >
              All Kerala Districts
            </Link>
            {nearbyDistricts.map((nearby) =>
              nearby ? (
                <Link
                  key={nearby.slug}
                  href={`/pharmacy-software-kerala/${nearby.slug}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-sm font-medium rounded-lg transition"
                >
                  {nearby.displayName}
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
