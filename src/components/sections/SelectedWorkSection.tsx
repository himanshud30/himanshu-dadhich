import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Lightbulb, TrendingUp, BookOpen } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';

export default function SelectedWorkSection() {
  // Top 3 featured case studies
  const topThreeSlugs = ['setu-india', 'rich-torque', 'tickle-and-me'];
  const featured = topThreeSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">03 / FEATURED WORK</span>
              <span>&middot;</span>
              <span>THREE CASE STUDIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              Selected Work
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2 max-w-xl">
              Evidence before philosophy. Rigorous strategic diagnosis translated into cinema, systems, and measurable commercial lift.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-5 pr-2 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>All Case Studies ({caseStudies.length})</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* 3 Detailed Editorial Case Studies */}
        <div className="space-y-16 lg:space-y-20">
          {featured.map((study, idx) => {
            if (!study) return null;
            return (
              <article
                key={study.slug}
                className="bg-paper border border-dark/15 rounded-[2px] overflow-hidden shadow-sm hover:border-dark/35 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Visual Evidence */}
                  <div className="lg:col-span-5 relative bg-dark overflow-hidden flex flex-col justify-between">
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 hover:scale-102 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-dark/85 backdrop-blur-sm text-cream px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded-[2px] border border-cream/20">
                        {study.category} &middot; {study.year}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-cream">
                        <span className="font-mono text-[10px] text-sandstone uppercase tracking-widest block">
                          CLIENT / PARTNER
                        </span>
                        <h4 className="font-display text-2xl uppercase tracking-display text-cream">
                          {study.client}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Problem, Insight, What Changed, Outcome */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-dark/10 pb-4">
                        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-display text-dark leading-tight">
                          {study.title}
                        </h3>
                        <span className="font-mono text-xs text-sandstone font-bold shrink-0 ml-4">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* 2x2 Outcome Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                        {/* Situation & Unclear */}
                        <div className="p-4 bg-cream border border-dark/10 rounded-[2px] space-y-1.5">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold block">
                            The Situation & What Was Unclear
                          </span>
                          <p className="text-dark/80 leading-relaxed font-sans">
                            {study.problem}
                          </p>
                        </div>

                        {/* Central Insight & Direction */}
                        <div className="p-4 bg-cream border border-dark/10 rounded-[2px] space-y-1.5">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-sandstone-warm font-semibold block">
                            The Central Insight & Proposal
                          </span>
                          <p className="text-dark/80 leading-relaxed font-sans">
                            {study.insight}
                          </p>
                        </div>
                      </div>

                      {/* What Was Created */}
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                          What Was Created & Delivered:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {study.deliverables.map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-cream-dark/50 text-dark/80 border border-dark/10 rounded-[2px]"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* What Changed (Outcomes) */}
                      <div className="border-t border-dark/10 pt-4">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 font-bold block mb-2 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          What Changed (Commercial Lift):
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-dark/85">
                          {study.outcomes.map((out, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
                              <span className="font-medium">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What Was Learned */}
                      {study.lessons && study.lessons.length > 0 && (
                        <div className="text-xs bg-cream-dark/30 p-3 rounded-[2px] border-l-2 border-sandstone">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-sandstone font-bold block mb-0.5">
                            Key Lesson
                          </span>
                          <p className="font-serif italic text-dark/75">
                            “{study.lessons[0]}”
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase text-muted">
                        Full Case Study Documented
                      </span>
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-dark hover:text-sandstone transition-colors group"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
