"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return notFound();
  }

  // Calculate Next Project
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar Placeholder/Spacer if needed, or just top padding */}
      <div className="pt-32 pb-24">
        
        {/* Container */}
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-24"
            >
                {/* Back Link */}
                <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-16 group uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Works</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8">
                        <span className="block text-indigo-500 font-mono text-sm mb-6 tracking-widest uppercase">
                            {project.category} &mdash; {project.year}
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                            {project.title}
                        </h1>
                    </div>
                    
                    <div className="lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end justify-end h-full pb-2">
                        <div className="flex flex-col gap-4">
                             {project.link && project.link !== "#" && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-xl font-medium hover:text-indigo-400 transition-colors"
                                >
                                    <span>Visit Site</span>
                                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Hero Image - Edge to Edge look */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 rounded-lg overflow-hidden mb-24"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Sidebar (Sticky) */}
                <div className="lg:col-span-4 max-lg:order-2">
                    <div className="sticky top-32 space-y-12">
                        {/* Info Block */}
                        <div className="space-y-8 border-t border-zinc-800 pt-8">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Role</h3>
                                <p className="text-lg text-white font-medium">Lead Developer & UI Designer</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span 
                                            key={tag} 
                                            className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs rounded-full border border-zinc-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Code</h3>
                                {project.github && project.github !== "#" ? (
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 text-white hover:text-zinc-400 transition-colors"
                                    >
                                        <Github size={18} />
                                        <span className="text-sm font-medium underline underline-offset-4">View Repository</span>
                                    </a>
                                ) : (
                                    <span className="text-zinc-600 italic text-sm">Private Repository</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 max-lg:order-1">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Overview</h2>
                        <div className="prose prose-xl prose-invert text-zinc-400 leading-relaxed max-w-none">
                             <p className="mb-8">{project.longDescription || project.description}</p>
                             
                             <p className="mb-8">
                                Depending on the project complexity, this section would explain the specific challenges faced during development.
                                For example, optimizing rendering performance in React, managing distributed state with Redis, or fine-tuning 
                                AI model parameters for better generation results.
                             </p>

                             <h3 className="text-2xl font-bold text-white mt-16 mb-6">Key Features</h3>
                             <ul className="list-disc pl-6 space-y-4 marker:text-indigo-500">
                                 <li>Real-time synchronization across all devices.</li>
                                 <li>Advanced caching mechanism reducing server load by 40%.</li>
                                 <li>Fully accessible UI components following WCAG guidelines.</li>
                                 <li>Custom design system built for scalability.</li>
                             </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Next Project Navigation */}
            <div className="mt-40 border-t border-zinc-800 pt-20">
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Next Project</p>
                <Link href={`/projects/${nextProject.id}`} className="group block">
                    <h2 className="text-5xl md:text-8xl font-black text-white group-hover:text-zinc-400 transition-colors uppercase tracking-tighter">
                        {nextProject.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-6 text-indigo-500 group-hover:translate-x-4 transition-transform duration-300">
                        <span className="text-lg font-medium">View Case Study</span>
                        <ArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
