import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProofRail from '@/components/sections/ProofRail';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import MethodSection from '@/components/sections/MethodSection';
import SignatureEngagementsSection from '@/components/sections/SignatureEngagementsSection';
import WorkingProcessSection from '@/components/sections/WorkingProcessSection';
import OriginalThinkingSection from '@/components/sections/OriginalThinkingSection';
import StudioSection from '@/components/sections/StudioSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import FieldNotesPreviewSection from '@/components/sections/FieldNotesPreviewSection';
import ClientWinsSection from '@/components/sections/ClientWinsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';
import ConversationCTASection from '@/components/sections/ConversationCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01 — Hero: Simple positioning & two actions */}
      <HeroSection />

      {/* 02 — Proof Rail: Compact proof bar (7+ years, 60K+ views on TOOLS, etc.) + client marks */}
      <ProofRail />

      {/* 03 — Selected Work: Three excellent case studies with outcomes & visual evidence */}
      <SelectedWorkSection />

      {/* 04 — The Method: Find the story → Build the system → Make it travel */}
      <MethodSection />

      {/* 05 — Signature Engagements: 5 structured packages with duration & outcome */}
      <SignatureEngagementsSection />

      {/* 06 — How Working With Me Works: 6-step visible roadmap removing uncertainty */}
      <WorkingProcessSection />

      {/* 07 — Original Thinking: 4 pillars + TOOLS reel proof card */}
      <OriginalThinkingSection />

      {/* 08 — Studio: TLR as the structure through which client work is delivered */}
      <StudioSection />

      {/* 09 — Original Project: Sundarkand with progress, process & support pathway */}
      <FeaturedProjectSection />

      {/* 10 — From the Field: Jodhpur and travel observations */}
      <FieldNotesPreviewSection />

      {/* 11 — Results & Client Voices: 5 editorial win stories + testimonials */}
      <ClientWinsSection />

      {/* 12 — Newsletter: One strong promise and latest issue */}
      <NewsletterSection />

      {/* 13 — FAQ: 12 questions removing commercial uncertainty */}
      <FAQSection />

      {/* 14 — Conversation: Human photo, clear expectation & 6 conversation paths */}
      <ConversationCTASection />
    </div>
  );
}
