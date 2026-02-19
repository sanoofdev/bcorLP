"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Zap,
    Package,
    Shield,
    BarChart3,
    Users,
    WifiOff,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning-Fast Billing",
        outcome: "No lag even when customers are waiting in line",
        highlight: "< 2s per bill",
    },
    {
        icon: Package,
        title: "Expiry & Batch Tracking",
        outcome: "Prevent losses from expired medicines with automatic FEFO",
        highlight: "Zero expiry loss",
    },
    {
        icon: Shield,
        title: "Drug & Schedule H1 Compliance",
        outcome: "Stay inspection-ready at all times with auto-generated registers",
        highlight: "Audit ready",
    },
    {
        icon: BarChart3,
        title: "Powerful Business Reports",
        outcome: "Know exactly what's selling and what's stuck in your inventory",
        highlight: "50+ reports",
    },
    {
        icon: Users,
        title: "Multi-User Access Control",
        outcome: "Manage staff without risking data leaks or unauthorized access",
        highlight: "Role-based",
    },
    {
        icon: WifiOff,
        title: "Offline-First System",
        outcome: "Billing works even when internet fails — auto-syncs when back online",
        highlight: "100% offline",
    },
];

export function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="features" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3 sm:mb-4"
                    >
                        Built for Pharmacies
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
                    >
                        Everything You Need,
                        <br />
                        <span className="text-teal-600">Nothing You Don&apos;t</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm sm:text-base lg:text-lg text-slate-600 px-4 sm:px-0"
                    >
                        Every feature designed specifically for Indian pharmacy workflows —
                        saving time, preventing losses, and keeping you compliant.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    ref={ref}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <div className="group h-full p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-teal-600" />
                                    </div>
                                    <span className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-teal-600 bg-teal-50 border border-teal-100">
                                        {feature.highlight}
                                    </span>
                                </div>

                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {feature.outcome}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
