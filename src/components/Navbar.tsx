import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white text-xs font-medium tracking-widest uppercase">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span>Aura Acoustics</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <a href="#" className="hover:text-white/70 transition-colors">Products</a>
        <a href="#" className="hover:text-white/70 transition-colors">Technology</a>
        <a href="#" className="hover:text-white/70 transition-colors">About</a>
        <a href="#" className="hover:text-white/70 transition-colors">Support</a>
      </div>

      <div className="flex items-center gap-3 cursor-pointer group">
        <span className="text-white/80 group-hover:text-white transition-colors">// Pre-order</span>
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}
