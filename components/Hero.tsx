"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background/Layout Grid Lines (Optional Decoration) */}
      <div className="absolute inset-0 pointer-events-none border-x border-white/5 mx-6 md:mx-12 lg:mx-24" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Main Typography */}
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white"
            >
              PORTFOLIO
              <br />
              <span className="text-zinc-500">STYLE</span>
            </motion.h1>

             {/* Introduction Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 md:mt-24"
            >
                <div className="relative p-8 bg-zinc-900/40 backdrop-blur-md border border-white/10 border-l-4 border-l-indigo-500 rounded-r-lg max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                            // Bio
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                        Multidisciplinary designer creating <span className="text-white font-medium">clean</span> and <span className="text-white font-medium">functional</span> designs for brands, products, and experiences.
                    </p>
                </div>
            </motion.div>
          </div>

          {/* Floating Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative w-full md:w-[400px] aspect-[4/5] md:mt-12"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-overlay z-10 pointer-events-none" />
            <Image
              src="/images/hero.png"
              alt="Architecture interior"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            {/* Overlay Caption */}
            <div className="absolute top-6 left-6 z-20">
               <span className="text-xs font-mono tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white">
                 INTERIOR / 2024
               </span>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Decorative Elements from Reference */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8"
        >
             {["Creative", "Innovative", "Functional", "Minimal"].map((item, i) => (
                <div key={i} className="text-xs tracking-widest uppercase text-zinc-600">
                    {item}
                </div>
             ))}
        </motion.div>

      </div>
    </section>
  );
}
