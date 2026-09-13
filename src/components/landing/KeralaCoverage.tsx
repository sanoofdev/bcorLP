"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { keralaDistricts } from "@/lib/kerala-districts";

export function KeralaCoverage() {
  const [query, setQuery] = useState("");
  const districts = keralaDistricts.filter((district) => `${district.displayName} ${district.region}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <section id="districts" className="scroll-mt-24 py-14 sm:py-20 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-xl"><p className="text-sm text-teal-700 font-semibold mb-3">Across Kerala</p><h2 className="text-3xl sm:text-4xl font-semibold text-zinc-950 leading-tight">Your district. Your BCOR demo.</h2><p className="mt-4 text-zinc-600 leading-relaxed">Explore BCOR for your pharmacy and speak to our sales team about setup, training and support in your district.</p></div>
          <div className="w-full md:w-80 shrink-0">
            <label htmlFor="district-search" className="block text-sm text-zinc-700 font-medium mb-2">Find your district</label>
            <div className="flex items-center gap-2 border border-zinc-300 rounded-lg bg-white px-3 h-12 focus-within:ring-2 focus-within:ring-teal-600">
              <Search className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
              <input id="district-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="District name" className="min-w-0 w-full bg-transparent text-sm outline-none" />
              {query && <button onClick={() => setQuery("")} aria-label="Clear district search" title="Clear search" className="p-1"><X className="w-4 h-4" /></button>}
            </div>
          </div>
        </div>
        <p role="status" className="text-xs text-zinc-500 mb-4">{districts.length} of 14 districts</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {districts.map((district) => <Link key={district.slug} href={`/pharmacy-software-kerala/${district.slug}`} className="group flex items-center gap-3 min-h-24 p-4 border border-zinc-200 rounded-lg bg-white hover:border-teal-600 focus-visible:outline-2 focus-visible:outline-teal-600 transition-colors"><MapPin className="w-5 h-5 text-teal-700 shrink-0" aria-hidden="true" /><div className="min-w-0 flex-1"><h3 className="text-sm font-semibold text-zinc-900 break-words">{district.displayName}</h3><p className="text-xs text-zinc-500 mt-1.5">{district.region}</p></div><ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-teal-700 shrink-0" aria-hidden="true" /></Link>)}
        </div>
        {districts.length === 0 && <div className="py-10 text-center"><p className="text-zinc-600">No matching district.</p><button onClick={() => setQuery("")} className="mt-3 text-teal-700 font-medium underline underline-offset-4">Show all districts</button></div>}
      </div>
    </section>
  );
}
