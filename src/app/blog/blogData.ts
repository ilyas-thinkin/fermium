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
    id: '3',
    title: 'Restaurant & F&B Fit-Out in Dubai: A Complete Planning Guide',
    slug: 'restaurant-fitout-dubai-planning-guide',
    category: 'Interior Fit-Out',
    author: 'Fermium Designs',
    date: '2026-01-18',
    excerpt: 'Planning a restaurant or café fit-out in Dubai? This guide covers kitchen layouts, front-of-house design, municipality requirements, Civil Defence compliance, and typical project timelines.',
    image: '/Images/blog/fermium-fitout-restaurant-fitout-dubai-planning-guide.jpg',
    coverImage: '/Images/blog/fermium-fitout-restaurant-fitout-dubai-planning-guide.jpg',
    metaTitle: 'Restaurant & F&B Fit-Out in Dubai: Full Planning Guide 2026 | Fermium Designs',
    metaDescription: 'Complete guide to restaurant and café fit-out in Dubai — kitchen layouts, front-of-house design, DM & DCD compliance, approvals, and project timelines.',
    keywords: ['restaurant fit-out Dubai', 'cafe fit-out Dubai', 'F&B fit-out Dubai', 'restaurant interior Dubai', 'food outlet fitout Dubai 2026'],
    ogImage: '/Images/blog/fermium-fitout-restaurant-fitout-dubai-planning-guide.jpg',
  },

  {
    id: '5',
    title: 'Structural Engineering Approvals in Dubai: A Developer\'s Guide to DM Structural Review',
    slug: 'structural-engineering-approvals-dubai-developer-guide',
    category: 'Structural Engineering',
    author: 'Fermium Designs',
    date: '2026-02-12',
    excerpt: 'How structural engineering drawings get reviewed and approved by Dubai Municipality. Covers submission requirements, calculation standards, common rejection reasons, and timelines for villas, towers, and commercial buildings.',
    image: '/Images/blog/fermium-structural-structural-engineering-approvals-dubai.jpg',
    coverImage: '/Images/blog/fermium-structural-structural-engineering-approvals-dubai.jpg',
    metaTitle: 'Structural Engineering Approvals in Dubai: DM Review Guide 2026 | Fermium Designs',
    metaDescription: 'How structural drawings get approved by Dubai Municipality. Submission requirements, calculation standards, rejection reasons, and timelines for all building types.',
    keywords: ['structural engineering approval Dubai', 'DM structural review', 'structural drawings Dubai Municipality', 'structural permit Dubai', 'building structural approval UAE 2026'],
    ogImage: '/Images/blog/fermium-structural-structural-engineering-approvals-dubai.jpg',
  },

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
    id: '7',
    title: 'Structural Calculations & Reports in Dubai: What Engineers Submit to DM',
    slug: 'structural-calculations-reports-dubai-dm-submission',
    category: 'Structural Engineering',
    author: 'Fermium Designs',
    date: '2026-01-10',
    excerpt: 'What structural calculation reports must contain for Dubai Municipality submission — load analyses, material specifications, code compliance references, and what reviewers check before approving your structure.',
    image: '/Images/blog/fermium-structural-structural-calculations-reports-dubai.jpg',
    coverImage: '/Images/blog/fermium-structural-structural-calculations-reports-dubai.jpg',
    metaTitle: 'Structural Calculations & Reports for DM Submission Dubai | Fermium Designs',
    metaDescription: 'What structural calculation reports must contain for Dubai Municipality approval — load analyses, code compliance, material specifications, and reviewer expectations.',
    keywords: ['structural calculations Dubai', 'structural report DM Dubai', 'structural submission Dubai Municipality', 'engineering calculations UAE', 'structural design report Dubai 2026'],
    ogImage: '/Images/blog/fermium-structural-structural-calculations-reports-dubai.jpg',
  },

  {
    id: '8',
    title: 'Authority Approvals in Dubai: The Complete Guide for 2026',
    slug: 'authority-approvals-dubai-complete-guide-2026',
    category: 'Authority Approvals',
    author: 'Fermium Designs',
    date: '2025-12-15',
    excerpt: 'Everything you need to know about authority approvals in Dubai — which authorities are involved, what documents are required, how the process works, and how to avoid costly delays.',
    image: '/Images/blog/fermium-approvals-authority-approvals-dubai-complete-guide.jpg',
    coverImage: '/Images/blog/fermium-approvals-authority-approvals-dubai-complete-guide.jpg',
    metaTitle: 'Authority Approvals in Dubai: Complete Guide 2026 | Fermium Designs',
    metaDescription: 'Everything you need to know about authority approvals in Dubai for 2026 — which authorities are involved, documents required, process steps, and how to avoid delays.',
    keywords: ['authority approvals Dubai', 'Dubai building approvals', 'Dubai Municipality approval', 'Civil Defense approval Dubai', 'NOC Dubai', 'fit-out approval Dubai 2026'],
    ogImage: '/Images/blog/fermium-approvals-authority-approvals-dubai-complete-guide.jpg',
  },

  {
    id: '9',
    title: 'Dubai Civil Defence (DCD) Approval: Step-by-Step Process for Fit-Out & Construction',
    slug: 'dubai-civil-defence-approval-fitout-construction-guide',
    category: 'Authority Approvals',
    author: 'Fermium Designs',
    date: '2025-12-05',
    excerpt: 'A practical, step-by-step guide to obtaining Dubai Civil Defence approval for fit-out and construction projects. Covers required documents, timelines, categories, and common reasons for rejection.',
    image: '/Images/blog/fermium-approvals-dubai-civil-defence-approval-guide.jpg',
    coverImage: '/Images/blog/fermium-approvals-dubai-civil-defence-approval-guide.jpg',
    metaTitle: 'Dubai Civil Defence (DCD) Approval Guide for Fit-Out & Construction 2026 | Fermium Designs',
    metaDescription: 'Step-by-step guide to Dubai Civil Defence approval for fit-out and construction. Documents, timelines, project categories, and tips to avoid rejection.',
    keywords: ['Dubai Civil Defence approval', 'DCD approval Dubai', 'fire safety approval Dubai', 'Civil Defence fit-out', 'DCD process Dubai 2026'],
    ogImage: '/Images/blog/fermium-approvals-dubai-civil-defence-approval-guide.jpg',
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
