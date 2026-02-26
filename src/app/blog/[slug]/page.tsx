import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../blogData';
import BlogContent from './BlogContent';
import './blog-post.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  const BASE_URL = 'https://www.fermiumdesigns.ae';
  const rawImage = post.ogImage || post.coverImage || post.image;
  const imageUrl = rawImage.startsWith('http') ? rawImage : `${BASE_URL}${rawImage}`;
  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: post.metaTitle || `${post.title} | Fermium Designs`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Fermium Designs',
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      url,
      siteName: 'Fermium Designs',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      locale: 'en_AE',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [imageUrl],
      creator: '@fermiumdesigns',
      site: '@fermiumdesigns',
    },
    other: {
      'article:published_time': post.date,
      'article:author': post.author,
      'article:section': post.category,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) notFound();

  const BASE_URL = 'https://www.fermiumdesigns.ae';
  const rawImage = post.ogImage || post.coverImage || post.image;
  const imageUrl = rawImage.startsWith('http') ? rawImage : `${BASE_URL}${rawImage}`;
  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 630 },
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.fermiumdesigns.ae',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fermium Designs',
      url: 'https://www.fermiumdesigns.ae',
      logo: { '@type': 'ImageObject', url: 'https://www.fermiumdesigns.ae/logo/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    keywords: post.keywords?.join(', '),
    articleSection: post.category,
    inLanguage: 'en-AE',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fermiumdesigns.ae' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fermiumdesigns.ae/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="blog-post-page">
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="description" content={post.metaDescription || post.excerpt} />
          <meta itemProp="datePublished" content={post.date} />
          <meta itemProp="author" content={post.author} />
          <link itemProp="image" href={imageUrl} />

          <header
            className="blog-post-header"
            style={{ backgroundImage: `url(${post.coverImage || post.image})` }}
          >
            <div className="blog-post-header-content">
              <span className="blog-post-category">{post.category}</span>
              <h1 className="blog-post-title" itemProp="name">{post.title}</h1>
              <div className="blog-post-meta">
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="blog-post-meta-dot" />
                <span itemProp="author">By {post.author}</span>
              </div>
            </div>
          </header>

          <div className="blog-post-content" itemProp="articleBody">
            <BlogContent slug={slug} />
          </div>

          <div className="related-articles-section">
            <h2 className="related-articles-title">You Might Also Like</h2>
            <p className="related-articles-subtitle">More guides from the Fermium Designs team</p>
            <div className="related-articles-grid">
              {blogPosts
                .filter(p => p.slug !== post.slug)
                .slice(0, 3)
                .map(relatedPost => (
                  <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="related-article-card">
                    <div
                      className="related-article-image"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    >
                      <span className="related-article-category">{relatedPost.category}</span>
                    </div>
                    <div className="related-article-content">
                      <h3 className="related-article-title">{relatedPost.title}</h3>
                      <p className="related-article-excerpt">{relatedPost.excerpt}</p>
                      <span className="related-article-date">
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>

          <footer className="blog-post-footer">
            <a href="/blog" className="back-to-blog">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </a>
          </footer>
        </article>
      </div>
    </>
  );
}
