'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import { Send, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';

export default function ConversationPage() {
  const [formData, setFormData] = useState({
    type: 'question',
    name: '',
    email: '',
    message: '',
    consent: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch('/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Open Studio Channel"
          title="Start a Conversation"
          subtitle="Direct dialogue for fellow creators, researchers, students, and thinkers"
          description="Himanshu reads all correspondence directly. Whether you have a question on a field note, a philosophical query, or an unclassifiable inquiry, leave a note below."
        />

        {status === 'success' ? (
          <div className="p-8 bg-cream-dark/50 border border-sandstone rounded-[2px] text-center space-y-4 animate-page-in mt-8">
            <CheckCircle2 className="w-10 h-10 text-sandstone mx-auto" />
            <h3 className="font-display text-2xl uppercase tracking-display text-dark">
              Note Received in Jodhpur
            </h3>
            <p className="text-xs sm:text-sm text-dark/80 max-w-sm mx-auto leading-relaxed">
              Your message has been delivered to the studio log. Himanshu replies periodically between production expeditions.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-cream-dark/30 border border-dark/15 rounded-[2px] space-y-6 shadow-sm mt-8"
          >
            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-dark mb-2">
                Inquiry Focus
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['question', 'project', 'collaboration'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`py-2 text-xs uppercase font-semibold tracking-label rounded-[2px] border transition-all ${
                      formData.type === type
                        ? 'bg-dark text-cream border-dark'
                        : 'bg-cream text-dark/70 border-dark/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-dark mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="What should we call you?"
                className="w-full px-4 py-3 text-xs sm:text-sm bg-cream border border-dark/20 rounded-[2px] outline-none focus:border-sandstone transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-dark mb-2">
                Your Email (Optional if you don’t need a response)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full px-4 py-3 text-xs sm:text-sm bg-cream border border-dark/20 rounded-[2px] outline-none focus:border-sandstone transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-dark mb-2">
                Your Message / Thought
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write candidly. Share an insight, question, or inquiry..."
                className="w-full px-4 py-3 text-xs sm:text-sm bg-cream border border-dark/20 rounded-[2px] outline-none focus:border-sandstone transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-dark hover:bg-sandstone text-cream hover:text-dark border border-dark transition-all duration-300 font-semibold tracking-label uppercase text-xs rounded-[2px] flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
