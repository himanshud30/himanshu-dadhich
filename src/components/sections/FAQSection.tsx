'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
            <span className="text-sandstone font-bold">12 / COMMERCIAL CLARITY</span>
            <span>&middot;</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
            Remove Uncertainty
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-3 leading-relaxed">
            Direct answers regarding fit, pricing, delivery structure, and studio capacity.
          </p>
        </div>

        {/* 12 FAQs Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-12 divide-y divide-dark/15 border-y border-dark/15">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 group transition-colors">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-sandstone font-bold mt-1 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl uppercase tracking-display text-dark group-hover:text-sandstone transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-dark/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-dark text-dark transition-all">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-sandstone" />
                      ) : (
                        <Plus className="w-4 h-4 text-dark/60" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pl-8 sm:pl-10 pr-4 sm:pr-12 text-xs sm:text-sm text-dark/80 leading-relaxed font-sans max-w-3xl animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
