"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    WifiOff,
    Zap,
    Shield,
    Headphones,
    Monitor,
    Smartphone,
} from "lucide-react";

const benefits = [
    {
        icon: WifiOff,
        title: "Works 100% Offline",
        description: "No internet? No problem. B-Core runs entirely on your desktop with automatic sync when connected.",
    },
    {
        icon: Zap,
        title: "Blazing Fast Performance",
        description: "Complete a sale in under 2 seconds, even on older hardware. No lag during rush hours.",
    },
    {
        icon: Shield,
        title: "Your Data Stays Local",
        description: "All data stored on your computer. Encrypted backups, role-based access, and complete audit trails.",
    },
    {
        icon: Headphones,
        title: "Real Support, Real People",
        description: "Call, WhatsApp, or remote access. Average response time under 5 minutes during business hours.",
    },
];

export function WhyBCore() {
    return (
        <section id="why-bcore" className="py-16 sm:py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center lg:text-left"
                    >
                        <p className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3 sm:mb-4">
                            Why Pharmacies Choose B-Core
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                            Built for Pharmacies,
                            <br />
                            <span className="text-teal-600">Not Generic Retail</span>
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                            We understand Indian pharmacy workflows — drug schedules, batch tracking,
                            expiry management, and compliance requirements. That&apos;s all B-Core does.
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-3 sm:gap-4 text-left"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-teal-50 flex items-center justify-center">
                                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Desktop App Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-800">
                            {/* App Header */}
                            <div className="flex items-center justify-between mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Image
                                        src="/icon.png"
                                        alt="BCOR Desktop App Logo"
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                    />
                                    <div>
                                        <p className="text-white font-semibold text-sm sm:text-base">B-Core Desktop</p>
                                        <p className="text-[10px] sm:text-xs text-slate-400">Windows 10+ Compatible</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-500/20 rounded-full">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full" />
                                    <span className="text-[10px] sm:text-xs text-green-400 font-medium">Online</span>
                                </div>
                            </div>

                            {/* Platform Grid */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-slate-700/50">
                                    <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mb-2 sm:mb-3" />
                                    <p className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1">Desktop</p>
                                    <p className="text-xs sm:text-sm text-slate-400">Native Windows App</p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-slate-700/50">
                                    <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2 sm:mb-3" />
                                    <p className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1">Mobile</p>
                                    <p className="text-xs sm:text-sm text-slate-400">Reports on the Go</p>
                                </div>
                            </div>

                            {/* Specs */}
                            <div className="space-y-2 sm:space-y-3">
                                {[
                                    { label: "System Requirements", value: "Windows 10+, 4GB RAM" },
                                    { label: "Installation Size", value: "~150 MB" },
                                    { label: "Updates", value: "Automatic & Free" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between py-2 sm:py-3 border-b border-slate-800"
                                    >
                                        <span className="text-slate-400 text-xs sm:text-sm">{item.label}</span>
                                        <span className="text-white font-medium text-xs sm:text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
