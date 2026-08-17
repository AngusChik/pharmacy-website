import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pharmacy-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
