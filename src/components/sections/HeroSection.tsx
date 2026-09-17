import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-16 lg:py-24 border-b border-dark/15 overflow-hidden bg-paper">
      <div className="absolute inset-0 jali-bg opacity-15 pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sandstone block" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sandstone-warm">
              Jodhpur, India
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-display uppercase text-dark leading-[1.05]">
            Hi, I&apos;m Himanshu Dadhich.
          </h1>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-dark/80 max-w-xl leading-relaxed">
            Content creator and creative strategist with 7+ years in the industry. I help brands find their story and build systems to tell it.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              href="/work"
              className="px-8 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-3 group shadow-sm"
            >
              <span>See My Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/conversation"
              className="px-8 py-4 border border-dark/30 hover:border-dark bg-transparent text-dark hover:bg-cream-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-3"
            >
              <span>Book a Call</span>
              <span className="text-sandstone">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
