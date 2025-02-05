import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/KOOM',
  assetPrefix: '/KOOM/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig