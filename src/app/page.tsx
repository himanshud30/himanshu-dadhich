import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProofRail from '@/components/sections/ProofRail';
import MethodSection from '@/components/sections/MethodSection';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import { CreativeLabSection } from '@/components/sections/CreativeLabSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ConversationCTASection from '@/components/sections/ConversationCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero — Name, one-liner, two CTAs */}
      <HeroSection />

      {/* Quick proof strip */}
      <ProofRail />

      {/* How I work — 3 simple steps */}
      <MethodSection />

      {/* Services — clean grid, Book a Call */}
      <ServicesOverviewSection />

      {/* Sundarkand — compact project card */}
      <FeaturedProjectSection />

      {/* Creative Lab — minimal */}
      <CreativeLabSection />

      {/* Newsletter — Indian Content Industry Report */}
      <NewsletterSection />

      {/* Simple CTA */}
      <ConversationCTASection />
    </div>
  );
}
