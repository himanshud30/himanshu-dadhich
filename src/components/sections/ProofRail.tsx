'use client';

import React from 'react';

export default function ProofRail() {
  const proofItems = [
    {
      figure: '7+ years',
      label: 'Independent Practice',
      detail: 'Strategy, film direction & creative systems'
    },
    {
      figure: '60K+ views',
      label: 'On TOOLS Reel',
      detail: '1,000+ saves & 1,000+ organic shares'
    },
    {
      figure: 'Strategy & Film',
      label: 'End-to-End Craft',
      detail: 'From diagnosis to cinematic production'
    },
    {
      figure: 'Based in Jodhpur',
      label: 'Global Field',
      detail: 'Serving clients across India, US & Europe'
    }
  ];

  const clientLogos = [
    { name: 'Scaler', src: '/logos/scaler.png' },
    { name: 'FanCode', src: '/logos/fancode.png' },
    { name: 'CoinDCX', src: '/logos/coindcx.png' },
    { name: 'BlueStone', src: '/logos/bluestone.png' },
    { name: 'VFS Global', src: '/logos/vfs.png' },
    { name: 'Setu India', src: '/thumbnails/setuindia.png' }
  ];

  return (
    <section className="border-b border-dark/15 bg-cream">
      {/* Primary Compact Proof Rail */}
      <div className="max-w-site mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-dark/10">
          {proofItems.map((item, idx) => (
            <div
              key={idx}
              className={`${idx > 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''} flex flex-col justify-center`}
            >
              <div className="font-display text-2xl sm:text-3xl text-dark tracking-tight uppercase leading-tight">
                {item.figure}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-sandstone mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-dark/70 mt-0.5 font-serif italic">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Verified Client Trust Strip */}
      <div className="border-t border-dark/10 bg-cream-dark/40 py-4">
        <div className="max-w-site mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted whitespace-nowrap">
            Selected Work & Strategic Trust:
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-10 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all">
            {clientLogos.map((client, i) => (
              <div key={i} className="flex items-center gap-2">
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-5 sm:h-6 w-auto object-contain max-w-[90px] brightness-90 contrast-125"
                  onError={(e) => {
                    // Fallback to text mark if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs font-semibold tracking-wider text-dark/80 uppercase">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
