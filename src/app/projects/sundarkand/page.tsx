import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, Heart, Shield, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import PullQuote from '@/components/common/PullQuote';

export const metadata: Metadata = {
  title: 'Sundarkand: The Inner Odyssey — Film & Archive',
  description: 'An independent cinematic undertaking interpreting the sacred poetic text of the Sundarkand through visual poetry and raw Rajasthani soil.',
};

export default function SundarkandPage() {
  const sundarkand = projects[0];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-muted hover:text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-dark/15 pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-sandstone" />
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-sandstone">
              Independent Cultural Epic & Visual Album
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-display uppercase text-dark leading-tight2">
            Sundarkand:<br />
            <span className="text-sandstone">The Inner Odyssey</span>
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-dark/80 mt-4 max-w-4xl leading-snug">
            “{sundarkand.tagline}”
          </p>

          {/* Progress Tracker Bar */}
          <div className="mt-8 p-6 bg-cream-dark/50 border border-dark/15 rounded-[2px] max-w-2xl">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-dark">
                Production Progress Tracker
              </span>
              <span className="text-xs font-bold text-sandstone">
                {sundarkand.currentProgress}% Ready for Release
              </span>
            </div>
            <div className="w-full bg-dark/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-sandstone h-full"
                style={{ width: `${sundarkand.currentProgress}%` }}
              />
            </div>
            <p className="text-[11px] text-muted mt-2">
              Principal photography & musical compositions wrapped. Final master sound grading underway.
            </p>
          </div>
        </div>

        {/* Hero Stills Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sundarkand.gallery.map((item, idx) => (
            <figure key={idx} className="space-y-2">
              <div className="aspect-[4/3] rounded-[2px] overflow-hidden border border-dark/20 shadow-sm">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <figcaption className="text-xs text-muted font-serif italic">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Vision & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-dark/85 leading-relaxed">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-display uppercase text-dark mb-4">
                The Foundational Vision
              </h2>
              <p>{sundarkand.vision}</p>
            </div>

            <PullQuote
              quote="When Hanuman stands at the edge of the boundless ocean, he is not a mythological superhero; he is every human being paralyzed before the impossible."
              author="Himanshu Dadhich"
              role="Director"
            />

            <div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-display uppercase text-dark mb-4">
                Cultural Intention & Form
              </h2>
              <p>{sundarkand.culturalIntention}</p>
              <p className="mt-4">{sundarkand.structure}</p>
            </div>

            {/* Characters & Archetypes */}
            <div className="p-8 bg-cream-dark/40 border border-dark/15 rounded-[2px]">
              <h3 className="font-display text-2xl tracking-display uppercase text-dark mb-4">
                Archetypes in the Visual Album
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {sundarkand.characters.map((char, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-dark/80">
                    <Sparkles className="w-4 h-4 text-sandstone shrink-0 mt-0.5" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Production Timeline Milestones */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-display uppercase text-dark mb-6">
                Chronological Production Timeline
              </h2>
              <div className="space-y-6 border-l-2 border-sandstone/50 pl-6 ml-2">
                {sundarkand.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 ${
                        item.completed
                          ? 'bg-sandstone border-sandstone'
                          : 'bg-cream border-sandstone'
                      }`}
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-sandstone">
                        {item.date}
                      </span>
                      {item.completed && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-[2px]">
                          Completed
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-base text-dark mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-dark/75 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Transparency */}
            <div className="p-8 bg-dark text-cream rounded-[2px] border border-cream/15 space-y-4">
              <div className="flex items-center gap-2 text-sandstone text-xs uppercase font-semibold tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Radical Fiscal Transparency</span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-display">
                Open Book Budgeting
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                {sundarkand.budgetTransparency}
              </p>
            </div>

            {/* Production Updates */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-display uppercase text-dark mb-6">
                Field Journal Updates
              </h2>
              <div className="space-y-4">
                {sundarkand.updates.map((update, idx) => (
                  <div key={idx} className="p-6 bg-cream border border-dark/15 rounded-[2px] shadow-sm">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-sandstone block mb-1">
                      {update.date}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-dark mb-2">
                      {update.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                      {update.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Patron CTA and Team */}
          <div className="lg:col-span-4 space-y-8">
            {/* Patron Call Box */}
            <div className="p-8 bg-dark text-cream rounded-[2px] border border-sandstone/60 space-y-6">
              <div className="flex items-center gap-2 text-rust">
                <Heart className="w-5 h-5 fill-rust" />
                <span className="text-xs uppercase font-bold tracking-wider text-cream">
                  Join The Patron Circle
                </span>
              </div>

              <h3 className="font-display text-3xl uppercase tracking-display leading-tight2">
                Help Us Complete The Final Grade
              </h3>

              <p className="text-xs text-cream/75 leading-relaxed">
                By becoming an independent patron, you directly protect the creative sanctity of this cultural work. Receive private screenings, fine art prints, and project credits.
              </p>

              <Link
                href="/supporters"
                className="w-full text-center px-6 py-4 bg-sandstone text-dark hover:bg-cream transition-colors duration-300 text-xs font-semibold uppercase tracking-label rounded-[2px] block"
              >
                Explore Patron Tiers & Back
              </Link>
            </div>

            {/* Creative Leadership */}
            <div className="p-6 bg-cream-dark/50 border border-dark/15 rounded-[2px] space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-sandstone block">
                Production Leadership
              </span>
              <ul className="space-y-4">
                {sundarkand.team.map((member, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover grayscale"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-dark text-cream flex items-center justify-center font-display text-sm">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-dark">{member.name}</div>
                      <div className="text-[11px] text-muted">{member.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
