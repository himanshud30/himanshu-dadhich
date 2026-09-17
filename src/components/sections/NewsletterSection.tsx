'use client';

import React, { useState } from 'react';
import { Send, TrendingUp, Building2, Users, Tv } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const topics = [
    { icon: Building2, label: 'Brand Strategy' },
    { icon: Tv, label: 'Content Industry' },
    { icon: Users, label: 'Creator Economy' },
    { icon: TrendingUp, label: 'Market Trends' },
  ];

  return (
    <section id="newsletter" className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-sandstone uppercase tracking-wider">
            Newsletter
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display uppercase text-dark leading-tight">
            The Indian Content<br />Industry Report.
          </h2>

          <p className="text-sm text-dark/70 leading-relaxed max-w-lg mx-auto">
            Every edition, I break down how the Indian content industry is evolving — 
            across brands, production companies, creator businesses, and emerging verticals.
            Honest analysis. No hype.
          </p>

          {/* Topic pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <span
                  key={topic.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream border border-dark/10 rounded-[2px] text-[11px] font-mono uppercase tracking-wider text-dark/70"
                >
                  <Icon className="w-3 h-3 text-sandstone" />
                  {topic.label}
                </span>
              );
            })}
          </div>

          {/* Subscribe form */}
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-cream border border-dark/20 text-dark text-sm placeholder:text-dark/40 rounded-[2px] focus:outline-none focus:border-sandstone transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center justify-center gap-2 group"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <p className="text-[11px] text-dark/50 font-mono">
            Free · Bi-weekly · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
