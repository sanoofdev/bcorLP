"use client";

import { motion } from "framer-motion";
import { Check, Phone, Shield, Headphones } from "lucide-react";

const keyPoints = [
    "One-time software purchase",
    "Lifetime usage for your pharmacy",
    "No monthly or yearly subscription",
    "Works fully offline",
];

const inclusions = [
    "Billing, inventory, expiry & compliance",
    "Unlimited users",
    "All core features included",
    "Free software updates",
];

const valuePoints = [
    "No recurring payments or subscription pressure",
    "Lower total cost over long-term use",
    "No risk of software access stopping",
    "Predictable ownership for business planning",
];

export function Pricing() {
    return (
        <section id="pricing" className="py-16 sm:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3 sm:mb-4"
                    >
                        Licensing & Ownership
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
                    >
                        Own Your Pharmacy Software.
                        <br />
                        <span className="text-teal-600">No Subscriptions.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-base sm:text-lg text-slate-600"
                    >
                        One-time purchase with lifetime license. Built for pharmacies that
                        want stability, not recurring fees.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
                    {/* License Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                                    Pharmacy ERP Lifetime License
                                </h3>
                                <p className="text-slate-500 text-sm sm:text-base mt-1">
                                    Complete pharmacy management system
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                                {keyPoints.map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-teal-600" />
                                        </div>
                                        <span className="text-slate-800 text-sm sm:text-base font-medium">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Inclusions */}
                            <div className="mb-6">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                                    What&apos;s Included
                                </p>
                                <div className="space-y-2">
                                    {inclusions.map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                            <span className="text-slate-600 text-sm sm:text-base">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support Policy */}
                            <div className="bg-white rounded-lg p-4 border border-slate-200 mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Headphones className="w-4 h-4 text-teal-600" />
                                    <span className="font-semibold text-slate-900 text-sm">
                                        Support Policy
                                    </span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <Shield className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-medium text-slate-800">
                                                1 Year Free Support Included
                                            </span>
                                            <p className="text-slate-500 text-xs mt-0.5">
                                                Phone support, setup assistance &amp; issue resolution
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Shield className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-medium text-slate-700">
                                                Optional Annual AMC
                                            </span>
                                            <p className="text-slate-500 text-xs mt-0.5">
                                                Continued support &amp; maintenance. No forced renewal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-3">
                                <a
                                    href="tel:+917994184506"
                                    aria-label="Call sales to understand licensing details"
                                    className="w-full py-3.5 sm:py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Call to Understand Licensing (+91 7994184506)
                                </a>
                                <a
                                    href="#features"
                                    aria-label="Explore all ERP features"
                                    className="w-full py-3 text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center text-sm sm:text-base"
                                >
                                    Explore Core Features
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Value Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="w-full"
                    >
                        <div className="bg-slate-100 border border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-5">
                                Why Pharmacies Prefer Lifetime License
                            </h3>

                            <div className="space-y-4 mb-6">
                                {valuePoints.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    You pay once and continue using the software without worrying
                                    about renewals or price hikes.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
