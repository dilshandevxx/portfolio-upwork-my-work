"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as any,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as any,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 text-white mix-blend-difference">
      <div className="flex items-center gap-12 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight">
          inspire
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 z-50">
        <button className="hidden md:block text-xs font-medium tracking-widest border border-zinc-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
          LET'S TALK
        </button>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-zinc-950/98 backdrop-blur-xl z-40 flex flex-col justify-between p-8 md:hidden"
          >
            {/* Header placeholder to align with main header */}
            <div className="flex justify-between items-center w-full py-6">
                 {/* Placeholders can be added here if needed to match header height exactly, 
                     but flex-col justify-between usually handles content well */}
            </div>

            <nav className="flex flex-col gap-2 mt-20">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} variants={linkVariants} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className="group flex items-start gap-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-sm font-mono text-zinc-500 mt-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white group-hover:text-zinc-400 transition-colors uppercase">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
               variants={linkVariants}
               className="flex flex-col gap-6 mt-auto mb-10 border-t border-white/10 pt-8"
            >
               <div className="flex flex-col gap-2">
                  <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Get in touch</p>
                  <a href="mailto:hello@inspire.com" className="text-xl text-white font-light">hello@inspire.com</a>
               </div>
               
               <div className="flex gap-6">
                  {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                      <a key={social} href="#" className="text-zinc-400 hover:text-white text-sm uppercase tracking-wider transition-colors">
                          {social}
                      </a>
                  ))}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
