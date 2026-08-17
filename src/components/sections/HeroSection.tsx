"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function FloatingPill({ className }: { className: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-20 ${className}`}>
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
        <rect x="0" y="0" width="60" height="24" rx="12" fill="#2563eb" />
        <rect x="30" y="0" width="30" height="24" rx="12" fill="#7c3aed" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const words = "Pharmacy inventory management you can count on".split(" ");

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      {/* Floating pills */}
      <FloatingPill className="top-24 left-[10%] float-1" />
      <FloatingPill className="top-40 right-[15%] float-2" />
      <FloatingPill className="bottom-20 left-[20%] float-3" />
      <FloatingPill className="top-32 right-[8%] float-1 rotate-45" />
      <FloatingPill className="bottom-32 right-[25%] float-2 -rotate-12" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Staggered headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Track stock levels in real time, automate reorders, and manage
          prescriptions and OTC products across every location — all from one
          pharmacy POS system.
        </motion.p>

        {/* CTA buttons with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full -z-10" />
          <Button variant="primary" size="lg" href="#pricing">
            Get Started
          </Button>
          <Button variant="outline" size="lg" href="#pricing">
            Contact Sales
          </Button>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span>
            Trusted by <AnimatedCounter target={500} suffix="+" /> independent
            pharmacies
          </span>
        </motion.div>
      </div>
    </section>
  );
}
