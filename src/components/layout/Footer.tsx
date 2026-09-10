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
                14 / FOOTPRINT &middot; JODHPUR, INDIA — WORKING WORLDWIDE
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase leading-none text-cream">
              Jodhpur is the base.<br />
              The world is the field.<br />
              <span className="text-sandstone">The work is the bridge.</span>
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-cream/70 max-w-xl leading-relaxed">
              Himanshu Dadhich is a creative strategist, filmmaker, storyteller and founder building TLR—a globally distributed creative strategy and cinema studio from Jodhpur, Rajasthan.
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
              Twice a month, an unsparing essay on creative strategy, cinema, and building a globally distributed studio from Jodhpur.
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
                  Signature Engagements
                </Link>
              </li>
              <li>
                <Link href="/projects/sundarkand" className="hover:text-sandstone transition-colors">
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
              <p className="font-semibold text-cream">JODHPUR, INDIA — WORKING WORLDWIDE</p>
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
                  Share Your Project <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/conversation" className="hover:text-sandstone transition-colors flex items-center gap-1.5">
                  Ask Himanshu a Question <ArrowUpRight className="w-3 h-3" />
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

        {/* Bottom Bar with Requested Location-Status Indicator */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream/60">
          <div className="flex flex-wrap items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} Himanshu Dadhich &middot; TLR Creative Strategy Studio.
            </p>
            <span className="hidden sm:inline">&middot;</span>
            <span className="font-mono text-sandstone text-[10px]">
              JODHPUR, INDIA — WORKING WORLDWIDE
            </span>
          </div>

          {/* Location-Status Indicator as specified */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[10px] tracking-wider uppercase">
            <span className="text-sandstone">JODHPUR / BASE</span>
            <span className="text-cream/40">&middot;</span>
            <span className="text-cream/80">WORLD / FIELD</span>
            <span className="text-cream/40">&middot;</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CURRENTLY / ONLINE
            </span>

            {/* Back to Top */}
            <a
              href="#"
              className="inline-flex items-center gap-2 uppercase tracking-wider text-[10px] text-cream/70 hover:text-sandstone transition-colors group ml-2"
            >
              <span>Top</span>
              <span className="w-5 h-5 rounded-full bg-cream/10 flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                &uarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
