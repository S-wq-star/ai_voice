import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error `eslint` was removed from NextConfig in Next.js 16 (next lint is gone);
  // kept here as a no-op until the build script is migrated off it.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
