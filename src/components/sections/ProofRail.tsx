import React from 'react';

export default function ProofRail() {
  const stats = [
    { value: '7+', label: 'Years in the Industry' },
    { value: 'Jodhpur', label: 'Based in Rajasthan' },
    { value: 'TLR', label: 'Studio & Creative Lab' },
  ];

  return (
    <section className="py-8 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-start gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="font-display text-2xl sm:text-3xl uppercase tracking-display text-dark">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
