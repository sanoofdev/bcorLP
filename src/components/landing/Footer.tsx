"use client";

import { Phone, MapPin, Mail } from "lucide-react";

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b09dd75c-2ddb-48e4-98d3-aa63dfa4e912/bcoreemplem-1768989187964.png";

const productLinks = ["Features", "Pricing", "Updates", "Roadmap"];
const companyLinks = ["About Us", "Contact", "Support", "Privacy Policy", "Terms of Service"];

export function Footer() {
    return (
        <footer className="bg-slate-900 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <img
    src="/icon.png"
    alt="BCOR Logo"
    className="h-[70px] w-auto object-contain"
  />
                            <div>
                                <span className="text-white font-bold text-lg sm:text-xl block">BCOR ERP</span>
                                <span className="text-[10px] sm:text-xs text-teal-400 font-medium tracking-wider">
                                    PHARMACY SOFTWARE
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                            The complete billing and inventory management software for Indian pharmacies.
                            Fast, reliable, and works offline.
                        </p>
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <a href="tel:+919847434096" className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                                <span>+91 9847434096</span>
                            </a>
                            <a href="mailto:support@bcor.in" className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                                <span>support@bcor.in</span>
                            </a>
                            <div className="flex items-center gap-2 sm:gap-3 text-slate-400 text-sm sm:text-base">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Product</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {productLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {companyLinks.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
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
