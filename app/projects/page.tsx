"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, ProjectCategory } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-950 px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 mt-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
             <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">
               SELECTED WORKS
             </h1>
             <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl leading-snug">
                A curated collection of projects spanning <span className="text-white">AI</span>, <span className="text-white">full-stack development</span>, and digital experiences.
             </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-zinc-950/90 backdrop-blur-md py-4 mb-20 border-b border-white/5 -mx-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-6 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-300 relative py-2 ${
                  activeCategory === category
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                   <motion.div 
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group cursor-pointer"
              >
               <Link href={`/projects/${project.id}`} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800/50">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Links */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                            {project.category}
                        </span>
                        <span className="text-zinc-600 text-xs font-mono">
                            {project.year}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.longDescription || project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-zinc-900 text-zinc-400 text-xs rounded-md border border-zinc-800">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
               </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
