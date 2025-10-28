/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages / static hosts
  output: 'export',
  // For static export, images should be unoptimized
  images: { unoptimized: true },
  // Optional base path (set NEXT_PUBLIC_BASE_PATH when deploying under a repo name)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Turbopack is enabled via CLI flag (next dev --turbopack) in modern versions; deprecated experimental.turbo removed.
};
export default nextConfig;
