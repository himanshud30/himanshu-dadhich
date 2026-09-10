import React from 'react';
import Link from 'next/link';
import { Film, Layers, Compass, Sparkles, ArrowUpRight, Check } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'film':
        return <Film className="w-5 h-5 text-sandstone" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-sandstone" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-sandstone" />;
      default:
        return <Sparkles className="w-5 h-5 text-sandstone" />;
    }
  };

  return (
    <article className="group bg-cream-dark/30 hover:bg-cream-dark/60 border border-dark/15 hover:border-dark/40 transition-all duration-300 rounded-[2px] p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-[2px] bg-dark text-cream flex items-center justify-center">
            {getIcon(service.icon)}
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-muted uppercase">
            {service.timeline}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl tracking-display uppercase text-dark group-hover:text-sandstone transition-colors leading-[0.95]">
          <Link href={`/services#${service.slug}`}>
            {service.title}
          </Link>
        </h3>

        <p className="font-serif italic text-xs sm:text-sm text-sandstone mt-2 leading-relaxed">
          {service.tagline}
        </p>

        <p className="text-xs sm:text-sm text-dark/75 mt-4 leading-relaxed">
          {service.description}
        </p>

        {/* Included Items */}
        <div className="mt-6 pt-6 border-t border-dark/10 space-y-2">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-muted block mb-2">
            Scope Highlights:
          </span>
          {service.included.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-dark/80">
              <Check className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-dark/10 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-muted uppercase tracking-wider block">
            Investment
          </span>
          <span className="text-xs font-semibold text-dark tracking-wide">
            {service.startingPrice}
          </span>
        </div>

        <Link
          href={`/collaborate?service=${encodeURIComponent(service.title)}`}
          className="text-xs uppercase font-semibold tracking-label px-3.5 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-colors duration-200 rounded-[2px] flex items-center gap-1"
        >
          <span>Engage</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}
