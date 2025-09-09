import { Metadata } from 'next';
import { Suspense } from 'react';
import { getSortedPostsData, getCategories } from '@/lib/markdown';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Blog - Latest posts',
  description: 'Explore the latest posts about health, technology, and science from MigoLoop.',
  openGraph: {
    title: 'Blog - Latest posts',
    description: 'Explore the latest posts about health, technology, and science from MigoLoop.',
    type: 'website',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  const categories = getCategories();

  // Structured data for Blog
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog - MigoLoop',
    description: 'Explore the latest posts about health, technology, and science from MigoLoop.',
    url: 'https://migoloop.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'MigoLoop',
      logo: {
        '@type': 'ImageObject',
        url: 'https://migoloop.com/logo.png'
      }
    },
    blogPosts: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'Oni Biocare'
      },
      url: `https://migoloop.com/blog/${post.id}`,
      description: post.excerpt || '',
      keywords: post.category || ''
    }))
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
      
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Explore the latest posts about health, technology, and science from MigoLoop.
        </p>
        
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <CategoryFilter posts={posts} categories={categories} />
        </Suspense>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </div>
    </div>
  );
} 