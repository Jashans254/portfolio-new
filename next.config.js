/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
