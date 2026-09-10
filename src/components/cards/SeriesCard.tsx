import React from 'react';
import Link from 'next/link';
import { Play, ArrowUpRight } from 'lucide-react';
import { Series } from '@/types';
import StatusChip from '@/components/common/StatusChip';

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  return (
    <article className="group bg-dark text-cream border border-cream/15 hover:border-sandstone/60 transition-all duration-300 rounded-[2px] overflow-hidden flex flex-col justify-between">
      <div>
        {/* Visual header */}
        <div className="relative aspect-[16/9] overflow-hidden bg-dark-card">
          <img
            src={series.thumbnail}
            alt={series.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30" />
          
          <div className="absolute top-4 left-4">
            <StatusChip status={series.status} className="bg-dark/80 text-cream" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-sandstone">
              {series.episodeCount} Episodes
            </span>
            <div className="w-9 h-9 rounded-full bg-sandstone/90 text-dark flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-display text-3xl sm:text-4xl tracking-display uppercase text-cream group-hover:text-sandstone transition-colors leading-[0.95]">
            <Link href={`/series/${series.slug}`}>
              {series.title}
            </Link>
          </h3>

          <p className="font-serif italic text-xs sm:text-sm text-sandstone-light mt-2 line-clamp-2">
            “{series.manifesto}”
          </p>

          <p className="text-xs sm:text-sm text-cream/70 mt-3 line-clamp-2 leading-relaxed">
            {series.description}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 pt-0 border-t border-cream/10 mt-4 flex items-center justify-between">
        <span className="text-[10px] tracking-wider uppercase text-cream/40">
          Original Series
        </span>
        <Link
          href={`/series/${series.slug}`}
          className="text-xs uppercase font-semibold tracking-label text-sandstone hover:text-cream flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Series</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
