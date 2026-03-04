import { motion } from "motion/react";
import { Cpu, Zap, Shield, Waves } from "lucide-react";

const specs = [
  {
    title: "A1 Bionic Chip",
    description: "Custom silicon designed for ultra-low latency and spatial awareness.",
    icon: Cpu,
    className: "md:col-span-2 md:row-span-2 bg-zinc-900",
  },
  {
    title: "Instant Pair",
    description: "Connect in 0.1s.",
    icon: Zap,
    className: "bg-[#FF4500] text-white",
  },
  {
    title: "Titanium Frame",
    description: "Aerospace grade durability.",
    icon: Shield,
    className: "bg-zinc-800",
  },
  {
    title: "Spatial Audio",
    description: "360-degree immersive soundstage with dynamic head tracking.",
    icon: Waves,
    className: "md:col-span-2 bg-zinc-900",
  },
];

export function TechSpecs() {
  return (
    <section className="pt-16 pb-32 bg-[#0a0a0a] text-white px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight leading-none mb-4">
            Technical <br />
            <span className="text-white/20">Superiority</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            // Pushing the boundaries of acoustic engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl flex flex-col justify-between min-h-[240px] cursor-pointer transition-colors duration-300 ${spec.className} ${spec.className.includes('bg-zinc') ? 'hover:bg-zinc-800/80' : 'hover:brightness-110'}`}
            >
              <div className="flex justify-between items-start">
                <spec.icon className="w-8 h-8 opacity-80" />
                <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{spec.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-[200px]">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
