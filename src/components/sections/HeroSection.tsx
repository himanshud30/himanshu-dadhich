import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-12 lg:py-20 border-b border-dark/15 overflow-hidden bg-paper">
      {/* Background Jali Pattern Subtle Layer */}
      <div className="absolute inset-0 jali-bg opacity-25 pointer-events-none" />

      {/* Atmospheric Subtle Warm Radial Gradient */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-sandstone/10 blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sandstone block" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-sandstone-warm">
                Himanshu Dadhich
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display uppercase text-dark leading-[1.05]">
              Creative strategist, filmmaker and founder building a globally distributed studio from Jodhpur.
            </h1>

            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-dark/80 max-w-2xl leading-relaxed pt-2">
              I find the central story, turn it into a creative system and help it travel through content, design and film.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-between sm:justify-center gap-3 group shadow-sm"
              >
                <span>Explore the Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#conversation"
                className="px-8 py-4 border border-dark/30 hover:border-dark bg-transparent text-dark hover:bg-cream-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-between sm:justify-center gap-3 group"
              >
                <span>Start a Conversation</span>
                <span className="text-sandstone">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grounded Studio Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/15 shadow-xl bg-cream group">
              <img
                src="/images/himanshu/himanshu-standing.jpg"
                alt="Himanshu Dadhich — Creative Strategist & Filmmaker"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-102 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Status Pill */}
              <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-cream/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sandstone animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-cream">
                  Studio Base: Jodhpur
                </span>
              </div>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-md p-4 rounded-[2px] border border-cream/15 text-cream">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-sandstone">
                    Founder &middot; TLR
                  </span>
                  <span className="text-[10px] font-mono text-cream/60">26.23° N, 73.02° E</span>
                </div>
                <div className="font-display text-xl uppercase tracking-display">
                  Himanshu Dadhich
                </div>
                <p className="text-[11px] font-serif italic text-cream/70 mt-0.5">
                  “The work is the bridge between heritage and global scale.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
