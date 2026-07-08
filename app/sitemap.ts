import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adhdaihelp.com";
  const now = new Date();

  return [
    { url: base,                                           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    // Tools
    { url: `${base}/tools/focus-timer/`,                   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/10-minute-adhd-timer/`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/adhd-pomodoro-timer/`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/body-doubling-timer/`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/executive-dysfunction-timer/`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/brain-dump/`,                    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Tests / Quizzes
    { url: `${base}/tests/adult-adhd-test/`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tests/adhd-in-women-quiz/`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tests/child-adhd-test/`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tests/adhd-type-quiz/`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Learn articles
    { url: `${base}/learn/adhd-in-women/`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/adhd-vs-anxiety/`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/executive-dysfunction/`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/adhd-time-blindness/`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/adhd-faq/`,                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/time-blindness/`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn/mind-feels-too-full/`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Resources
    { url: `${base}/resources/adhd-focus-checklist/`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
