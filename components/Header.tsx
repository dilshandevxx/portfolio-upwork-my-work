"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, X, 
  Home, User, Briefcase, Mail, 
  Github, Twitter, Linkedin
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
    { name: "Github", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

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

  const sidebarVariants: Variants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const backdropVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
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
              className="text-xs font-medium tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"
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
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={backdropVariants}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] mix-blend-normal md:hidden"
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-zinc-900 z-[70] mix-blend-normal shadow-2xl md:hidden overflow-y-auto"
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Header Profile */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                            IN
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">Inspire Portfolio</h3>
                            <p className="text-zinc-400 text-xs">Creative Developer</p>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="ml-auto p-2 text-zinc-400 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Main Menu */}
                    <div className="mb-8">
                        <h4 className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4 px-4">Main Menu</h4>
                        <div className="flex flex-col gap-2">
                             {navLinks.map((link) => {
                                 const Icon = link.icon;
                                 const isActive = activeTab === link.name;
                                 return (
                                     <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => {
                                            setActiveTab(link.name);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                                            isActive 
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20" 
                                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                     >
                                         <Icon size={20} />
                                         <span className="font-medium">{link.name}</span>
                                     </Link>
                                 );
                             })}
                        </div>
                    </div>

                    {/* Socials / Other */}
                    <div>
                        <h4 className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4 px-4">Connect</h4>
                         <div className="flex flex-col gap-2">
                             {socialLinks.map((link) => {
                                 const Icon = link.icon;
                                 return (
                                     <a
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all duration-200"
                                     >
                                         <Icon size={20} />
                                         <span className="font-medium">{link.name}</span>
                                     </a>
                                 );
                             })}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto pt-8 border-t border-white/5">
                        <div className="px-4 py-4 rounded-xl bg-zinc-800/50 flex items-center justify-between">
                            <span className="text-xs text-zinc-400">Available for work</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
