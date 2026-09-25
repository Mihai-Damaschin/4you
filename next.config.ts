import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // The root layout lives under app/[lang], so unmatched URLs need their own 404 page.
    globalNotFound: true,
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
