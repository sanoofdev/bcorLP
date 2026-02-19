"use client";

import { motion } from "framer-motion";
import { Users, IndianRupee, Shield, Zap } from "lucide-react";

const stats = [
    { value: "100+", label: "Pharmacies Trust Us", icon: Users },
    { value: "₹50L+", label: "Daily Transactions", icon: IndianRupee },
    { value: "99.9%", label: "Uptime Reliability", icon: Shield },
    { value: "<2s", label: "Avg. Billing Time", icon: Zap },
];

export function Stats() {
    return (
        <section className="py-12 sm:py-14 lg:py-16 bg-teal-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 mb-3 sm:mb-4">
                                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                                {stat.value}
                            </p>
                            <p className="text-teal-100 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
