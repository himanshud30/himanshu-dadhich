import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';

export default function FounderSpotlight() {
  return (
    <section className="py-24 md:py-32 border-b border-dark/15 bg-cream-dark/20 relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between border-b border-dark/15 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sandstone" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
              The Founder & Studio Practice
            </span>
          </div>

          <span className="text-xs uppercase font-mono tracking-wider text-muted hidden sm:inline">
            #TLR_STUDIO /// JODHPUR
          </span>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Annotated Poster of Himanshu */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/20 shadow-2xl bg-cream group">
              <img
                src="/images/himanshu/himanshu-annotated.jpg"
                alt="Himanshu Dadhich — Creative Strategist & Founder of TLR"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              
              {/* Studio Stamp Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-md p-4 rounded-[2px] border border-cream/15 text-cream flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-sandstone block">
                    Identity & Direction
                  </span>
                  <span className="font-display text-xl uppercase tracking-display">
                    Himanshu Dadhich
                  </span>
                </div>
                <img
                  src="/logo-cropped.png"
                  alt="TLR Logo"
                  className="h-8 object-contain invert opacity-90"
                />
              </div>
            </div>

            {/* Sub-card floating proof */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-cream border border-dark/20 p-5 rounded-[2px] shadow-xl max-w-xs flex-col space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-sandstone">
                Founding Philosophy
              </span>
              <p className="text-xs font-serif italic text-dark/80">
                “Building systems, not just content. Ideas &rarr; Systems &rarr; Proof.”
              </p>
            </div>
          </div>

          {/* Right Column: Strategic Thesis & Proof Points (inspired by Lequon & Index) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase text-sandstone tracking-wider block mb-2">
                [A Studio Built Around Obsession]
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-display text-dark leading-[0.95]">
                Built around obsession.<br />
                <span className="text-sandstone">Run like a system.</span>
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-dark/80 mt-4 leading-snug">
                “I believe narrative clarity is a quiet kind of leverage — it earns genuine devotion without resorting to algorithmic panic, and compounds long after the launch hype fades.”
              </p>
            </div>

            {/* Core Capability Checklist from Himanshu's Annotated Board */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Content Systems Architecture',
                'Cinema-Grade Creative Direction',
                'AI-Augmented Mythological Storytelling',
                'Founder Execution & Narrative Advisory',
                'Brand Repositioning Sprints',
                'Independent Cultural Documentaries',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-dark/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stat Counters Inspired by Akira / Index */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dark/15">
              <div className="border-l-2 border-sandstone pl-3">
                <span className="font-display text-3xl sm:text-4xl text-dark leading-none block">
                  87+
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted">
                  Narrative Systems
                </span>
              </div>

              <div className="border-l-2 border-sandstone pl-3">
                <span className="font-display text-3xl sm:text-4xl text-dark leading-none block">
                  10+
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted">
                  Global Brands
                </span>
              </div>

              <div className="border-l-2 border-sandstone pl-3">
                <span className="font-display text-3xl sm:text-4xl text-dark leading-none block">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted">
                  Cultural Epic (Sundarkand)
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
              >
                <span>Read Full Biography</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/collaborate"
                className="px-6 py-3.5 border border-dark/30 hover:border-dark text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px]"
              >
                Work with Himanshu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
