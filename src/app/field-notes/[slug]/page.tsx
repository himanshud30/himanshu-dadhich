import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Users, Eye, Sparkles } from 'lucide-react';
import { fieldNotes } from '@/data/field-notes';
import PullQuote from '@/components/common/PullQuote';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fieldNotes.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = fieldNotes.find((n) => n.slug === slug);
  if (!note) return { title: 'Field Note Not Found' };
  return {
    title: `${note.title} — Field Dispatch`,
    description: note.observation,
  };
}

export default async function FieldNoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = fieldNotes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-muted hover:text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Field Notes</span>
          </Link>
        </div>

        {/* Note Header */}
        <div className="border-b border-dark/15 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-sandstone mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {note.city}
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1 text-muted">
              <Calendar className="w-3.5 h-3.5" />
              {note.date}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-tight2">
            {note.title}
          </h1>
        </div>

        {/* Photography Gallery */}
        {note.photographs && note.photographs.length > 0 && (
          <div className="space-y-4 mb-12">
            {note.photographs.map((photo, i) => (
              <div key={i} className="aspect-[16/10] rounded-[2px] overflow-hidden border border-dark/20 shadow-md">
                <img
                  src={photo}
                  alt={note.title}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* Dispatch Content */}
        <div className="space-y-8 text-sm sm:text-base text-dark/85 leading-relaxed">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-dark mb-2">
              <Eye className="w-4 h-4 text-sandstone" />
              <span>Sensory & Spatial Observation</span>
            </div>
            <p className="p-5 bg-cream-dark/40 border-l-2 border-dark/30 rounded-[2px]">
              {note.observation}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-dark mb-2">
              <Users className="w-4 h-4 text-sandstone" />
              <span>The People & The Encounter</span>
            </div>
            <p>{note.peopleMet}</p>
          </div>

          <PullQuote
            quote={note.culturalDetail}
            author={note.city}
            role="Vernacular Context"
          />

          <div className="p-6 bg-dark text-cream rounded-[2px] space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-sandstone">
              <Sparkles className="w-4 h-4" />
              <span>How This Changed My Strategic Thinking</span>
            </div>
            <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
              {note.whatChanged}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
