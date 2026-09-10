import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight, Clock, DollarSign, HelpCircle } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services & Strategic Packages',
  description: 'Creative Direction, Brand Films, Content Systems, and Strategy Sprints from TLR Studio Jodhpur.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Commercial Engagements & Advisory"
          title="Services & Strategic Packages"
          subtitle="Fixed-scope creative interventions designed to compound brand authority"
          description="We partner with heritage institutions, ambitious founders, and visionary enterprises seeking cinematic clarity and strategic differentiation."
        />

        {/* Detailed Service Sections */}
        <div className="space-y-24 mt-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="p-8 sm:p-12 bg-cream-dark/30 border border-dark/15 rounded-[2px] shadow-sm scroll-mt-28"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-dark/15">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-2xl text-sandstone">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-muted">
                      Package Architecture
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-display text-dark">
                    {service.title}
                  </h2>
                  <p className="font-serif italic text-base sm:text-lg text-sandstone mt-1">
                    {service.tagline}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:text-right">
                  <div className="p-3 bg-cream border border-dark/10 rounded-[2px]">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="w-3.5 h-3.5 text-sandstone" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                    <div className="text-sm font-bold text-dark mt-1">
                      {service.startingPrice}
                    </div>
                  </div>

                  <Link
                    href={`/collaborate?service=${encodeURIComponent(service.title)}`}
                    className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2 shrink-0"
                  >
                    <span>Engage Studio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Service Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 text-xs sm:text-sm">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-dark mb-2 text-xs">
                      The Problem We Solve:
                    </h3>
                    <p className="text-dark/80 leading-relaxed bg-cream p-4 rounded-[2px] border border-dark/10">
                      {service.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-dark mb-2 text-xs">
                      Ideal Partner Profile:
                    </h3>
                    <p className="text-dark/80 leading-relaxed">
                      {service.whoFor}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-dark mb-2 text-xs">
                      Expected Enterprise Outcome:
                    </h3>
                    <p className="text-dark/80 leading-relaxed font-serif italic text-sandstone">
                      {service.expectedOutcome}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-dark mb-3 text-xs">
                      What Is Included in the Scope:
                    </h3>
                    <ul className="space-y-2">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-dark/85">
                          <CheckCircle2 className="w-4 h-4 text-sandstone shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold uppercase tracking-wider text-dark mb-3 text-xs">
                      The Execution Roadmap:
                    </h3>
                    <div className="space-y-2">
                      {service.process.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 bg-cream/70 border border-dark/10 rounded-[2px] text-xs text-dark/80"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory FAQ Section */}
        <div className="mt-24 pt-16 border-t border-dark/15 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sandstone">
              Studio Operating Principles
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark mt-2">
              Frequently Addressed Inquiries
            </h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                Can TLR produce on location outside of Jodhpur and India?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                Yes. While our headquarters, editorial suites, and creative research base are in Jodhpur, our directorial team routinely travels internationally for principal photography, brand immersion, and keynote presentations.
              </p>
            </div>

            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                How do retainers vs. fixed-fee sprints work?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                All engagements begin as defined, fixed-fee sprints or project deliveries. Once mutual strategic alignment is proven, we offer selective ongoing narrative advisory retainers to a maximum of four clients per calendar year.
              </p>
            </div>

            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                What is your confidentiality policy for unannounced brands?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                We sign rigorous bilateral non-disclosure agreements prior to all strategic sprints. Proprietary intellectual property, unreleased film treatments, and brand strategy matrices remain completely protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
