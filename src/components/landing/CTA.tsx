"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function CTA() {
  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition & Direct Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5 text-teal-400" /> Start Your 15-Minute Free Walkthrough
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Ready to Upgrade Your Pharmacy to{" "}
              <span className="text-teal-400">BCOR ERP?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Join 100+ pharmacies and medical stores across India. Experience sub-2-second counter billing, automated GST returns, and zero monthly subscription fees.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8 max-w-lg mx-auto lg:mx-0 text-left">
              {[
                "100% Offline capability — never stops during internet cuts",
                "Automatic Schedule H1, narcotic & inspection registers",
                "Free data migration from Marg ERP & legacy billing software",
                "One-time purchase lifetime license (zero monthly rent)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-5 bg-slate-800/80 border border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Prefer a direct phone conversation?
                </p>
                <p className="text-white font-bold text-lg mt-0.5">
                  Call Senior Sales Specialist
                </p>
              </div>
              <a
                href="tel:+917994184506"
                aria-label="Call BCOR sales directly at +91 7994184506"
                className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl whitespace-nowrap transition flex items-center gap-2 text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-slate-950" /> +91 7994184506
              </a>
            </div>
          </motion.div>

          {/* Right Column: Lead Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
