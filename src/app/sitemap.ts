import { MetadataRoute } from 'next';

// SEO + GEO: Sitemap avec priorités différenciées et fréquences adaptées
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://station-os.vercel.app';
  const lastModified = new Date('2026-06-25');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/competences`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parcours`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
