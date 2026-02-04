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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]"
                >
                    Selected
                    <br />
                    <span className="text-zinc-800 outline-text">Works</span>
                </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="md:text-right max-w-sm"
            >
                <p className="text-lg text-zinc-400 leading-relaxed">
                    A curated collection of digital experiences, crafted with precision and purpose.
                </p>
            </motion.div>
        </div>

        {/* Filter Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap gap-2 mb-16"
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 text-xs font-mono uppercase tracking-widest rounded-full border transition-all duration-300 ${
                        activeCategory === category 
                            ? "bg-white text-black border-white" 
                            : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500 hover:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Algorithm to vary spans based on index/layout rhythm
              // Pattern: [2-col, 1-col], [1-col, 2-col], [1, 1, 1]
              const isLarge = index % 5 === 0 || index % 5 === 4; 
              const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={project.id}
                  className={`group relative rounded-3xl overflow-hidden bg-zinc-900 ${colSpan}`}
                >
                 <Link href={`/projects/${project.id}`} className="block h-full w-full">
                  
                  {/* Image */}
                  <div className="absolute inset-0 w-full h-full">
                     <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index < 3}
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>

                  {/* Top Info */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                      <span className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white border border-white/10">
                          {project.year}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                          {project.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm line-clamp-2 max-w-lg opacity-80 group-hover:opacity-100 transition-opacity">
                          {project.description}
                      </p>
                  </div>

                 </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
