import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "http://localhost:5000/api/auth/:path*",
      },
      {
        source: "/api/v1/:path*",
        destination: "http://localhost:5000/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
