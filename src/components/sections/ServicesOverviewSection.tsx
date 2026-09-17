'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Clock } from 'lucide-react';
import { services } from '@/data/services';

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display uppercase text-dark leading-tight">
            Services.
          </h2>
          <p className="text-sm text-dark/70 mt-3 leading-relaxed">
            Structured creative engagements. Each designed for a specific stage of your brand&apos;s journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="bg-paper p-8 border border-dark/15 rounded-[2px] flex flex-col justify-between hover:border-dark/30 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-dark/10">
                  <span className="font-mono text-xs text-sandstone font-bold">
                    0{idx + 1}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-muted">
                    <Clock className="w-3 h-3 text-sandstone" />
                    {service.timeline}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-display text-dark">
                  {service.title}
                </h3>

                <p className="text-xs text-dark/70 leading-relaxed">
                  {service.tagline}
                </p>

                <div className="space-y-1.5 pt-2">
                  {service.included.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-dark/75">
                      <Check className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-dark/10">
                <Link
                  href="/conversation"
                  className="w-full px-6 py-3 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2 group"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
