/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.thewall360.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thewall360.com',
        pathname: '/uploadImages/**',
      },
    ],
    unoptimized: true, // This will help with image paths during development
  },
};

module.exports = nextConfig; 