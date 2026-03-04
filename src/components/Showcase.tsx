import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative h-[120vh] bg-[#0a0a0a] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Large Background Image with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
        >
          <img 
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2000&auto=format&fit=crop" 
            alt="Headphones Detail" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        </motion.div>

        {/* Floating Text */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[12vw] md:text-[10vw] font-display uppercase leading-[0.8] tracking-tight text-white mb-8"
          >
            Feel the <br />
            <span className="text-[#FF4500]">
              Music
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-white/60 max-w-md mx-auto font-mono uppercase tracking-widest leading-relaxed"
          >
            // Aura Acoustics redefines what's possible in a wireless headphone. Immerse yourself in a soundscape so rich and detailed.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
