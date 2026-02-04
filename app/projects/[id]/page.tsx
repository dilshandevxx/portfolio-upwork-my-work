"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Server Component Wrapper (since we need params async)
// But we used "use client" so we can use hooks. 
// Ideally we should split this, but for simplicity/consistency with previous files I'll keep it client-side compatible 
// by unwrapping params via standard Next.js 15 patterns if needed, or just treating it as a Client Component that receives params.
// Actually, in Next.js 15, params is a Promise. Let's handle it properly.

// We need to use `use` to unwrap params if it's a client component, but explicit `use` is React 19.
// For now, let's just make the main component standard and use a client wrapper or just handle the promise if it's async.
// Wait, "use client" components can't be async functions.
// I will rewrite this to use the `use` hook concept or just `React.use()` if available, or simpler: 
// pass params to a client inner component.
// Re-checking the previous file content, it was an async function with "use client" which is invalid in strictly client files. 
// It probably worked because Next.js sometimes auto-wraps or I misread the previous file.
// Let's stick to a safe Client Component structure that uses `use` from `react` to unwrap the promise, 
// OR just straightforwardly if params is awaited in a server parent. 
// Given the previous file was `export default async function...`, I will assume page.tsx can be server, and I'll import a client part for the animations.
// HOWEVER, to keep it simple and in one file (since I can't easily create multiple files in one go reliably without clutter),
// I will make this a CLIENT component that consumes the params via `use`.
// NOTE: `use` import is tricky. I'll use the `useEffect` pattern for params or just standard props if Next passes them unwrapped (older Next versions).
// But Next 15 passes promise. 
// Let's try the `import { use } from "react"` pattern.

import { use } from "react";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params
  const { id } = use(params);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return notFound();
  }

  // Calculate Next Project
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  // Parallax hook
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-zinc-950 text-white selection:bg-indigo-500/30">
      
      {/* Navbar Placeholder */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference">
         <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-white hover:opacity-70 transition-opacity uppercase tracking-widest text-xs font-bold"
        >
            <ArrowLeft size={16} />
            <span>Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
         {/* Background Image Parallax */}
         <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
         </motion.div>

         {/* Hero Content */}
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-24">
             <div className="max-w-[90rem] mx-auto">
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                 >
                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                         <div>
                             <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-4">
                                {project.title}
                             </h1>
                             <div className="flex flex-wrap gap-4 text-sm md:text-lg font-mono text-zinc-300">
                                 <span>{project.category}</span>
                                 <span>/</span>
                                 <span>{project.year}</span>
                             </div>
                         </div>
                         
                         <div className="flex gap-4">
                             {project.link && (
                                 <a 
                                     href={project.link} 
                                     target="_blank" 
                                     rel="noreferrer"
                                     className="px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
                                 >
                                     Live Site
                                 </a>
                             )}
                         </div>
                     </div>
                 </motion.div>
             </div>
         </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
              
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-12">
                  <div className="border-t border-zinc-800 pt-8">
                      <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Role</h3>
                      <p className="text-xl font-medium">Design & Development</p>
                  </div>
                  <div className="border-t border-zinc-800 pt-8">
                       <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Stack</h3>
                       <div className="flex flex-wrap gap-2">
                           {project.tags.map(tag => (
                               <span key={tag} className="text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full text-sm">
                                   {tag}
                               </span>
                           ))}
                       </div>
                  </div>
                  {project.github && (
                      <div className="border-t border-zinc-800 pt-8">
                          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Source</h3>
                           <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                               <Github size={20} />
                               <span className="underline underline-offset-4">View Code</span>
                           </a>
                      </div>
                  )}
              </div>

              {/* Main Text */}
              <div className="lg:col-span-8">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                      {project.description}
                  </h2>
                  <div className="prose prose-xl prose-invert text-zinc-400 leading-relaxed max-w-none">
                      <p>
                          {project.longDescription || "This project represents a deep dive into modern web technologies, focusing on performance, accessibility, and user experience. The interface was crafted with a mobile-first approach, ensuring seamless interaction across all devices."}
                      </p>
                      <p className="mt-8">
                          The design philosophy centers on minimalism and functionality, stripping away unnecessary elements to highlight the core content. Transitions and micro-interactions were added to enhance the feeling of fluidity and responsiveness.
                      </p>
                  </div>
                  
                  {/* Mock Gallery inside Content */}
                  <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="aspect-[4/5] bg-zinc-900 rounded-lg relative overflow-hidden">
                          {/* Placeholder/Duplicate image for demo since we might only have one */}
                          <Image src={project.image} alt="Detail view" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                      </div>
                       <div className="aspect-[4/5] bg-zinc-900 rounded-lg relative overflow-hidden mt-12 md:mt-24">
                          <Image src={project.image} alt="Detail view" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                      </div>
                  </div>

              </div>
          </div>
      </div>

      {/* Next Project Footer */}
      <div className="border-t border-zinc-800 bg-zinc-900/50">
          <Link href={`/projects/${nextProject.id}`} className="block group relative overflow-hidden py-32 md:py-48 px-6 md:px-12 text-center">
               <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                   <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Next Project</p>
                   <h2 className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter">
                       {nextProject.title}
                   </h2>
               </div>
               
               {/* Hover Reveal Image Background? Optional, but cool. */}
               <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
               >
                   <Image src={nextProject.image} alt={nextProject.title} fill className="object-cover blur-md scale-110" />
               </motion.div>
          </Link>
      </div>

    </div>
  );
}
