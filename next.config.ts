import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/KOOM',
  assetPrefix: '/KOOM/',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.output.publicPath = '/KOOM/_next/';
    return config;
  }
}

export default nextConfig