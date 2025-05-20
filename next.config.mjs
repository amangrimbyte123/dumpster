/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Turbopack configuration
  turbopack: {
    // Avoid excessively caching CSS in development
    moduleIds: 'named',
    // Enable CSS optimizations
    cssChunking: true,
  },
  
  // Image configuration
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

export default nextConfig; 