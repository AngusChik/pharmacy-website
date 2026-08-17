"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";

function PriceCounter({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (target === 0) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count}</>;
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Start free. Upgrade as your pharmacy grows.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              annual ? "bg-brand-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                annual ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}>
            Annual
          </span>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full"
            >
              Save 20%
            </motion.span>
          )}
        </div>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PRICING_TIERS.map((tier, index) => {
          const displayPrice = annual
            ? Math.round(tier.price * 0.8)
            : tier.price;

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? "animated-gradient-border shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              } transition-shadow duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="relative bg-gradient-to-r from-brand-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                    {/* Sparkle dots */}
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                    <span className="absolute -bottom-0.5 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping [animation-delay:0.5s]" />
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-900">
                {tier.name}
              </h3>

              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${isInView ? <PriceCounter target={displayPrice} isInView={isInView} /> : 0}
                </span>
                <span className="text-gray-500 text-sm">{tier.priceNote}</span>
              </div>

              <p className="mt-2 text-gray-500 text-sm">{tier.description}</p>

              <hr className="my-6 border-gray-100" />

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full"
                  href="#"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
