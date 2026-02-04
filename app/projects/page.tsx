"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { projects, categories, ProjectCategory } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Mouse tracking for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-24 pb-24 relative overflow-hidden">
      
      {/* Floating Image Preview */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[300px] z-40 pointer-events-none hidden md:block rounded-lg overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
               {projects.map(p => {
                   if (p.id !== hoveredProject) return null;
                   return (
                       <Image
                        key={p.id}
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        priority
                       />
                   )
               })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="border-b border-zinc-800 pb-12 mb-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
            >
                <div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 leading-[0.85]">
                        Selected
                    </h1>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-zinc-800 outline-text leading-[0.85]">
                        Works
                    </h1>
                </div>
                <div className="md:text-right pb-4">
                    <p className="font-mono text-sm text-zinc-500 mb-4 uppercase tracking-widest">
                        // Index 2023 — 2024
                    </p>
                    <p className="text-xl text-zinc-400 max-w-md ml-auto leading-relaxed">
                        Curated digital experiences designed with precision and passion.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border rounded-full transition-all duration-300 ${
                        activeCategory === category 
                            ? "bg-white text-black border-white" 
                            : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500 hover:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* List View */}
        <div className="flex flex-col">
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group border-t border-zinc-800 last:border-b transition-colors duration-500 hover:bg-zinc-900/30"
                >
                    <Link href={`/projects/${project.id}`} className="block py-12 md:py-16">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                            
                            {/* Title & Index */}
                            <div className="flex items-baseline gap-8 md:gap-16">
                                <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tight text-white group-hover:translate-x-4 transition-transform duration-500">
                                    {project.title}
                                </h2>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-8 md:gap-16">
                                <span className="hidden md:block font-mono text-xs text-zinc-500 uppercase tracking-widest w-32 text-right">
                                    {project.category}
                                </span>
                                <span className="hidden md:block font-mono text-xs text-zinc-500 uppercase tracking-widest">
                                    {project.year}
                                </span>
                                <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight size={24} className="text-white" />
                                </div>
                            </div>

                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
}
