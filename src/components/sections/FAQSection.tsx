"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQS } from "@/lib/constants";

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`border-b border-gray-200 transition-colors ${
        isOpen ? "border-l-2 border-l-brand-500 pl-4" : "pl-4 border-l-2 border-l-transparent"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left cursor-pointer group"
      >
        <span
          className={`font-medium transition-colors ${
            isOpen ? "text-brand-500" : "text-gray-900 group-hover:text-brand-500"
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0 ml-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Frequently asked questions
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <AccordionItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
