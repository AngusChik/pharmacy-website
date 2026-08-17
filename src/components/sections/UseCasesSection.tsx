"use client";

import { motion } from "framer-motion";
import { Pill, FlaskConical, Building2, Heart, Microscope, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { USE_CASES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Pill,
  FlaskConical,
  Building2,
  Heart,
  Microscope,
  MapPin,
};

export function UseCasesSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Built for every type of pharmacy
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Specialized workflows for your unique needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {USE_CASES.map((useCase, index) => {
          const Icon = iconMap[useCase.icon];
          return (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white rounded-2xl p-6 border border-gray-200
                         hover:border-brand-500/40 hover:shadow-lg transition-all duration-300
                         cursor-pointer overflow-hidden relative"
            >
              {/* Colored top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${useCase.color} opacity-80`} />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {Icon && (
                  <Icon
                    size={28}
                    className="text-brand-500 mb-3 group-hover:text-brand-600 transition-colors"
                  />
                )}
              </motion.div>
              <h3 className="font-semibold text-gray-900">{useCase.title}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
