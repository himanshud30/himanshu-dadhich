import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Play, Calendar, ExternalLink } from 'lucide-react';
import { series } from '@/data/series';
import StatusChip from '@/components/common/StatusChip';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return series.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) return { title: 'Series Not Found' };
  return {
    title: `${item.title} — Original Series`,
    description: item.description,
  };
}

export default async function SeriesDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);

  if (!item) {
    notFound();
  }

  const featuredEpisode = item.episodes[0];

  return (
    <div className="py-12 md:py-20 bg-dark text-cream min-h-screen">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/series"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-cream/60 hover:text-cream transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Series</span>
          </Link>
        </div>

        {/* Series Header */}
        <div className="border-b border-cream/15 pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <StatusChip status={item.status} className="bg-cream/10 text-cream" />
            <span className="text-xs uppercase tracking-wider text-sandstone font-semibold">
              {item.episodeCount} Episodes Available
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl tracking-display uppercase text-cream leading-tight2">
            {item.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-sandstone-light mt-4 max-w-4xl leading-snug">
            “{item.manifesto}”
          </p>

          <p className="text-sm sm:text-base text-cream/70 mt-4 max-w-3xl leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Featured Video Teaser Screen */}
        {featuredEpisode && (
          <div className="mb-16">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sandstone">
                Featured Episode Player &middot; Episode {featuredEpisode.number}
              </span>
              <span className="text-xs text-cream/60">{featuredEpisode.publishedAt}</span>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-cream/20 shadow-2xl bg-dark-card group">
              <img
                src={featuredEpisode.thumbnail}
                alt={featuredEpisode.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

              {/* Play Overlay Button */}
              <a
                href={featuredEpisode.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sandstone text-dark flex items-center justify-center shadow-lg group-hover:bg-cream transition-colors">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </a>

              <div className="absolute bottom-6 left-6 right-6 text-cream pointer-events-none">
                <span className="text-xs text-sandstone uppercase font-bold tracking-wider">
                  Episode {featuredEpisode.number}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-display mt-1">
                  {featuredEpisode.title}
                </h2>
                <p className="text-xs sm:text-sm text-cream/80 max-w-2xl mt-2 line-clamp-2">
                  {featuredEpisode.keyIdea}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* All Episodes Directory */}
        <div className="pt-8">
          <h2 className="font-display text-3xl tracking-display uppercase text-cream mb-8">
            Complete Episode Directory
          </h2>

          <div className="space-y-6">
            {item.episodes.map((ep) => (
              <div
                key={ep.slug}
                className="p-6 md:p-8 bg-dark-card border border-cream/15 hover:border-sandstone/60 transition-all duration-300 rounded-[2px] flex flex-col md:flex-row gap-6 items-start justify-between"
              >
                <div className="flex gap-4 sm:gap-6 items-start">
                  <span className="font-display text-3xl sm:text-4xl text-sandstone font-bold shrink-0">
                    {String(ep.number).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-display uppercase text-cream">
                      {ep.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-sm text-sandstone-light mt-1">
                      Key Thesis: {ep.keyIdea}
                    </p>
                    <p className="text-xs sm:text-sm text-cream/70 mt-3 leading-relaxed max-w-3xl">
                      {ep.transcript}
                    </p>

                    {ep.references && ep.references.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-cream/50 uppercase tracking-wider">
                        <span>References:</span>
                        {ep.references.map((ref, idx) => (
                          <span key={idx} className="text-sandstone">
                            &bull; {ref}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-cream/10">
                  <span className="text-xs text-cream/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {ep.publishedAt}
                  </span>
                  <a
                    href={ep.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-sandstone text-dark hover:bg-cream text-xs uppercase font-semibold tracking-label rounded-[2px] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Watch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
