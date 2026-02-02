"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
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
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="text-5xl font-light tracking-tighter text-white hover:text-zinc-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
               variants={linkVariants}
               className="mt-12"
            >
               <button onClick={() => setIsOpen(false)} className="text-xs font-medium tracking-widest border border-zinc-700 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition-colors">
                 LET'S TALK
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
