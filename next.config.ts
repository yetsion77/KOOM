import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/KOOM',
  assetPrefix: '/KOOM/',
  images: {
    unoptimized: true,
  },
  // נשנה את ההגדרות של webpack
  webpack: (config) => {
    config.output = {
      ...config.output,
      publicPath: `${process.env.NODE_ENV === 'production' ? '/KOOM' : ''}/`
    };
    return config;
  },
  // נוסיף הגדרה לשמירת קבצים סטטיים
  distDir: 'dist',
  trailingSlash: true
}

export default nextConfig