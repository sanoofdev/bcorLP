"use client";

import { motion } from "framer-motion";
import { Phone, Play, Shield, Clock, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent pointer-events-none" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-26 pb-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-center lg:text-left">

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-medium text-teal-700">
                Used by 100+ pharmacies across India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Run Your Pharmacy Faster,{" "}
              <span className="text-teal-600">
                Serve More. Stress Less.
              </span>
            </motion.h1>

            {/* Bullet Points */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 mb-8"
            >
              {[
                { icon: Clock, text: "Fast billing even during peak hours" },
                { icon: Package, text: "Expiry & batch tracking to prevent stock loss" },
                { icon: Shield, text: "Schedule H1 & drug compliance built-in" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-600 justify-center lg:justify-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-sm lg:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="tel:+917994184506"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call for Free Demo
              </a>

              <a
                href="#features"
                className="px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-200 transition flex items-center justify-center gap-2 text-sm"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-3xl blur-3xl opacity-40"></div>

              {/* ERP Screenshot */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img
                  src="/erp.png"
                  alt="BCOR ERP Dashboard"
                  className="w-full h-auto"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
