"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        
        <div>
           <h2 className="text-[12vw] leading-none font-bold text-zinc-800 uppercase tracking-tighter select-none">
            INSPIRE.
           </h2>
        </div>

        <div className="flex flex-col gap-4 text-right mb-4">
            <div className="flex gap-6 text-sm text-zinc-500 font-mono uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="text-zinc-600 text-xs">
                &copy; {new Date().getFullYear()} Inspire Portfolio. All rights reserved.
            </div>
        </div>

      </div>
    </footer>
  );
}
