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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 md:mt-24 max-w-lg text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
            >
              Multidisciplinary <span className="text-white font-medium">designer</span> creating{" "}
              <span className="text-white font-medium">clean</span> and functional designs for{" "}
              <span className="inline-flex items-center justify-center align-middle mx-1">
                <span className="size-6 bg-orange-500 rounded-full inline-block animate-pulse" />
              </span>{" "}
              brands, products, and experiences.
            </motion.p>
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
