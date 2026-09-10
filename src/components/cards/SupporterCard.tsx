import React from 'react';
import { Supporter } from '@/types';

interface SupporterCardProps {
  supporter: Supporter;
}

export default function SupporterCard({ supporter }: SupporterCardProps) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Forest':
        return 'text-emerald-800 bg-emerald-50 border-emerald-300';
      case 'Tree':
        return 'text-amber-800 bg-amber-50 border-amber-300';
      case 'Sapling':
        return 'text-indigo-800 bg-indigo-50 border-indigo-200';
      default:
        return 'text-dark/70 bg-cream border-dark/15';
    }
  };

  return (
    <div className="p-5 bg-cream border border-dark/15 rounded-[2px] shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="font-bold text-xs uppercase tracking-wider text-dark">
            {supporter.anonymous ? 'Anonymous Patron' : supporter.name}
          </span>
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[2px] border ${getTierColor(
              supporter.tier
            )}`}
          >
            {supporter.tier} Tier
          </span>
        </div>

        {supporter.message && (
          <p className="font-serif italic text-xs text-dark/80 leading-relaxed mt-2 border-l-2 border-sandstone/50 pl-3">
            “{supporter.message}”
          </p>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-dark/10 flex items-center justify-between text-[10px] text-muted uppercase tracking-wider">
        <span>Project: {supporter.project}</span>
        <span>{supporter.date}</span>
      </div>
    </div>
  );
}
