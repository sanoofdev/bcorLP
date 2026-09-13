"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Linkedin } from "lucide-react";

const productLinks = [
  { name: "Features", href: "/#features" },
  { name: "Compliance", href: "/#compliance" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Kerala Districts", href: "/pharmacy-software-kerala#districts" },
];

const solutionLinks = [
  { name: "GST Pharmacy Billing", href: "/gst-pharmacy-software" },
  { name: "Inventory Management", href: "/pharmacy-inventory-management" },
  { name: "Medical Shop POS", href: "/medical-shop-billing-software" },
  { name: "Kerala Pharmacy Software", href: "/pharmacy-software-kerala" },
  { name: "Calicut Pharmacy Software", href: "/pharmacy-software-calicut" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image
                src="/icon.png"
                alt="BCOR ERP Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <div>
                <span className="text-white font-bold text-lg sm:text-xl block">
                  BCOR ERP
                </span>
                <span className="text-[10px] sm:text-xs text-teal-400 font-semibold tracking-wider">
                  PHARMACY SOFTWARE
                </span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              The complete billing and inventory management software for Indian pharmacies.
              Fast, reliable, and works 100% offline with lifetime license.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="tel:+919847434096"
                aria-label="Call BCOR sales and support at +91 9847434096"
                className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                <span>+91 9847434096</span>
              </a>
              <a
                href="mailto:bcor.sales@gmail.com"
                aria-label="Email BCOR support at bcor.sales@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                <span>bcor.sales@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-slate-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                <span>India (Kerala &amp; National Support)</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-label={`Navigate to ${item.name} section`}
                    className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Solutions
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={`Learn more about ${item.name}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder */}
        <div className="py-6 sm:py-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Founder, BCOR Innovation
            </p>
            <p className="text-white font-semibold text-base sm:text-lg">
              MUHAMMED AZAD RAHMAN
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Technology Leadership · ERP &amp; Digital Transformation · Kozhikode, Kerala
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/azadkrahman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Muhammed Azad Rahman on LinkedIn"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-teal-400" />
            LinkedIn Profile
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} BCOR ERP. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
