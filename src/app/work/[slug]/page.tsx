import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import PullQuote from '@/components/common/PullQuote';
import CaseStudyCard from '@/components/cards/CaseStudyCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: `${study.title} — ${study.client}`,
    description: study.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies.filter((c) => study.relatedSlugs?.includes(c.slug));

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-muted hover:text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Work Archive</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-dark/15 pb-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sandstone">
              {study.client} &middot; {study.year}
            </span>
            <span className="text-[11px] uppercase tracking-wider px-3 py-1 bg-dark text-cream rounded-[2px]">
              {study.category}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl tracking-display uppercase text-dark leading-tight2">
            {study.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-dark/75 mt-4 max-w-4xl">
            {study.excerpt}
          </p>
        </div>

        {/* Main Cover Visual */}
        <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-dark/20 shadow-lg mb-16">
          <img
            src={study.thumbnail}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Strategic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-dark/85 leading-relaxed">
            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                The Context & Challenge
              </h2>
              <p>{study.context}</p>
              <div className="mt-4 p-5 bg-cream-dark/50 border-l-2 border-dark/30 rounded-[2px]">
                <strong className="block text-xs uppercase tracking-wider text-dark mb-1">
                  The Core Problem:
                </strong>
                <p className="text-xs sm:text-sm text-dark/80">{study.problem}</p>
              </div>
            </div>

            <PullQuote
              quote={study.insight}
              author="Strategic Insight"
              role={study.client}
            />

            <div>
              <h2 className="font-display text-3xl tracking-display uppercase text-dark mb-4">
                Strategic Direction & Creative Execution
              </h2>
              <p>{study.strategicDirection}</p>
              <p className="mt-4">{study.creativeExecution}</p>
            </div>

            {/* Step-by-Step Process */}
            <div>
              <h3 className="font-display text-2xl tracking-display uppercase text-dark mb-6">
                Execution Architecture & Process
              </h3>
              <div className="space-y-3">
                {study.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-cream-dark/30 border border-dark/10 rounded-[2px] flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <span className="font-display text-lg text-sandstone font-bold shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery if present */}
            {study.gallery && study.gallery.length > 0 && (
              <div className="pt-6">
                <h3 className="font-display text-2xl tracking-display uppercase text-dark mb-6">
                  Visual Archive & Field Stills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.gallery.map((img, i) => (
                    <figure key={i} className="space-y-2">
                      <div className="aspect-[4/3] overflow-hidden rounded-[2px] border border-dark/15">
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="text-[11px] text-muted font-serif italic">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-8">
            {/* Deliverables Box */}
            <div className="p-6 bg-dark text-cream rounded-[2px] border border-cream/10 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Deliverables Scope
              </span>
              <ul className="space-y-2 text-xs text-cream/80">
                {study.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sandstone shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measured Outcomes */}
            <div className="p-6 bg-cream-dark/50 border border-dark/15 rounded-[2px] space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Measured Impact
              </span>
              <ul className="space-y-2.5 text-xs text-dark/80">
                {study.outcomes.map((outcome, idx) => (
                  <li key={idx} className="border-b border-dark/10 pb-2 last:border-0 last:pb-0">
                    &bull; {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Lessons */}
            <div className="p-6 bg-cream border border-dark/15 rounded-[2px] space-y-3">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Studio Takeaway
              </span>
              {study.lessons?.map((lesson, idx) => (
                <p key={idx} className="text-xs text-dark/70 font-serif italic">
                  “{lesson}”
                </p>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <Link
                href={`/collaborate?reference=${encodeURIComponent(study.title)}`}
                className="w-full text-center px-6 py-4 bg-sandstone text-dark hover:bg-dark hover:text-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2"
              >
                <span>Commission Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Case Studies */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-dark/15">
            <h3 className="font-display text-3xl tracking-display uppercase text-dark mb-8">
              Related Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel, i) => (
                <CaseStudyCard key={rel.slug} caseStudy={rel} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
