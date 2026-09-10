import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Original Projects & Cultural Works',
  description: 'Independent films, cultural preservation initiatives, and original intellectual properties developed by Himanshu Dadhich.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Independent Intellectual Property"
          title="Original Cultural Projects"
          subtitle="Films, physical archives, and community-patroned cultural works"
          description="Independent explorations developed with uncompromising creative freedom and transparent patron backing."
        />

        <div className="grid grid-cols-1 gap-12 mt-12">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-cream-dark/40 border border-dark/15 rounded-[2px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-dark">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-dark/80 text-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                  Progress: {project.currentProgress}%
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block mb-1">
                    Featured Cultural IP
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark">
                    {project.title}
                  </h2>
                  <p className="font-serif italic text-sm sm:text-base text-dark/80 mt-2">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-6 py-3.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
                  >
                    <span>Inspect Production & Vision</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/supporters"
                    className="px-6 py-3.5 border border-dark/30 hover:border-dark text-dark hover:bg-cream transition-all duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] flex items-center gap-2"
                  >
                    <Heart className="w-3.5 h-3.5 text-rust fill-rust/20" />
                    <span>Support Project</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
