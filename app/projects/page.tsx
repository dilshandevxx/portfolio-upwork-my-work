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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="border-b border-zinc-800 pb-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2">
                        Selected
                    </h1>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-zinc-800 outline-text">
                        Works
                    </h1>
                </div>
                <div className="md:text-right">
                    <p className="font-mono text-sm text-zinc-500 mb-2 uppercase tracking-widest">
                        // Curated Index
                    </p>
                    <p className="text-xl text-zinc-400 max-w-md ml-auto leading-relaxed">
                        A collection of digital experiences designed with precision, focused on performance, accessibility, and aesthetics.
                    </p>
                </div>
            </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap border-y border-zinc-800 mb-12">
            <div className="py-4 pr-8 border-r border-zinc-800 hidden md:block">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Filter By:</span>
            </div>
            <div className="flex flex-wrap flex-1">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-8 py-4 text-sm font-mono uppercase tracking-wider border-r border-zinc-800 transition-colors duration-300 hover:bg-zinc-900 ${
                            activeCategory === category 
                                ? "bg-white text-black border-white" 
                                : "text-zinc-500 hover:text-white"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="py-4 px-8 hidden md:block text-zinc-800 font-mono text-xs">
                [{filteredProjects.length}] Found
            </div>
        </div>

        {/* Technical Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-zinc-950 group relative overflow-hidden"
              >
               <Link href={`/projects/${project.id}`} className="block h-full relative z-10">
                
                {/* Card Header (Index & Year) */}
                <div className="flex justify-between items-center p-6 border-b border-zinc-800/50">
                    <span className="font-mono text-xs text-zinc-500">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                        {project.year}
                    </span>
                </div>

                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-zinc-800/50 group-hover:opacity-90 transition-opacity">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                            <ArrowUpRight size={32} />
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                    <div className="mb-6">
                        <h3 className="text-3xl font-bold uppercase tracking-tight mb-2 group-hover:text-indigo-500 transition-colors">
                            {project.title}
                        </h3>
                        <p className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
                            {project.category}
                        </p>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.longDescription || project.description}
                    </p>

                    {/* Tech Stack Footer */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-mono uppercase text-zinc-600 border border-zinc-800 px-2 py-1 rounded-sm">
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="text-[10px] font-mono uppercase text-zinc-600 border border-zinc-800 px-2 py-1 rounded-sm">
                                +{project.tags.length - 3}
                            </span>
                        )}
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
