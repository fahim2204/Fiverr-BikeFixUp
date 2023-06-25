/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  cssMinimizerOptions: {
    minimize: false,
  },
  images: {
    domains: ['bikeadvice.in'],
  },
};

module.exports = nextConfig;
