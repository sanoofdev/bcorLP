"use client";

import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";

export function CTA() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-teal-600 rounded-xl sm:rounded-2xl lg:rounded-3xl px-5 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-20 text-center"
                >
                    <p className="text-xs sm:text-sm font-semibold text-teal-100 uppercase tracking-wide mb-4 sm:mb-6">
                        Start Your Journey Today
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Ready to Modernize
                        <br />
                        Your Pharmacy?
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-teal-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
                        Join 100+ pharmacies using B-Core. Get a personalized demo and see why
                        we're the preferred choice for Indian chemists.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="tel:+917994184506"
                            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                            Call Sales Now
                        </a>

                        <a
                            href="#"
                            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-colors flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                        >
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                            Request Demo
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
