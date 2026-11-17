import type { MetadataRoute } from "next"

import { site } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.origin}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.origin}/story`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.origin}/links`, changeFrequency: "monthly", priority: 0.5 },
  ]
}
