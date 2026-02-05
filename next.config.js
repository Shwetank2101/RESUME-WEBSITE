/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove standalone for Vercel deployment
  // output: 'standalone', // Only needed for Docker/self-hosting
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
    ],
  },
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig

