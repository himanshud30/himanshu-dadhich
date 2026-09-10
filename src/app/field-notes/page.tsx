import React from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/common/SectionHeader';
import FieldNoteCard from '@/components/cards/FieldNoteCard';
import { fieldNotes } from '@/data/field-notes';

export const metadata: Metadata = {
  title: 'Field Notes & Dispatches',
  description: 'Firsthand observations on vernacular craft, desert hydrology, and architectural memory from Jodhpur and Western Rajasthan.',
};

export default function FieldNotesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="On-the-Ground Dispatches"
          title="Field Notes"
          subtitle="Observations on geography, craft, and architectural echoes"
          description="Raw field observations captured during location scouting, sound recording journeys, and artisan immersions across Western Rajasthan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {fieldNotes.map((note) => (
            <FieldNoteCard key={note.slug} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
