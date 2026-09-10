import { NavLink } from '@/types';

export const mainNavLinks: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Series', href: '/series' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Ideas', href: '/ideas' },
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'About', href: '/about' },
];

export const persistentActions: NavLink[] = [
  { label: 'Subscribe', href: '/newsletter' },
  { label: 'Start a Conversation', href: '/conversation' },
];

export const footerLinks = {
  explore: [
    { label: 'Work', href: '/work' },
    { label: 'Series', href: '/series' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Ideas', href: '/ideas' },
    { label: 'Field Notes', href: '/field-notes' },
  ],
  connect: [
    { label: 'About', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Conversation', href: '/conversation' },
    { label: 'Collaborations', href: '/collaborations' },
    { label: 'Supporters', href: '/supporters' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/himanshudadhich', external: true },
    { label: 'YouTube', href: 'https://youtube.com/@himanshudadhich', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/himanshudadhich', external: true },
    { label: 'Twitter / X', href: 'https://x.com/himanshudadhich', external: true },
  ],
};
