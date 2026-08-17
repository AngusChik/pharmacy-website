"use client";

import { motion } from "framer-motion";
import { LOGO_PARTNERS } from "@/lib/constants";

export function LogoMarquee() {
  const doubled = [...LOGO_PARTNERS, ...LOGO_PARTNERS];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-gray-50 border-y border-gray-200/50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-gray-400 mb-8 font-medium uppercase tracking-wider">
          Integrates with the tools you already use
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-12 w-max">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-gray-200
                         text-sm font-semibold text-gray-400 grayscale hover:grayscale-0
                         hover:text-gray-700 hover:border-brand-200 transition-all duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
