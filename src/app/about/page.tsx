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
              Creator & Filmmaker
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-display uppercase text-dark leading-tight2">
            Himanshu Dadhich
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-dark/80 mt-4">
            “7 years in the creative industry. Based in Jodhpur, creating for brands and audiences across India.”
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Portrait & Studio Snapshot */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-dark/20 shadow-md">
              <img
                src="/images/himanshu/himanshu-standing.jpg"
                alt="Himanshu Dadhich"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-dark/85 backdrop-blur-md p-4 text-cream rounded-[2px] border border-cream/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sandstone">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Jodhpur, Rajasthan</span>
                  </div>
                  <img src="/logo-cropped.png" alt="TLR Logo" className="h-5 invert opacity-80" />
                </div>
                <p className="text-[11px] text-cream/70 mt-1">
                  Content Creator & Filmmaker &middot; Founder, TLR & The Creative Lab
                </p>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="bg-cream-dark/50 p-6 rounded-[2px] border border-dark/15 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Core Beliefs
              </span>

              <div className="space-y-3 text-xs text-dark/80">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">01</span>
                  <span><strong>Craft Over Clutter:</strong> One piece of work people remember beats fifty pieces of disposable feed filler.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">02</span>
                  <span><strong>Grounded Roots:</strong> Hailing from Jodhpur gives me a grounded, honest perspective away from the usual metro noise.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-dark font-display text-base">03</span>
                  <span><strong>Systems Enable Creativity:</strong> Pure inspiration is fleeting. Repeatable editorial workflows make creative work sustainable.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Long-form Biography */}
          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-dark/80 leading-relaxed">
            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                The Journey So Far
              </h2>
              <p>
                I am a content creator, filmmaker, and storyteller hailing from Jodhpur, Rajasthan. Over the last 7 years, I’ve worked across different layers of the creative industry — from scripting and directing brand films to building content systems and sharing independent documentaries.
              </p>
              <p className="mt-4">
                I didn’t take the traditional path of moving to an agency hub. Staying in Jodhpur allowed me to develop an independent creative rhythm, focusing on deliberate storytelling, patient visuals, and projects with genuine human resonance.
              </p>
            </div>

            <PullQuote
              quote="Storytelling isn't about shouting louder. It's about having something real to say and knowing how to structure it."
              author="Himanshu Dadhich"
            />

            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                TLR & The Creative Lab
              </h2>
              <p>
                Under the umbrella of <strong>TLR (The Local Roots)</strong>, I collaborate with founders, brands, and companies to craft distinct brand identities, films, and video content that stands out in the crowded Indian digital landscape.
              </p>
              <p className="mt-4">
                Through <strong>The Creative Lab</strong>, I teach early-stage creators and filmmakers the exact systems, production workflows, and business models I have refined over 7 years — helping them build sustainable creative practices without the burnout.
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
                Independent Projects
              </h2>
              <p>
                Beyond client work, I dedicate time to self-directed passion projects like <em>Sundarkand: The Inner Odyssey</em> — an exploration of timeless Indian scripture and cultural narrative told through a modern cinematic lens.
              </p>
            </div>

            <div className="pt-6 border-t border-dark/15 flex flex-wrap gap-4">
              <Link
                href="/conversation"
                className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2 group"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/work"
                className="px-6 py-3.5 border border-dark/30 hover:border-dark text-dark hover:bg-cream-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
