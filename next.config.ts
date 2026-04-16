import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.texpo-exhibition.com',
      },
    ],
    // dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
