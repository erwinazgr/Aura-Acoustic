import { motion } from "motion/react";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FF4500] to-[#E63E00] overflow-hidden flex flex-col pt-24">
      <Navbar />

      {/* Massive Background Text */}
      <div 
        data-scroll 
        data-scroll-speed="0.2"
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col items-center justify-center"
      >
        <h1 className="text-[35vw] font-display text-black/5 leading-[0.75] tracking-tight select-none">
          AURA
        </h1>
      </div>

      {/* Main Heading - Placed behind the image for depth */}
      <div 
        data-scroll 
        data-scroll-speed="0.4"
        className="absolute top-[20%] md:top-[12%] left-0 w-full text-center z-10 pointer-events-none px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[22vw] md:text-[16vw] font-display text-white leading-[0.85] tracking-tight uppercase"
          style={{ textShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
        >
          New Audio Era
        </motion.h1>
      </div>

      {/* Center Image - Using the provided transparent image */}
      <div 
        data-scroll 
        data-scroll-speed="-0.1"
        className="relative z-20 flex-1 flex items-center justify-center mt-24 md:mt-16 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-6xl h-[60vh] md:h-[85vh] flex justify-center items-center"
        >
          <img 
            src="/hero-headphones-1.png" 
            alt="Aura Headphones"
            className="w-full h-full object-contain drop-shadow-2xl scale-110 md:scale-125"
          />
        </motion.div>
      </div>

      {/* Floating Text Blocks */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-8 bottom-16 md:bottom-32 w-72 z-30 hidden md:block"
      >
        <p className="text-white/90 text-xs font-mono leading-relaxed uppercase tracking-wider">
          // We are Aura — Crafting premium audio experiences for the modern audiophile. Building clean, intuitive soundscapes.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-8 top-[50%] -translate-y-1/2 w-48 z-30 hidden md:block text-right"
      >
        <p className="text-white/90 text-xs font-mono leading-relaxed uppercase tracking-wider">
          // Design that speaks your brand
        </p>
      </motion.div>

    </section>
  );
}
