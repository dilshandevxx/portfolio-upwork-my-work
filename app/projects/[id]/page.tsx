"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, use } from "react";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return notFound();
  }

  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

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
      <div className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference pointer-events-none">
         <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-white pointer-events-auto hover:opacity-70 transition-opacity uppercase tracking-widest text-xs font-bold"
        >
            <ArrowLeft size={16} />
            <span>Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
         <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
         </motion.div>

         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
             <div className="max-w-[90rem] mx-auto">
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                 >
                     <h1 className="text-[12vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter mb-6">
                        {project.title}
                     </h1>
                 </motion.div>
             </div>
         </div>
      </div>

      {/* Data Strip - The "Stats" Bar */}
      <div className="border-t border-b border-zinc-800 bg-zinc-950 relative z-10">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-800 border-x border-zinc-800">
                  
                  <div className="p-6 md:p-8">
                      <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Role</h3>
                      <p className="text-sm md:text-base font-medium">Design & Dev</p>
                  </div>
                  
                  <div className="p-6 md:p-8">
                      <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Year</h3>
                      <p className="text-sm md:text-base font-medium">{project.year}</p>
                  </div>

                  <div className="p-6 md:p-8">
                       <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Stack</h3>
                       <div className="flex flex-wrap gap-2">
                           {project.tags.slice(0, 2).map((tag) => (
                               <span key={tag} className="text-sm md:text-base font-medium">
                                   {tag}
                               </span>
                           ))}
                           {project.tags.length > 2 && <span className="text-zinc-500">+</span>}
                       </div>
                  </div>

                  <div className="p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:bg-zinc-900 transition-colors">
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer" className="w-full h-full flex items-center justify-between">
                                <div>
                                    <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Link</h3>
                                    <p className="text-sm md:text-base font-medium">Visit Site</p>
                                </div>
                                <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                            </a>
                        ) : (
                            <div>
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Status</h3>
                                <p className="text-sm md:text-base font-medium">In Progress</p>
                            </div>
                        )}
                  </div>

              </div>
          </div>
      </div>

      {/* Visual Story Content */}
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-40">
          
          {/* Intro Text */}
          <div className="mb-24 md:mb-32">
               <h2 className="text-3xl md:text-5xl font-medium leading-tight md:leading-tight text-zinc-200">
                  {project.description}
               </h2>
               {project.longDescription && (
                  <p className="mt-8 text-xl text-zinc-400 leading-relaxed max-w-3xl">
                      {project.longDescription}
                  </p>
               )}
          </div>

          {/* Full Width Image 1 */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-lg overflow-hidden mb-24 md:mb-32">
              <Image src={project.image} alt="Detail" fill className="object-cover" />
          </div>

          {/* Story Text Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-32 items-center">
               <div>
                   <h3 className="text-xs font-mono text-indigo-500 uppercase tracking-widest mb-6">The Challenge</h3>
                   <p className="text-lg text-zinc-400 leading-relaxed">
                       Every project begins with a core problem. For {project.title}, the challenge was to balance aesthetic minimalism with complex functionality.
                       We experimented with various layout systems before settling on a grid that adapts effectively to different content types.
                   </p>
               </div>
               <div>
                    {/* Placeholder for a secondary detail image or graphic */}
                    <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                        <Image src={project.image} alt="Detail" fill className="object-cover" />
                    </div>
               </div>
          </div>

          {/* Large Vertical Image */}
          <div className="flex justify-center mb-24 md:mb-32">
              <div className="relative w-full md:w-2/3 aspect-[4/5] bg-zinc-900 rounded-lg overflow-hidden">
                   <Image src={project.image} alt="Mobile View" fill className="object-cover" />
              </div>
          </div>

           {/* Conclusion */}
           <div className="text-center max-w-2xl mx-auto mb-12">
               <h3 className="text-xs font-mono text-indigo-500 uppercase tracking-widest mb-6">The Outcome</h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                     The final result is a robust, scalable platform that not only meets the client's needs but exceeds user expectations in performance and usability.
                </p>
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        <Github size={18} />
                        <span>Review Codebase</span>
                    </a>
                )}
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
