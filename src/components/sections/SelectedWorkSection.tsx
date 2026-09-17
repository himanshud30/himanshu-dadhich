'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, TrendingUp, Play } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { VideoPlayerModal } from '@/components/common/VideoPlayerModal';

export default function SelectedWorkSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; category: string } | null>(null);

  const categories = ['All', 'Case Studies', 'Talking Head', 'Motion Design', 'Long Form'];

  const filteredStudies = caseStudies.filter((study) => {
    if (filter === 'All') return true;
    if (filter === 'Case Studies') return study.featured;
    if (filter === 'Talking Head') return study.category === 'Talking Head';
    if (filter === 'Motion Design') return study.category === 'Motion Design';
    if (filter === 'Long Form') return study.category === 'Long Form';
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">03 / PORTFOLIO & WORK</span>
              <span>&middot;</span>
              <span>TLR STUDIO PORTFOLIO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              Selected Work
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2 max-w-xl">
              From executive talking heads and kinetic motion design to deep brand film case studies.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-5 pr-2 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>All Work ({caseStudies.length})</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-dark text-cream font-bold shadow'
                  : 'bg-paper text-dark/70 hover:bg-cream-dark border border-dark/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies / Work Grid */}
        <div className="space-y-16 lg:space-y-20">
          {filteredStudies.map((study, idx) => (
            <article
              key={study.slug}
              className="bg-paper border border-dark/15 rounded-[2px] overflow-hidden shadow-sm hover:border-dark/35 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Visual Evidence */}
                <div className="lg:col-span-5 relative bg-dark overflow-hidden flex flex-col justify-between group">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-dark/85 backdrop-blur-sm text-cream px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded-[2px] border border-cream/20">
                      {study.category} &middot; {study.year}
                    </div>

                    {study.videoUrl && (
                      <button
                        onClick={() => setSelectedVideo({ url: study.videoUrl!, title: study.title, category: study.category })}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </button>
                    )}

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
                          The Problem & Context
                        </span>
                        <p className="text-dark/80 leading-relaxed font-sans">
                          {study.problem}
                        </p>
                      </div>

                      {/* Central Insight & Direction */}
                      <div className="p-4 bg-cream border border-dark/10 rounded-[2px] space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-sandstone-warm font-semibold block">
                          The Insight & Solution
                        </span>
                        <p className="text-dark/80 leading-relaxed font-sans">
                          {study.insight}
                        </p>
                      </div>
                    </div>

                    {/* What Was Created */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                        Deliverables & Execution:
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
                        Commercial Impact:
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
                  </div>

                  {/* Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-muted">
                      {study.videoUrl ? 'Video Reel Available' : 'Documented Case Study'}
                    </span>

                    <div className="flex items-center gap-4">
                      {study.videoUrl && (
                        <button
                          onClick={() => setSelectedVideo({ url: study.videoUrl!, title: study.title, category: study.category })}
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-700 hover:text-amber-900 font-bold transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Video</span>
                        </button>
                      )}
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-dark hover:text-sandstone transition-colors group"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          category={selectedVideo.category}
        />
      )}
    </section>
  );
}
