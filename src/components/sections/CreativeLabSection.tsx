'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Users, Lightbulb, Rocket } from 'lucide-react';

export function CreativeLabSection() {
  const highlights = [
    {
      icon: Lightbulb,
      text: 'Learn the systems behind building a creative brand',
    },
    {
      icon: Users,
      text: 'Small cohort. Real feedback. No fluff.',
    },
    {
      icon: Rocket,
      text: 'Go from scattered creator to structured creative business',
    },
  ];

  return (
    <section id="creative-lab" className="py-20 md:py-28 border-b border-dark/15 bg-cream-dark/30">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="text-xs font-mono text-sandstone uppercase tracking-wider">
              TLR Creative Lab
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display uppercase text-dark leading-tight">
              The Creative Lab.
            </h2>

            <p className="text-sm text-dark/75 leading-relaxed max-w-md">
              A cohort-based program for creators who want to build a real creative practice — 
              with structure, clarity, and skin in the game. 
              Sharing everything I&apos;ve learned in 7+ years of the content industry.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-sandstone mt-0.5 shrink-0" />
                    <span className="text-sm text-dark/80">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/conversation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] group"
              >
                <span>Apply &middot; Book a Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right — simple visual */}
          <div className="relative aspect-[4/3] bg-cream border border-dark/15 rounded-[2px] overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <span className="font-display text-6xl sm:text-7xl text-dark/10 block uppercase tracking-display">
                Lab
              </span>
              <p className="text-xs text-dark/50 font-mono uppercase tracking-wider">
                Cohort 01 &middot; Applications Open
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
