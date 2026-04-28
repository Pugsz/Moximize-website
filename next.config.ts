import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/meetings/:path*",
        destination: "https://meetings.hubspot.com/:path*",
      },
    ];
  },
};

export default nextConfig;
