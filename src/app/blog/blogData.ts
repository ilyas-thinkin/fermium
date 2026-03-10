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
    id: '6',
    title: 'BIM Modelling in Dubai: Why It\'s Now Expected on Every Major Project',
    slug: 'bim-modelling-dubai-construction-guide',
    category: 'Structural Engineering',
    author: 'Fermium Designs',
    date: '2026-01-25',
    excerpt: 'Building Information Modelling (BIM) is no longer optional on significant construction and fit-out projects in Dubai. This guide explains what BIM is, why authorities and developers require it, and how it saves time and cost on site.',
    image: '/Images/blog/fermium-structural-bim-modelling-dubai.jpg',
    coverImage: '/Images/blog/fermium-structural-bim-modelling-dubai.jpg',
    metaTitle: 'BIM Modelling in Dubai: Why It\'s Required & How It Saves Cost | Fermium Designs',
    metaDescription: 'BIM modelling in Dubai — what it is, why DM and major developers now require it, and how 3D coordination reduces rework and project cost.',
    keywords: ['BIM modelling Dubai', 'Building Information Modelling Dubai', 'BIM construction Dubai', '3D BIM Dubai', 'BIM structural Dubai 2026'],
    ogImage: '/Images/blog/fermium-structural-bim-modelling-dubai.jpg',
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
  },

  {
    id: '11',
    title: '10 Common Fit-Out Approval Mistakes That Delay Projects in Dubai',
    slug: '10-common-fitout-approval-mistakes-dubai',
    category: 'Authority Approvals',
    author: 'Fermium Designs',
    date: '2025-11-05',
    excerpt: 'The most frequent errors that cause fit-out approval delays in Dubai — from incomplete drawings and MEP mismatches to fire safety gaps — and exactly how to fix them before submission.',
    image: '/Images/blog/fermium-approvals-10-common-fitout-approval-mistakes.jpg',
    coverImage: '/Images/blog/fermium-approvals-10-common-fitout-approval-mistakes.jpg',
    metaTitle: '10 Common Fit-Out Approval Mistakes That Delay Dubai Projects | Fermium Designs',
    metaDescription: 'The most frequent fit-out approval mistakes in Dubai and how to avoid them — incomplete drawings, MEP mismatches, fire safety gaps, and more.',
    keywords: ['fit-out approval mistakes Dubai', 'approval delay Dubai', 'fit-out rejection Dubai', 'common approval errors Dubai', 'how to avoid fit-out delay Dubai 2026'],
    ogImage: '/Images/blog/fermium-approvals-10-common-fitout-approval-mistakes.jpg',
  },

  {
    id: '12',
    title: 'Free Zone Fit-Out Approvals in Dubai: DIFC, JAFZA, TECOM & More',
    slug: 'free-zone-fitout-approvals-dubai-difc-jafza-tecom',
    category: 'Authority Approvals',
    author: 'Fermium Designs',
    date: '2025-10-25',
    excerpt: 'Free zones in Dubai operate their own approval systems separate from Dubai Municipality. This guide explains the key differences, which authorities to engage, and what to expect when fitting out in DIFC, JAFZA, TECOM, or other free zones.',
    image: '/Images/blog/fermium-approvals-free-zone-fitout-approvals-dubai.jpg',
    coverImage: '/Images/blog/fermium-approvals-free-zone-fitout-approvals-dubai.jpg',
    metaTitle: 'Free Zone Fit-Out Approvals in Dubai: DIFC, JAFZA, TECOM Guide | Fermium Designs',
    metaDescription: 'How fit-out approvals work in Dubai free zones — DIFC, JAFZA, TECOM, and others. Key differences from DM process, documents required, and timelines.',
    keywords: ['free zone fit-out approval Dubai', 'DIFC fit-out approval', 'JAFZA fit-out permit', 'TECOM approval Dubai', 'free zone construction approval UAE 2026'],
    ogImage: '/Images/blog/fermium-approvals-free-zone-fitout-approvals-dubai.jpg',
  }
];
