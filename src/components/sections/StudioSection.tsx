import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Shield, Cpu, Sparkles } from 'lucide-react';

export default function StudioSection() {
  const pillars = [
    {
      title: 'Principal-Led Strategy',
      desc: 'Himanshu personally leads every diagnostic session, narrative architecture document, and film directing engagement. You never get handed off to junior account managers.'
    },
    {
      title: 'The Distributed Guild',
      desc: 'TLR operates as an agile studio. We mobilize handpicked specialist craftsmen—cinematographers, typography designers, engineers, and colorists—matched precisely to your project.'
    },
    {
      title: 'Jodhpur Base, Global Field',
      desc: 'Operating from Rajasthan provides the psychological quietude to think in decades rather than days, while our delivery apparatus collaborates seamlessly with clients worldwide.'
    }
  ];

  return (
    <section id="studio" className="py-20 md:py-28 border-b border-dark/15 bg-paper relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Top Tag */}
        <div className="flex items-center justify-between border-b border-dark/15 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sandstone" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
              08 / THE STUDIO APPARATUS
            </span>
          </div>

          <span className="text-xs uppercase font-mono tracking-wider text-muted hidden sm:inline">
            TLR &middot; THE LOCAL ROOTS /// JODHPUR
          </span>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Editorial Poster */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/20 shadow-xl bg-cream group">
              <img
                src="/images/himanshu/himanshu-annotated.jpg"
                alt="Building TLR — Himanshu Dadhich Editorial Board"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Bottom annotation */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark/95 backdrop-blur-md p-4 rounded-[2px] border border-cream/15 text-cream flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-sandstone block">
                    Operating Model
                  </span>
                  <span className="font-display text-xl uppercase tracking-display">
                    TLR &middot; The Local Roots
                  </span>
                </div>
                <img
                  src="/logo-cropped.png"
                  alt="TLR Logo"
                  className="h-7 object-contain invert opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Thesis & Structure */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase text-sandstone tracking-wider block mb-2">
                [Client Delivery Structure]
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-display text-dark leading-[0.98]">
                TLR is the vehicle.<br />
                <span className="text-sandstone">Strategy is the engine.</span>
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-dark/80 mt-4 leading-snug">
                “Client engagements are delivered through TLR (The Local Roots)—a creative strategy and cinema studio founded to bridge vernacular rootedness with international standards of design.”
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-cream border border-dark/10 rounded-[2px] space-y-1"
                >
                  <h4 className="font-display text-lg uppercase tracking-wide text-dark">
                    0{idx + 1} &middot; {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-dark/75 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
              >
                <span>Read Full Studio Biography</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
