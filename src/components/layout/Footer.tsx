import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import NewsletterForm from '@/components/common/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-dark text-cream pt-20 pb-12 border-t border-cream/10 relative overflow-hidden">
      {/* Jali Subtle Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none jali-bg" />

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Manifesto Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/15">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sandstone" />
              <span className="text-[10px] tracking-[0.2em] font-semibold text-sandstone uppercase">
                Foundational Thesis
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase leading-none text-cream">
              Jodhpur is the base.<br />
              The world is the field.<br />
              <span className="text-sandstone">The work is the bridge.</span>
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-cream/70 max-w-xl leading-relaxed">
              Himanshu Dadhich is a creative strategist, filmmaker, storyteller and founder building TLR—a globally relevant creative strategy and design studio from Jodhpur, Rajasthan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold tracking-label uppercase">
              <Link
                href="/collaborate"
                className="px-6 py-3.5 bg-sandstone text-dark hover:bg-cream transition-colors duration-300 rounded-[2px] flex items-center gap-2"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 border border-cream/30 text-cream hover:border-sandstone hover:text-sandstone transition-colors duration-300 rounded-[2px]"
              >
                Read Biography
              </Link>
            </div>
          </div>

          {/* Right: Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-center bg-dark-card p-8 md:p-10 rounded-[2px] border border-cream/10">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-sandstone uppercase mb-2">
              Field Dispatches & Cultural Essays
            </span>
            <h3 className="font-display text-2xl sm:text-3xl tracking-display uppercase text-cream mb-3">
              The Dispatch Archive
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 leading-relaxed mb-6">
              Critical inquiries on creative strategy, cinema, vernacular architecture, and cultural preservation. Sent twice monthly from the studio.
            </p>
            <NewsletterForm light={true} />
          </div>
        </div>

        {/* Links Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-cream/15 text-xs">
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sandstone mb-4 text-[11px]">
              Studio & Work
            </h4>
            <ul className="space-y-2.5 text-cream/70">
              <li>
                <Link href="/work" className="hover:text-sandstone transition-colors">
                  Selected Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:text-sandstone transition-colors">
                  Original Series & Films
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sandstone transition-colors">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sandstone transition-colors">
                  Sundarkand Project
                </Link>
              </li>
              <li>
                <Link href="/supporters" className="hover:text-sandstone transition-colors">
                  Patron Circle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sandstone mb-4 text-[11px]">
              Inquiry & Writing
            </h4>
            <ul className="space-y-2.5 text-cream/70">
              <li>
                <Link href="/ideas" className="hover:text-sandstone transition-colors">
                  Living Board of Ideas
                </Link>
              </li>
              <li>
                <Link href="/field-notes" className="hover:text-sandstone transition-colors">
                  Dispatches from the Field
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-sandstone transition-colors">
                  Newsletter Archive
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sandstone transition-colors">
                  Personal Biography & Ethos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sandstone mb-4 text-[11px]">
              TLR Studio Base
            </h4>
            <div className="space-y-2.5 text-cream/70">
              <p>Old City, Navchokiya</p>
              <p>Jodhpur 342001, Rajasthan</p>
              <p>India (IST, UTC+5:30)</p>
              <p className="text-sandstone-light pt-1">
                Studio visits by prior appointment only.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sandstone mb-4 text-[11px]">
              Direct Channels
            </h4>
            <ul className="space-y-2.5 text-cream/70">
              <li>
                <Link href="/collaborate" className="hover:text-sandstone transition-colors flex items-center gap-1.5">
                  Brand Collaboration Form <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/conversation" className="hover:text-sandstone transition-colors flex items-center gap-1.5">
                  Open Studio Message <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sandstone transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sandstone transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sandstone transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Yūgen Style) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream/50">
          <div className="flex items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} Himanshu Dadhich &middot; TLR Creative Strategy Studio.
            </p>
            <span className="hidden sm:inline">&middot;</span>
            <span className="font-mono text-sandstone text-[10px] hidden sm:inline">
              26.2389° N, 73.0243° E
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-cream/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Online &middot; Jodhpur (IST)</span>
            </span>

            {/* Yūgen Back To Top Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 uppercase tracking-wider text-[10px] text-cream/70 hover:text-sandstone transition-colors group"
            >
              <span>Back to Top</span>
              <span className="w-6 h-6 rounded-full bg-cream/10 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                &uarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
