import type { NextConfig } from "next";

const backendOriginSource =
  process.env.NEXT_PUBLIC_API_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL_AUTH;

if (!backendOriginSource) {
  throw new Error(
    "Set NEXT_PUBLIC_API_BACKEND_URL or NEXT_PUBLIC_API_BASE_URL in the environment",
  );
}

const backendOrigin = new URL(backendOriginSource).origin.replace(/\/+$/, "");
const distDir = process.env.NEXT_DIST_DIR || ".next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  distDir,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${backendOrigin}/api/auth/:path*`,
      },
      {
        source: "/api/v1/:path*",
        destination: `${backendOrigin}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
