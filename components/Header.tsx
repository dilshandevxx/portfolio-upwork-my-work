"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, X, 
  Home, User, Briefcase, Mail, Sparkles,
  Github, Twitter, Linkedin
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Works", href: "/projects", icon: Briefcase },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Sparkles },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="flex items-center justify-between w-full text-white mix-blend-difference relative z-50">
        <div className="flex items-center gap-12">
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

        <div className="flex items-center gap-4">
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
                className="fixed inset-0 bg-black/80 z-[60] mix-blend-normal md:hidden"
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-zinc-950 z-[70] border-r border-zinc-800 shadow-2xl md:hidden overflow-y-auto"
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Header Profile */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex flex-col">
                            <h3 className="text-white font-black text-xl tracking-tight">INSPIRE.</h3>
                            <p className="text-zinc-500 text-[10px] tracking-widest uppercase mt-1">Portfolio &bull; 2024</p>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="ml-auto text-zinc-500 hover:text-white transition-colors"
                        >
                            <X size={24} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Main Menu */}
                    <div className="mb-6">
                        <h4 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Menu</h4>
                        <div className="flex flex-col gap-1">
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
                                        className={`group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                                            isActive 
                                            ? "bg-white text-black" 
                                            : "text-zinc-400 hover:text-white"
                                        }`}
                                     >
                                         <Icon size={18} strokeWidth={isActive ? 2 : 1.5} className="group-hover:scale-110 transition-transform duration-300" />
                                         <span className="text-sm font-medium tracking-wide">{link.name}</span>
                                     </Link>
                                 );
                             })}
                        </div>
                    </div>

                    {/* Socials / Other */}
                    <div>
                        <h4 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Connect</h4>
                         <div className="flex flex-col gap-1">
                             {socialLinks.map((link) => {
                                 const Icon = link.icon;
                                 return (
                                     <a
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center gap-4 px-4 py-3 rounded-lg text-zinc-400 hover:text-white transition-all duration-300"
                                     >
                                         <Icon size={18} strokeWidth={1.5} />
                                         <span className="text-sm font-medium tracking-wide">{link.name}</span>
                                     </a>
                                 );
                             })}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-auto pt-6 border-t border-zinc-900/50">
                        <div className="px-4 py-3 rounded-lg border border-zinc-800/50 flex items-center justify-between">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Status: Available</span>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
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
