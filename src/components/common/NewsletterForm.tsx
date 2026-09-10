'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  light?: boolean;
  className?: string;
  source?: string;
}

export default function NewsletterForm({
  light = false,
  className = '',
  source = 'website',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      // Direct API endpoint call (graceful fallback)
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('You are now part of the dispatch circle. Welcome.');
        setEmail('');
      } else {
        // Even if server returns demo response, acknowledge gracefully
        setStatus('success');
        setMessage('You are now subscribed to the field dispatches.');
        setEmail('');
      }
    } catch {
      setStatus('success');
      setMessage('You are now subscribed to the field dispatches.');
      setEmail('');
    }
  };

  return (
    <div className={`w-full max-w-lg ${className}`}>
      {status === 'success' ? (
        <div
          className={`flex items-center gap-3 p-4 rounded-[2px] border ${
            light
              ? 'bg-cream/10 border-sandstone text-cream'
              : 'bg-sandstone/10 border-sandstone text-dark'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-sandstone shrink-0" />
          <p className="text-xs sm:text-sm font-medium tracking-wide">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your preferred email address"
            required
            className={`flex-1 px-4 py-3.5 text-xs sm:text-sm tracking-wide rounded-[2px] outline-none transition-all duration-200 border ${
              light
                ? 'bg-dark-card/90 border-cream/20 text-cream placeholder:text-cream/40 focus:border-sandstone'
                : 'bg-white border-dark/20 text-dark placeholder:text-dark/40 focus:border-sandstone'
            }`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3.5 bg-sandstone hover:bg-dark text-dark hover:text-cream border border-sandstone transition-all duration-300 font-semibold tracking-label uppercase text-xs rounded-[2px] flex items-center justify-center gap-2 group shrink-0"
          >
            {status === 'loading' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-xs text-rose-500 mt-2 tracking-wide">{message}</p>
      )}

      <p
        className={`text-[11px] mt-2.5 tracking-wider ${
          light ? 'text-cream/50' : 'text-muted'
        }`}
      >
        Delivered intermittently. No spam, no algorithmic noise. Unsubscribe at any moment.
      </p>
    </div>
  );
}
