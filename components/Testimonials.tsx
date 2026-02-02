"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-widest">
          What our clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5"
            >
                <Quote className="text-zinc-700 mb-6" size={40} />
                <p className="text-xl font-light text-zinc-300 mb-8">
                    "Working with Invoke felt like having an in-house design team that just gets it. fast, thoughtful, and always on point."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden relative">
                         <Image src="/images/project1.png" alt="User" fill className="object-cover" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Alex Morgan</div>
                        <div className="text-zinc-500 text-xs uppercase">CEO, TechStart</div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
