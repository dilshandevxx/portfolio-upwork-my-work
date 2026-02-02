"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Link */}
        <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Back to Works</span>
        </Link>

        {/* Hero Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-zinc-900 pb-10">
                <div>
                    <span className="block text-indigo-500 font-mono text-sm mb-4 tracking-widest uppercase">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        {project.title}
                    </h1>
                     <div className="flex items-center gap-6 text-zinc-400 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers size={16} />
                            <span>{project.tags.length} Technologies</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {project.link && project.link !== "#" && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            <span>Live Demo</span>
                            <ArrowUpRight size={18} />
                        </a>
                    )}
                     {project.github && project.github !== "#" && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-zinc-900 text-white rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
            {/* Main Description */}
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-indigo-500 inline-block"></span>
                        Overview
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        {project.longDescription || project.description}
                    </p>
                </div>
                
                {/* Fallback mock content for demonstration if description is short */}
                <div className="space-y-6 text-zinc-500 leading-relaxed">
                    <p>
                        The challenge was to create a system that balances performance with aesthetic appeal. 
                        We utilized advanced caching strategies to ensure sub-100ms load times while rendering high-fidelity graphics.
                    </p>
                    <p>
                         Key features include real-time data synchronization, a custom-built design system, and a fully accessible UI compliant with WCAG 2.1 standards.
                    </p>
                </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-10">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-900 pb-2">
                        Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3 py-1.5 bg-zinc-900 text-zinc-300 text-sm rounded border border-zinc-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-900 pb-2">
                        Project Role
                    </h3>
                    <ul className="space-y-2 text-zinc-400">
                        <li>&bull; Lead Developer</li>
                        <li>&bull; UI/UX Design</li>
                        <li>&bull; System Architecture</li>
                    </ul>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
