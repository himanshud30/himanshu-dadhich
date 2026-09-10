import React from 'react';
import { MessageSquare, Users2, Search, FileText, CheckSquare2, Hammer } from 'lucide-react';

export default function WorkingProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Share the context',
      desc: 'Submit your brand, project or core question through our structured intake.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'The first conversation',
      desc: 'A focused, complimentary discussion to isolate the actual commercial or narrative problem.',
      icon: Users2
    },
    {
      num: '03',
      title: 'The diagnosis',
      desc: 'Himanshu identifies the root bottleneck: story deficit, narrative fragmentation, or system failure.',
      icon: Search
    },
    {
      num: '04',
      title: 'The direction document',
      desc: 'You receive a concise strategic review outlining where your brand must go and what to leave behind.',
      icon: FileText
    },
    {
      num: '05',
      title: 'Choose the engagement',
      desc: 'Select the optimal model: The Diagnosis, Story System, Content OS, Partnership, or Original Series.',
      icon: CheckSquare2
    },
    {
      num: '06',
      title: 'Build and document',
      desc: 'We execute the cinema, systems, and creative work while systematically capturing the institutional learning.',
      icon: Hammer
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
            <span className="text-sandstone font-bold">06 / ENGAGEMENT ARCHITECTURE</span>
            <span>&middot;</span>
            <span>HOW WORKING WITH ME WORKS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
            How Working With Me Works
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-3 leading-relaxed">
            No surprise invoices. No vague retainers. A transparent 6-step path that eliminates uncertainty before you commit.
          </p>
        </div>

        {/* 6 Step Interactive Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 bg-cream border border-dark/15 rounded-[2px] shadow-sm hover:border-dark/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-dark/10 mb-4">
                    <span className="font-mono text-xs font-bold text-sandstone">
                      STEP {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-dark/60" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-display text-dark mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark/75 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-dark/10 flex items-center justify-between text-[10px] font-mono text-muted">
                  <span>PHASE 0{idx < 3 ? '1 · INTAKE' : '2 · EXECUTION'}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
