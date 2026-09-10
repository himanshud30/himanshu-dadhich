import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, Users, Target, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function SignatureEngagementsSection() {
  return (
    <section id="engagements" className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">05 / SIGNATURE ENGAGEMENTS</span>
              <span>&middot;</span>
              <span>STRUCTURED OFFERINGS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              Signature Engagements
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2 max-w-2xl">
              We do not sell isolated hours or generic deliverables. We partner through five named engagements designed for specific inflection points.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-5 pr-2 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>Detailed Engagement Specs</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* 5 Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const isFeatured = idx === 1 || idx === 3; // The Story System or Creative Partnership
            return (
              <div
                key={service.slug}
                className={`bg-paper border rounded-[2px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                  isFeatured
                    ? 'border-dark/30 ring-1 ring-sandstone/30'
                    : 'border-dark/15 hover:border-dark/30'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-dark/10">
                    <span className="font-mono text-xs text-sandstone font-bold">
                      ENGAGEMENT 0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sandstone" />
                      {service.timeline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-display text-dark">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark/85 font-serif italic leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-dark/70 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2 text-xs border-t border-dark/10">
                    <div className="flex items-start gap-2">
                      <Users className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-dark uppercase text-[10px] tracking-wider block">
                          Best For:
                        </span>
                        <span className="text-dark/75">{service.whoFor}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <Target className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-dark uppercase text-[10px] tracking-wider block">
                          Primary Outcome:
                        </span>
                        <span className="text-dark/85 font-medium">{service.expectedOutcome}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-muted block">
                      Investment Logic
                    </span>
                    <span className="font-mono text-xs font-semibold text-dark">
                      {service.startingPrice}
                    </span>
                  </div>

                  <a
                    href="#conversation"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-dark hover:text-sandstone transition-colors group"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
