'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavLinks } from '@/data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-dark/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/logo-cropped.png"
            alt="TLR Studio Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl tracking-display uppercase leading-none text-dark group-hover:text-sandstone transition-colors">
              Himanshu Dadhich
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-muted group-hover:text-dark transition-colors flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sandstone animate-pulse" />
              Creative Strategist &middot; TLR Studio &middot; Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-xs uppercase font-semibold tracking-label">
          {mainNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-dark font-bold' : 'text-dark/70 hover:text-dark'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sandstone" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/collaborate"
            className="text-xs uppercase font-semibold tracking-label px-4 py-2.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 rounded-[2px] flex items-center gap-1.5"
          >
            <span>Initiate Dialogue</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="xl:hidden p-2 text-dark hover:text-sandstone transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[73px] bg-dark text-cream z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between animate-page-in">
          <div className="space-y-6">
            <div className="border-b border-cream/15 pb-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-sandstone font-bold">
                Directory & Exploration
              </span>
            </div>
            <nav className="flex flex-col space-y-4">
              {mainNavLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-display text-3xl tracking-display uppercase transition-colors ${
                      isActive ? 'text-sandstone' : 'text-cream/90 hover:text-sandstone'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-cream/15 space-y-4 mt-8">
            <p className="text-xs font-serif italic text-cream/70">
              “Jodhpur is the base. The world is the field. The work is the bridge.”
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/collaborate"
                className="w-full text-center text-xs uppercase font-semibold tracking-label py-3.5 bg-sandstone text-dark rounded-[2px] hover:bg-cream transition-colors"
              >
                Initiate Project Dialogue
              </Link>
              <Link
                href="/conversation"
                className="w-full text-center text-xs uppercase font-semibold tracking-label py-3.5 border border-cream/30 text-cream rounded-[2px] hover:bg-cream/10 transition-colors"
              >
                Open Studio Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
