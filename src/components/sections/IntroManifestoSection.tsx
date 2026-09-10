import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Compass, Sparkles } from 'lucide-react';
import PullQuote from '@/components/common/PullQuote';

export default function IntroManifestoSection() {
  return (
    <section id="manifesto" className="py-24 md:py-32 border-b border-dark/15 relative bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Yūgen-Inspired Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Kicker, Divider & Studio Credential Batch */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-sandstone block mb-2">
                Brand Transformation & Narrative Architecture
              </span>
              <div className="w-full h-[1px] bg-dark/15 my-4" />
            </div>

            {/* Studio Badge (Inspired by Yūgen's Award Batch) */}
            <div className="flex items-start gap-4 p-5 bg-cream-dark/40 border border-dark/10 rounded-[2px]">
              <div className="w-10 h-10 rounded-full bg-dark text-cream flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-sandstone animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-xs uppercase tracking-wider text-dark">
                  Independent Strategic Bureau
                </div>
                <div className="text-[11px] text-muted">
                  Jodhpur Base &middot; Global Execution &middot; Est. 2020
                </div>
                <div className="text-[10px] text-sandstone uppercase tracking-wider font-semibold pt-1">
                  87+ Systems Built &middot; Series A to Enterprise
                </div>
              </div>
            </div>

            {/* Quick Navigation link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase font-semibold tracking-label text-dark hover:text-sandstone transition-colors"
              >
                <span>Explore Studio Origins</span>
                <span className="w-7 h-7 rounded-full bg-dark text-cream flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:scale-105">
                  <ArrowUpRight className="w-3.5 h-3.5 text-sandstone" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Yūgen-Style Signature Two-Tone Statement */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-body font-normal leading-[1.25] text-dark/40">
              TLR is an{' '}
              <span className="text-dark font-semibold">
                Independent Creative Strategy & Film Studio
              </span>{' '}
              behind the founders, institutions, and cultural properties of tomorrow. Through{' '}
              <span className="text-dark font-semibold">
                cinema-grade storytelling
              </span>{' '}
              and systems-level clarity, we make{' '}
              <span className="text-dark font-semibold border-b-2 border-sandstone pb-0.5">
                brands impossible to ignore
              </span>
              , transforming fleeting algorithmic attention into{' '}
              <span className="text-dark font-semibold">
                generational cultural equity.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm text-dark/75 leading-relaxed">
              <div className="p-6 bg-cream-dark/30 border border-dark/10 rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-dark">
                  <span className="w-2 h-2 rounded-full bg-sandstone" />
                  <span>The Core Thesis</span>
                </div>
                <p>
                  Most brands fail not from lack of effort, but from lack of point-of-view. We replace interchangeable marketing buzzwords with genuine narrative gravity rooted in place, provenance, and human truth.
                </p>
              </div>

              <div className="p-6 bg-cream-dark/30 border border-dark/10 rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-dark">
                  <span className="w-2 h-2 rounded-full bg-sandstone" />
                  <span>Why Jodhpur Matters</span>
                </div>
                <p>
                  Centuries of architectural permanence and oral literature taught us that lasting cultural artifacts are built with conviction. Locality is not a constraint; it is an insurmountable competitive moat.
                </p>
              </div>
            </div>

            <PullQuote
              quote="True creative power does not belong to those who shout the loudest into algorithmic feeds, but to those whose stories possess gravitational pull."
              author="Himanshu Dadhich"
              role="Director, TLR Studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
