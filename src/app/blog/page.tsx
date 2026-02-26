import type { Metadata } from 'next';
import { blogPosts } from './blogData';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog | Fermium Designs — Insights on Fit-Out, Approvals & Structural Engineering',
  description: 'Expert guides, tips, and insights on interior fit-out, authority approvals, and structural engineering in Dubai from the Fermium Designs team.',
  keywords: 'interior fit-out Dubai, authority approvals Dubai, structural engineering Dubai, fit-out guide Dubai, building approvals UAE, Fermium Designs blog',
  alternates: {
    canonical: 'https://www.fermiumdesigns.ae/blog',
  },
  openGraph: {
    title: 'Blog | Fermium Designs — Insights on Fit-Out, Approvals & Structural Engineering',
    description: 'Expert guides on interior fit-out, authority approvals, and structural engineering in Dubai from the Fermium Designs team.',
    url: 'https://www.fermiumdesigns.ae/blog',
    siteName: 'Fermium Designs',
    type: 'website',
    locale: 'en_AE',
    images: [
      {
        url: 'https://www.fermiumdesigns.ae/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fermium Designs Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Fermium Designs — Insights on Fit-Out, Approvals & Structural Engineering',
    description: 'Expert guides on interior fit-out, authority approvals, and structural engineering in Dubai.',
    images: ['https://www.fermiumdesigns.ae/logo/logo.png'],
    creator: '@fermiumdesigns',
    site: '@fermiumdesigns',
  },
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-container">
          <span className="blog-hero-tag">Our Blog</span>
          <h1 className="blog-hero-title">
            Insights &amp; <span>Guides</span>
          </h1>
          <p className="blog-hero-subtitle">
            Expert articles on interior fit-out, authority approvals, and structural engineering in Dubai — written by the Fermium Designs team.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="blog-list-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <a href={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <h2 className="blog-card-title">{post.title}</h2>
                    <button className="blog-card-arrow" aria-label="Read more">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
