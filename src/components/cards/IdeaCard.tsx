import React from 'react';
import { Idea } from '@/types';
import StatusChip from '@/components/common/StatusChip';

interface IdeaCardProps {
  idea: Idea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <div className="p-6 md:p-7 bg-cream border border-dark/15 hover:border-dark/40 transition-all duration-300 rounded-[2px] flex flex-col justify-between group shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-sandstone">
            {idea.category}
          </span>
          <StatusChip status={idea.status} />
        </div>

        <h4 className="font-display text-2xl tracking-display uppercase text-dark group-hover:text-sandstone transition-colors leading-[0.98]">
          {idea.title}
        </h4>

        <p className="text-xs sm:text-sm text-dark/75 mt-3 leading-relaxed">
          {idea.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-dark/10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-muted">
        <div className="flex flex-wrap gap-1.5">
          {idea.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-dark/5 text-dark/70 rounded-[2px]">
              #{tag}
            </span>
          ))}
        </div>
        <span className="tracking-wider uppercase">Updated {idea.updatedAt}</span>
      </div>
    </div>
  );
}
