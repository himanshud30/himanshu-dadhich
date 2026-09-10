import React from 'react';

export default function BrandMarquee() {
  const brands = [
    { name: 'Scaler', logo: '/logos/scaler.png', isImage: true },
    { name: 'CoinDCX', logo: 'https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg', isImage: true },
    { name: 'BlueStone', logo: 'https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/bs-logo-2x.png', isImage: true },
    { name: 'FanCode', logo: 'https://images.fancode.com/skillup-uploads/fc-web-logo/fc_logo_white_bg.svg', isImage: true },
    { name: 'VFS Global', logo: 'https://www.vfsglobal.com/en/assets/images/vfs-global-logo.svg', isImage: true },
    { name: 'Finnable', logo: 'https://ddv6lxx03tvbw.cloudfront.net/Finnable_917f56b5f7.svg', isImage: true },
    { name: 'Rishihood University', logo: '/logos/rishihood.png', isImage: true },
    { name: 'Runtime', logo: '/logos/runtime-brt.png', isImage: true },
    { name: '100GB', logo: '/logos/100gb.png', isImage: true },
  ];

  return (
    <div className="border-y border-dark/15 bg-cream py-10 overflow-hidden relative">
      {/* Editorial Title */}
      <div className="max-w-site mx-auto px-6 lg:px-12 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sandstone animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted">
            Trusted by Visionary Founders & High-Growth Brands
          </span>
        </div>
        <span className="text-[11px] font-serif italic text-dark/60">
          Strategic interventions across technology, luxury, consumer goods & culture
        </span>
      </div>

      {/* Ticker logos */}
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity">
          {brands.map((b, i) => (
            <div
              key={i}
              className="h-10 flex items-center justify-center p-1 grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-300"
              title={b.name}
            >
              <img
                src={b.logo}
                alt={b.name}
                className="max-h-7 max-w-[100px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Disciplinary Black Ribbon Ticker (inspired by Akira / Lequon reference) */}
      <div className="mt-8 bg-dark text-cream py-3 overflow-hidden whitespace-nowrap flex select-none border-y border-dark">
        <div className="flex items-center gap-8 text-[11px] uppercase font-semibold tracking-[0.22em] animate-marquee">
          <span>Creative Strategy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Brand Films</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Content Systems</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>AI Storytelling</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Cultural Archives</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Founder Execution</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Jodhpur Base &middot; Global Field</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Creative Strategy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Brand Films</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Content Systems</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>AI Storytelling</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sandstone" />
          <span>Founder Execution</span>
        </div>
      </div>
    </div>
  );
}
