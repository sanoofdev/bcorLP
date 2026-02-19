import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bcor.in", lastModified: new Date() },
    { url: "https://bcor.in/pharmacy-billing-software-india", lastModified: new Date() },
    { url: "https://bcor.in/gst-pharmacy-software", lastModified: new Date() },
    { url: "https://bcor.in/pharmacy-inventory-management", lastModified: new Date() },
    { url: "https://bcor.in/medical-shop-billing-software", lastModified: new Date() },
    { url: "https://bcor.in/pharmacy-software-kerala", lastModified: new Date() },
  ];
}
