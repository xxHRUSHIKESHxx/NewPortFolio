/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}


module.exports = nextConfig
