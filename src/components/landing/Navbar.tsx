"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { callbackUrl } from "@/lib/sales-contact";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="BCOR ERP Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold text-slate-900">
                  BCOR
                </span>
                <span className="text-[10px] uppercase tracking-widest text-teal-600 font-semibold">
                  PHARMACY SOFTWARE
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/#features" className="text-slate-700 hover:text-teal-600 font-medium transition">
                Features
              </a>
              <a href="/#compliance" className="text-slate-700 hover:text-teal-600 font-medium transition">
                Compliance
              </a>
              <a href="/#pricing" className="text-slate-700 hover:text-teal-600 font-medium transition">
                Pricing
              </a>
              <a href="/pharmacy-software-kerala#districts" className="text-slate-700 hover:text-teal-600 font-medium transition">
                Kerala Districts
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/#pricing"
                className="px-5 py-2 text-sm font-medium border border-slate-300 rounded-xl hover:bg-slate-100 transition"
              >
                View Plans
              </a>

              <a
                href={callbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-semibold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Request a Callback
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                className="p-2 text-slate-700 hover:text-teal-600 transition"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-md border-t border-slate-200 z-40">
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 font-medium"
            >
              Features
            </a>
            <a
              href="/#compliance"
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 font-medium"
            >
              Compliance
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 font-medium"
            >
              Pricing
            </a>
            <a
              href="/pharmacy-software-kerala#districts"
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 font-medium"
            >
              Kerala Districts
            </a>

            <a
              href="tel:+919847434096"
              className="mt-4 py-3 bg-teal-600 text-white text-center font-semibold rounded-xl"
            >
              Call for Free Demo
            </a>
          </div>
        </div>
      )}

      {/* Sticky Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg flex gap-2">
        <a
          href={callbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-sm shadow-sm active:scale-95 transition"
        >
          <Phone className="w-4 h-4" /> Request a Callback
        </a>
        <a
          href="/#pricing"
          className="flex-1 py-3 bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-semibold flex items-center justify-center text-sm active:scale-95 transition"
        >
          View Pricing
        </a>
      </div>
    </>
  );
}
