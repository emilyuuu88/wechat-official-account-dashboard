import type { NextConfig } from "next";

const isNetlifyStaticExport = process.env.NETLIFY_STATIC_EXPORT === "1";
const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "1";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "wechat-official-account-dashboard";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isNetlifyStaticExport || isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : {}),
  ...(isGitHubPages
    ? {
        basePath,
        assetPrefix: basePath,
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
        },
      }
    : {}),
};

export default nextConfig;
