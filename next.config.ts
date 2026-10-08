import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images and local public assets
    unoptimized: false,
  },
}

export default nextConfig
