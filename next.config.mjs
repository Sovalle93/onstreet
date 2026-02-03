/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.sanity.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;