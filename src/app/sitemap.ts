import { MetadataRoute } from 'next';
import { getSortedPostsData, getCategories } from '@/lib/markdown';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://migoloop.com';
  const posts = getSortedPostsData();
  const categories = getCategories();
  
  // Blog posts URLs
  const postUrls = posts.map((post) => {
    const candidate = post?.date ? new Date(post.date) : new Date();
    const lastModified = isNaN(candidate.getTime()) ? new Date() : candidate;
    return {
      url: `${baseUrl}/blog/${post.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  // Blog category URLs (still for blog only)
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blog?category=${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Main URLs
  const mainUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // No products or categories pages
  ];

  return [...mainUrls, ...categoryUrls, ...postUrls];
} 