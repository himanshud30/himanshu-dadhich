import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { series } from '@/data/series';
import { fieldNotes } from '@/data/field-notes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://himanshudadhich.com';

  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/series',
    '/services',
    '/projects',
    '/projects/sundarkand',
    '/ideas',
    '/field-notes',
    '/newsletter',
    '/collaborate',
    '/conversation',
    '/supporters',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const workRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const seriesRoutes = series.map((s) => ({
    url: `${baseUrl}/series/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const noteRoutes = fieldNotes.map((note) => ({
    url: `${baseUrl}/field-notes/${note.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...seriesRoutes, ...noteRoutes];
}
