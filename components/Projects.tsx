"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "RESIDENCE",
    category: "INTERIOR",
    image: "/images/project1.png",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "LOUNGE",
    category: "HOSPITALITY",
    image: "/images/project2.png",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "DETAIL",
    category: "ARCHITECTURE",
    image: "/images/project3.png",
    colSpan: "md:col-span-1",
  },
];

export default function Projects() {
  return (
    <section className="relative px-6 py-24 bg-black" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500"
          >
            PROJECT
          </motion.h2>
          <div className="mt-4 md:mt-0 max-w-xs text-zinc-400 text-sm">
            Curated selection of our most recent architectural and interior design works.
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group overflow-hidden ${project.colSpan} aspect-[4/3]`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-orange-400 font-medium tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
