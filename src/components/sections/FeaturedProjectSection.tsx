import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';

export default function FeaturedProjectSection() {
  const sundarkand = projects[0];

  return (
    <section className="py-24 md:py-32 border-b border-dark/15 relative overflow-hidden bg-sandstone-light/30">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden border border-dark/20 shadow-md">
              <img
                src={sundarkand.thumbnail}
                alt={sundarkand.title}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-sandstone block mb-1">
                  Independent Cultural Epic
                </span>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-display">
                  {sundarkand.title}
                </h3>
              </div>
            </div>

            {/* Floating Progress Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-dark text-cream p-5 rounded-[2px] border border-sandstone/40 shadow-xl max-w-xs">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[10px] uppercase tracking-wider text-sandstone font-semibold">
                  Production Milestone
                </span>
                <span className="text-xs font-bold text-cream">
                  {sundarkand.currentProgress}% Complete
                </span>
              </div>
              <div className="w-full bg-cream/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-sandstone h-full transition-all duration-1000"
                  style={{ width: `${sundarkand.currentProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-cream/70 mt-2">
                Scoring & principal 35mm photography completed. Dolby Atmos mix in progress.
              </p>
            </div>
          </div>

          {/* Narrative Right */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sandstone" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
                Flagship Original Production
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-[0.95]">
              Sundarkand:<br />
              <span className="text-sandstone">The Inner Odyssey</span>
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-dark/80 leading-snug">
              “A contemporary cinematic exploration of inner courage, devotion, and psychological triumph.”
            </p>

            <p className="text-sm sm:text-base text-dark/75 leading-relaxed">
              Interpreting the sacred poetic text of the Sundarkand through visual poetry, experimental soundscapes, and raw Rajasthani soil. Built with community backing, transparent budgeting, and unwavering artistic independence.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects/sundarkand"
                className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
              >
                <span>Explore The Odyssey</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/supporters"
                className="px-6 py-3.5 border border-dark/30 hover:border-dark text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 text-rust fill-rust/20" />
                <span>Join Patron Circle</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
