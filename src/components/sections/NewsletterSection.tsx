'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight, CheckCircle2, BookOpen, Sparkles, MapPin, Calendar, Clock, X } from 'lucide-react';
import NewsletterForm from '@/components/common/NewsletterForm';
import { newsletterIssues } from '@/data/newsletter';
import { fieldNotes } from '@/data/field-notes';
import { ideas } from '@/data/ideas';

export default function NewsletterSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'strategy' | 'dispatches' | 'issues'>('all');
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    category: string;
    date: string;
    content: string;
    location?: string;
    readTime?: string;
  } | null>(null);

  // Combine Field Notes, Ideas, and Newsletter Issues into a unified blog feed
  const combinedPosts = [
    ...newsletterIssues.map(issue => ({
      type: 'issues' as const,
      slug: issue.slug,
      title: issue.title,
      category: 'Newsletter Issue #' + issue.number,
      excerpt: issue.excerpt,
      date: issue.publishedAt,
      readTime: '6 min read',
      tags: issue.territories,
      fullText: issue.excerpt + ' In this issue of Himanshu Dadhich’s dispatch, we examine how senior leadership teams build long-term narrative moats.'
    })),
    ...fieldNotes.map(note => ({
      type: 'dispatches' as const,
      slug: note.slug,
      title: note.title,
      category: 'Field Dispatch (' + note.city + ')',
      excerpt: note.observation,
      date: note.date,
      location: note.city,
      readTime: '4 min read',
      tags: ['Field Note', note.city],
      fullText: `${note.observation}\n\nPeople Met: ${note.peopleMet}\n\nCultural Detail: ${note.culturalDetail}\n\nStrategic Shift: ${note.whatChanged}`
    })),
    ...ideas.map(idea => ({
      type: 'strategy' as const,
      slug: idea.slug,
      title: idea.title,
      category: idea.category,
      excerpt: idea.description,
      date: idea.updatedAt,
      readTime: '5 min read',
      tags: idea.tags,
      fullText: `${idea.description}\n\nStatus: ${idea.status}\nCategory: ${idea.category}`
    }))
  ];

  const filteredPosts = combinedPosts.filter(p => {
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  return (
    <section id="newsletter" className="py-20 md:py-28 border-b border-dark/15 bg-paper">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Top Header & Newsletter Subscription Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-dark/15 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted">
              <span className="text-sandstone font-bold">BLOG & DISPATCHES</span>
              <span>&middot;</span>
              <span>HIMANSHU DADHICH</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              Ideas, Field Notes & Dispatches.
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-dark/85 leading-relaxed">
              My personal newsletter and living notebook on creative strategy, cinema, and building a globally distributed studio from Jodhpur.
            </p>

            <p className="text-xs sm:text-sm text-dark/75 font-sans leading-relaxed">
              Twice a month, I share field-tested essays, cultural observations, and narrative systems. No promotional clutter—only deep thinking.
            </p>

            <div className="pt-2 max-w-md">
              <NewsletterForm />
            </div>

            <div className="flex items-center gap-6 pt-2 text-[11px] text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sandstone" />
                Read by 2,400+ founders & creators
              </span>
              <span>&middot;</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream p-8 sm:p-10 border border-dark/15 rounded-[2px] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-sandstone font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Personal Editorial Statement</span>
            </div>

            <p className="font-serif italic text-base text-dark/85 leading-relaxed">
              “Ideas are not abstract academic trophies. They are instruments for living cleanly and creating work that outlasts noise.”
            </p>

            <div className="pt-4 border-t border-dark/10 flex items-center justify-between text-xs text-muted font-mono">
              <span>HIMANSHU DADHICH</span>
              <span>JODHPUR STUDIO</span>
            </div>
          </div>
        </div>

        {/* Blog Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Dispatches & Essays' },
              { id: 'strategy', label: 'Strategy & Ideas' },
              { id: 'dispatches', label: 'Field Notes (Jodhpur & Beyond)' },
              { id: 'issues', label: 'Newsletter Issues' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-dark text-cream font-bold shadow'
                    : 'bg-cream border border-dark/15 text-dark/75 hover:bg-cream-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-muted">
            Showing {filteredPosts.length} Entries
          </span>
        </div>

        {/* Combined Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-cream border border-dark/15 rounded-[2px] p-6 sm:p-8 flex flex-col justify-between hover:border-dark/35 transition-all shadow-sm hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-dark/10 text-xs font-mono">
                  <span className="text-sandstone font-bold uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span className="text-muted text-[10px]">
                    {post.date}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-display text-dark group-hover:text-sandstone transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-dark/75 font-serif italic line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags?.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-paper text-dark/70 border border-dark/10 rounded-[2px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted flex items-center gap-1">
                  <Clock className="w-3 h-3 text-sandstone" />
                  {post.readTime}
                </span>

                <button
                  onClick={() =>
                    setSelectedArticle({
                      title: post.title,
                      category: post.category,
                      date: post.date,
                      content: post.fullText,
                      location: 'location' in post ? (post as any).location : undefined,
                      readTime: post.readTime
                    })
                  }
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-dark hover:text-sandstone transition-colors cursor-pointer"
                >
                  <span>Read Post</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Drawer / Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-cream border border-dark/20 rounded-[2px] p-6 sm:p-10 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-dark/10 text-dark transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="border-b border-dark/10 pb-4">
              <span className="text-xs font-mono text-sandstone font-bold uppercase tracking-widest block mb-1">
                {selectedArticle.category} &middot; {selectedArticle.date}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-display text-dark">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none text-sm sm:text-base text-dark/85 font-serif leading-relaxed whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="pt-6 border-t border-dark/10 flex items-center justify-between text-xs font-mono text-muted">
              <span>HIMANSHU DADHICH DISPATCH</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-dark font-bold hover:text-sandstone cursor-pointer"
              >
                Close Article &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
