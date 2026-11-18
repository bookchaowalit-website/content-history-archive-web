import type { MetadataRoute } from "next";
import { SITE } from "@/components/archive-views";
import { eras } from "@/lib/archive";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE}/` }, ...eras.map((era) => ({ url: `${SITE}/entries/${era.id}` }))];
}
