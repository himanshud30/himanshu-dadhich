import React from 'react';
import { Quote, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { editorialWins } from '@/data/editorial-wins';
import { testimonials } from '@/data/testimonials';

export default function ClientWinsSection() {
  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
            <span className="text-sandstone font-bold">11 / RESULTS & CLIENT VOICES</span>
            <span>&middot;</span>
            <span>WHAT CHANGED BECAUSE OF THE WORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
            Results & Client Wins
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-3 leading-relaxed">
            Achievements framed as small editorial stories rather than an impersonal logo wall: what was broken, what we built, and what changed.
          </p>
        </div>

        {/* 5 Editorial Win Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {editorialWins.map((win, idx) => (
            <div
              key={win.id}
              className={`p-6 sm:p-8 bg-paper border border-dark/15 rounded-[2px] shadow-sm hover:border-dark/35 transition-all flex flex-col justify-between ${
                idx === 0 || idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-dark/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sandstone">
                    {win.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase">
                    WIN 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-display text-dark leading-tight">
                  {win.headline}
                </h3>

                <p className="font-serif italic text-xs sm:text-sm text-sandstone-warm leading-relaxed">
                  {win.subhead}
                </p>

                <div className="pt-2 space-y-2 text-xs">
                  <div className="p-3 bg-cream border border-dark/10 rounded-[2px]">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-muted font-bold block mb-1">
                      What Changed:
                    </span>
                    <p className="text-dark/85 font-sans leading-relaxed">
                      {win.whatChanged}
                    </p>
                  </div>
                </div>
              </div>

              {win.metricOrProof && (
                <div className="pt-4 mt-4 border-t border-dark/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {win.metricOrProof}
                  </span>
                  <span className="text-[10px] text-muted">{win.tag}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="border-t border-dark/15 pt-16">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sandstone font-bold">
              VERIFIED CLIENT VOICES
            </span>
            <span className="text-xs text-muted font-mono">DIRECT COMMISSIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-paper border border-dark/15 rounded-[2px] flex flex-col justify-between shadow-sm relative"
              >
                <div>
                  <Quote className="w-5 h-5 text-sandstone/40 mb-4" />
                  <p className="font-serif italic text-sm text-dark/85 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-dark/10">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-dark">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
