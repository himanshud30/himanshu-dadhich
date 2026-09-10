import { Series, Episode } from '@/types';

export const series: Series[] = [
  {
    slug: 'how-we-learn',
    title: 'How We Learn',
    manifesto: 'Learning is not a phase you complete. It is the way you move through the world. This series explores the systems, habits, and accidents that teach us — from classrooms to conversations, from failure to observation. How We Learn is about noticing the education happening outside the curriculum.',
    description: 'A video series exploring unconventional learning — from artisan workshops to AI experiments, from Jodhpur streets to global classrooms.',
    thumbnail: '/images/series/how-we-learn.jpg',
    episodeCount: 6,
    episodes: [],
    status: 'active',
  },
  {
    slug: 'how-we-live',
    title: 'How We Live',
    manifesto: 'The choices we make about space, routine, food, and movement shape everything else. This series documents the systems of daily life — how people organise their homes, their mornings, their cities. How We Live is not aspirational content. It is observational. The goal is not to prescribe a lifestyle but to notice what a life looks like when lived with intention.',
    description: 'Documenting everyday systems of living — from Jodhpur havelis to co-working nomads, from morning rituals to meal planning.',
    thumbnail: '/images/series/how-we-live.jpg',
    episodeCount: 4,
    episodes: [],
    status: 'active',
  },
  {
    slug: 'how-we-work',
    title: 'How We Work',
    manifesto: 'Work is changing faster than our language for it. Freelancer, founder, creator, strategist — the labels keep shifting but the fundamental questions remain. How do you build something sustainable? How do you stay creative under pressure? How do you know when to pivot? This series interviews people who are figuring it out in real time.',
    description: 'Conversations with builders, makers, and strategists about the reality of creative work — the systems, the doubts, the decisions.',
    thumbnail: '/images/series/how-we-work.jpg',
    episodeCount: 5,
    episodes: [],
    status: 'active',
  },
  {
    slug: 'creative-strategy',
    title: 'Creative Strategy',
    manifesto: 'Strategy without creativity is a spreadsheet. Creativity without strategy is decoration. This series sits in the overlap — exploring how the best creative work begins with clear thinking and how the best strategies find their power in unexpected creative expression.',
    description: 'Case-study breakdowns and thinking frameworks for creative strategists, brand builders, and content leaders.',
    thumbnail: '/images/series/creative-strategy.jpg',
    episodeCount: 3,
    episodes: [],
    status: 'active',
  },
];

export const episodes: Episode[] = [
  {
    slug: 'the-artisan-algorithm',
    seriesSlug: 'how-we-learn',
    number: 1,
    title: 'The Artisan Algorithm',
    thumbnail: '/images/episodes/artisan-algorithm.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    transcript: 'When I first walked into a block-printing workshop in Jodhpur, I expected to see artists at work. What I found instead were systems. Every master printer follows a sequence refined over generations — a pattern of learning that looks nothing like a classroom but produces mastery that universities cannot...',
    keyIdea: 'Artisan knowledge is an algorithm — a repeatable process refined over centuries that produces consistent excellence without formal instruction.',
    publishedAt: '2024-08-15',
    references: ['Richard Sennett — The Craftsman', 'Matthew Crawford — Shop Class as Soulcraft'],
  },
  {
    slug: 'learning-by-walking',
    seriesSlug: 'how-we-learn',
    number: 2,
    title: 'Learning by Walking',
    thumbnail: '/images/episodes/learning-walking.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    transcript: 'The most important things I learned about Jodhpur, I learned on foot. Not from a textbook or a tourism website, but from the act of walking through the old city without a destination. Walking teaches you to see at a different pace...',
    keyIdea: 'Walking without destination is a form of research. The pace forces you to notice what speed conceals.',
    publishedAt: '2024-09-01',
    references: ['Rebecca Solnit — Wanderlust', 'Teju Cole — Open City'],
  },
  {
    slug: 'the-morning-system',
    seriesSlug: 'how-we-live',
    number: 1,
    title: 'The Morning System',
    thumbnail: '/images/episodes/morning-system.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    transcript: 'I used to think morning routines were a productivity trick. After observing how different cultures begin their day — chai-wallahs in Jodhpur, fishermen in Goa, tech workers in Bangalore — I realised that the morning is actually a daily negotiation between intention and circumstance...',
    keyIdea: 'A morning routine is not a productivity hack. It is a daily negotiation between what you want to do and what the day demands.',
    publishedAt: '2024-07-20',
    references: ['Mason Currey — Daily Rituals', 'Jenny Odell — How to Do Nothing'],
  },
  {
    slug: 'building-in-public',
    seriesSlug: 'how-we-work',
    number: 1,
    title: 'Building in Public Without Performing',
    thumbnail: '/images/episodes/building-public.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    transcript: 'Everyone tells you to build in public. Share your journey. Be transparent. But there is a difference between transparency and performance. I have been running TLR from Jodhpur for years now, and the hardest part isn\'t the work — it\'s deciding what to share and what to protect...',
    keyIdea: 'Building in public is valuable, but only when you can distinguish between transparency and performance.',
    publishedAt: '2024-10-05',
    references: ['Austin Kleon — Show Your Work', 'Seth Godin — The Practice'],
  },
];

export function getSeries(slug: string): Series | undefined {
  const s = series.find((s) => s.slug === slug);
  if (s) {
    s.episodes = episodes.filter((e) => e.seriesSlug === slug);
  }
  return s;
}

export function getEpisode(seriesSlug: string, episodeSlug: string): Episode | undefined {
  return episodes.find((e) => e.seriesSlug === seriesSlug && e.slug === episodeSlug);
}
