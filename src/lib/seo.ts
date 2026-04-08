import type { Metadata } from "next";

export const SITE_URL = "https://fermiumdesigns.ae";

function normalizePath(path: string) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function buildAlternates(path: string): NonNullable<Metadata["alternates"]> {
  const url = absoluteUrl(path);
  return {
    canonical: url,
    languages: {
      en: url,
      "en-AE": url,
      "x-default": url,
    },
  };
}

type WebsiteMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function buildWebsiteMetadata({
  title,
  description,
  path,
  image = "/Images/hero/corporate.webp",
  imageAlt = title,
}: WebsiteMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      title,
      description,
      url,
      siteName: "Fermium Designs",
      locale: "en_AE",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
