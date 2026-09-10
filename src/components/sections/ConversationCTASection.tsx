'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Check, Mail, Sparkles } from 'lucide-react';

export default function ConversationCTASection() {
  const paths = [
    { id: 'brand-problem', label: 'I have a brand problem', target: '/collaborate?topic=brand-problem' },
    { id: 'create-series', label: 'I want to create a series', target: '/collaborate?topic=create-series' },
    { id: 'support-sundarkand', label: 'I want to support Sundarkand', target: '/supporters?topic=sundarkand' },
    { id: 'question-himanshu', label: 'I have a question for Himanshu', target: '/conversation?topic=question' },
    { id: 'collaborate', label: 'I want to collaborate', target: '/collaborate?topic=partnership' },
    { id: 'something-else', label: 'Something else', target: '/conversation?topic=other' },
  ];

  const [selectedPath, setSelectedPath] = useState<string>('brand-problem');

  const currentTarget =
    paths.find((p) => p.id === selectedPath)?.target || '/collaborate';

  return (
    <section id="conversation" className="py-20 md:py-28 relative bg-dark text-cream overflow-hidden border-b border-cream/10">
      {/* Background Jali Pattern Subtle Layer */}
      <div className="absolute inset-0 jali-bg opacity-10 pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Humanised Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden border border-cream/20 shadow-2xl bg-dark group max-w-md mx-auto">
              <img
                src="/images/himanshu/himanshu-standing.jpg"
                alt="Himanshu Dadhich — Principal Strategist"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <span className="text-[10px] font-mono text-sandstone uppercase tracking-widest block mb-1">
                  DIRECT DIALOGUE
                </span>
                <h4 className="font-display text-2xl uppercase tracking-display">
                  Himanshu Dadhich
                </h4>
                <p className="text-xs font-serif italic text-cream/70 mt-1">
                  “Every enduring partnership begins with honest diagnosis.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Invitation & Conversation Paths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sandstone" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sandstone">
                13 / START A CONVERSATION
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-cream leading-tight">
              Let’s begin with the real problem.
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-cream/80 leading-relaxed max-w-xl">
              Share what you are building, what feels unclear and why it matters. If I believe there is something useful to explore, we will begin with a focused conversation.
            </p>

            {/* Conversation Paths Selector */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sandstone block mb-3 font-semibold">
                What would you like to talk about?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {paths.map((path) => {
                  const isSelected = selectedPath === path.id;
                  return (
                    <button
                      key={path.id}
                      type="button"
                      onClick={() => setSelectedPath(path.id)}
                      className={`p-3 text-left rounded-[2px] border text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-cream text-dark border-sandstone font-bold shadow-md'
                          : 'bg-dark-card text-cream/80 border-cream/15 hover:border-cream/40'
                      }`}
                    >
                      <span>{path.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-sandstone shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conversion Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={currentTarget}
                className="px-8 py-4 bg-sandstone text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Share Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/conversation"
                className="px-8 py-4 border border-cream/30 hover:border-sandstone text-cream hover:text-sandstone transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2"
              >
                <span>Ask Himanshu a Question</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-cream/10 flex items-center gap-2 text-xs text-cream/50 font-mono">
              <Mail className="w-3.5 h-3.5 text-sandstone" />
              <span>Direct studio inbox: studio@himanshudadhich.com &middot; 24-48h response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
