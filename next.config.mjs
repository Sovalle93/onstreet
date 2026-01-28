/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    {
        protocol: 'https',
        hostname: 'www.estrategiasdeinversion.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.caixabank.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.madridiario.es',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'beta.elmercurio.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;