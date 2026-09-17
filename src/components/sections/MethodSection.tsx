import React from 'react';
import { Search, Layers, Radio } from 'lucide-react';

export default function MethodSection() {
  const steps = [
    {
      num: '01',
      title: 'Find the Story',
      icon: Search,
      description: 'Every brand has a core truth buried under noise. I help you find it through honest diagnosis and clear positioning.',
    },
    {
      num: '02',
      title: 'Build the System',
      icon: Layers,
      description: 'A great story needs a repeatable engine. I turn it into content frameworks, templates, and workflows your team can run with.',
    },
    {
      num: '03',
      title: 'Make It Travel',
      icon: Radio,
      description: 'From brand films to social content to editorial essays — I help your narrative reach the right people in the right format.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display uppercase text-dark leading-tight">
            How I work.
          </h2>
          <p className="text-sm text-dark/70 mt-3 leading-relaxed">
            Three steps. Simple process. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-cream p-8 border border-dark/15 rounded-[2px] hover:border-dark/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark/10">
                  <span className="font-mono text-xs font-bold text-sandstone">
                    {step.num}
                  </span>
                  <Icon className="w-4 h-4 text-dark/40 group-hover:text-sandstone transition-colors" />
                </div>

                <h3 className="font-display text-2xl uppercase tracking-display text-dark mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
