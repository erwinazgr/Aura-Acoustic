/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen font-sans antialiased selection:bg-red-500/30 selection:text-white">
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </main>
  );
}
