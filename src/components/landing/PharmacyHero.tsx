import Image from "next/image";
import { ArrowDown, ArrowUpRight, MessageCircle, Monitor, Phone } from "lucide-react";
import { callbackUrl } from "@/lib/sales-contact";

export function PharmacyHero() {
  return (
    <section className="bg-white pt-28 sm:pt-32 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm font-semibold text-teal-700 mb-4">For pharmacies across Kerala</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-950 leading-tight max-w-4xl mx-auto">BCOR Pharmacy Software</h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mt-5">Billing, stock and expiry tracking. One clear view of your pharmacy, with offline desktop software and Malayalam support.</p>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <a href={callbackUrl} target="_blank" rel="noopener noreferrer" aria-label="Request a BCOR callback on WhatsApp" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white px-6 min-h-12 font-semibold text-sm"><MessageCircle className="w-4 h-4" aria-hidden="true" /> Request a Callback <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-5 text-sm text-zinc-600">
          <a href="tel:+919847434096" className="inline-flex items-center gap-2 hover:text-teal-700"><Phone className="w-3.5 h-3.5" aria-hidden="true" />9847434096</a>
          <a href="/pharmacy-software-kerala#districts" className="inline-flex items-center gap-2 hover:text-teal-700">Explore all 14 districts <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" /></a>
        </div>
        <figure className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <figcaption className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-3"><Monitor className="w-4 h-4" aria-hidden="true" />Inside BCOR ERP</figcaption>
          <a href="/erp.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size BCOR software preview" className="block"><Image src="/erp.png" alt="BCOR software dashboard showing pharmacy billing and inventory" width={1200} height={750} priority sizes="(max-width: 960px) 100vw, 896px" className="w-full h-auto" /></a>
        </figure>
      </div>
      <div className="mt-8 border-t border-zinc-200 bg-zinc-50"><div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center text-sm font-medium text-zinc-700">{["Offline billing", "Batch & expiry tracking", "GST invoices", "Malayalam support"].map((item) => <p key={item} className="px-3 py-5">{item}</p>)}</div></div>
    </section>
  );
}
