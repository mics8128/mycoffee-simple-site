import type { MetadataRoute } from "next"

import { site } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.origin}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
