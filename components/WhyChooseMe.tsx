"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Clean, scalable code",
  "Design + development in one place",
  "AI-powered solutions",
  "Clear communication",
  "Post-launch support",
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Title Area */}
          <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
            >
              Why <br />
              <span className="text-zinc-600">Choose Me</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-lg max-w-md leading-relaxed"
            >
                I bridge the gap between creative design and technical engineering, delivering products that look good and work perfectly.
            </motion.p>
          </div>

          {/* List Area */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 transition-colors duration-300">
                    <Check size={20} className="text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {benefit}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
