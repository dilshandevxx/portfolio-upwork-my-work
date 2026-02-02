"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, ProjectCategory } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
// ... (skip unchanged)

// ... inside grid map ...
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
