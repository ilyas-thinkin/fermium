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
    id: '1773393382270',
    title: 'Dubai Development Authority Approval (DDA): Complete Guide for Renovation Projects in Dubai 2026',
    slug: 'dubai-development-authority-approval-dda-complete-guide-for-renovation-projects-in-dubai-2026',
    category: 'DDA Approval',
    author: 'Fermium',
    date: '2026-03-13',
    dateModified: '2026-03-13',
    excerpt: 'Complete guide to Dubai Development Authority approval for renovation projects in Dubai. Learn the process, documents, timelines, and requirements.',
    image: '/api/images/fermium-designs-dda-approval-list-1773393382270.avif',
    coverImage: '/api/images/fermium-designs-dda-approval-cover-1773393382270.jpg',
    metaTitle: 'Dubai Development Authority Approval (DDA): Complete Guide for Renovation Projects in Dubai 2026 | Fermium Designs',
    metaDescription: 'Complete guide to Dubai Development Authority approval for renovation projects in Dubai. Learn the process, documents, timelines, and requirements.',
    keywords: ['Dubai', 'Development', 'Authority', 'Approval', 'Complete', 'Guide', 'Renovation', 'Projects', 'Dubai', '2026'],
    ogImage: '/api/images/fermium-designs-dda-approval-cover-1773393382270.jpg',
  },

  {
    id: '1773380604825',
    title: 'How to Get Dubai Municipality Approval in 2026 (Complete Step-by-Step Guide)',
    slug: 'how-to-get-dubai-municipality-approval-in-2026-complete-step-by-step-guide',
    category: 'Dubai Municipality',
    author: 'Fermium',
    date: '2026-03-13',
    dateModified: '2026-03-13',
    excerpt: 'Learn how to get Dubai Municipality approval in 2026. Step-by-step DM approval process, documents required, and tips to avoid delays for fit-out projects in Dubai.',
    image: '/api/images/fermium-designs-dubai-municipality-list-1773380604825.jpg',
    coverImage: '/api/images/fermium-designs-dubai-municipality-cover-1773380604825.jpg',
    metaTitle: 'How to Get Dubai Municipality Approval in 2026 (Complete Step-by-Step Guide) | Fermium Designs',
    metaDescription: 'Learn how to get Dubai Municipality approval in 2026. Step-by-step DM approval process, documents required, and tips to avoid delays for fit-out projects in Dubai.',
    keywords: ['Dubai', 'Municipality', 'Approval', '2026', 'Complete', 'StepbyStep', 'Guide'],
    ogImage: '/api/images/fermium-designs-dubai-municipality-cover-1773380604825.jpg',
  },

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
