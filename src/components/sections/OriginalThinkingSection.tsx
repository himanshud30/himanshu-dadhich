import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Bookmark, Share2, Eye, Sparkles, BookOpen } from 'lucide-react';

export default function OriginalThinkingSection() {
  const pillars = [
    {
      title: 'How We Learn',
      slug: 'how-we-learn',
      tagline: 'Cognitive tools, autodidact mastery, and self-directed intelligence.',
      desc: 'Inquiries into how individuals and teams absorb, retain, and synthesize complex models in an age of fragmented attention.'
    },
    {
      title: 'How We Live',
      slug: 'how-we-live',
      tagline: 'Vernacular rhythms, ancient architecture, and intentional slowness.',
      desc: 'Lessons from Jodhpur, Rajasthan desert civilizations, and vernacular building practices that endure for centuries.'
    },
    {
      title: 'How We Work',
      slug: 'how-we-work',
      tagline: 'The distributed studio, anti-bloat operations, and craft over scale.',
      desc: 'How to build a globally competitive creative enterprise from a heritage desert town without accepting corporate agency bloat.'
    },
    {
      title: 'Creative Strategy',
      slug: 'creative-strategy',
      tagline: 'Narrative territories, positioning white space, and compounding brand moats.',
      desc: 'Deconstructing why certain brands command generational reverence while others exhaust themselves on the social media treadmill.'
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">07 / ORIGINAL THINKING</span>
              <span>&middot;</span>
              <span>INTELLECTUAL FOUNDATIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              Your Way of Thinking
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2 max-w-xl">
              Ideas are not ephemeral content; they are the architectural blueprints for all client systems and films.
            </p>
          </div>

          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-5 pr-2 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>Explore All Inquiries</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The 4 Core Thinking Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, idx) => (
              <div
                key={p.slug}
                className="p-6 bg-paper border border-dark/15 rounded-[2px] shadow-sm hover:border-dark/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-dark/10">
                    <span className="font-mono text-xs text-sandstone font-bold">
                      PILLAR 0{idx + 1}
                    </span>
                    <BookOpen className="w-3.5 h-3.5 text-muted" />
                  </div>

                  <h3 className="font-display text-2xl uppercase tracking-display text-dark mb-1">
                    {p.title}
                  </h3>

                  <p className="font-serif italic text-xs text-sandstone-warm mb-3">
                    {p.tagline}
                  </p>

                  <p className="text-xs text-dark/75 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-dark/10">
                  <Link
                    href={`/ideas?category=${p.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-dark hover:text-sandstone transition-colors"
                  >
                    <span>Read essays in this stream &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: TOOLS Reel Proof Card */}
          <div className="lg:col-span-5 bg-dark text-cream p-8 sm:p-10 rounded-[2px] border border-dark flex flex-col justify-between relative overflow-hidden shadow-lg">
            {/* Ambient pattern */}
            <div className="absolute inset-0 jali-bg opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sandstone" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone font-bold">
                    CONTENT PROOF BENCHMARK
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cream/50 uppercase">
                  VERIFIED METRIC
                </span>
              </div>

              <div>
                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-display text-cream">
                  TOOLS
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-sandstone-light mt-1">
                  “One idea about learning that became a piece people wanted to keep.”
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-cream/15 text-center">
                <div className="bg-dark-card p-3 rounded-[2px] border border-cream/10">
                  <div className="flex items-center justify-center gap-1 text-cream/50 mb-1">
                    <Eye className="w-3 h-3 text-sandstone" />
                    <span className="text-[9px] uppercase font-mono">Views</span>
                  </div>
                  <span className="font-display text-2xl text-cream tracking-tight">60K+</span>
                </div>

                <div className="bg-dark-card p-3 rounded-[2px] border border-cream/10">
                  <div className="flex items-center justify-center gap-1 text-cream/50 mb-1">
                    <Bookmark className="w-3 h-3 text-sandstone" />
                    <span className="text-[9px] uppercase font-mono">Saves</span>
                  </div>
                  <span className="font-display text-2xl text-cream tracking-tight">1,000+</span>
                </div>

                <div className="bg-dark-card p-3 rounded-[2px] border border-cream/10">
                  <div className="flex items-center justify-center gap-1 text-cream/50 mb-1">
                    <Share2 className="w-3 h-3 text-sandstone" />
                    <span className="text-[9px] uppercase font-mono">Shares</span>
                  </div>
                  <span className="font-display text-2xl text-cream tracking-tight">1,000+</span>
                </div>
              </div>

              <p className="text-xs text-cream/70 leading-relaxed font-sans">
                Rather than chasing ephemeral trends or algorithm tricks, we framed learning tools through first principles. The result was pure organic retention—proving that when an idea is rigorous, the audience does the distribution for you.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-cream/15 flex items-center justify-between">
              <span className="text-[10px] font-mono text-sandstone uppercase">
                Content System Case
              </span>
              <a
                href="#conversation"
                className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-cream hover:text-sandstone transition-colors"
              >
                <span>Build this for your brand &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
