import type { MetadataRoute } from "next";
import { siteFlags } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!siteFlags.allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteFlags.siteUrl ? `${siteFlags.siteUrl}/sitemap.xml` : undefined,
  };
}
