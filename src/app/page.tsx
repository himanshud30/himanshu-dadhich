import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BrandMarquee from '@/components/common/BrandMarquee';
import IntroManifestoSection from '@/components/sections/IntroManifestoSection';
import FounderSpotlight from '@/components/sections/FounderSpotlight';
import ImpactMetrics from '@/components/common/ImpactMetrics';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import CurrentSeriesSection from '@/components/sections/CurrentSeriesSection';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import FieldNotesPreviewSection from '@/components/sections/FieldNotesPreviewSection';
import IdeasPreviewSection from '@/components/sections/IdeasPreviewSection';
import ConversationCTASection from '@/components/sections/ConversationCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BrandMarquee />
      <IntroManifestoSection />
      <FounderSpotlight />
      <ImpactMetrics />
      <SelectedWorkSection />
      <CurrentSeriesSection />
      <ServicesOverviewSection />
      <FeaturedProjectSection />
      <FieldNotesPreviewSection />
      <IdeasPreviewSection />
      <ConversationCTASection />
    </div>
  );
}
