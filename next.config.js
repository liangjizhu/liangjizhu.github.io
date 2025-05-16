/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: true
  }
}

module.exports = nextConfig; 