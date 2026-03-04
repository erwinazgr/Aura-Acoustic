import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-16 px-8 md:px-16 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <motion.h2 
            data-scroll
            data-scroll-speed="0.1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-9xl font-display uppercase tracking-tight leading-[0.85] mb-8"
          >
            Ready to <br />
            <span className="text-white/20">Listen?</span>
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#E63E00" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FF4500] text-white rounded-full font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2 group"
            >
              Pre-order Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm transition-colors"
            >
              View Specs
            </motion.button>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-16 justify-start md:justify-end text-xs font-mono uppercase tracking-widest text-white/50">
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold mb-2">// Product</h4>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Aura Pro</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Aura Lite</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Accessories</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Compare</a>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold mb-2">// Support</h4>
            <a href="#" className="hover:text-[#FF4500] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Contact Us</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Warranty</a>
            <a href="#" className="hover:text-[#FF4500] transition-colors">Returns</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30 gap-4 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Aura Acoustics.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
