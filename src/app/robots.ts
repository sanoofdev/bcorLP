import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowedUserAgents = [
    "*",
    "GPTBot",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
  ];

  return {
    rules: allowedUserAgents.map((agent) => ({
      userAgent: agent,
      allow: "/",
      disallow: ["/_next/", "/api/"],
    })),
    sitemap: "https://bcor.in/sitemap.xml",
  };
}
