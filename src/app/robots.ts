import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/home/", "/profile/", "/settings/"],
    },
    sitemap: "https://pointbreak.com/sitemap.xml",
  };
}
