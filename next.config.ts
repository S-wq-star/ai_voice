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
  // firebase-admin pulls in jwks-rsa -> jose (ESM), which Turbopack's server
  // bundler can't require() correctly. Keep it external so Node resolves it directly.
  serverExternalPackages: ["firebase-admin"],
};

export default nextConfig;
