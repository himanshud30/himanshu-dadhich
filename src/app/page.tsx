import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProofRail from '@/components/sections/ProofRail';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import MethodSection from '@/components/sections/MethodSection';
import SignatureEngagementsSection from '@/components/sections/SignatureEngagementsSection';
import { CreativeLabSection } from '@/components/sections/CreativeLabSection';
import WorkingProcessSection from '@/components/sections/WorkingProcessSection';
import StudioSection from '@/components/sections/StudioSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import ClientWinsSection from '@/components/sections/ClientWinsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';
import ConversationCTASection from '@/components/sections/ConversationCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01 — Hero: Himanshu Dadhich & TLR Studio positioning */}
      <HeroSection />

      {/* 02 — Proof Rail: Verification metrics & partner marks */}
      <ProofRail />

      {/* 03 — Selected Work: Portfolio showcase with Talking Head, Motion Design, Long Form & Case Studies */}
      <SelectedWorkSection />

      {/* 04 — The Method: Find the story → Build the system → Make it travel */}
      <MethodSection />

      {/* 05 — Signature Engagements: Services with Book a Call CTAs */}
      <SignatureEngagementsSection />

      {/* 06 — The Creative Lab: Content OS Incubation & Cohort Experience */}
      <CreativeLabSection />

      {/* 07 — Working Process: 6-step roadmap */}
      <WorkingProcessSection />

      {/* 08 — Studio: TLR Delivery Apparatus */}
      <StudioSection />

      {/* 09 — Sundarkand: Devotional Cinema & Living Archive */}
      <FeaturedProjectSection />

      {/* 10 — Results & Client Voices */}
      <ClientWinsSection />

      {/* 11 — Newsletter & Dispatches: Combined Blog, Field Notes & Strategy Essays */}
      <NewsletterSection />

      {/* 12 — FAQ */}
      <FAQSection />

      {/* 13 — Conversation CTA */}
      <ConversationCTASection />
    </div>
  );
}
