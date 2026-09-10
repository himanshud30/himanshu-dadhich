import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';

export default function ConversationCTASection() {
  return (
    <section className="py-24 md:py-32 relative bg-dark text-cream overflow-hidden">
      <div className="absolute inset-0 jali-bg opacity-10 pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-sandstone" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
            Direct Dialogue
          </span>
          <span className="w-8 h-[2px] bg-sandstone" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-cream leading-tight2">
          Let’s Build Something That Endures
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-cream/70 mt-4 leading-relaxed">
          Whether you are commissioning an international brand film, restructuring your narrative content engine, or seeking strategic creative direction—our studio is ready.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collaborate"
            className="w-full sm:w-auto px-8 py-4 bg-sandstone text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2"
          >
            <span>Commission Studio Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/conversation"
            className="w-full sm:w-auto px-8 py-4 border border-cream/30 hover:border-sandstone text-cream hover:text-sandstone transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open Studio Inquiry</span>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/15 text-xs text-cream/50 flex items-center justify-center gap-2">
          <Mail className="w-3.5 h-3.5 text-sandstone" />
          <span>Direct Studio Correspondence: studio@himanshudadhich.com</span>
        </div>
      </div>
    </section>
  );
}
