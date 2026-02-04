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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simple & Clean */}
        <div className="mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
                Selected Works
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-zinc-400 text-lg max-w-2xl leading-relaxed"
            >
                A collection of projects exploring the intersection of design and technology. 
                Focused on clean aesthetics and functional user experiences.
            </motion.p>
        </div>

        {/* Categories - Minimal Text Buttons */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-4 mb-20 border-b border-zinc-900 pb-8"
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                        activeCategory === category 
                            ? "text-white" 
                            : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                    {category}
                    {activeCategory === category && (
                        <span className="block h-px w-full bg-white mt-1" />
                    )}
                </button>
            ))}
        </motion.div>

        {/* Grid - Spacious 2 Column */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={project.id}
                className="group"
              >
                <Link href={`/projects/${project.id}`} className="block">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-8 rounded-sm">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            priority={index < 2}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-zinc-500 text-sm">
                                {project.category}
                            </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-400">
                            <ArrowUpRight size={24} />
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
