"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, Bell, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  FileText,
  Bell,
  Zap,
};

export function FeatureGrid() {
  return (
    <SectionWrapper id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Everything you need to manage pharmacy inventory
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Purpose-built for pharmacies of every size
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8
                         border border-gray-200/60 hover:border-brand-500/40
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="icon-glow w-12 h-12 rounded-xl flex items-center justify-center mb-4
                           bg-gradient-to-br from-blue-100 to-purple-100 text-brand-500
                           group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
              >
                {Icon && <Icon size={24} />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
