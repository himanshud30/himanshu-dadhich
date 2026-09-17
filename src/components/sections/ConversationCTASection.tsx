'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function ConversationCTASection() {
  return (
    <section id="conversation" className="py-20 md:py-28 bg-dark text-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-cream leading-tight">
            Let&apos;s work together.
          </h2>

          <p className="font-serif text-base sm:text-lg text-cream/75 leading-relaxed max-w-lg mx-auto">
            If you have a brand problem, a content challenge, or just want to explore whether working together makes sense — let&apos;s start with a conversation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/conversation"
              className="px-8 py-4 bg-sandstone text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-cream/40 font-mono">
            <Mail className="w-3.5 h-3.5 text-sandstone" />
            <span>hello@himanshudadhich.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
