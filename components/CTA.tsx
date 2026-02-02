"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative px-6 py-32 bg-black overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="relative inline-block">
             <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="absolute -top-12 -left-12 w-24 h-32 md:-top-16 md:-left-24 md:w-40 md:h-56 z-0"
             >
                 <Image src="/images/hero.png" alt="Decorative" fill className="object-cover rounded-lg rotate-[-12deg] grayscale opacity-50" />
             </motion.div>

            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none relative z-10 mix-blend-difference">
              HAVE AN IDEA?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              LET'S BUILD IT
              </span>
              <br />
              TOGETHER
            </h2>

             <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 w-20 h-20 md:-bottom-4 md:-right-16 md:w-32 md:h-32 z-20"
             >
                 <Image src="/images/project3.png" alt="Decorative" fill className="object-cover rounded-full border-4 border-black" />
             </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
        >
             <a href="#contact" className="inline-block border border-white/20 hover:bg-white hover:text-black hover:border-white px-8 py-4 rounded-full text-sm font-bold tracking-widest transition-all uppercase">
                Start a Project
             </a>
        </motion.div>
      </div>
    </section>
  );
}
