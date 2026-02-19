"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b09dd75c-2ddb-48e4-98d3-aa63dfa4e912/bcoreemplem-1768989187964.png";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
        <a href="/" className="flex items-center">
  <img
    src="/icon.png"
    alt="BCOR Logo"
    className="h-[70px] w-auto object-contain"
  />
  <div className="flex flex-col leading-none -ml-3">
    <span className="text-2xl font-bold text-slate-900">
      BCOR
    </span>
    <span className="text-[11px] uppercase tracking-widest text-teal-600">
      PHARMACY SOFTWARE
    </span>
  </div>
</a>



            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#products" className="text-slate-700 hover:text-teal-600 font-medium">
                Products
              </a>
              <a href="#solutions" className="text-slate-700 hover:text-teal-600 font-medium">
                Solutions
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-teal-600 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-slate-700 hover:text-teal-600 font-medium">
                About Us
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#login"
                className="px-5 py-2 text-sm font-medium border border-slate-300 rounded-xl hover:bg-slate-100 transition"
              >
                Login
              </a>

              <a
                href="tel:+917994184506"
                className="px-6 py-2.5 text-sm font-semibold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Get Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-md border-t border-slate-200 z-40">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#products" className="text-slate-700 font-medium">
              Products
            </a>
            <a href="#solutions" className="text-slate-700 font-medium">
              Solutions
            </a>
            <a href="#pricing" className="text-slate-700 font-medium">
              Pricing
            </a>
            <a href="#about" className="text-slate-700 font-medium">
              About Us
            </a>

            <a
              href="tel:+917994184506"
              className="mt-4 py-3 bg-teal-600 text-white text-center font-semibold rounded-xl"
            >
              Call for Free Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
