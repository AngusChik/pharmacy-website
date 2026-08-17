"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ECOSYSTEM_BULLETS } from "@/lib/constants";

function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Title bar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="ml-3 text-xs text-gray-400 font-medium">PharmSync Dashboard</div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-32 border-r border-gray-100 bg-gray-50/50 p-3 hidden sm:block">
            {["Dashboard", "Inventory", "Orders", "Reports", "Settings"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`text-xs py-1.5 px-2 rounded mb-1 ${
                    i === 1
                      ? "bg-brand-500 text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Total SKUs", value: "1,247" },
                { label: "Low Stock", value: "23" },
                { label: "On Order", value: "156" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-lg p-2 text-center"
                >
                  <div className="text-sm font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Chart bars */}
            <div className="mb-4">
              <div className="text-[10px] text-gray-400 mb-2 font-medium">
                Weekly Sales
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-t"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="flex-1 text-center text-[8px] text-gray-300">
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Table rows */}
            <div className="text-[10px] text-gray-400 mb-2 font-medium">
              Recent Items
            </div>
            {[
              { name: "Amoxicillin 500mg", qty: "342", status: "In Stock" },
              { name: "Lisinopril 10mg", qty: "18", status: "Low Stock" },
              { name: "Metformin 850mg", qty: "256", status: "In Stock" },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0"
              >
                <span className="text-[10px] text-gray-600">{row.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-400">{row.qty}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      row.status === "Low Stock"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative shadow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/5 to-purple-500/5 rounded-3xl -z-10 blur-xl" />
    </motion.div>
  );
}

export function EcosystemSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="gradient-text-shimmer text-sm font-semibold uppercase tracking-wider"
          >
            All-in-one platform
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            More than inventory — a complete pharmacy POS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 leading-relaxed"
          >
            PharmSync isn&apos;t just an inventory tracker. It&apos;s a fully
            integrated point-of-sale system designed for pharmacies, connecting
            your front-end retail with back-end operations.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {ECOSYSTEM_BULLETS.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-brand-500" />
                </div>
                <span className="text-gray-600">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <DashboardMock />
      </div>
    </SectionWrapper>
  );
}
