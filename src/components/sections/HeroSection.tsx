import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Compass, Sparkles, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-16 border-b border-dark/15 overflow-hidden">
      {/* Background Jali Pattern Subtle Layer */}
      <div className="absolute inset-0 jali-bg opacity-30 pointer-events-none" />

      {/* Atmospheric Radial Gradient */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-sandstone/15 blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 w-full relative z-10 flex-grow flex flex-col justify-between">
        {/* Top Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-dark/10 text-xs font-semibold tracking-label uppercase text-muted">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-sandstone animate-spin" style={{ animationDuration: '12s' }} />
            <span>26.2389° N, 73.0243° E &middot; Jodhpur, Rajasthan</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Studio Base: Old City Navchokiya</span>
            <span className="flex items-center gap-2 text-dark font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Directing & Advisory Active
            </span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="my-10 lg:my-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Core Typography & Manifesto */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-sandstone block" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-sandstone-warm">
                Creative Strategist &middot; Filmmaker &middot; Founder of TLR
              </span>
            </div>

            <h1 className="font-display text-hero-lg tracking-display uppercase text-dark leading-tight2">
              Himanshu<br />
              <span className="text-sandstone">Dadhich</span>
            </h1>

            <div className="mt-6 space-y-4">
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-dark leading-snug">
                “Jodhpur is the base. The world is the field. The work is the bridge.”
              </p>
              <p className="text-sm sm:text-base text-dark/75 max-w-2xl leading-relaxed">
                We craft cinema-grade brand narratives, self-compounding content ecosystems, and independent cultural films that endure far beyond the algorithm.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/work"
                className="px-6 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-between group shadow-sm sm:w-auto"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-3" />
              </Link>
              <Link
                href="/collaborate"
                className="px-6 py-4 border border-dark/30 hover:border-dark bg-transparent text-dark hover:bg-cream-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-between group sm:w-auto"
              >
                <span>Commission Strategic Work</span>
                <span className="text-sandstone ml-3">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Hero Portrait Card with Himanshu */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/20 shadow-2xl bg-cream group">
              <img
                src="/images/himanshu/himanshu-standing.jpg"
                alt="Himanshu Dadhich — Creative Strategist"
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-103 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Kinetic Glow Tag (inspired by Kinetic Studio reference) */}
              <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-cream/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sandstone animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-cream">
                  TLR Lead Director
                </span>
              </div>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-md p-4 rounded-[2px] border border-cream/15 text-cream">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-sandstone">
                    Founder & Strategist
                  </span>
                  <span className="text-[10px] font-mono text-cream/60">01 / BASE</span>
                </div>
                <div className="font-display text-2xl uppercase tracking-display">
                  Himanshu Dadhich
                </div>
                <p className="text-[11px] font-serif italic text-cream/70 mt-1">
                  “Ideas &rarr; systems &rarr; proof. Helping brands feel sharper.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="pt-6 border-t border-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-muted">
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-wider block text-sandstone font-medium">Studio Entity</span>
              <span className="font-semibold text-dark flex items-center gap-1.5">
                <img src="/logo-cropped.png" alt="TLR" className="h-4 w-auto object-contain" />
                The Local Roots (TLR)
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider block text-sandstone font-medium">Current Flagship IP</span>
              <span className="font-semibold text-dark">Sundarkand: The Inner Odyssey</span>
            </div>
          </div>

          <a
            href="#manifesto"
            className="flex items-center gap-2 text-dark hover:text-sandstone transition-colors font-semibold uppercase tracking-wider text-[11px]"
          >
            <span>Scroll To Manifest</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
