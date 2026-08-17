"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { RESOURCES } from "@/lib/constants";

export function ResourcesSection() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Resources to help you get started
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESOURCES.map((resource, index) => (
          <motion.a
            key={resource.title}
            href={resource.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group block bg-white rounded-2xl p-6 border border-gray-200
                       hover:border-brand-500/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                {resource.type}
              </span>
              <span className="text-xs text-gray-400">{resource.readTime}</span>
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors leading-snug">
              {resource.title}
            </h3>
            <div className="mt-4 flex items-center text-sm font-medium text-brand-500 gap-1">
              Read more
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
