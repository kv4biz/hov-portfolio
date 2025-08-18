import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ⚠️ Warning: This allows production builds to succeed even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
