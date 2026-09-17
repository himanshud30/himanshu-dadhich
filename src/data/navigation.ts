import { NavLink } from '@/types';

export const mainNavLinks: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Creative Lab', href: '/#creative-lab' },
  { label: 'Sundarkand', href: '/projects/sundarkand' },
  { label: 'Newsletter & Notes', href: '/newsletter' },
  { label: 'About', href: '/about' },
];

export const persistentActions: NavLink[] = [
  { label: 'Book a Call', href: '/conversation' },
];

export const footerLinks = {
  explore: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Creative Lab', href: '/#creative-lab' },
    { label: 'Sundarkand', href: '/projects/sundarkand' },
    { label: 'Newsletter & Notes', href: '/newsletter' },
  ],
  connect: [
    { label: 'About Himanshu', href: '/about' },
    { label: 'Book a Call', href: '/conversation' },
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

