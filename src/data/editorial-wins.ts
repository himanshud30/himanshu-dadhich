export interface EditorialWin {
  id: string;
  category: string;
  headline: string;
  subhead: string;
  context: string;
  whatChanged: string;
  metricOrProof?: string;
  tag: string;
}

export const editorialWins: EditorialWin[] = [
  {
    id: 'strongest-performing-format',
    category: 'Original Series & Engagement',
    headline: 'A series became the channel’s strongest-performing format',
    subhead: 'Turning scattered product posts into an episodic documentary format that compounded audience retention.',
    context: 'The brand was stuck on the traditional content hamster wheel: transactional product announcements with steep engagement drop-offs.',
    whatChanged: 'We designed a focused 4-part documentary narrative treating the craftsmen behind the product as protagonists. The format outperformed all previous company content by 4.2x in organic completion rate and became their benchmark brand vehicle.',
    metricOrProof: '4.2x Average View Duration & Channel Record Saves',
    tag: 'Content Architecture'
  },
  {
    id: 'founder-shared-strategy',
    category: 'Strategic Resonance',
    headline: 'A strategy post was shared by the founder being studied',
    subhead: 'Independent deconstructions written with such precision that industry leaders cite them as internal benchmarks.',
    context: 'Himanshu wrote an unsparing, analytical teardown of a prominent high-growth startup’s positioning and product distribution bottlenecks.',
    whatChanged: 'Rather than generic marketing praise, the piece uncovered structural trade-offs. The startup’s founder publicly retweeted the essay, stating it was more accurate than their internal agency decks and required reading for their product team.',
    metricOrProof: '100% Organic Founder Citation & 25K+ Strategic Impressions',
    tag: 'Brand Strategy'
  },
  {
    id: 'internal-content-repeatable-system',
    category: 'Operational Transformation',
    headline: 'An internal content problem became a repeatable system',
    subhead: 'Replacing founder burnout with an automated research-to-distribution Content OS.',
    context: 'A fast-scaling education team was burning out 5 writers weekly trying to brainstorm topics in Monday panic meetings.',
    whatChanged: 'We architected a unified Content OS: an asynchronous research repository, modular script templates, and a 48-hour approval workflow. Turnaround dropped from 14 days to 4 days, with output quality measurably higher.',
    metricOrProof: '65% Reduction in Cycle Time · 0 Unapproved Backlogs',
    tag: 'Systems & Content OS'
  },
  {
    id: 'conversation-to-strategic-document',
    category: 'Clarity & Diagnosis',
    headline: 'A brand conversation became a full strategic document',
    subhead: 'From a 90-minute messy founder debate to a 14-page definitive Direction Document.',
    context: 'Two co-founders were gridlocked for six months over whether to position as a luxury boutique or an accessible mass-market platform.',
    whatChanged: 'During a focused two-week strategic diagnosis, we interrogated their unit economics, audience psychology, and heritage. The resulting Direction Document unlocked immediate board alignment and eliminated six months of friction.',
    metricOrProof: '100% Leadership Consensus & Seamless Brand Launch',
    tag: 'Strategic Diagnosis'
  },
  {
    id: 'cultural-ai-musical-film',
    category: 'Flagship Cultural IP',
    headline: 'A cultural idea became a 2.5-hour AI musical film project',
    subhead: 'Bridging timeless Awadhi epic poetry with state-of-the-art synthetic visual pipelines.',
    context: 'Most digital adaptations of classic Indian literature settle for flat devotional recitations or derivative VFX that age instantly.',
    whatChanged: 'We initiated Sundarkand: The Inner Odyssey—a full-scale artistic undertaking scoring 100+ verses with acoustic instruments, paired with meticulously art-directed AI cinema. It has attracted patrons across 4 continents.',
    metricOrProof: '68% Complete · Global Patron Circle in 4 Continents',
    tag: 'Original Film & Cultural IP'
  }
];
