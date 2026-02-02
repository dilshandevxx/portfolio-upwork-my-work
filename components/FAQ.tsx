"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "What kind of clients do you usually work with?", answer: "We partner with ambitious brands and startups who value design as a key differentiator." },
  { question: "How long does a typical project take?", answer: "Timelines vary depending on complexity, but most branding and web projects take between 4-8 weeks." },
  { question: "Do you offer post-launch support?", answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital presence stays fresh and secure." },
  { question: "What is your pricing structure?", answer: "We work on a fixed-fee basis for most projects, transparently scoped upfront. Retainers are available for ongoing work." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 bg-black text-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-widest">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                className="flex items-center justify-between w-full py-4 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg md:text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <Plus
                  className={`text-zinc-500 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-zinc-400 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
