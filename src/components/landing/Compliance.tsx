"use client";

import { motion } from "framer-motion";
import { FileCheck, ClipboardList, ShieldCheck, HardDrive } from "lucide-react";

const complianceItems = [
    {
        icon: FileCheck,
        title: "Schedule H1 & Drug Register Compliance",
        description:
            "Automatic tracking and records to meet regulatory requirements without manual logs.",
    },
    {
        icon: ClipboardList,
        title: "Inspection-Ready Reports",
        description:
            "Generate required reports instantly during inspections without scrambling for data.",
    },
    {
        icon: ShieldCheck,
        title: "Tamper-Resistant Records",
        description:
            "Prevent accidental or intentional data changes that can cause compliance issues.",
    },
    {
        icon: HardDrive,
        title: "Local Data, Full Control",
        description:
            "Your billing and stock data stays with you, not on unknown servers.",
    },
];

export function Compliance() {
    return (
        <section id="compliance" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
                    >
                        Built to Survive Pharmacy Inspections,
                        <br />
                        <span className="text-teal-700">Not Just Daily Billing</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        B-Core ERP is designed around Indian pharmacy regulations, so you
                        stay audit-ready without extra work.
                    </motion.p>
                </div>

                {/* Compliance Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {complianceItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-teal-700" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
