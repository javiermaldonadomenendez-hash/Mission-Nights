import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.mission-nights.de',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
