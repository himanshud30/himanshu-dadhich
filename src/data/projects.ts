import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'sundarkand',
    title: 'Sundarkand: The Inner Odyssey',
    tagline: 'A contemporary cinematic exploration of inner courage, devotion, and psychological triumph.',
    description: 'An independent cinematic undertaking interpreting the sacred poetic text of the Sundarkand through visual poetry, experimental soundscapes, and raw Rajasthani soil. Built with community backing, transparent budgeting, and unwavering artistic integrity.',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    vision: 'Sundarkand is not just an ancient chapter in the Ramayana; it is an archetypal manual for conquering self-doubt. When Hanuman is reminded of his dormant powers at the edge of an impossible ocean, he chooses faith over calculation. Our vision is to translate this timeless emotional threshold into a visceral, cinematic meditation that speaks directly to modern existential anxiety.',
    culturalIntention: 'Rooted deeply in the oral traditions, music, and sand-swept architecture of Western Rajasthan, Sundarkand honors sacred vernacular history without freezing it in archaic nostalgia. We treat the text as living psychology.',
    structure: 'A seven-chapter visual album accompanied by a limited-edition art book, immersive audio exhibition, and traveling community screenings across heritage centers in India and global diasporic hubs.',
    productionProcess: 'Captured over 18 months across the Thar Desert, ancestral Havelis of Jodhpur, and sacred stepwells. Featuring non-actors, classical Dhrupad vocalists, and sound design created entirely from natural desert acoustics and bell metals.',
    characters: [
      'The Seeker / Hanuman (Archetype of Dormant Potential)',
      'The Ocean (The Chasm of Doubt & Overwhelm)',
      'The Mountain Mainak (The Temptation of Comfort)',
      'Surasa & Simhika (The Inner Demons of Ego & Perception)',
      'Lanka / The Fortress (The Citadel of Illusion)'
    ],
    currentProgress: 68,
    timeline: [
      {
        date: 'Oct 2024',
        title: 'Scriptural Research & Textual Archaeology',
        description: 'Collaborative analysis with traditional Vedic scholars and literary translators to uncover subtextual nuances.',
        completed: true
      },
      {
        date: 'Jan 2025',
        title: 'Acoustic Field Recording & Dhrupad Sessions',
        description: 'Recording 40 hours of ancient vocal chants and desert ambient soundscapes in Mehrangarh and Osian.',
        completed: true
      },
      {
        date: 'May 2025',
        title: 'Principal Visual Photography — Part 1',
        description: 'High-contrast large-format cinematography in the salt flats of Sambhar and dunes of Khuri.',
        completed: true
      },
      {
        date: 'Sep 2025',
        title: 'Community Backer Campaign & Open Studio',
        description: 'Engaging patrons and cultural preservationists to support post-production and scoring.',
        completed: true
      },
      {
        date: 'Jan 2026',
        title: 'Principal Visual Photography — Part 2',
        description: 'Interiors within 400-year-old Jodhpur Havelis and nocturnal water bodies.',
        completed: true
      },
      {
        date: 'Late 2026',
        title: 'Final Post-Production, Master Sound & Color',
        description: 'Assembly edit, Dolby Atmos sound mastering, and original archival grading.',
        completed: false
      },
      {
        date: 'Early 2027',
        title: 'Premiere Exhibition & World Tour',
        description: 'Physical art-book release, community screenings in Jodhpur, Delhi, Mumbai, London, and Tokyo.',
        completed: false
      }
    ],
    budgetTransparency: 'Total estimated budget: ₹24,00,000 (~$30,000 USD). 42% dedicated to on-ground production and crew remuneration; 28% to music composition, live orchestra and sound engineering; 18% to archival printing and exhibition fabrication; 12% to community screening logistics.',
    team: [
      {
        name: 'Himanshu Dadhich',
        role: 'Director, Writer & Creative Producer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Pt. Alok Sharma',
        role: 'Dhrupad Vocalist & Music Director'
      },
      {
        name: 'Karan Rathore',
        role: 'Cinematographer & Lighting Designer'
      },
      {
        name: 'Ananya Mehra',
        role: 'Archival Research & Cultural Advisor'
      }
    ],
    updates: [
      {
        date: 'August 2026',
        title: 'Sound Design Update: The Sound of Salt and Wind',
        content: 'We finished the preliminary Atmos mix for Chapter 3. The acoustics of the Sambhar salt lake during pre-dawn stillness create a surreal sonic baseline for Hanuman’s flight across the void.'
      },
      {
        date: 'June 2026',
        title: 'Completed Photography in Old Jodhpur',
        content: 'Twelve intense nights shooting within the blue maze of Navchokiya. The blue-wash walls under sodium lamps provided an unearthly quality that CGI can never replicate.'
      },
      {
        date: 'March 2026',
        title: 'Welcoming 80+ New Patrons',
        content: 'Our patron circle has crossed the 60% funding milestone. We are humbled by the support from creators, thinkers, and cultural patrons across 14 countries.'
      }
    ],
    faqs: [
      {
        question: 'Why fund Sundarkand independently rather than through traditional studios?',
        answer: 'Traditional studio models demand compromises on tone, length, pacing, and commercial formulas. By taking an independent, patron-backed approach, we protect the contemplative sanctity of the text and maintain complete creative autonomy.'
      },
      {
        question: 'How can I support this project as an individual or patron?',
        answer: 'You can join the patron circle at multiple tiers (Seed, Sapling, Tree, Forest). Patrons receive private preview screenings, hand-numbered prints, project journals, and credits in the final film.'
      },
      {
        question: 'Will there be a digital release?',
        answer: 'Yes. Following the traveling exhibition and physical screenings, the complete visual album and interactive audio experience will be accessible worldwide via this digital platform.'
      }
    ],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
        alt: 'Mehrangarh Fort silhouette at dusk',
        caption: 'The towering fortress of Jodhpur framing our inquiry into stone and sovereignty.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
        alt: 'Blue alleyways of Navchokiya',
        caption: 'Old city passages bathed in indigo lime wash and twilight.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
        alt: 'Thar Desert horizon',
        caption: 'The vast expanse of the Thar — standing in for the boundless ocean.'
      }
    ],
    featured: true
  }
];
