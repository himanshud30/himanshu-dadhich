'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Film, Layers, Compass, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { services } from '@/data/services';

export default function ServicesOverviewSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const icons = [
    <Film key="1" className="w-5 h-5 text-sandstone" />,
    <Layers key="2" className="w-5 h-5 text-sandstone" />,
    <Compass key="3" className="w-5 h-5 text-sandstone" />,
    <Sparkles key="4" className="w-5 h-5 text-sandstone" />,
  ];

  const categoryTags = [
    ['CINEMA', '35MM', 'BRAND FILM', 'DIRECTION'],
    ['CONTENT ENGINE', 'REPUTATION', 'FOUNDER VOICE'],
    ['STRATEGY', 'POSITIONING', '2-WEEK SPRINT'],
    ['CULTURAL IP', 'DOCUMENTARY', 'COMMUNITY PATRONS'],
  ];

  return (
    <section className="py-24 md:py-32 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Capabilities & Advisory"
          title="Strategic Services"
          subtitle="Fixed-scope creative interventions designed to compound brand authority"
          actionText="View Detailed Service Menu"
          actionHref="/services"
        />

        {/* Yūgen-Inspired Interactive Expanding Slide Cards (Desktop) */}
        <div className="hidden lg:flex gap-4 min-h-[520px] transition-all duration-500">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={service.slug}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-[2px] border transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer p-8 ${
                  isActive
                    ? 'flex-[2] bg-dark text-cream border-sandstone shadow-2xl'
                    : 'flex-[0.8] bg-cream-dark/40 text-dark border-dark/15 hover:border-dark/40 hover:bg-cream-dark/70'
                }`}
              >
                {/* Background Texture on Active */}
                {isActive && (
                  <div className="absolute inset-0 jali-bg opacity-10 pointer-events-none" />
                )}

                {/* Top Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display text-2xl sm:text-3xl ${
                        isActive ? 'text-sandstone' : 'text-dark/40'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-[2px] flex items-center justify-center ${
                        isActive ? 'bg-cream/10' : 'bg-dark/5'
                      }`}
                    >
                      {icons[idx]}
                    </div>
                  </div>

                  {/* Tags Pill Strip (Inspired by Yūgen Tags) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {categoryTags[idx]?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[9px] uppercase font-mono font-medium tracking-wider px-2 py-0.5 rounded-[2px] border ${
                          isActive
                            ? 'border-cream/20 text-cream/70 bg-cream/5'
                            : 'border-dark/15 text-dark/60 bg-cream/40'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className={`font-display text-2xl sm:text-3xl tracking-display uppercase leading-tight ${
                      isActive ? 'text-cream' : 'text-dark'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`font-serif italic text-xs sm:text-sm mt-2 line-clamp-2 ${
                      isActive ? 'text-sandstone-light' : 'text-sandstone'
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>

                {/* Expanded Details when Active */}
                <div
                  className={`relative z-10 transition-all duration-500 space-y-4 ${
                    isActive ? 'opacity-100 mt-6' : 'opacity-0 h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs text-cream/80 leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  <div className="border-t border-cream/15 pt-4 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-sandstone block mb-2">
                      Deliverable Highlights:
                    </span>
                    {service.included.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-cream/90">
                        <Check className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar with Price and Yūgen Circular Arrow Button */}
                <div
                  className={`relative z-10 pt-6 border-t flex items-center justify-between ${
                    isActive ? 'border-cream/15' : 'border-dark/10'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] uppercase tracking-wider block ${
                        isActive ? 'text-cream/50' : 'text-muted'
                      }`}
                    >
                      Consultation &middot; {service.timeline}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        isActive ? 'text-sandstone' : 'text-dark'
                      }`}
                    >
                      {service.startingPrice}
                    </span>
                  </div>

                  <Link
                    href="/conversation"
                    className={`inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-3.5 pr-1.5 py-1.5 transition-all group ${
                      isActive
                        ? 'bg-sandstone text-dark hover:bg-cream'
                        : 'bg-dark text-cream hover:bg-sandstone hover:text-dark'
                    }`}
                  >
                    <span className="text-[10px]">Book a Call</span>
                    <span className="w-6 h-6 rounded-full bg-dark/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet View (Responsive Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xl text-sandstone">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted">
                    {service.timeline}
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-display text-dark">
                  {service.title}
                </h3>
                <p className="font-serif italic text-xs text-sandstone mt-1">
                  {service.tagline}
                </p>
                <p className="text-xs text-dark/75 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dark/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-dark">
                  {service.startingPrice}
                </span>
                <Link
                  href={`/collaborate?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-label text-dark hover:text-sandstone"
                >
                  <span>Engage</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
