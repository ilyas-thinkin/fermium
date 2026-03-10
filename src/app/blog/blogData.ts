export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  image: string;
  coverImage?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '10',
    title: 'Dubai Municipality (DM) Fit-Out Approval: What Every Business Owner Must Know',
    slug: 'dubai-municipality-fitout-approval-business-guide',
    category: 'Authority Approvals',
    author: 'Fermium Designs',
    date: '2025-11-20',
    excerpt: 'A clear, practical guide to Dubai Municipality fit-out approval for business owners — what it is, when you need it, what documents to prepare, and how to navigate the DM portal without delays.',
    image: '/Images/blog/fermium-approvals-dubai-municipality-fitout-approval.jpg',
    coverImage: '/Images/blog/fermium-approvals-dubai-municipality-fitout-approval.jpg',
    metaTitle: 'Dubai Municipality Fit-Out Approval Guide for Businesses 2026 | Fermium Designs',
    metaDescription: 'Clear guide to Dubai Municipality fit-out approval — when you need it, required documents, portal process, and how to avoid common mistakes that delay projects.',
    keywords: ['Dubai Municipality fit-out approval', 'DM approval Dubai', 'municipality permit Dubai', 'fit-out permit Dubai', 'Dubai building permit business', 'DM portal approval 2026'],
    ogImage: '/Images/blog/fermium-approvals-dubai-municipality-fitout-approval.jpg',
  }
];
