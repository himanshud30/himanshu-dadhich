import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FieldNoteCard from '@/components/cards/FieldNoteCard';
import { fieldNotes } from '@/data/field-notes';

export default function FieldNotesPreviewSection() {
  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">10 / FROM THE FIELD</span>
              <span>&middot;</span>
              <span>JODHPUR & TRAVEL OBSERVATIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              From the Field
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2 max-w-xl">
              Observations on sandstone geometry, vernacular desert rhythms, and ethnographic field research across Western Rajasthan.
            </p>
          </div>

          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-5 pr-2 py-2 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>All Field Notes ({fieldNotes.length})</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fieldNotes.slice(0, 3).map((note) => (
            <FieldNoteCard key={note.slug} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}
