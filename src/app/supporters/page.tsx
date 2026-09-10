import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, ShieldCheck, Check, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import SupporterCard from '@/components/cards/SupporterCard';
import { supporters, patronTiers } from '@/data/supporters';

export const metadata: Metadata = {
  title: 'Patron Circle & Independent Backers',
  description: 'The patron community enabling independent cinematic and cultural creations from Jodhpur.',
};

export default function SupportersPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Patron Community"
          title="The Patron Circle"
          subtitle="Independent supporters backing cultural cinema, sound archives, and vernacular preservation"
          description="We do not accept venture capital or corporate compromise for our cultural IPs. Our work is made possible through visionary individuals and cultural stewards."
        />

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {patronTiers.map((tier) => (
            <div
              key={tier.name}
              className="p-6 bg-cream-dark/40 border border-dark/15 hover:border-sandstone transition-all duration-300 rounded-[2px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-sandstone">
                    {tier.name} Tier
                  </span>
                  <Heart className="w-4 h-4 text-rust" />
                </div>

                <div className="font-display text-2xl text-dark mb-2">
                  {tier.amount}
                </div>

                <p className="text-xs text-dark/75 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="border-t border-dark/10 pt-4 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted block mb-2">
                    Patron Privileges:
                  </span>
                  {tier.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-dark/80">
                      <Check className="w-3.5 h-3.5 text-sandstone shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-dark/10">
                <Link
                  href={`/conversation?tier=${tier.name}&intent=patron`}
                  className="w-full text-center py-3 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-colors text-xs uppercase font-semibold tracking-label rounded-[2px] block"
                >
                  Join as {tier.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Supporters Wall */}
        <div className="pt-12 border-t border-dark/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block mb-1">
                Permanent Cultural Ledger
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark">
                The Wall of Stewards
              </h3>
            </div>
            <span className="text-xs text-muted">
              {supporters.length} Active Patrons Across 14 Countries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supporters.map((sup) => (
              <SupporterCard key={sup.id} supporter={sup} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
