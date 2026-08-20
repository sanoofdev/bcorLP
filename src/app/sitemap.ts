import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bcor.in";
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/pharmacy-billing-software-india", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gst-pharmacy-software", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pharmacy-inventory-management", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/medical-shop-billing-software", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pharmacy-software-kerala", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pharmacy-software-calicut", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/compare/bcor-vs-marg-erp", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
