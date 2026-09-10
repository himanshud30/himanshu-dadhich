import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E7',
          dark: '#E8D8BC',
        },
        sandstone: {
          DEFAULT: '#C79368',
          light: '#E8D8BC',
          warm: '#D4A574',
        },
        indigo: {
          DEFAULT: '#24345B',
        },
        rust: {
          DEFAULT: '#A84F2A',
        },
        dark: {
          DEFAULT: '#111111',
          deep: '#0D0B09',
          warm: '#1A1411',
          card: '#1A1A1A',
        },
        muted: {
          DEFAULT: '#7A6E62',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', '"Bebas Neue"', 'sans-serif'],
        body: ['var(--font-inter)', '"Inter"', 'sans-serif'],
        serif: ['var(--font-lora)', '"Lora"', 'serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      letterSpacing: {
        display: '0.02em',
        label: '0.12em',
        wide2: '0.15em',
        wider2: '0.2em',
      },
      lineHeight: {
        tight2: '0.92',
      },
      fontSize: {
        'hero-xl': 'clamp(72px, 12vw, 180px)',
        'hero-lg': 'clamp(56px, 9vw, 140px)',
        'hero-md': 'clamp(56px, 8vw, 120px)',
        'section-xl': 'clamp(56px, 8vw, 110px)',
        'section-lg': 'clamp(48px, 7vw, 100px)',
        'section-md': 'clamp(48px, 6vw, 90px)',
      },
      transitionTimingFunction: {
        'card-reveal': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'page-in': 'pageIn 0.35s forwards',
      },
      keyframes: {
        pageIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'jali': 'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(17,17,17,0.04) 31px 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(17,17,17,0.04) 31px 32px)',
      },
    },
  },
  plugins: [],
};

export default config;
