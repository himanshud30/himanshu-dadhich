import React from 'react';
import { Search, Layers, Radio, ArrowRight } from 'lucide-react';

export default function MethodSection() {
  const steps = [
    {
      num: '01',
      title: 'Find the Story',
      icon: Search,
      thesis: 'Isolate the central insight and positioning white space.',
      description:
        'Most brands drown in noise because they skip diagnosis. We interrogate the founder conviction, dissect competitor narratives, and extract the singular, undeniable human truth at the core of your work.',
      deliverables: ['Diagnostic audit', 'Narrative territories', 'Positioning thesis']
    },
    {
      num: '02',
      title: 'Build the System',
      icon: Layers,
      thesis: 'Turn the story into a repeatable, scalable operational architecture.',
      description:
        'A great story is useless if your team cannot execute it weekly. We translate the narrative into modular messaging frameworks, Content OS production pipelines, and visual design rules that compound over time.',
      deliverables: ['Verbal identity guide', 'Content OS engine', 'Modular script templates']
    },
    {
      num: '03',
      title: 'Make It Travel',
      icon: Radio,
      thesis: 'Propel the narrative through cinema, original IP, and high-retention distribution.',
      description:
        'We direct cinema-grade brand films, original episodic series, and editorial essays that treat audiences with intellectual respect—ensuring your story earns attention rather than buying it.',
      deliverables: ['Cinematic brand films', 'Episodic series', 'High-retention social assets']
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-paper relative overflow-hidden">
      <div className="absolute inset-0 jali-bg opacity-15 pointer-events-none" />

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-3">
            <span className="text-sandstone font-bold">04 / THE METHOD</span>
            <span>&middot;</span>
            <span>STRATEGIC FRAMEWORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-tight">
            Find the story.<br />
            Build the system.<br />
            <span className="text-sandstone">Make it travel.</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-4 leading-relaxed">
            The deliberate progression from ambiguous ideas to defensible market positioning and enduring cultural artifacts.
          </p>
        </div>

        {/* 3 Step Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-cream p-8 sm:p-10 border border-dark/15 rounded-[2px] flex flex-col justify-between relative shadow-sm hover:border-dark/35 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark/10">
                    <span className="font-mono text-xs font-bold text-sandstone">
                      PHASE {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-dark/60 group-hover:text-sandstone transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-display text-dark mb-2">
                    {step.title}
                  </h3>

                  <p className="font-serif italic text-sm text-sandstone-warm mb-4">
                    {step.thesis}
                  </p>

                  <p className="text-xs sm:text-sm text-dark/75 leading-relaxed mb-6 font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-dark/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold block mb-2">
                    Key Outputs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-cream-dark/50 text-dark/80 border border-dark/10 rounded-[2px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
