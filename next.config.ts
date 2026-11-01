import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    // The photos are at most ~1500 px wide, so the default 2048 and 3840 widths only bloat srcset and the src fallback.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    // The root layout lives under app/[lang], so unmatched URLs need their own 404 page.
    globalNotFound: true,
    // The stylesheet is ~7 KiB compressed; inlined in the HTML, the first paint no longer waits for its request.
    inlineCss: true,
  },
  // Romanian is served without a prefix ("/", "/tractare-auto"); /ru/... and /en/... are real routes.
  async redirects() {
    return [
      { source: "/ro", destination: "/", permanent: true },
      { source: "/ro/:slug", destination: "/:slug", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/", destination: "/ro" },
      // Any single segment that isn't a locale; unknown slugs still 404 (dynamicParams = false).
      { source: "/:slug((?!ru$|en$|ro$)[a-z0-9-]+)", destination: "/ro/:slug" },
    ];
  },
};

export default nextConfig;
