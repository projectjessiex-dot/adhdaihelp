import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.adhdaihelp.com";
  const now = new Date();

  return [
    { url: base,                                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/tests/adult-adhd-test/`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tests/adhd-in-women-quiz/`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tests/child-adhd-test/`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tests/adhd-type-quiz/`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn/adhd-in-women/`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn/adhd-vs-anxiety/`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn/executive-dysfunction/`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn/adhd-time-blindness/`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/brain-dump/`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/adhd-focus-checklist/`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
