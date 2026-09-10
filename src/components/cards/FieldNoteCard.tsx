import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { FieldNote } from '@/types';

interface FieldNoteCardProps {
  note: FieldNote;
}

export default function FieldNoteCard({ note }: FieldNoteCardProps) {
  return (
    <article className="group bg-cream-dark/40 border border-dark/15 hover:border-dark/35 transition-all duration-300 rounded-[2px] overflow-hidden flex flex-col justify-between">
      <div>
        {/* Photo if available */}
        {note.photographs && note.photographs[0] && (
          <div className="relative aspect-[16/9] overflow-hidden bg-dark/5">
            <img
              src={note.photographs[0]}
              alt={note.title}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-dark/80 text-cream px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-[2px] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-sandstone" />
              <span>{note.city}</span>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="text-[10px] uppercase tracking-wider text-muted mb-2 font-medium">
            {note.date}
          </div>

          <h3 className="font-display text-2xl tracking-display uppercase text-dark group-hover:text-sandstone transition-colors leading-[0.98]">
            <Link href={`/field-notes/${note.slug}`}>
              {note.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-dark/75 mt-3 line-clamp-3 leading-relaxed">
            {note.observation}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-dark/10 mt-4 flex items-center justify-between">
        <span className="text-[10px] tracking-wider uppercase text-sandstone font-medium">
          Field Dispatch
        </span>
        <Link
          href={`/field-notes/${note.slug}`}
          className="text-xs uppercase font-semibold tracking-label text-dark group-hover:text-sandstone flex items-center gap-1 transition-colors"
        >
          <span>Read Dispatch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
