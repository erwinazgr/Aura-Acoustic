import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white text-xs font-medium tracking-widest uppercase">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Aura Acoustics</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        {['Products', 'Technology', 'About', 'Support'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="hover:text-white/70 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {item}
          </a>
        ))}
      </div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span className="text-white/80 group-hover:text-white transition-colors duration-300">// Pre-order</span>
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </motion.div>
    </nav>
  );
}
