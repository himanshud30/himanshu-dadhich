import type { Metadata } from 'next';
import { Bebas_Neue, Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GrainOverlay from '@/components/common/GrainOverlay';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Himanshu Dadhich — Creative Strategist, Filmmaker & Founder',
    template: '%s | Himanshu Dadhich',
  },
  description:
    'Permanent digital home of Himanshu Dadhich. Creative strategist, filmmaker, and founder of TLR Studio. "Jodhpur is the base. The world is the field. The work is the bridge."',
  keywords: [
    'Himanshu Dadhich',
    'TLR Studio',
    'Creative Strategist',
    'Filmmaker',
    'Jodhpur',
    'Brand Storytelling',
    'Content Strategy',
    'Sundarkand Film',
  ],
  authors: [{ name: 'Himanshu Dadhich' }],
  creator: 'Himanshu Dadhich',
  metadataBase: new URL('https://himanshudadhich.com'),
  openGraph: {
    title: 'Himanshu Dadhich — Creative Strategist & Filmmaker',
    description:
      'Jodhpur is the base. The world is the field. The work is the bridge.',
    url: 'https://himanshudadhich.com',
    siteName: 'Himanshu Dadhich',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${lora.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream text-dark antialiased selection:bg-sandstone/30 flex flex-col font-body">
        <GrainOverlay />
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
