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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="block overflow-hidden"
              >
                PORTFOLIO
              </motion.span>
              <br />
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="block overflow-hidden text-zinc-500"
              >
                STYLE
              </motion.span>
            </h1>

             {/* Introduction Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 md:mt-24 pl-6 border-l border-zinc-800 max-w-xl"
            >
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 block">
                    // Bio
                </span>
                <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed">
                    Multidisciplinary designer creating <span className="text-white font-normal hover:text-orange-500 transition-colors duration-300 cursor-none">clean</span> and <span className="text-white font-normal hover:text-orange-500 transition-colors duration-300 cursor-none">functional</span> designs for brands, products, and experiences.
                </p>
            </motion.div>
          </div>

          {/* Floating Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full md:w-[400px] aspect-[4/5] md:mt-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-overlay z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Image
              src="/images/hero.png"
              alt="Architecture interior"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              priority
            />
            {/* Overlay Caption */}
            <div className="absolute top-6 left-6 z-20">
               <span className="text-xs font-mono tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
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
