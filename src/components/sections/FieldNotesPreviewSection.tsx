import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import FieldNoteCard from '@/components/cards/FieldNoteCard';
import { fieldNotes } from '@/data/field-notes';

export default function FieldNotesPreviewSection() {
  return (
    <section className="py-24 md:py-32 border-b border-dark/15">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Field Dispatches"
          title="Notes From The Field"
          subtitle="Observations on geography, vernacular craft, and architectural echoes"
          actionText="View All Notes"
          actionHref="/field-notes"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fieldNotes.slice(0, 3).map((note) => (
            <FieldNoteCard key={note.slug} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}
