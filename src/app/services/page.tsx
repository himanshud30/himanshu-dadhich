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
          eyebrow="Services & Creative Capabilities"
          title="Services & Packages"
          subtitle="Structured creative partnerships designed for brands and founders"
          description="From positioning and content systems to high-craft brand films — clear scopes, predictable timelines, and direct collaboration."
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
                      Structured Package
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
                    <div className="text-xs font-mono font-bold text-sandstone uppercase tracking-wider mt-1">
                      Custom Scope
                    </div>
                  </div>

                  <Link
                    href={`/conversation?service=${encodeURIComponent(service.title)}`}
                    className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2 shrink-0 group"
                  >
                    <span>Book a Call</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-dark/15 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sandstone">
              Working Together
            </span>
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                Do you travel for shoots and brand workshops?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                Yes. While I am based out of Jodhpur, I regularly travel across India for on-location filming, founder interviews, and strategy workshops. Pre-production and post-production are managed with a lean, trusted team.
              </p>
            </div>

            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                How do project sprints vs retainers work?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                Most collaborations start with a defined sprint — like The Diagnosis or The Story System — to establish a clear foundation. For teams needing continuous creative direction or episodic series, we offer monthly advisory partnerships.
              </p>
            </div>

            <div className="p-6 bg-cream-dark/30 border border-dark/15 rounded-[2px]">
              <h4 className="font-bold text-sm text-dark mb-2">
                How do we get started?
              </h4>
              <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                Book a brief intro call. We’ll discuss what you are building, the current bottleneck in your content or brand, and whether one of these packages is the right fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
