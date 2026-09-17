import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Clock, Users, Sparkles, Compass, Video, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Creative Lab · By Himanshu Dadhich',
  description: 'A cohort-based program for creators to build sustainable creative practices, master storytelling, and run a structured creative business.',
};

export default function TheCreativeLabPage() {
  const curriculum = [
    {
      week: 'Week 01',
      title: 'Positioning & Creative Voice',
      desc: 'Move away from generic content templates. Clarify your narrative perspective, define your niche without boxing yourself in, and build a distinctive visual voice.',
      topics: ['Audit of current work', 'The Creative POV Matrix', 'Finding stories in ordinary places'],
      icon: Compass,
    },
    {
      week: 'Week 02',
      title: 'Storytelling & Scripting Architecture',
      desc: 'The difference between disposable clips and work people remember is structure. Learn the narrative arcs that hold viewer attention without cheap hooks.',
      topics: ['Scriptwriting for video', 'Pacing and retention rhythm', 'Emotional tone & soundscapes'],
      icon: Video,
    },
    {
      week: 'Week 03',
      title: 'Lean Production & Editorial Craft',
      desc: 'How to achieve cinematic texture with accessible gear. Shot selection, lighting fundamentals, editing rhythm, and grading for mood over saturation.',
      topics: ['Camera & lighting essentials', 'The editorial edit workflow', 'Color grading & sound design'],
      icon: Sparkles,
    },
    {
      week: 'Week 04',
      title: 'Packaging, Pricing & The Creator Business',
      desc: 'Turn craft into a compounding business. How to package your creative services, pitch high-value brands, negotiate fees, and retain creative control.',
      topics: ['Structuring premium service packages', 'Inbound client acquisition', 'Retainers vs fixed projects'],
      icon: Briefcase,
    },
  ];

  const forYou = [
    'You create video content or films and want to take your craft from casual to professional.',
    'You are tired of algorithm chasing and want to build a real audience and sustainable client roster.',
    'You want direct, candid feedback on your edits, scripts, and business packaging.',
    'You value depth, craft, and authentic storytelling over flashy hacks.',
  ];

  const notForYou = [
    'You are looking for "get-rich-quick" virality or automated AI spam hacks.',
    'You are unwilling to put in the hours to film, script, and rewrite real projects.',
    'You cannot commit 4–5 hours weekly for live sessions and assignments.',
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-6 pb-16 border-b border-dark/15">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream-dark border border-dark/15 text-dark text-xs font-mono uppercase tracking-wider rounded-[2px]">
            <span>TLR Creative Lab</span>
            <span>&middot;</span>
            <span className="text-sandstone font-bold">Cohort 01 Applications Open</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-display text-dark leading-tight">
            Learn the systems behind 7 years of creative experience.
          </h1>

          <p className="text-base sm:text-lg text-dark/75 leading-relaxed max-w-2xl font-serif">
            A 4-week cohort for early-stage creators and filmmakers ready to turn their creative practice 
            into a focused, sustainable business. No fluff, no growth hacks — just real craft, structure, and direct feedback.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/conversation"
              className="px-8 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] inline-flex items-center gap-2 group"
            >
              <span>Apply for Cohort 01 &middot; Book a Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="text-xs text-dark/60 font-mono">
              Limited to 15 creators
            </span>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-12 border-b border-dark/15">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-sandstone block">Format</span>
            <span className="font-display text-xl text-dark">4 Weeks Live</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-sandstone block">Cohort Size</span>
            <span className="font-display text-xl text-dark">Max 15 Creators</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-sandstone block">Sessions</span>
            <span className="font-display text-xl text-dark">2x Weekly Live</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-sandstone block">Outcome</span>
            <span className="font-display text-xl text-dark">Your Creator OS</span>
          </div>
        </div>

        {/* Curriculum Breakdown */}
        <div className="py-20 border-b border-dark/15">
          <div className="mb-12">
            <span className="text-xs font-mono text-sandstone uppercase tracking-wider block mb-2">
              The Curriculum
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark">
              Four Weeks of Focused Transformation
            </h2>
            <p className="text-sm text-dark/70 mt-2 max-w-xl">
              Each week tackles one core pillar of building a sustainable creative body of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-cream border border-dark/15 rounded-[2px] flex flex-col justify-between hover:border-dark/35 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sandstone tracking-wider uppercase">
                        {item.week}
                      </span>
                      <Icon className="w-5 h-5 text-dark/40" />
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-display text-dark">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-dark/10 space-y-2">
                    <span className="text-[10px] font-mono text-dark/50 uppercase block">Focus Areas</span>
                    {item.topics.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-dark/80">
                        <span className="w-1.5 h-1.5 bg-sandstone rounded-full" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Is This For */}
        <div className="py-20 border-b border-dark/15 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 bg-cream-dark/30 border border-dark/15 rounded-[2px] space-y-6">
            <h3 className="font-display text-2xl uppercase tracking-display text-dark">
              This is for you if:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-dark/85">
                  <CheckCircle2 className="w-4 h-4 text-sandstone shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-cream border border-dark/15 rounded-[2px] space-y-6">
            <h3 className="font-display text-2xl uppercase tracking-display text-dark">
              This is not for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-dark/65">
                  <span className="text-dark/40 font-mono text-xs mt-0.5 font-bold">&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Simple Application Banner */}
        <div className="py-20 text-center space-y-6 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-sandstone uppercase tracking-wider block">
            Next Cohort Starts Soon
          </span>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-display text-dark">
            Ready to Build Your Creative Practice?
          </h2>
          <p className="text-sm text-dark/75 leading-relaxed font-serif">
            We review every application personally to ensure small cohort chemistry. 
            Book an intro call to see if this is the right next step for your work.
          </p>
          <div className="pt-4">
            <Link
              href="/conversation"
              className="px-8 py-4 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] inline-flex items-center gap-2 group"
            >
              <span>Book a Call &middot; Apply</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
