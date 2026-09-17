import { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'the-diagnosis',
    title: 'The Diagnosis',
    tagline: 'A focused strategic review when your brand hits a wall.',
    description: 'When you\'re stuck — unclear positioning, confused messaging, or going in circles about what to say — I step in for a concentrated diagnosis. I find the core problem and give you a clear direction.',
    whoFor: 'Founders and teams preparing for a launch, rebrand, or major pivot.',
    problem: 'Your team argues about copy and design because no one has agreed on what the brand actually stands for.',
    included: [
      'Full audit of your brand touchpoints and competitors',
      'Two 90-minute diagnostic sessions',
      'The Direction Document: a clear, actionable strategic roadmap'
    ],
    process: [
      '1. Context intake & collateral review',
      '2. Diagnostic sessions with you / your team',
      '3. Synthesis & clarity on what to fix',
      '4. Delivery of the Direction Document'
    ],
    timeline: '1–2 weeks',
    expectedOutcome: 'A clear direction document that eliminates confusion and aligns your team.',
    startingPrice: 'Book a Call',
    icon: 'compass'
  },
  {
    slug: 'the-story-system',
    title: 'The Story System',
    tagline: 'Your brand\'s positioning, messaging, and content formats — built to repeat.',
    description: 'I define your core positioning, create the messaging framework, and build repeatable content formats your team can actually run with — without needing you (or me) in the room every time.',
    whoFor: 'Brands with inconsistent communication or products that feel hard to explain.',
    problem: 'Your team reinvents the wheel for every post because there\'s no governing story system.',
    included: [
      'Brand positioning & verbal identity guidelines',
      '3–4 narrative territories for ongoing storytelling',
      'Messaging framework for web, social, pitches, and keynotes',
      'Repeatable content templates & format library',
      'Handover workshop with your team'
    ],
    process: [
      '1. Deep immersion & customer research',
      '2. Developing the central story',
      '3. Mapping content territories & formats',
      '4. Pilot testing with live creative',
      '5. Full handover of the system'
    ],
    timeline: '4–6 weeks',
    expectedOutcome: 'A complete story system that turns scattered messaging into consistent, compounding trust.',
    startingPrice: 'Book a Call',
    icon: 'layers'
  },
  {
    slug: 'the-content-os',
    title: 'The Content OS',
    tagline: 'Research, ideation, production, and distribution — systematised.',
    description: 'I build the full operational engine: research feeds long-form, which feeds short-form, which feeds social. Your team produces regularly without burning out, and every piece compounds.',
    whoFor: 'Teams producing content regularly but learning slowly or stuck on the treadmill.',
    problem: 'High output, zero lasting value. You\'re exhausting yourself publishing things no one remembers.',
    included: [
      'Research-to-distribution pipeline design',
      'Production workflows, editorial calendar & review cadences',
      'Cross-platform distribution & repurposing architecture',
      'AI-assisted research and prompt guidelines',
      'Performance loops (measuring retention, not just impressions)'
    ],
    process: [
      '1. Audit of current creative operations & bottlenecks',
      '2. Pipeline architecture design',
      '3. Workflow documentation & tooling setup',
      '4. Pilot sprint — first 10 pieces through the OS',
      '5. Training your team to run it independently'
    ],
    timeline: '6–8 weeks',
    expectedOutcome: 'A content operation that cuts chaos in half and actually builds an audience.',
    startingPrice: 'Book a Call',
    icon: 'sparkles'
  },
  {
    slug: 'the-creative-partnership',
    title: 'The Creative Partnership',
    tagline: 'Ongoing strategy, concepts, scripts, and creative direction.',
    description: 'I work with you as an embedded creative director — steering big moments, writing high-stakes narratives, concepting films, and making sure your brand stays creatively sharp over time.',
    whoFor: 'Growing brands that need senior creative leadership without hiring an agency or a full-time exec.',
    problem: 'Agencies give you junior account managers. Hiring in-house is expensive and slow.',
    included: [
      'Ongoing creative direction & brand governance',
      'Monthly/quarterly strategic planning sessions',
      'Scriptwriting & visual treatments for films and launches',
      'Founder comms — speeches, op-eds, keynotes',
      'Vetting external production partners'
    ],
    process: [
      'Month 1: Alignment sprint & priority mapping',
      'Ongoing: Bi-weekly reviews & creative execution',
      'Quarterly: Narrative health check & refresh'
    ],
    timeline: '3 months minimum',
    expectedOutcome: 'Consistent creative leadership that keeps your brand sharp and growing.',
    startingPrice: 'Book a Call',
    icon: 'compass'
  },
  {
    slug: 'original-series',
    title: 'Original Series',
    tagline: 'A documentary or editorial series, created with your brand.',
    description: 'We co-create an original episodic series that treats your domain as real culture — not an ad. Something audiences actually want to watch. You get a piece of intellectual property, not just a campaign.',
    whoFor: 'Brands with a genuine human or cultural story worth telling in depth.',
    problem: 'Traditional brand sponsorships feel fake. Your audience can tell the difference.',
    included: [
      'Series concept, narrative treatment & episode arcs',
      'On-location production (cinematography, sound, directing)',
      'Post-production, scoring & grading',
      'Multi-format cuts for social, digital, or screenings',
      'IP rights & distribution planning'
    ],
    process: [
      '1. Subject discovery & field research',
      '2. Treatment & structure alignment',
      '3. Production with a lean cinema crew',
      '4. Post-production & master grade',
      '5. Premiere rollout planning'
    ],
    timeline: '8–16 weeks',
    expectedOutcome: 'An original series your audience actually watches and remembers.',
    startingPrice: 'Book a Call',
    icon: 'film'
  }
];
