'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface BlogContentProps {
  slug: string;
}

// Cache for dynamically loaded components
const componentCache: Record<string, ComponentType> = {};

function loadBlogContent(slug: string): ComponentType {
  if (componentCache[slug]) {
    return componentCache[slug];
  }

  const DynamicComponent = dynamic(
    () => import(`./content/${slug}`).catch(() => {
      return { default: () => null };
    }),
    { ssr: true }
  );

  componentCache[slug] = DynamicComponent;
  return DynamicComponent;
}

export default function BlogContent({ slug }: BlogContentProps) {
  const ContentComponent = loadBlogContent(slug);
  return <ContentComponent />;
}
