'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Sparkles, Shield, Heart, Volume2, Film } from 'lucide-react';
import { projects } from '@/data/projects';
import PullQuote from '@/components/common/PullQuote';
import { VideoPlayerModal } from '@/components/common/VideoPlayerModal';

export default function SundarkandPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sundarkand = projects[0];

  const chapters = [
    { num: '01', title: 'The Call', verses: '1–20', desc: 'Jambavan reminds Hanuman of his divine powers. The moment of self-awakening.' },
    { num: '02', title: 'The Leap', verses: '21–40', desc: 'Hanuman takes the mighty leap across the ocean. Surasa and Simhika intervene.' },
    { num: '03', title: 'Arrival in Lanka', verses: '41–55', desc: 'Hanuman enters Lanka golden gates at night. Encounters Lankini.' },
    { num: '04', title: 'The Search', verses: '56–80', desc: 'Searching through Lanka palaces and gardens for Sita.' },
    { num: '05', title: 'Ashok Vatika', verses: '81–115', desc: 'Hanuman finds Sita in Ashok Vatika, surrounded by Rakshasis.' },
    { num: '06', title: 'Lanka Dahan', verses: '261–285', desc: 'Hanuman tail is set ablaze. He burns Lanka to the ground.' },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-amber-400/80 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>

        {/* Video Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-400/20 bg-neutral-900 shadow-2xl mb-16">
          {/* Background Video */}
          <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center">
            <video
              src="/sample.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Play Button Overlay */}
            <div className="relative z-10 text-center p-8">
              <span className="text-4xl mb-4 block text-amber-400/60 font-serif">ॐ</span>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 block mb-3">
                A TLR INTERNAL DEVOTIONAL CINEMA FILM
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-100 mb-4 tracking-tight">
                Sundarkand
              </h1>
              <p className="font-serif italic text-lg sm:text-2xl text-amber-300 max-w-2xl mx-auto mb-8">
                An AI Devotional Film & Living Manuscript
              </p>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium text-sm hover:bg-amber-300 transition-all transform hover:scale-105 shadow-xl cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Watch Devotional Trailer (4K)</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-950/90 border-t border-amber-400/10 text-center font-mono">
            <div>
              <span className="text-2xl font-bold text-amber-400">350</span>
              <span className="text-[10px] uppercase text-neutral-400 block mt-0.5">Sacred Verses</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-400">18</span>
              <span className="text-[10px] uppercase text-neutral-400 block mt-0.5">Chapters</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-400">30</span>
              <span className="text-[10px] uppercase text-neutral-400 block mt-0.5">Characters</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-400">26</span>
              <span className="text-[10px] uppercase text-neutral-400 block mt-0.5">Environments</span>
            </div>
          </div>
        </div>

        {/* Quote Block */}
        <div className="max-w-4xl mx-auto text-center my-16 border-y border-amber-400/20 py-12">
          <blockquote className="font-serif text-2xl sm:text-3xl italic text-neutral-200 leading-relaxed">
            “This is more than a film. It is a digital devotional archive — a living manuscript of Sundarkand in cinematic form.”
          </blockquote>
          <p className="mt-4 text-xs font-mono text-amber-400/70 tracking-widest uppercase">
            Built with reverence. Generated with intention.
          </p>
        </div>

        {/* Verses Preview Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-400/30 px-3 py-1 rounded bg-amber-400/5">
              अध्याय
            </span>
            <h2 className="font-serif text-3xl font-bold text-neutral-100">
              The Verses & Chapters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((c) => (
              <div key={c.num} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-amber-400">
                  <span>CHAPTER {c.num}</span>
                  <span className="text-neutral-500">VERSES {c.verses}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-100 mb-2">{c.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Production Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-serif text-3xl font-bold text-neutral-100 mb-4">
                The Foundational Vision
              </h2>
              <p>{sundarkand.vision}</p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <h3 className="font-serif text-2xl font-bold text-neutral-100 mb-4">
                Character & Prompt Architecture
              </h3>
              <ul className="space-y-3">
                {sundarkand.characters.map((char, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-amber-400/30 space-y-6">
              <div className="flex items-center gap-2 text-amber-400">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-xs font-mono uppercase tracking-widest">Patron Circle</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-100">
                Support the Final AI Cinema Master
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                By joining as an independent patron, you directly support acoustic Indian classical scoring and visual rendering.
              </p>
              <Link
                href="/supporters"
                className="w-full text-center px-6 py-3.5 rounded-xl bg-amber-400 text-neutral-950 font-medium text-xs uppercase tracking-wider block hover:bg-amber-300 transition-colors"
              >
                Join Patron Circle
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="/sample.mp4"
        title="Sundarkand: The Inner Odyssey (AI Devotional Teaser)"
        category="TLR DEVOTIONAL CINEMA"
      />
    </div>
  );
}
