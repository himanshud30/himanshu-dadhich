import React from 'react';
import { Award, Compass, ShieldCheck, Film } from 'lucide-react';

export default function ImpactMetrics() {
  const metrics = [
    {
      num: '87+',
      label: 'Narrative Systems',
      desc: 'Content engines, editorial blueprints & brand playbooks built',
    },
    {
      num: '10+',
      label: 'Global Enterprises',
      desc: 'High-growth tech, luxury hospitality & cultural institutions',
    },
    {
      num: '01',
      label: 'Sacred Cultural Epic',
      desc: 'Sundarkand: 35mm visual album, patron-funded from Jodhpur',
    },
    {
      num: '06yr',
      label: 'Independent Practice',
      desc: 'Refusing agency conglomerates to protect direct craft & vision',
    },
  ];

  return (
    <div className="border-b border-dark/15 bg-cream-dark/30 py-16">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-cream border border-dark/10 rounded-[2px] shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="font-mono text-[10px] text-sandstone uppercase tracking-wider block">
                  [{String(idx + 1).padStart(2, '0')} &middot; METRIC]
                </span>
                <span className="font-display text-4xl sm:text-5xl text-dark tracking-display leading-none mt-1 block">
                  {m.num}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-dark">
                  {m.label}
                </h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
