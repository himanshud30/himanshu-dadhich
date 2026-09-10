import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Compass, Shield, Award, MapPin } from 'lucide-react';
import PullQuote from '@/components/common/PullQuote';

export const metadata: Metadata = {
  title: 'About Himanshu Dadhich & TLR Studio',
  description: 'Creative strategist, filmmaker, storyteller and founder building TLR from Jodhpur, Rajasthan.',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Top Header */}
        <div className="border-b border-dark/15 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-sandstone" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
              Biography & Cultural Positioning
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-display uppercase text-dark leading-tight2">
            Himanshu Dadhich
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-dark/80 mt-4">
            “Jodhpur is the base. The world is the field. The work is the bridge.”
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Portrait & Studio Snapshot */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/20 shadow-md">
              <img
                src="/images/himanshu/himanshu-standing.jpg"
                alt="Himanshu Dadhich standing in studio"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-dark/85 backdrop-blur-md p-4 text-cream rounded-[2px] border border-cream/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sandstone">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Navchokiya, Old Jodhpur</span>
                  </div>
                  <img src="/logo-cropped.png" alt="TLR Logo" className="h-5 invert opacity-80" />
                </div>
                <p className="text-[11px] text-cream/70 mt-1">
                  Creative Director, Strategist & Writer &middot; TLR Studio
                </p>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="bg-cream-dark/50 p-6 rounded-[2px] border border-dark/15 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Foundational Tenets
              </span>

              <div className="space-y-3 text-xs text-dark/80">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">01</span>
                  <span><strong>Locality as Superpower:</strong> Global relevance begins with radical geographic specificity, not rootless mimicry.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">02</span>
                  <span><strong>Slow Craft, High Leverage:</strong> Narrative depth compounds over years; superficial social noise evaporates in minutes.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">03</span>
                  <span><strong>Mythology Over Marketing:</strong> People do not fall in love with value propositions; they surrender to meaningful myths.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Long-form Biography */}
          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-dark/80 leading-relaxed">
            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                The Origins in Marwar
              </h2>
              <p>
                Raised against the carved red sandstone walls of the Blue City, Himanshu Dadhich grew up inside a sensory cosmos where architectural permanence and oral literature were not museum artifacts, but everyday realities.
              </p>
              <p className="mt-4">
                Watching classical vocalists at Mehrangarh, listening to master stonemasons chisel intricate jaalis without blueprints, and observing the social choreography of public stepwells instilled a lifelong fascination: <em>Why do certain human creations defy centuries of entropy while others vanish without a trace?</em>
              </p>
            </div>

            <PullQuote
              quote="We live in an age that confuses velocity with consequence. My work exists to restore consequence."
              author="Himanshu Dadhich"
            />

            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                Building TLR (The Local Roots)
              </h2>
              <p>
                Rather than relocating to Mumbai, London, or New York to conform to conventional agency tropes, Himanshu founded <strong>TLR (The Local Roots)</strong> directly from Jodhpur.
              </p>
              <p className="mt-4">
                Operating as an elite creative strategy bureau and film production house, TLR serves an international clientele spanning luxury heritage hospitality, tech visionaries, craft distillers, and cultural foundations. By combining the intellectual rigour of top-tier narrative strategy with the textured tactility of independent cinema, the studio delivers work that commands undeniable emotional weight.
              </p>

              {/* Real Annotated Studio Visual */}
              <div className="mt-8 rounded-[2px] overflow-hidden border border-dark/20 shadow-lg">
                <img
                  src="/images/himanshu/himanshu-annotated.jpg"
                  alt="Himanshu Dadhich — Building TLR"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                The Independent Canon
              </h2>
              <p>
                Alongside client advisory, Himanshu dedicates substantial studio resources to self-directed intellectual properties and cultural archives. These include the multi-year cinematic undertaking <em>Sundarkand: The Inner Odyssey</em>, episodic inquiry series such as <em>How We Learn</em>, and an ongoing open-source field notebook documenting vernacular crafts across Western India.
              </p>
            </div>

            <div className="pt-6 border-t border-dark/15 flex flex-wrap gap-4">
              <Link
                href="/collaborate"
                className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="px-6 py-3.5 border border-dark/30 hover:border-dark text-dark hover:bg-cream-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px]"
              >
                Inspect Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
