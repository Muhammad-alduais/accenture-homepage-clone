/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: [
      "images.unsplash.com",
      "source.unsplash.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;