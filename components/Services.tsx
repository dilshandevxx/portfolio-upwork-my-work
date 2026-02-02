"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  { id: "01", name: "Website Design", desc: "Crafting digital experiences that merge functionality with aesthetics.", image: "/images/hero.png" },
  { id: "02", name: "Brand Design", desc: "Building visual identities that resonate and leave a lasting impression.", image: "/images/project1.png" },
  { id: "03", name: "Motion Design", desc: "Adding life and interactivity to tell better stories.", image: "/images/project2.png" },
  { id: "04", name: "Graphic Design", desc: "Creating visual assets that communicate clarity and style.", image: "/images/project3.png" },
];

export default function Services() {
  return (
    <section className="px-6 py-24 bg-zinc-950" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white uppercase tracking-tighter">
          Our Services
        </h2>

        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-t border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden"
            >
               {/* Hover Image Reveal Effect (Subtle) */}
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start gap-8 z-10">
                <span className="text-zinc-600 font-mono text-sm pt-1">{service.id}</span>
                <div>
                   <h3 className="text-2xl md:text-4xl font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                </div>
              </div>

               {/* Hover Content */}
              <div className="md:max-w-md z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                 <p className="text-zinc-400 text-sm md:text-base mb-4">{service.desc}</p>
                 <div className="hidden md:block w-32 h-20 relative overflow-hidden rounded opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Image src={service.image} alt={service.name} fill className="object-cover" />
                 </div>
              </div>

               <ArrowRight className="text-zinc-600 group-hover:text-orange-500 transition-colors z-10" />
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
