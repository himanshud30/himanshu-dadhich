import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function FeaturedProjectSection() {
  const sundarkand = projects[0];

  return (
    <section className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-display uppercase text-dark leading-tight">
            Current Project.
          </h2>
        </div>

        {/* Single compact card */}
        <Link
          href="/projects/sundarkand"
          className="block bg-cream border border-dark/15 rounded-[2px] overflow-hidden hover:border-dark/30 transition-all group"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 relative aspect-video md:aspect-auto md:min-h-[280px] overflow-hidden">
              <img
                src={sundarkand.thumbnail}
                alt={sundarkand.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/30 hidden md:block" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-dark/80 text-cream text-[10px] font-mono uppercase tracking-wider rounded-[2px]">
                Work in Progress &middot; {sundarkand.currentProgress}%
              </div>
            </div>

            <div className="md:col-span-7 p-8 flex flex-col justify-center">
              <span className="text-xs font-mono text-sandstone uppercase tracking-wider mb-2">
                AI Devotional Film &middot; TLR Original
              </span>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark mb-3">
                Sundarkand
              </h3>

              <p className="text-sm text-dark/70 leading-relaxed max-w-lg mb-6">
                A cinematic retelling of the Sundarkand through AI-generated visuals and acoustic Indian classical scoring. An independent cultural project, not a client brief.
              </p>

              <span className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-dark group-hover:text-sandstone transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
