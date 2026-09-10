import { Supporter } from '@/types';

export const supporters: Supporter[] = [
  {
    id: 'sup-1',
    name: 'Vikramaditya Singhania',
    message: 'To see Sundarkand treated with cinematic gravitas and authentic Rajasthani heritage is a dream. Proud to stand behind this.',
    tier: 'Forest',
    project: 'Sundarkand',
    date: '2025-11-12',
    anonymous: false
  },
  {
    id: 'sup-2',
    name: 'Dr. Meenakshi Sundaram',
    message: 'Preserving our sacred acoustics and classical Dhrupad traditions in a modern medium is profound work.',
    tier: 'Tree',
    project: 'Sundarkand',
    date: '2025-12-04',
    anonymous: false
  },
  {
    id: 'sup-3',
    name: 'A Kabir Panthi Patron',
    message: 'Rooted in truth. Blessings for the entire film crew and musical scholars.',
    tier: 'Tree',
    project: 'Sundarkand',
    date: '2026-01-19',
    anonymous: true
  },
  {
    id: 'sup-4',
    name: 'Rajeev & Sunita Agarwal',
    message: 'For the love of Jodhpur and the living spirit of Hanuman.',
    tier: 'Sapling',
    project: 'Sundarkand',
    date: '2026-02-14',
    anonymous: false
  },
  {
    id: 'sup-5',
    name: 'Kunal Bakhshi',
    message: 'Independent cinema at its purest. Keep the flame burning, Himanshu.',
    tier: 'Sapling',
    project: 'Sundarkand',
    date: '2026-03-02',
    anonymous: false
  },
  {
    id: 'sup-6',
    name: 'Anonymous Cultural Steward',
    tier: 'Seed',
    project: 'Sundarkand',
    date: '2026-03-25',
    anonymous: true
  },
  {
    id: 'sup-7',
    name: 'Devika Chawla',
    message: 'Cannot wait for the exhibition and book in London.',
    tier: 'Seed',
    project: 'Sundarkand',
    date: '2026-04-10',
    anonymous: false
  },
  {
    id: 'sup-8',
    name: 'Siddharth Varma',
    message: 'This is how sacred heritage should be honored—with fearless craft.',
    tier: 'Sapling',
    project: 'Sundarkand',
    date: '2026-05-18',
    anonymous: false
  }
];

export const patronTiers = [
  {
    name: 'Seed',
    amount: '₹5,000 / $65',
    description: 'Support the foundational research and sound archival field expeditions.',
    perks: [
      'Digital screening premiere link',
      'Name listed in the permanent digital wall of supporters',
      'Quarterly confidential production journal dispatches'
    ]
  },
  {
    name: 'Sapling',
    amount: '₹15,000 / $200',
    description: 'Directly sponsor a day of cinematic 35mm shooting or studio sound recording.',
    perks: [
      'All Seed perks',
      'Numbered & signed archival fine-art print from the film stills',
      'Credits in the official end-roller of the film',
      'Invitation to the private community screening in Jodhpur/Delhi'
    ]
  },
  {
    name: 'Tree',
    amount: '₹50,000 / $650',
    description: 'Sponsor the orchestration and Dolby Atmos acoustic mastering of an entire chapter.',
    perks: [
      'All Sapling perks',
      'Hardbound limited-edition Sundarkand Art & Script Book (hand-bound in Rajasthan)',
      'VIP passes to the gallery exhibition opening reception',
      'Special patron acknowledgment in the title sequence'
    ]
  },
  {
    name: 'Forest',
    amount: '₹1,50,000+ / $2,000+',
    description: 'Become a foundational co-patron supporting the world tour exhibition and archival preservation.',
    perks: [
      'All Tree perks',
      'Executive Patron credit in the film and all printed exhibition catalogs',
      'Private 1-on-1 studio walkthrough and dinner in Jodhpur with Himanshu & team',
      'Custom collector’s teakwood box with hand-dyed indigo textiles and sound reel'
    ]
  }
];
