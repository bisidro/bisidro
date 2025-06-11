/** @type { import("next").NextConfig } */
const repo = 'bisidro';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};

export default nextConfig;