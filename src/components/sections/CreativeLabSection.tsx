'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, ArrowRight, CheckCircle2, Calendar, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

export const CreativeLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'os' | 'cohort' | 'curriculum'>('os');

  const osModules = [
    {
      num: '01',
      title: 'Narrative Positioning Thesis',
      tag: 'Strategy',
      desc: 'Isolate your core market truth. Stop broadcasting random posts and define the single, high-leverage story territory your brand can own for years.',
    },
    {
      num: '02',
      title: 'Research & Inquiry Engine',
      tag: 'Workflow',
      desc: 'Build a friction-free pipeline where raw observations, field dispatches, and client learnings automatically convert into structured, publishable content.',
    },
    {
      num: '03',
      title: 'Repeatable Format Matrix',
      tag: 'Creative',
      desc: 'Design 3–5 signature content formats (talking head, essay, documentary case study) with prompt templates, visual styles, and editing rules.',
    },
    {
      num: '04',
      title: 'Distribution & Retention OS',
      tag: 'Growth',
      desc: 'Turn long-form thinking into multi-channel dispatches that compound trust, build email subscriber loyalty, and generate high-intent client inquiries.',
    },
  ];

  const curriculum = [
    {
      week: 'Week 1',
      topic: 'The Central Story Diagnosis',
      deliverable: 'Positioning Manifesto & Verbal System',
    },
    {
      week: 'Week 2',
      topic: 'The Content OS Architecture',
      deliverable: 'Research-to-Draft Pipeline & Notion/Obsidian Setup',
    },
    {
      week: 'Week 3',
      topic: 'Signature Format Prototyping',
      deliverable: '3 Polished Pilot Pieces & Production Templates',
    },
    {
      week: 'Week 4',
      topic: 'Distribution Sprint & Review',
      deliverable: 'Live Launch, Feedback Loops & Handover',
    },
  ];

  return (
    <section id="creative-lab" className="relative py-28 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>TLR LABS &middot; CREATIVE OS INCUBATION</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-100 tracking-tight leading-tight">
            The Creative Lab
          </h2>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            An incubation sprint for modern founders, creators, and small teams to build a repeatable Content OS and high-retention narrative engine.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800">
            <button
              onClick={() => setActiveTab('os')}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'os'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Creative OS Architecture
            </button>
            <button
              onClick={() => setActiveTab('cohort')}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'cohort'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cohort Experience
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'curriculum'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              4-Week Roadmap
            </button>
          </div>
        </div>

        {/* Tab 1: Creative OS Modules */}
        {activeTab === 'os' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {osModules.map((m) => (
              <div
                key={m.num}
                className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-indigo-400/80 bg-indigo-400/10 px-2.5 py-1 rounded border border-indigo-400/20">
                    MODULE {m.num}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif text-neutral-100 group-hover:text-amber-400 transition-colors">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Cohort Experience */}
        {activeTab === 'cohort' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <Users className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold font-serif text-neutral-100">Intimate Cohorts</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Max 8 participants per sprint. Direct critique, 1-on-1 strategy reviews, and direct access to Himanshu Dadhich.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <Cpu className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold font-serif text-neutral-100">Live OS Setup</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                We don&apos;t just teach theory. We build your live Notion/Obsidian production database, prompt shortcuts, and templates during the sprint.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <Terminal className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold font-serif text-neutral-100">Plug & Play Templates</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Get full access to TLR&apos;s internal scripting frameworks, editorial checklists, and video editing guidelines.
              </p>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Curriculum */}
        {activeTab === 'curriculum' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {curriculum.map((c, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{i + 1}
                  </span>
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{c.week}</span>
                    <h4 className="text-lg font-bold text-neutral-100 font-serif">{c.topic}</h4>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-950 px-4 py-2 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Deliverable: {c.deliverable}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Application CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-neutral-900 via-neutral-900 to-indigo-950/40 p-10 rounded-3xl border border-neutral-800 relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-100">
              Ready to build your Content OS?
            </h3>
            <p className="mt-3 text-sm text-neutral-400">
              Applications are reviewed on a rolling basis. Next sprint begins soon.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/conversation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-100 text-neutral-950 font-medium hover:bg-white transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                <span>Book a Call & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
