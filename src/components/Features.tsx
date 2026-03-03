import { motion } from "motion/react";
import { Headphones, VolumeX, Battery, Bluetooth } from "lucide-react";

const features = [
  {
    icon: VolumeX,
    title: "Active Noise Cancellation",
    description:
      "Block out the world and immerse yourself in pure sound with our advanced ANC technology.",
  },
  {
    icon: Headphones,
    title: "High-Fidelity Audio",
    description:
      "Custom-designed 50mm drivers deliver an expansive soundstage and unparalleled clarity.",
  },
  {
    icon: Battery,
    title: "40-Hour Battery Life",
    description:
      "Listen all day and night. A quick 15-minute charge gives you up to 5 hours of playback.",
  },
  {
    icon: Bluetooth,
    title: "Seamless Connectivity",
    description:
      "Bluetooth 5.3 ensures a stable connection and ultra-low latency for gaming and movies.",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          data-scroll
          data-scroll-speed="0.1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <h2 className="text-7xl md:text-9xl font-display tracking-tight uppercase leading-[0.85]">
            Engineered <br />
            <span className="text-black/20">Perfection</span>
          </h2>
          <p className="text-sm font-mono text-black/50 max-w-xs uppercase tracking-wider mb-2">
            // Every detail designed to elevate your listening experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black/10 pt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="text-6xl font-display text-black/10 mb-6 group-hover:text-[#FF4500] transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{feature.title}</h3>
              <p className="text-black/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
