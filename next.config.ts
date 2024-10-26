import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
