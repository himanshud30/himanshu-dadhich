// ─── Content Models ───

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: CaseStudyCategory;
  year: string;
  thumbnail: string;
  excerpt: string;
  context: string;
  problem: string;
  insight: string;
  strategicDirection: string;
  creativeExecution: string;
  process: string[];
  deliverables: string[];
  outcomes: string[];
  gallery: MediaItem[];
  lessons: string[];
  relatedSlugs: string[];
  featured: boolean;
}

export type CaseStudyCategory =
  | 'Creative Strategy'
  | 'Content Systems'
  | 'Campaigns'
  | 'Film'
  | 'Brand Storytelling'
  | 'Social Content'
  | 'AI Experiments'
  | 'Original Projects';

export interface Series {
  slug: string;
  title: string;
  manifesto: string;
  description: string;
  thumbnail: string;
  episodeCount: number;
  episodes: Episode[];
  status: 'active' | 'upcoming' | 'completed';
}

export interface Episode {
  slug: string;
  seriesSlug: string;
  number: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  transcript: string;
  keyIdea: string;
  publishedAt: string;
  references: string[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  whoFor: string;
  problem: string;
  included: string[];
  process: string[];
  timeline: string;
  expectedOutcome: string;
  startingPrice: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  vision: string;
  culturalIntention: string;
  structure: string;
  productionProcess: string;
  characters: string[];
  currentProgress: number;
  timeline: TimelineEntry[];
  budgetTransparency: string;
  team: TeamMember[];
  updates: ProjectUpdate[];
  faqs: FAQ[];
  gallery: MediaItem[];
  featured: boolean;
}

export interface ProjectUpdate {
  date: string;
  title: string;
  content: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type IdeaStatus =
  | 'Observing'
  | 'Researching'
  | 'Developing'
  | 'Producing'
  | 'Released'
  | 'Paused';

export interface Idea {
  slug: string;
  title: string;
  description: string;
  status: IdeaStatus;
  category: string;
  updatedAt: string;
  tags: string[];
}

export interface FieldNote {
  slug: string;
  title: string;
  city: string;
  date: string;
  photographs: string[];
  observation: string;
  peopleMet: string;
  culturalDetail: string;
  whatChanged: string;
  relatedContent: string[];
}

export interface NewsletterIssue {
  slug: string;
  number: number;
  title: string;
  excerpt: string;
  publishedAt: string;
  territories: string[];
}

export interface Supporter {
  id: string;
  name: string;
  message?: string;
  tier: 'Seed' | 'Sapling' | 'Tree' | 'Forest';
  project: string;
  date: string;
  anonymous: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export interface Collaborator {
  name: string;
  role: string;
  project: string;
  image?: string;
  url?: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: '4/3' | '4/5' | '16/9' | '1/1';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CollaborationSubmission {
  brand: string;
  website: string;
  contactPerson: string;
  email: string;
  objective: string;
  story: string;
  audience: string;
  budgetRange: string;
  timeline: string;
  whyHimanshu: string;
  links: string;
}

export interface ConversationMessage {
  type: 'question' | 'project' | 'collaboration';
  name: string;
  email?: string;
  message: string;
  consent: boolean;
}
