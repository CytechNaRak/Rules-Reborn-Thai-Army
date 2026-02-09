import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Rules-Reborn-Thai-Army",
  trailingSlash: true,
};

export default nextConfig;
