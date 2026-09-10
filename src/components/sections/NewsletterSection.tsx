import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import NewsletterForm from '@/components/common/NewsletterForm';
import { newsletterIssues } from '@/data/newsletter';

export default function NewsletterSection() {
  const latestIssue = newsletterIssues[0];

  return (
    <section id="newsletter" className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: One Strong Promise & Subscription */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              <span className="text-sandstone font-bold">12 / NEWSLETTER</span>
              <span>&middot;</span>
              <span>THE DISPATCH</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              One Strong Promise.
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-dark/85 leading-relaxed">
              Twice a month, an unsparing essay on creative strategy, cinema, and building a globally distributed studio from Jodhpur.
            </p>

            <p className="text-xs sm:text-sm text-dark/75 font-sans leading-relaxed">
              No generic growth hacks. No algorithm panic. No promotional noise. Only field-tested frameworks on turning stories into compounding enterprise moats.
            </p>

            <div className="pt-2 max-w-md">
              <NewsletterForm />
            </div>

            <div className="flex items-center gap-6 pt-2 text-[11px] text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sandstone" />
                Read by 2,400+ founders & creators
              </span>
              <span>&middot;</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          {/* Right Column: Latest Issue Showcase */}
          <div className="lg:col-span-5 bg-cream p-8 sm:p-10 border border-dark/15 rounded-[2px] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-dark/10">
                <span className="text-[10px] font-mono text-sandstone font-bold uppercase tracking-wider">
                  LATEST ISSUE &middot; #{latestIssue.number}
                </span>
                <span className="text-[10px] font-mono text-muted uppercase">
                  {latestIssue.publishedAt}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-display text-dark">
                {latestIssue.title}
              </h3>

              <p className="text-xs sm:text-sm text-dark/75 font-sans leading-relaxed">
                {latestIssue.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {latestIssue.territories.map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-cream-dark/50 text-dark/80 border border-dark/10 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between">
              <Link
                href={`/newsletter/${latestIssue.slug}`}
                className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-dark hover:text-sandstone transition-colors group"
              >
                <span>Read Issue #{latestIssue.number}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/newsletter"
                className="text-[11px] font-mono uppercase text-muted hover:text-dark transition-colors"
              >
                Archive ({newsletterIssues.length})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
