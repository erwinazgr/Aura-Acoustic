/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { TestimonialsSectionDemo } from "./components/TestimonialsDemo";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="dark bg-[#0a0a0a] min-h-screen font-sans antialiased selection:bg-red-500/30 selection:text-white">
      <Hero />
      <Features />
      <Showcase />
      <TestimonialsSectionDemo />
      <Footer />
    </main>
  );
}
